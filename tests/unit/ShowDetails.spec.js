import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import ShowDetails from "@/views/ShowDetails/ShowDetails.vue";

const state = {
  showDetails: {
    id: null,
  },
};

const store = createStore({
  state,
});

describe("ShowDetails.vue", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(ShowDetails, {
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
