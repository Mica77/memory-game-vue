<template>
    <div class="content">
      <div class="header">
        <h1>Memo game</h1>
      </div>
      <cards-area :cards="$store.getters.randomCards" />
    </div>
</template>

<script>
import CardsArea from './components/CardsArea.vue';

export default {
  name: 'App',
  components: {
    CardsArea,
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
.content {
  font-family: Helvetica, Arial, sans-serif;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}
</style>

