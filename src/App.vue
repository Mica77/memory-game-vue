<template>
    <div class="content">
      <div class="header">
        <h1>Memo game</h1>
        <game-timer></game-timer>
      </div>
      <cards-area :cards="$store.getters.randomCards" />
    </div>
</template>

<script>
import CardsArea from './components/CardsArea.vue';
import GameTimer from './components/GameTimer.vue';

export default {
  name: 'App',
  components: {
    CardsArea,
    GameTimer
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87vmin;
  margin: auto;
}
</style>

