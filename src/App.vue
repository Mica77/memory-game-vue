<template>
  <div class="content">
    <div class="header">
      <h1>Memo game</h1>
      <game-timer
        v-if="loadingComplete"
        @start="startGame"
        :allow-start-game="allowStartGame"
        :timer-text="timerText"
      />
    </div>

    <card-area
      :cards="cards"
      v-show="loadingComplete"
      :card-face-down-url="cardFaceDownUrl"
      @open-card="openCard"
    />

    <game-result-list :results="reversedResults" />
  </div>
</template>

<script>
import CardArea from "./components/CardArea.vue";
import GameTimer from "./components/GameTimer.vue";
import GameResultList from "./components/GameResultList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    CardArea,
    GameTimer,
    GameResultList,
  },
  computed: {
    ...mapState({
      loadingComplete: (state) => state.cards.loadingComplete,
      cards: (state) => state.cards.cards,
      cardFaceDownUrl: (state) => state.cards.cardFaceDownUrl,
    }),
    ...mapGetters({
      allowStartGame: "allowStartGame",
      timerText: "timerText",
      reversedResults: "reversedResults",
    }),
  },
  mounted() {
    this.fetchCards();
    this.fetchResults();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchCards: "fetchCards",
      fetchResults: "fetchResults",
      openCard: "openCard",
      startGame: "startGame",
    }),
  },
};
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

