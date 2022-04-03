import { IResource, Resource, Stack } from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  AddToResourcePolicyResult,
  Effect,
  Grant,
  IGrantable,
  Policy,
  PolicyStatement,
} from "aws-cdk-lib/aws-iam";
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  PhysicalResourceId,
} from "aws-cdk-lib/custom-resources";

export const VERIFIED_EMAIL_ADDRESS_SEND_ACTIONS = [
  "ses:SendEmail",
  "ses:SendTemplatedEmail",
  "ses:SendRawEmail",
  "ses:SendBulkTemplatedEmail",
];

export interface IVerifiedEmailAddress extends IResource {
  /**
   * The ARN of the VerifiedEmailAddress.
   * @attribute
   */
  readonly verifiedEmailAddressArn: string;

  /**
   * The name of the VerifiedEmailAddress.
   * @attribute
   */
  readonly verifiedEmailAddressName: string;

  /**
   * The resource policy associated with this VerifiedEmailAddress.
   */
  policy?: Policy;

  /**
   * Grant send permissions of this VerifiedEmailAddress to an IAM principal.
   *
   * @param identity The principal
   */
  grantSend(identity: IGrantable): Grant;
}

export abstract class VerifiedEmailAddressBase
  extends Resource
  implements IVerifiedEmailAddress
{
  public abstract readonly verifiedEmailAddressArn: string;
  public abstract readonly verifiedEmailAddressName: string;

  /**
   * The resource policy associated with this VerifiedEmailAddress.
   */
  public abstract policy?: Policy;

  public addToResourcePolicy(
    permission: PolicyStatement
  ): AddToResourcePolicyResult {
    if (this.policy) {
      this.policy.document.addStatements(permission);
      return { statementAdded: true, policyDependable: this.policy };
    }

    // if no policy, create it with the permission
    this.policy = new Policy(this, "Policy", {
      statements: [permission],
      force: true,
    });

    // Attach the resource policy to the VerifiedEmailAddress
    new AwsCustomResource(
      this,
      `PutIdentityPolicy${this.verifiedEmailAddressName}`,
      {
        onCreate: {
          service: "SES",
          action: "putIdentityPolicy",
          parameters: {
            Identity: this.verifiedEmailAddressArn,
            Policy: this.policy.toString(),
          },
        },
        policy: AwsCustomResourcePolicy.fromStatements([
          new PolicyStatement({
            actions: ["ses:PutIdentityPolicy"],
            effect: Effect.ALLOW,
            resources: [this.verifiedEmailAddressArn],
          }),
        ]),
      }
    );

    return { statementAdded: true, policyDependable: this.policy };
  }

  /**
   * Grant send permissions of this VerifiedEmailAddress to it's IAM principal.
   *
   * @param identity The principal
   */
  public grantSend(identity: IGrantable) {
    return this.grant(
      identity,
      VERIFIED_EMAIL_ADDRESS_SEND_ACTIONS,
      this.verifiedEmailAddressArn
    );
  }

  private grant(grantee: IGrantable, actions: string[], resourceArn: string) {
    const ret = Grant.addToPrincipalOrResource({
      grantee,
      actions,
      resourceArns: [resourceArn],
      resource: this,
    });

    return ret;
  }
}

export interface VerifiedEmailAddressProps {
  /**
   * Name of the email address. This is the value used when sending an
   * email, for example: billy@mydomain.com
   *
   * @required
   */
  readonly verifiedEmailAddressName: string;
}

export class VerifiedEmailAddress extends VerifiedEmailAddressBase {
  public readonly verifiedEmailAddressArn: string;
  public readonly verifiedEmailAddressName: string;
  public policy?: Policy;

  constructor(scope: Construct, id: string, props: VerifiedEmailAddressProps) {
    super(scope, id);

    // assign attributes
    this.verifiedEmailAddressArn = `arn:aws:ses:${Stack.of(this).region}:${
      Stack.of(this).account
    }:identity/${props.verifiedEmailAddressName}`;
    this.verifiedEmailAddressName = props.verifiedEmailAddressName;

    // create the VerifiedEmailAddress
    new AwsCustomResource(
      this,
      `VerifyEmailIdentity${props.verifiedEmailAddressName}`,
      {
        onCreate: {
          service: "SES",
          action: "verifyEmailIdentity",
          parameters: {
            EmailAddress: props.verifiedEmailAddressName,
          },
          physicalResourceId: PhysicalResourceId.of(
            "verify-" + props.verifiedEmailAddressName
          ),
          region: Stack.of(this).region,
        },
        onDelete: {
          service: "SES",
          action: "deleteIdentity",
          parameters: {
            Identity: props.verifiedEmailAddressName,
          },
          region: Stack.of(this).region,
        },
        policy: AwsCustomResourcePolicy.fromStatements([
          new PolicyStatement({
            actions: ["ses:VerifyEmailIdentity"],
            effect: Effect.ALLOW,
            resources: ["*"],
          }),
          new PolicyStatement({
            actions: ["ses:DeleteIdentity"],
            effect: Effect.ALLOW,
            resources: [this.verifiedEmailAddressArn],
          }),
        ]),
      }
    );
  }
}
