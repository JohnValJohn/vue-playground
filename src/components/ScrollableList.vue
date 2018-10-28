<template>
    <div> 
      <div class = "fixedDimensions" id="scroll-container-subtitles" v-on:scroll="scrollHandler()">
        <subtitle v-for="(subtitle, index) in displayList" :key="index" :subtitle="subtitle"></subtitle>
      </div>
    </div>
</template>

<script>
import { subtitles } from "../subtitles.js";
import Subtitle from "./Subtitle.vue";
import { getIndexOfCurrentSubtitle } from "../utils/utils.js";
import throttle from "lodash/throttle";

export default {
  components: {
    Subtitle
  },
  data() {
    return {
      subtitles: [],
      displayList: [],
      container: {},
      numberOfElementsToDisplay: Math.ceil(600 / 30) + 2 //600 is div height, 30 is subtitle height. We add 2 elements to be safe. todo: put values in conf
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
  methods: {
    scrollHandler: throttle(function() {
      this.updateDisplayList();
    }, 100),
    updateDisplayList: function() {
      this.displayList = this.subtitles.slice(
        this.indexOfCurrentSubtitle,
        this.indexOfCurrentSubtitle + this.numberOfElementsToDisplay
      );
    },
    scroll() {
      if (this.indexOfCurrentSubtitle !== null) {
        let pixelToScroll = 30 * this.indexOfCurrentSubtitle; //todo : put 30 in conf. it is the height of a subtitle
        this.container.scrollTop = pixelToScroll;
      } else {
        this.container.scrollTop = 30 * this.subtitles.length;
      }
    },
    updateIndexOfCurrentSubtitle() {
      this.indexOfCurrentSubtitle = getIndexOfCurrentSubtitle(
        this.globalTime,
        this.endValues
      );
    }
  },
  watch: {
    globalTime() {
      this.updateIndexOfCurrentSubtitle();
      this.scroll();
    },
    subtitles() {
      this.updateIndexOfCurrentSubtitle();
      this.updateDisplayList();
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