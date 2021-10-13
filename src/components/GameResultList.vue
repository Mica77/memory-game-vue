<template>
  <div v-show="results.length">
    <h1>Results</h1>
    <div class="game-results">
      <game-result-item
        v-for="result in results"
        :key="result.id"
        :result="result"
        :isTheBest="results.length > 1 && result.timerValue == bestTimerValue"
      />
    </div>
  </div>
</template>

<script>
import GameResultItem from "@/components/GameResultItem";

export default {
  components: {
    GameResultItem,
  },
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
  computed: {
    bestTimerValue() {
      const valuesArray = this.results.map((item) => item.timerValue);
      return Math.min(...valuesArray);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>