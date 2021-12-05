const sayHelloWorld = require("./sayHelloWorld");

describe("SayHelloWorld", () => {
  it("should return hello world", () => {
    const response = sayHelloWorld.sayHello();

    expect(response).toBe("Hello World");
  });

  it("should say hello Leonardo", () => {
    const response = sayHelloWorld.sayHello("Leonardo");

    expect(response).toBe("Hello Leonardo");
  });
});
