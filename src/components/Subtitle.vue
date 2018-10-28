<template>
    <div>
        <v-card>{{subtitle.start}} - {{subtitle.end}} : {{subtitle.text}}</v-card>
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