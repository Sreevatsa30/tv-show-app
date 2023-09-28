<template>
  <div v-for="genre in genres" :key="genre">
    <PopularShows :showList="sortedList[genre]" :title="genre" />
  </div>
</template>

<script>
import PopularShows from "@/components/PopularShows/PopularShows.vue";
import tvShowService from "@/service/tvShowService";
import { mapActions, mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    PopularShows,
  },
  data() {
    return {
      sortedList: [],
      genres: new Set(),
    };
  },
  methods: {
    ...mapActions(["setState"]),
  },
  computed: {
    ...mapState(["allShowsList"]),
  },
  async created() {
    if (!this.allShowsList.length) {
      try {
        let list = await tvShowService.getAllShows();
        this.setState({
          stateName: "allShowsList",
          value: list,
        });
      } catch (error) {
        console.log(error);
      }
    }
    this.allShowsList.forEach((show) => {
      show.genres.forEach((genre) => {
        console.log(genre);
        this.genres.add(genre);
      })
    });
    this.genres.forEach((genre) => {
      this.sortedList[genre] = this.allShowsList.filter((show) => {
        return show.genres.includes(genre);
      });
    });
  },
};
</script>
