import {
  addRequest,
  clearAllRequests,
  executeBatch,
} from "../schedulers/batch-requests";

describe("Given that I want to send over a request", () => {
  let mockFunction = jest.fn();

  beforeEach(() => {
    addRequest(mockFunction);
    // mockFunction("E", "World", 6, 420);
    // mockFunction("Hello", "World", 6, { hello: "world" });
  });

  afterEach(() => {
    mockFunction = mockFunction.mockClear();
    clearAllRequests();
  });

  describe("When I call executeBatch", () => {
    beforeEach(() => {
      // mockFunction
      //   .mockReturnValueOnce({
      //     data: "First Return Value",
      //   })
      //   .mockReturnValueOnce({
      //     data: "Second Return Value",
      //   })
      //   .mockReturnValue({
      //     data: "Subsequent Return Value (After Second)",
      //   });
      // mockFunction
      //   .mockResolvedValueOnce({
      //     data: "First Return Value resolved in a Promise object",
      //   })
      //   .mockResolvedValueOnce({
      //     data: "Second Return Value resolved in a Promise object",
      //   })
      //   .mockResolvedValue({
      //     data: "Subsequent Return Value (After Second) resolved in a Promise object",
      //   });
      executeBatch();
    });

    // it("");

    // it("e", () => {
    //   // Tests if the mock function was called at least once.
    //   expect(mockFunction).toHaveBeenCalled();
    //   // Tests if the mock function was called numberOfTimes number of times.
    //   expect(mockFunction).toHaveBeenCalledTimes(numberOfTimes);
    //   // Tests if the any calls to the mock function was made with arguments, args.
    //   expect(mockFunction).toBeCalledWith(...args);
    //   // Tests if the Nth call to the mock function was made with arguments, args. n starts from 1.
    //   expect(mockFunction).toHaveBeenNthCalledWith(n, ...args);
    //   // Tests if the any calls to the mock function ever returned the returnValue.
    //   expect(mockFunction).toHaveReturnedWith(returnValue);
    //   // Tests if the Nth call to the mock function returned the returnValue. n starts from 1.
    //   expect(mockFunction).toHaveNthReturnedWith(n, returnValue);
    // });
    // it("should have called my function", () => {
    // expect(mockFunction).toReturnWith({
    //   data: "Hello",
    // });
    // expect(mockFunction).toBeCalledWith("Hello", "World", 6, {
    //   hello: "world",
    // });
    // });
    // it("should have called my function", () => {
    //   expect(mockFunction).toHaveReturnedWith();
    // });

    it("should have called my function only once", () => {
      // expect(mockFunction.mock.calls.length).toBe(1);
      expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    it("should have called my function without any arguments", () => {
      // expect(mockFunction.mock.calls[0].length).toBe(0);
      expect(mockFunction).toHaveBeenNthCalledWith(1, ...[]);
    });

    it("should have called my function and not returning anything (undefned)", () => {
      // expect(mockFunction.mock.results[0].value).toBeUndefined();
      expect(mockFunction).toHaveNthReturnedWith(1, undefined);
    });
  });
});
