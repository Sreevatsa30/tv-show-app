import mutations from "../../src/store/mutations";

describe("Store mutations", () => {
  let state;
  beforeAll(() => {
    state = {
      tvShowsList: [],
      allShowsList: [],
      showDetails: [],
    };
  });

  it("Should set state when SET_STATE is called", () => {
    const expected = ["Friends"];
    const payload = {
      stateName: "showDetails",
      value: expected,
    };
    mutations.SET_STATE(state, payload);
    expect(state.showDetails).toStrictEqual(expected);
  });
});
