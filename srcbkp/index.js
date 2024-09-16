"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
const cwl = require("cwl-ts-auto");
class Hello {
    createToolJson() {
        let exampleCommandLineTool = new cwl.CommandLineTool({
            class_: cwl.CommandLineTool_class.COMMANDLINETOOL,
            inputs: [],
            outputs: [],
        });
        exampleCommandLineTool.baseCommand = 'echo';
        let exampleInput = new cwl.CommandInputParameter({
            type: cwl.PrimitiveType.STRING,
        });
        exampleInput.default_ = 'Hello World!';
        exampleCommandLineTool.inputs.push(exampleInput);
        let json = JSON.stringify(exampleCommandLineTool.save());
        console.log(JSON.stringify(exampleCommandLineTool.save()));
        return json;
    }
    sayHello() {
        return 'hello, world!';
    }
}
exports.Hello = Hello;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMsTUFBYSxLQUFLO0lBRVQsY0FBYztRQUNuQixJQUFJLHNCQUFzQixHQUN4QixJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUM7WUFDdEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlO1lBQ2pELE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDLENBQUM7UUFDTCxzQkFBc0IsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBRTVDLElBQUksWUFBWSxHQUNkLElBQUksR0FBRyxDQUFDLHFCQUFxQixDQUFDO1lBQzVCLElBQUksRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU07U0FDL0IsQ0FBQyxDQUFDO1FBQ0wsWUFBWSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDdkMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVqRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxRQUFRO1FBQ2IsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztDQUVGO0FBM0JELHNCQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN3bCBmcm9tICdjd2wtdHMtYXV0byc7XG5cbmV4cG9ydCBjbGFzcyBIZWxsbyB7XG5cbiAgcHVibGljIGNyZWF0ZVRvb2xKc29uKCkge1xuICAgIGxldCBleGFtcGxlQ29tbWFuZExpbmVUb29sID1cbiAgICAgIG5ldyBjd2wuQ29tbWFuZExpbmVUb29sKHtcbiAgICAgICAgY2xhc3NfOiBjd2wuQ29tbWFuZExpbmVUb29sX2NsYXNzLkNPTU1BTkRMSU5FVE9PTCxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgb3V0cHV0czogW10sXG4gICAgICB9KTtcbiAgICBleGFtcGxlQ29tbWFuZExpbmVUb29sLmJhc2VDb21tYW5kID0gJ2VjaG8nO1xuXG4gICAgbGV0IGV4YW1wbGVJbnB1dCA9XG4gICAgICBuZXcgY3dsLkNvbW1hbmRJbnB1dFBhcmFtZXRlcih7XG4gICAgICAgIHR5cGU6IGN3bC5QcmltaXRpdmVUeXBlLlNUUklORyxcbiAgICAgIH0pO1xuICAgIGV4YW1wbGVJbnB1dC5kZWZhdWx0XyA9ICdIZWxsbyBXb3JsZCEnO1xuICAgIGV4YW1wbGVDb21tYW5kTGluZVRvb2wuaW5wdXRzLnB1c2goZXhhbXBsZUlucHV0KTtcblxuICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkoZXhhbXBsZUNvbW1hbmRMaW5lVG9vbC5zYXZlKCkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGV4YW1wbGVDb21tYW5kTGluZVRvb2wuc2F2ZSgpKSk7XG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBwdWJsaWMgc2F5SGVsbG8oKSB7XG4gICAgcmV0dXJuICdoZWxsbywgd29ybGQhJztcbiAgfVxuXG59Il19