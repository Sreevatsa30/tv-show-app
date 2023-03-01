<template>
  <div class="detailsbox" v-if="tvShowsList.length">
    <div
      class="detailcard"
      v-for="(shows, index) in tvShowsList"
      :key="index"
      tabindex="0"
      @keyup.enter="getShowDetails(shows?.show)"
      @click="getShowDetails(shows?.show)"
    >
      <img
        class="image"
        v-if="shows?.show?.image !== null"
        :src="shows?.show?.image?.medium"
        alt="Image of the Show"
      />
      <img
        v-else
        class="noimage"
        src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        alt="No image"
      />
      <h4 class="detailCardTitle">{{ shows?.show?.name }}</h4>
      <div>
        <p class="rating">
          <strong>Rating: </strong
          ><span v-if="shows?.show?.rating?.average"
            >{{ shows?.show?.rating?.average }}/10</span
          >
          <span v-else>No rating yet</span>
        </p>
      </div>
      <div v-if="shows?.show?.genres.length">
        <p class="genre"><strong>Genre: </strong></p>
        <div
          v-for="(genre, index) in shows?.show?.genres"
          :key="index"
          class="genre"
        >
          <p class="genre">&nbsp; {{ genre }}</p>
        </div>
      </div>
      <p class="language">
        <strong>Language: </strong>{{ shows?.show?.language }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { SHOWDETAILS } from "@/constants/constants";

export default {
  name: "ShowDetail",
  data() {
    return {
      SHOWDETAILS,
    };
  },
  computed: {
    ...mapState(["tvShowsList"]),
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
