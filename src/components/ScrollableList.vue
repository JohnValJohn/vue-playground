<template>
    <div> 
      <div class = "fixedDimensions" id="scroll-container-subtitles" v-on:scroll="scrollHandler()">
        <div v-bind:style="{position:'relative', top: beforeHeight + 'px', height: afterHeight + 'px'}">
          <subtitle v-for="(subtitle, index) in displayList" :key="index" :subtitle="subtitle"></subtitle>
        </div>
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
      indexOfCurrentSubtitle: 0,
      beforeHeight: 0,
      amountAddedToBeforeHeight: 0,
      numberOfElementsToDisplay: Math.ceil(600 / 30) + 2 //600 is div height, 30 is subtitle height. We add 2 elements to be safe. todo: put values in conf
    };
  },
  computed: {
    endValues() {
      return this.subtitles.map(subtitle => subtitle.end);
    },
    globalTime() {
      return this.$store.state.globalTime;
    },
    afterHeight() {
      return ( 30 * this.subtitles.length - this.beforeHeight);
    }
  },
  methods: {
    scrollHandler: throttle(function() {      
      let beforeHeight = this.container.scrollTop
      if (beforeHeight > (30 * this.subtitles.length - 600)) {
        beforeHeight = 30 * this.subtitles.length - 600
      }
      this.beforeHeight = beforeHeight
      this.updateIndexOfCurrentSubtitleBasedOnScroll(beforeHeight);
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
      this.currentScrollPosition = this.container.scrollTop;
    },
    updateIndexOfCurrentSubtitleBasedOnTime() {
      this.indexOfCurrentSubtitle = getIndexOfCurrentSubtitle(
        this.globalTime,
        this.endValues
      );
    },
    updateIndexOfCurrentSubtitleBasedOnScroll(beforeHeight) {
      let totalHeight = 30 * this.subtitles.length
      this.indexOfCurrentSubtitle = Math.floor((beforeHeight / totalHeight)*this.subtitles.length)
    }
  },
  watch: {
    globalTime() {
      let subtitleIndex = getIndexOfCurrentSubtitle(this.globalTime, this.endValues);
      if(subtitleIndex > this.indexOfCurrentSubtitle) {
        this.indexOfCurrentSubtitle = subtitleIndex
        this.scroll();
      }      
    },
    subtitles() {
      this.updateIndexOfCurrentSubtitleBasedOnTime();
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