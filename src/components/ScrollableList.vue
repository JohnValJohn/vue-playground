<template>
    <div> 
      <div class = "fixedDimensions" id="scroll-container-subtitles">
        <subtitle v-for="(subtitle, index) in subtitles" :key="index" :subtitle="subtitle"></subtitle>
      </div>
    </div>
</template>

<script>
import { subtitles } from "../subtitles.js";
import Subtitle from "./Subtitle.vue";
import { getIndexOfCurrentSubtitle } from "../utils/utils.js";

export default {
  components: {
    Subtitle
  },
  data() {
    return {
      subtitles: [],
      container: {}
    };
  },
  computed: {
    endValues() {
      return this.subtitles.map(subtitle => subtitle.end);
    },
    globalTime() {
      return this.$store.state.globalTime;
    }
  },
  watch: {
    globalTime() {
      let indexOfCurrentSubtitle = getIndexOfCurrentSubtitle(
        this.globalTime,
        this.endValues
      );
      if (indexOfCurrentSubtitle !== null) {
        let pixelToScroll = 30 * indexOfCurrentSubtitle; //todo : put 30 in conf. it is the height of a subtitle
        this.container.scrollTop = pixelToScroll;
        console.log(pixelToScroll);
      } else {
        this.container.scrollTop = 30 * this.subtitles.length;
      }
    }
  },
  mounted: function() {
    this.subtitles = subtitles;
    this.container = document.getElementById("scroll-container-subtitles");
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