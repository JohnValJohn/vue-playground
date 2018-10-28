<template>
  <v-app>
    <v-toolbar app>
    </v-toolbar>

    <v-content>
      <v-container>
      <ScrollableList/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ScrollableList from "./components/ScrollableList";

export default {
  name: "App",
  components: {
    ScrollableList
  },
  data() {
    return {
      //
    };
  }
};
</script>
