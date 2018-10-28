<template>
    <div class = "fixedDimensions">
      <subtitle v-for="(subtitle, index) in subtitles" :key="index" :subtitle="subtitle"></subtitle>
    </div>
</template>

<script>
import { subtitles } from "../subtitles.js";
import Subtitle from "./Subtitle.vue";
export default {
  data() {
    return {
      subtitles: []
    };
  },
  components: {
    Subtitle
  },
  mounted: function() {
    this.subtitles = subtitles;
  }
};
</script>

<style scoped>
.fixedDimensions {
  min-width: 600px;
  max-width: 600px;
  min-height: 600px;
  max-height: 600px;
  overflow: scroll;
}
</style>