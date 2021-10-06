<template>
    <div class="cards">
      <card-item
        v-for="card in cards"
        :card="card"
        :key="card.id"
        @open="openCard(card)"
      />
    </div>
</template>

<script>
import CardItem from '@/components/CardItem';

export default {
  components: {
    CardItem
  },
  name: 'CardsArea', 
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  methods: {
    openCard(card) {
      this.$store.commit('openCard', card)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cards {
  display: flex;
  flex-wrap: wrap;
  width: 640px;  
}

.cards > * {
    width: calc((100% - 0.5 * 12%)/ 6);
    max-width: 100px;
    height: 100px;
    max-height: 100px;
    padding: 0.5%;
}
</style>
