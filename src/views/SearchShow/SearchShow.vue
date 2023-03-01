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

export default {
  name: "SearchShow",
  computed: {
    ...mapState(["tvShowsList"]),
  },
  components: {
    ShowDetail,
  },
};
</script>
