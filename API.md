# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedEmailAddress <a name="VerifiedEmailAddress" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress"></a>

#### Initializers <a name="Initializers" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.Initializer"></a>

```typescript
import { VerifiedEmailAddress } from '@dub-stack/ses-verified-identity'

new VerifiedEmailAddress(scope: Construct, id: string, props: VerifiedEmailAddressProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.Initializer.parameter.props">props</a></code> | <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressProps">VerifiedEmailAddressProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.Initializer.parameter.props"></a>

- *Type:* <a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressProps">VerifiedEmailAddressProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.addToResourcePolicy">addToResourcePolicy</a></code> | *No description.* |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.grantSend">grantSend</a></code> | Grant send permissions of this VerifiedEmailAddress to it's IAM principal. |

---

##### `toString` <a name="toString" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops being managed by CloudFormation, either because you've removed it from the CDK application or because you've made a change that requires the resource to be replaced.  The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

###### `permission`<sup>Required</sup> <a name="permission" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `grantSend` <a name="grantSend" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.grantSend"></a>

```typescript
public grantSend(identity: IGrantable): Grant
```

Grant send permissions of this VerifiedEmailAddress to it's IAM principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.grantSend.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.isConstruct"></a>

```typescript
import { VerifiedEmailAddress } from '@dub-stack/ses-verified-identity'

VerifiedEmailAddress.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.isResource"></a>

```typescript
import { VerifiedEmailAddress } from '@dub-stack/ses-verified-identity'

VerifiedEmailAddress.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.verifiedEmailAddressArn">verifiedEmailAddressArn</a></code> | <code>string</code> | The ARN of the VerifiedEmailAddress. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.verifiedEmailAddressName">verifiedEmailAddressName</a></code> | <code>string</code> | The name of the VerifiedEmailAddress. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_iam.Policy</code> | The resource policy associated with this VerifiedEmailAddress. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK (generally, those created by creating new class instances like Role, Bucket, etc.), this is always the same as the environment of the stack they belong to; however, for imported resources (those obtained from static methods like fromRoleArn, fromBucketName, etc.), that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `verifiedEmailAddressArn`<sup>Required</sup> <a name="verifiedEmailAddressArn" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.verifiedEmailAddressArn"></a>

```typescript
public readonly verifiedEmailAddressArn: string;
```

- *Type:* string

The ARN of the VerifiedEmailAddress.

---

##### `verifiedEmailAddressName`<sup>Required</sup> <a name="verifiedEmailAddressName" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.verifiedEmailAddressName"></a>

```typescript
public readonly verifiedEmailAddressName: string;
```

- *Type:* string

The name of the VerifiedEmailAddress.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@dub-stack/ses-verified-identity.VerifiedEmailAddress.property.policy"></a>

```typescript
public readonly policy: Policy;
```

- *Type:* aws-cdk-lib.aws_iam.Policy

The resource policy associated with this VerifiedEmailAddress.

---


### VerifiedEmailAddressBase <a name="VerifiedEmailAddressBase" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase"></a>

- *Implements:* <a href="#@dub-stack/ses-verified-identity.IVerifiedEmailAddress">IVerifiedEmailAddress</a>

#### Initializers <a name="Initializers" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.Initializer"></a>

```typescript
import { VerifiedEmailAddressBase } from '@dub-stack/ses-verified-identity'

new VerifiedEmailAddressBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.addToResourcePolicy">addToResourcePolicy</a></code> | *No description.* |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.grantSend">grantSend</a></code> | Grant send permissions of this VerifiedEmailAddress to it's IAM principal. |

---

##### `toString` <a name="toString" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops being managed by CloudFormation, either because you've removed it from the CDK application or because you've made a change that requires the resource to be replaced.  The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

###### `permission`<sup>Required</sup> <a name="permission" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `grantSend` <a name="grantSend" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.grantSend"></a>

```typescript
public grantSend(identity: IGrantable): Grant
```

Grant send permissions of this VerifiedEmailAddress to it's IAM principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.grantSend.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.isConstruct"></a>

```typescript
import { VerifiedEmailAddressBase } from '@dub-stack/ses-verified-identity'

VerifiedEmailAddressBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.isResource"></a>

```typescript
import { VerifiedEmailAddressBase } from '@dub-stack/ses-verified-identity'

VerifiedEmailAddressBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.verifiedEmailAddressArn">verifiedEmailAddressArn</a></code> | <code>string</code> | The ARN of the VerifiedEmailAddress. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.verifiedEmailAddressName">verifiedEmailAddressName</a></code> | <code>string</code> | The name of the VerifiedEmailAddress. |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_iam.Policy</code> | The resource policy associated with this VerifiedEmailAddress. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK (generally, those created by creating new class instances like Role, Bucket, etc.), this is always the same as the environment of the stack they belong to; however, for imported resources (those obtained from static methods like fromRoleArn, fromBucketName, etc.), that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `verifiedEmailAddressArn`<sup>Required</sup> <a name="verifiedEmailAddressArn" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.verifiedEmailAddressArn"></a>

```typescript
public readonly verifiedEmailAddressArn: string;
```

- *Type:* string

The ARN of the VerifiedEmailAddress.

---

##### `verifiedEmailAddressName`<sup>Required</sup> <a name="verifiedEmailAddressName" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.verifiedEmailAddressName"></a>

```typescript
public readonly verifiedEmailAddressName: string;
```

- *Type:* string

The name of the VerifiedEmailAddress.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressBase.property.policy"></a>

```typescript
public readonly policy: Policy;
```

- *Type:* aws-cdk-lib.aws_iam.Policy

The resource policy associated with this VerifiedEmailAddress.

---


## Structs <a name="Structs" id="Structs"></a>

### VerifiedEmailAddressProps <a name="VerifiedEmailAddressProps" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressProps"></a>

#### Initializer <a name="Initializer" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressProps.Initializer"></a>

```typescript
import { VerifiedEmailAddressProps } from '@dub-stack/ses-verified-identity'

const verifiedEmailAddressProps: VerifiedEmailAddressProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressProps.property.verifiedEmailAddressName">verifiedEmailAddressName</a></code> | <code>string</code> | Name of the email address. |

---

##### `verifiedEmailAddressName`<sup>Required</sup> <a name="verifiedEmailAddressName" id="@dub-stack/ses-verified-identity.VerifiedEmailAddressProps.property.verifiedEmailAddressName"></a>

```typescript
public readonly verifiedEmailAddressName: string;
```

- *Type:* string

Name of the email address.

This is the value used when sending an email, for example: billy@mydomain.com

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IVerifiedEmailAddress <a name="IVerifiedEmailAddress" id="@dub-stack/ses-verified-identity.IVerifiedEmailAddress"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddress">VerifiedEmailAddress</a>, <a href="#@dub-stack/ses-verified-identity.VerifiedEmailAddressBase">VerifiedEmailAddressBase</a>, <a href="#@dub-stack/ses-verified-identity.IVerifiedEmailAddress">IVerifiedEmailAddress</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.IVerifiedEmailAddress.grantSend">grantSend</a></code> | Grant send permissions of this VerifiedEmailAddress to an IAM principal. |

---

##### `grantSend` <a name="grantSend" id="@dub-stack/ses-verified-identity.IVerifiedEmailAddress.grantSend"></a>

```typescript
public grantSend(identity: IGrantable): Grant
```

Grant send permissions of this VerifiedEmailAddress to an IAM principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@dub-stack/ses-verified-identity.IVerifiedEmailAddress.grantSend.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.verifiedEmailAddressArn">verifiedEmailAddressArn</a></code> | <code>string</code> | The ARN of the VerifiedEmailAddress. |
| <code><a href="#@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.verifiedEmailAddressName">verifiedEmailAddressName</a></code> | <code>string</code> | The name of the VerifiedEmailAddress. |
| <code><a href="#@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_iam.Policy</code> | The resource policy associated with this VerifiedEmailAddress. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK (generally, those created by creating new class instances like Role, Bucket, etc.), this is always the same as the environment of the stack they belong to; however, for imported resources (those obtained from static methods like fromRoleArn, fromBucketName, etc.), that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `verifiedEmailAddressArn`<sup>Required</sup> <a name="verifiedEmailAddressArn" id="@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.verifiedEmailAddressArn"></a>

```typescript
public readonly verifiedEmailAddressArn: string;
```

- *Type:* string

The ARN of the VerifiedEmailAddress.

---

##### `verifiedEmailAddressName`<sup>Required</sup> <a name="verifiedEmailAddressName" id="@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.verifiedEmailAddressName"></a>

```typescript
public readonly verifiedEmailAddressName: string;
```

- *Type:* string

The name of the VerifiedEmailAddress.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@dub-stack/ses-verified-identity.IVerifiedEmailAddress.property.policy"></a>

```typescript
public readonly policy: Policy;
```

- *Type:* aws-cdk-lib.aws_iam.Policy

The resource policy associated with this VerifiedEmailAddress.

---

