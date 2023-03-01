import { mount } from "@vue/test-utils";
import PathNotFound from "@/views/PathNotFound/PathNotFound.vue";

describe("PathNotFound.vue", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(PathNotFound);
  });
  afterAll(() => {
    wrapper.unmount();
  });

  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
