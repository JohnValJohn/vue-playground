<template>
  <v-app>
    <v-toolbar>
    </v-toolbar>

    <v-content>
      <v-container>
        <scrollable-list></scrollable-list>
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
