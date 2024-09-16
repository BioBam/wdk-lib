import { IToolProps, Tool } from '../Tool';
import { ToolConfig } from '../ToolConfig';
import { FileUtils } from '../utils/FileUtils';

export interface IBashToolProps extends IToolProps {
  /**
   * The path to the inline script file. Provide either this or `inlineScript`.
   */
  inlineScriptPath?: string;
  /**
   * The inline script content. Provide either this or `inlineScriptPath`.
   */
  inlineScript?: string;
}

export class BashTool extends Tool {

  constructor(scope: any, id: string, props: IBashToolProps) {

    if (!props.inlineScript && !props.inlineScriptPath) {
      throw new Error('You must provide either `inlineScript` or `inlineScriptPath`');
    }

    if (props.inlineScript && props.inlineScriptPath) {
      throw new Error('You must provide either `inlineScript` or `inlineScriptPath`, not both');
    }

    var scriptCheckContent = '';
    if (props.inlineScriptPath) {
      scriptCheckContent = FileUtils.readFileContent(props.inlineScriptPath);
    } else if (props.inlineScript) {
      scriptCheckContent = props.inlineScript;
    }

    // Define the command and arguments
    super(scope, id, props);
    ToolConfig.basic(this).withArguments(['sh', '-c', scriptCheckContent]);
  }

}

