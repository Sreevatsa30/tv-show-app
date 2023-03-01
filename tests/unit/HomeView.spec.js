import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView/HomeView.vue";
import { createStore } from "vuex";

jest.mock("@/service/tvShowService", () => ({ getAllShows: jest.fn() }));

const store = createStore({
  state: {
    allShowsList: [],
  },
  actions: {
    setState: jest.fn(),
  },
});

describe("HomeView.vue", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(HomeView, {
      global: {
        plugins: [store],
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
