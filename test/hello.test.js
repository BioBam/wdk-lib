"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test('hello', () => {
    expect(new src_1.Hello().sayHello()).toBe('hello, world!');
});
test('createWorkflow', () => {
    expect(new src_1.Hello().createToolJson()).toContain('echo');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8udGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbGxvLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBK0I7QUFFL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDakIsTUFBTSxDQUFDLElBQUksV0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO0lBQzFCLE1BQU0sQ0FBQyxJQUFJLFdBQUssRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVsbG8gfSBmcm9tICcuLi9zcmMnO1xuXG50ZXN0KCdoZWxsbycsICgpID0+IHtcbiAgZXhwZWN0KG5ldyBIZWxsbygpLnNheUhlbGxvKCkpLnRvQmUoJ2hlbGxvLCB3b3JsZCEnKTtcbn0pO1xuXG50ZXN0KCdjcmVhdGVXb3JrZmxvdycsICgpID0+IHtcbiAgZXhwZWN0KG5ldyBIZWxsbygpLmNyZWF0ZVRvb2xKc29uKCkpLnRvQ29udGFpbignZWNobycpO1xufSk7Il19