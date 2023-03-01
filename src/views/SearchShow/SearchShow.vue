<template>
  <div class="detailsWrapper" v-if="tvShowsList.length">
    <ShowDetail />
  </div>
  <div v-else class="detailsWrapper">
    <h3 class="nodata">Sorry! We couldn't find what you are looking for :'</h3>
  </div>
</template>

<script>
import ShowDetail from "@/components/ShowDetail/ShowDetail.vue";
import { mapState } from "vuex";
import { HOMEVIEW } from "@/constants/constants";

export default {
  name: "SearchShow",
  computed: {
    ...mapState(["tvShowsList"]),
  },
  created() {
    if (!this.tvShowsList.length) {
      this.$router.push({ name: HOMEVIEW });
    }
  },
  components: {
    ShowDetail,
  },
};
</script>
