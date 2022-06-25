// Top Level Setup and Teardown
// beforeAll(() => {
//   console.log("[Top Level] Before All");
// });
// beforeEach(() => {
//   console.log("[Top Level] Before Each");
// });
// afterEach(() => {
//   console.log("[Top Level] After Each");
// });
// afterAll(() => {
//   console.log("[Top Level] After All");
// });

describe("In Group 1", () => {
  // Group 1 Setup and Teardown
  // beforeAll(() => {
  //   console.log("[Group 1] Before All");
  // });
  // beforeEach(() => {
  //   console.log("[Group 1] Before Each");
  // });
  // afterEach(() => {
  //   console.log("[Group 1] After Each");
  // });
  // afterAll(() => {
  //   console.log("[Group 1] After All");
  // });

  // Test 1
  it("Test 1", () => {
    jest.fn();
    expect(true).toBeTruthy();
  });
});

// Test 2
// it("Test 2", () => {
//   expect(true).toBeTruthy();
// });
