<template>
  <div class="content">
    <div class="header">
      <h1>Memo game</h1>
      <game-timer
        v-show="loadingComplete"
        @startGame="startGame"
        :allowStartGame="allowStartGame"
        :timerText="timerText"
      />
    </div>

    <card-area
      :cards="cards"
      v-show="loadingComplete"
      :cardFaceDownUrl="cardFaceDownUrl"
      @openCard="openCard"
    />

    <game-result-list :results="results" />
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
      results: "results",
    }),
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchCards: "fetchCards",
      openCard: "openCard",
      startGame: "startGame",
    }),
  },
  mounted() {
    this.fetchCards();

    //test
    //this.$store.dispatch("addResult", 200);
    //this.$store.dispatch("addResult", 270);
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

