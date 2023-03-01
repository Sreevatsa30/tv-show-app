import actions from "@/store/actions";

describe("Store actions", () => {
  let commit;
  beforeEach(() => {
    commit = jest.fn();
  });
  it("Should commit the SET_STATE when request is submitted", () => {
    const payload = true;
    actions.setState({ commit }, payload);
    expect(commit).toHaveBeenCalledWith("SET_STATE", payload);
  });
});
