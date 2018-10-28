<template>
    <div>
        <v-form>
            <input v-model.number="time" type="number">
        </v-form>
        <v-btn v-on:click="setTime(time)">valider</v-btn>
    </div>
</template>

<script>
export default {
  data() {
    return {
      time: 0
    };
  },
  methods: {
    setTime(value) {
      this.$store.commit("setGlobalTime", value);
    }
  }
};
</script>

<style scoped>
</style>