cwlVersion: v1.0
class: Workflow

inputs:
  input_file: File

outputs:
  final_result:
    type: File
    outputSource: main_process/result

steps:
  convert_annot:
    run: convert_to_box.cwl
    in:
      input_file: input_file
    out: [output_box]
    when: $(inputs.input_file.basename.endsWith('.annot'))

  convert_fasta:
    run: convert_to_box.cwl
    in:
      input_file: input_file
    out: [output_box]
    when: $(inputs.input_file.basename.endsWith('.fasta'))

  main_process:
    run: main_processing_tool.cwl
    in:
      box_files:
        source:
          - input_file
          - convert_annot/output_box
          - convert_fasta/output_box
        pickValue: $first_non_null(self)
        valueFrom: ${ return self.filter(file => file.basename.endsWith('.box')); }
    out: [result]
    when: $(self.box_files.length > 0)