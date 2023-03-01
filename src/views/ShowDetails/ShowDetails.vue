<template>
  <div class="detailsWrapper">
    <div>
      <a href="/">
        <button class="back">&lt; Home</button>
      </a>
    </div>
    <h1 class="showTitle">
      <u>{{ showDetails?.name }}</u>
    </h1>
    <div class="details">
      <div class="data">
        <img
          class="mainimg"
          v-if="showDetails?.image !== null"
          :src="showDetails?.image?.medium"
          alt="Image from Show"
        />
        <img
          class="mainimg"
          v-else
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          alt="No image"
        />
        <a
          v-if="showDetails?.officialSite !== null"
          :href="showDetails?.officialSite"
          target="_blank"
        >
          <button class="btn">Watch</button>
        </a>
      </div>
      <div class="info">
        <div class="summary">
          <p>
            <span class="sub"><strong>Summary: &nbsp; </strong></span>
            {{ showPlot }}
          </p>
        </div>
        <div class="cast" v-if="castList.length">
          <p class="sub"><strong>Cast: &nbsp; </strong></p>
          <div v-for="(cast, index) in castList" :key="index">
            <p class="cast">
              {{ cast?.person?.name }}
              <span v-if="index < castList.length - 1"> &comma; &nbsp;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import tvShowService from "@/service/tvShowService";
import { HOMEVIEW } from "@/constants/constants";

export default {
  name: "ShowDetails",
  data() {
    return {
      castList: [],
      showPlot: "",
    };
  },
  async created() {
    if (this.showDetails.id) {
      try {
        this.castList = await tvShowService.getCastList(this.showDetails.id);
        this.showPlot = this.removeTags(this.showDetails.summary);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        this.$router.push({ name: HOMEVIEW });
        return;
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    ...mapState(["showDetails"]),
  },
  methods: {
    removeTags(input) {
      const string = JSON.stringify(input);
      return string.replace(/(<([^>]+)>)/gi, "");
    },
  },
};
</script>
