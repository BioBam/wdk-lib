export interface IToolProps {
  readonly metadata?: IToolMetadata;
}

/**
 * Metadata that needs to be passed as a parameter from the instantiating workflow in some cases.
 */
export interface IToolMetadata {
  /**
     * The file name used when exporting a tool and referencing in a workflow. Default is the id + '.cwl'.
     */
  readonly fileName?: string;

  /**
     * Allow to customize the label in a tool.
     */
  readonly label?: string;
}