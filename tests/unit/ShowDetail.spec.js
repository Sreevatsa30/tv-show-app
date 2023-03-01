import { mount } from "@vue/test-utils";
import ShowDetail from "@/components/ShowDetail/ShowDetail.vue";
import { SHOWDETAILS } from "@/constants/constants";
import { createStore } from "vuex";

const store = createStore({
  state: {
    tvShowsList: [],
  },
  actions: {
    setState: jest.fn(),
  },
});

describe("ShowDetail.vue", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(ShowDetail, {
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

  it("Should set showDetails and route when getShowDetails is called", () => {
    const show = { averageRuntime: 30, dvdCountry: null, ended: "2004-05-06" };
    const expected = { stateName: "showDetails", value: show };
    wrapper.vm.setState = jest.fn();
    wrapper.vm.getShowDetails(show);
    expect(wrapper.vm.setState).toHaveBeenCalledWith(expected);
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: SHOWDETAILS });
  });
});
