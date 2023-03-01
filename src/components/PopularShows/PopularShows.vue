<template>
  <div>
    <h1 class="scrollTitle">
      <strong>{{ title }}</strong>
    </h1>
  </div>
  <div class="scrollList">
    <div
      v-for="(show, index) in showList"
      :key="index"
      tabindex="0"
      @keyup.enter="getShowDetails(show)"
      @click="getShowDetails(show)"
    >
      <img
        class="image"
        v-if="show?.image !== null"
        :src="show.image.medium"
        alt="Image of the Show"
      />
      <img
        v-else
        class="noimage"
        src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        alt="No image"
      />
      <h4 class="cardTitle">{{ show.name }}</h4>
      <div>
        <p class="rating">
          Rating:
          <span v-if="show?.rating?.average">{{ show.rating.average }}/10</span>
          <span v-else>No rating yet</span>
        </p>
      </div>
      <p class="language">Language: {{ show.language }}</p>
    </div>
  </div>
</template>

<script>
import { SHOWDETAILS } from "@/constants/constants";
import { mapActions } from "vuex";

export default {
  name: "PopularShows",
  props: {
    title: {
      type: String,
    },
    showList: {
      type: Array,
    },
  },
  methods: {
    ...mapActions(["setState"]),
    getShowDetails(show) {
      try {
        this.setState({
          stateName: "showDetails",
          value: show,
        });
        this.$router.push({ name: SHOWDETAILS });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
