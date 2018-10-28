<template>
    <div>
        <v-card height="30px">{{subtitle.start}} - {{subtitle.end}} : {{subtitle.text}}</v-card>
    </div>
</template>

<script>
export default {
  name: "subtitle",
  props: {
    subtitle: {
      type: Object
    }
  }
};
</script>

<style scoped>
</style>