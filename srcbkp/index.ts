import * as cwl from 'cwl-ts-auto';

export class Hello {

  public main() {
    console.log(this.createToolJson());
  }

  public createToolJson() {
    let exampleCommandLineTool =
      new cwl.CommandLineTool({
        class_: cwl.CommandLineTool_class.COMMANDLINETOOL,
        inputs: [],
        outputs: [],
      });
    exampleCommandLineTool.baseCommand = 'echo';

    let exampleInput =
      new cwl.CommandInputParameter({
        type: cwl.PrimitiveType.STRING,
      });
    exampleInput.default_ = 'Hello World!';
    exampleCommandLineTool.inputs.push(exampleInput);

    let json = JSON.stringify(exampleCommandLineTool.save());
    console.log(JSON.stringify(exampleCommandLineTool.save()));
    return json;
  }

  public sayHello() {
    return 'hello, world!';
  }

}