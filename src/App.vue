<template>
    <div class="content">
      <div class="header">
        <h1>Memo game</h1>
        <game-timer  
          v-show="$store.state.cards.loadingComplete"
          @startGame="$store.dispatch('startGame')"
          :allowStartGame="!!$store.getters.allowStartGame"
          :timerText="$store.getters.timerText"
        />
      </div>

      <cards-area 
        :cards="$store.state.cards.cards" 
        v-show="$store.state.cards.loadingComplete"
        :cardFaceDownUrl="$store.state.cards.cardFaceDownUrl"
        @openCard="openCard" />

      <game-results 
        :results="$store.getters.results"
       />
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
      this.$store.dispatch('fetchCards')
    },
    openCard(card) {
      this.$store.dispatch('openCard', card)
    }
  },
  mounted() {
    this.fetchCards()

    //test
    this.$store.dispatch('addResult', 200);
    this.$store.dispatch('addResult', 270);
  }
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

