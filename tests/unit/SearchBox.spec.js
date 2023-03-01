import { mount } from "@vue/test-utils";
import SearchBox from "@/components/SearchBox/SearchBox.vue";
import { createStore } from "vuex";
import { HOMEVIEW } from "@/constants/constants";

jest.mock("@/service/tvShowService", () => ({ getList: jest.fn() }));

const store = createStore({
  actions: {
    setState: jest.fn(),
  },
});

describe("SearchBox.vue", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(SearchBox, {
      global: {
        plugins: [store],
        mocks: {
          $router: {
            push: jest.fn(),
          },
        },
      },
    });
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("Should return to home screen if showSearchQuery is empty", () => {
    wrapper.setData({ showSearchQuery: "" });
    wrapper.vm.getShowsList();
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: HOMEVIEW });
  });
});
