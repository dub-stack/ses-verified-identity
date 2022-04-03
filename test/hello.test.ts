import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Construct } from 'constructs';
import { VerifiedEmailAddress } from '../src';

class TestStack extends Stack {
  public sampleEmailAddress: VerifiedEmailAddress;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // create the VerifiedEmailAddress
    this.sampleEmailAddress = new VerifiedEmailAddress(
      this,
      'TestEmailAddress',
      {
        verifiedEmailAddressName: 'test-email@sample.com',
      },
    );
  }
}

function setupTest(stackId?: string) {
  const app = new App();
  const stack = new TestStack(app, stackId ? stackId : 'TestStack');
  const assert = Template.fromStack(stack);

  return { app, stack, assert };
}

describe('VerifiedEmailAddress', () => {
  const { app, stack } = setupTest();

  it('temporary passing test', () => {
    expect(true).toBe(true);
  });
});
