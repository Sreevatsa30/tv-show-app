import debounce from "@/utils/debounce";

describe("debounce.js: debounce", () => {
  it("Should set timer for function call", async () => {
    const wait = 300;
    const fn = jest.fn();
    debounce(fn, wait);
    await new Promise((r) => setTimeout(r, 300));
    expect(fn).toHaveBeenCalled();
  });
});
