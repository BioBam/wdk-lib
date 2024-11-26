import { Construct } from 'constructs';
import * as cwl from 'cwl-ts-auto';

export class App extends Construct {


  public synth() {
    // Create the workflow(s) from the App construct. This will create the CWL file.
    
  }

  public createToolJson() {
    let blastxTool = new cwl.CommandLineTool({
      class_: cwl.CommandLineTool_class.COMMANDLINETOOL,
      baseCommand: 'blastx',
      inputs: this.defineInputs(),
      outputs: this.defineOutputs(),
    });

    // Here you can set any other properties related to the command line tool.

    let json = JSON.stringify(blastxTool.save(), null, 2);
    return json;
  }

  private defineInputs(): cwl.CommandInputParameter[] {
    // Define all input parameters for blastx following the help documentation provided.
    // This function would create a long list of CommandInputParameter objects corresponding to each flag.
    // For example:

    let queryInput = new cwl.CommandInputParameter({
      id: "query",
      type: cwl.PrimitiveType.FILE,
      inputBinding: {
        prefix: "-query"
      }
    });

    let evalueInput = new cwl.CommandInputParameter({
      id: "evalue",
      type: cwl.PrimitiveType.DOUBLE,
      inputBinding: new cwl.InputBinding({
        prefix: "-evalue"
      });
    });

    // More input definitions would follow...

    // Here is an array of all inputs defined. It should include all of them like the examples above.
    return [queryInput, evalueInput /*, ... more inputs here */];

  }

  private defineOutputs(): cwl.CommandOutputParameter[] {
    // Define all output parameters for blastx.
    // As per the provided information, there doesn't seem to be different outputs necessary.
    // Usually BLAST tools generate a single output file specified by -out parameter.
    // An example might look like:

    let outputFile = new cwl.CommandOutputParameter({
      id: "output_file",
      type: cwl.PrimitiveType.FILE,
      outputBinding: {
        glob: "output.txt"
      }
    });

    return [outputFile];
  }

}