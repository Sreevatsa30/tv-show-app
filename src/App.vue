<template>
  <div class="main">
    <h1 class="title">The TV Guide</h1>
    <SearchBox />
  </div>
  <router-view />
</template>

<script>
import SearchBox from "@/components/SearchBox/SearchBox.vue";

export default {
  name: "App",
  components: {
    SearchBox,
  },
};
</script>
<style lang="scss">
@import "./styles/styles";
</style>
