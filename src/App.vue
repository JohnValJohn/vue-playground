<template>
  <v-app>
    <v-toolbar>
    </v-toolbar>

    <v-content>
      <v-container>
        <time-setter></time-setter>
        <scrollable-list></scrollable-list>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ScrollableList from "./components/ScrollableList";
import TimeSetter from "./components/TimeSetter.vue";

export default {
  name: "App",
  components: {
    ScrollableList,
    TimeSetter
  },
  data() {
    return {
      //
    };
  }
};
</script>
