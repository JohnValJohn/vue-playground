<template>
    <div>
      <v-layout row>
        <v-flex xs10><v-card height="30px">{{subtitle.start}} - {{subtitle.end}} : {{subtitle.text}}</v-card></v-flex>
        <v-flex xs2><v-btn flat small @click='clickHandler()'>click</v-btn></v-flex>
      </v-layout>        
    </div>
</template>

<script>
export default {
  name: "subtitle",
  props: {
    subtitle: {
      type: Object
    }
  },
  methods: {
    clickHandler() {
      console.log('you clicked')
    }
  },
};
</script>

<style scoped>
</style>