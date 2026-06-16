import { CommandLineTool_class, CWLVersion } from 'cwl-ts-auto';
import { Constructs, Output } from '../src/lib';
import { Input } from '../src/lib/Input';
import { Requirement } from '../src/lib/Requirement';
import { Tool } from '../src/lib/Tool';
import { ToolConfig } from '../src/lib/ToolConfig';


describe('Tool Class', () => {
  let tool: Tool;

  beforeEach(() => {
    const rootWorkflow = Constructs.rootWorkflow();
    tool = new Tool(rootWorkflow, 'test-tool', {
      metadata: {
        fileName: 'custom-tool.cwl',
        label: 'Test Tool',
      },
    });
  });

  describe('toCwlObject', () => {
    it('should create a CommandLineTool object correctly', () => {
      // Arrange
      ToolConfig.basic(tool).withBaseCommand(['echo']).withArguments(['hello']);

      Input.string(tool, 'input1');

      // Act
      const result: any = tool._toCwlObject();

      // Assert
      expect(result.cwlVersion).toBe(CWLVersion.V1_2);
      expect(result.class_).toBe(CommandLineTool_class.COMMANDLINETOOL);
      expect(result.baseCommand).toEqual(['echo']);
      expect(result.arguments_).toEqual(['hello']);
      expect(result.inputs).toHaveLength(1);

    });

    it('should handle empty inputs and outputs', () => {
      // Act
      const result: any = tool._toCwlObject();

      // Assert
      expect(result.inputs).toEqual([]);
      expect(result.outputs).toEqual([]);
      expect(result.arguments_).toBeUndefined();
    });


    it('should create a CommandLineTool dictionary correctly', () => {
      // Arrange
      ToolConfig.basic(tool).withBaseCommand(['echo']).withArguments(['hello']);

      Input.string(tool, 'input1'); // no input binding
      Input.string(tool, 'input2').makeOptional(true);
      Input.stringArray(tool, 'input3').withPrefix('--input').withPosition(1);
      Input.stringArray(tool, 'input4').withPrefix('--input').withPosition(1).makeOptional(true);
      Output.file(tool, 'output1');

      // Act
      const result: any = tool._toCwlObject();

      // Assert
      const toolDictionary = result.save();
      // const yamlString = yaml.dump(toolDictionary);

      expect(toolDictionary.cwlVersion).toBe(CWLVersion.V1_2);

    });

  });

  describe('CUDA requirement serialization', () => {
    it('should include CUDA requirement and cwltool namespace in toMap()', () => {
      ToolConfig.basic(tool).withBaseCommand(['nvidia-smi']);
      Requirement.cuda(tool, {
        cudaVersionMin: '12.2',
        cudaComputeCapability: '7.5',
        cudaDeviceCountMin: 1,
      });

      const map = tool.toMap();

      expect(map.$namespaces).toEqual({
        cwltool: 'http://commonwl.org/cwltool#',
      });
      expect(map.requirements).toContainEqual({
        class: 'cwltool:CUDARequirement',
        cudaVersionMin: '12.2',
        cudaComputeCapability: '7.5',
        cudaDeviceCountMin: 1,
      });
    });
  });
});
