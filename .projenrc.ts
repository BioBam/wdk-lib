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
    javaPackage: 'com.biobam.wdk.lib',
    mavenRepositoryUrl: 'https://maven.pkg.github.com/biobam/wdk-lib',
  },

  deps: [], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['@types/js-yaml'], /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

// -- start generate java API documentation
// Add a task to generate API_JAVA.md from the .jsii manifest. Used code from https://github.com/projen/projen/blob/main/src/cdk/jsii-docgen.ts
const mdApiJava = 'API_JAVA.md';
const docgen = project.addTask('docgen-java', {
  description: `Generate ${mdApiJava} from .jsii manifest`,
  exec: `jsii-docgen -o ${mdApiJava} -l java`,
});
project.postCompileTask.spawn(docgen);
project.gitignore.include(`/${mdApiJava}`);
project.annotateGenerated(`/${mdApiJava}`);

// -- end generate java API documentation

project.addBundledDeps('cwl-ts-auto');
// project.addPeerDeps('cwl-ts-auto');
project.addBundledDeps('js-yaml');
project.synth();