const { awscdk } = require('projen');
const { NodePackageManager, NpmAccess } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkConstructLibrary({
  // package info
  name: '@dub-stack/ses-verified-identity',
  description:
    'This package provides CDK constructs to create SES Verified Identities. These constructs provide a convenient and' +
    ' familiar interface for granting send permissions to other CDK constructs.',
  author: 'Spencer Duball',
  authorAddress: 'spencer@spencerduball.com',
  cdkVersion: '2.1.0',
  repositoryUrl: 'git@github.com:dub-stack/ses-verified-identity.git',
  packageManager: NodePackageManager.NPM,
  license: 'MIT',

  // tooling/project management
  docgen: true,
  dependabot: true,

  // configure NPM release
  npmAccess: NpmAccess.PUBLIC,
  defaultReleaseBranch: 'main',
  releaseToNpm: true,
  release: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  tsconfig: {
    compilerOptions: { noUnusedLocals: false, noUnusedParameters: false },
  },
  tsconfigDev: {
    compilerOptions: { noUnusedLocals: false, noUnusedParameters: false },
  },
});

project.synth();
