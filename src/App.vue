<template>
    <div class="content">
      <div class="header">
        <h1>Memo game</h1>
        <game-timer></game-timer>
      </div>
      <cards-area :cards="$store.getters.cards" />
      <game-results :results="$store.getters.results"></game-results>
    </div>
</template>

<script>
import CardsArea from './components/CardsArea.vue';
import GameTimer from './components/GameTimer.vue';
import GameResults from './components/GameResults.vue'

export default {
  name: 'App',
  components: {
    CardsArea,
    GameTimer,
    GameResults
  },
  methods: {
    fetchCards () {
      this.$store.dispatch('fetchCards');
    }
  },
  mounted() {
    this.fetchCards();
  },
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}

.content {
  max-width: 87vmin;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

