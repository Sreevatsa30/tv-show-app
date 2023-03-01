import tvShowService from "@/service/tvShowService";

describe("getCastList method", () => {
  it("Should return list of cast when getCastList has given response", async () => {
    const id = 1;
    const expectedResponse = [
      {
        person: {
          id: 35596,
          url: "https://www.tvmaze.com/people/35596/justin-roiland",
          name: "Justin Roiland",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          birthday: "1980-02-21",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/1/3602.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/1/3602.jpg",
          },
          updated: 1673657005,
          _links: { self: { href: "https://api.tvmaze.com/people/35596" } },
        },
        character: {
          id: 56241,
          url: "https://www.tvmaze.com/characters/56241/rick-and-morty-rick-sanchez",
          name: "Rick Sanchez",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/105/262781.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/105/262781.jpg",
          },
          _links: { self: { href: "https://api.tvmaze.com/characters/56241" } },
        },
        self: false,
        voice: true,
      },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(expectedResponse) })
    );
    const response = await tvShowService.getCastList(id);
    expect(response).toBe(expectedResponse);
  });
});

describe("getList method", () => {
  it("Should return list of shows based on search when getList has given response", async () => {
    const name = "friends";
    const expectedResponse = [
      {
        score: 0.9097767,
        show: {
          id: 431,
          url: "https://www.tvmaze.com/shows/431/friends",
          name: "Friends",
          type: "Scripted",
          language: "English",
          genres: ["Comedy", "Romance"],
          status: "Ended",
          runtime: 30,
          averageRuntime: 30,
          premiered: "1994-09-22",
          ended: "2004-05-06",
          officialSite: null,
          schedule: { time: "20:00", days: ["Thursday"] },
          rating: { average: 8.5 },
          weight: 98,
          network: {
            id: 1,
            name: "NBC",
            country: {
              name: "United States",
              code: "US",
              timezone: "America/New_York",
            },
            officialSite: "https://www.nbc.com/",
          },
          webChannel: null,
          dvdCountry: null,
          externals: { tvrage: 3616, thetvdb: 79168, imdb: "tt0108778" },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/41/104550.jpg",
          },
          summary:
            "<p>Six young (20-something) people from New York City (Manhattan), on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.</p><p>This average group of buddies goes through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend.</p>",
          updated: 1674149192,
          _links: {
            self: { href: "https://api.tvmaze.com/shows/431" },
            previousepisode: { href: "https://api.tvmaze.com/episodes/40881" },
          },
        },
      },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(expectedResponse) })
    );
    const response = await tvShowService.getList(name);
    expect(response).toBe(expectedResponse);
  });
});

describe("getAllShows method", () => {
  it("Should return list of all shows when getAllShows has given response", async () => {
    const expectedResponse = [
      {
        id: 1,
        url: "https://www.tvmaze.com/shows/1/under-the-dome",
        name: "Under the Dome",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Science-Fiction", "Thriller"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2013-06-24",
        ended: "2015-09-10",
        officialSite: "http://www.cbs.com/shows/under-the-dome/",
        schedule: { time: "22:00", days: ["Thursday"] },
        rating: { average: 6.5 },
        weight: 98,
        network: {
          id: 2,
          name: "CBS",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.cbs.com/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: { tvrage: 25988, thetvdb: 264492, imdb: "tt1553656" },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
        },
        summary:
          "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
        updated: 1631010933,
        _links: {
          self: { href: "https://api.tvmaze.com/shows/1" },
          previousepisode: { href: "https://api.tvmaze.com/episodes/185054" },
        },
      },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(expectedResponse) })
    );
    const response = await tvShowService.getAllShows();
    expect(response).toBe(expectedResponse);
  });
});
