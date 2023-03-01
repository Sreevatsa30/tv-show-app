import { mount } from "@vue/test-utils";
import SearchShow from "@/views/SearchShow/SearchShow.vue";
import { createStore } from "vuex";
import { HOMEVIEW } from "@/constants/constants";

const store = createStore({
  state: {
    tvShowsList: [],
  },
});

describe("SearchShow.vue", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(SearchShow, {
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
});
