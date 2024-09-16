import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Robert Nica',
  authorAddress: 'rnica@biobam.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: 'wdk-lib',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/biobam/wdk-lib.git',

  // publishToPypi: {
  //   distName: 'wdk-lib',
  //   module: 'wdk-lib',
  // },

  releaseToNpm: false,

  publishToMaven: {
    mavenGroupId: 'com.biobam',
    mavenArtifactId: 'wdk-lib',
    javaPackage: 'com.biobam.wdk-lib',
    mavenRepositoryUrl: 'https://maven.pkg.github.com/biobam/wdk-lib',
  },

  deps: [], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['@types/js-yaml'], /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.addBundledDeps('cwl-ts-auto');
project.addBundledDeps('js-yaml');
project.synth();