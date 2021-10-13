<template>
  <div class="cards">
    <card-area-item
      v-for="card in cards"
      :card="card"
      :key="card.id"
      :cardFaceDownUrl="cardFaceDownUrl"
      @openCard="$emit('openCard', card)"
    />
  </div>
</template>

<script>
import CardAreaItem from "@/components/CardAreaItem";

export default {
  components: {
    CardAreaItem,
  },
  name: "CardArea",
  props: {
    cards: {
      type: Array,
      required: true,
    },
    cardFaceDownUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(6, 14.5vmin);
  grid-template-rows: repeat(6, 14.5vmin);
  justify-content: center;
}

.cards > * {
  max-width: 225px;
  max-height: 225px;
  width: 14vmin;
  height: 14vmin;
}

@media screen and (max-width: 600px) {
  .cards {
    grid-template-columns: repeat(6, 16.5vmin);
    grid-template-rows: repeat(6, 16.5vmin);
  }

  .cards > * {
    width: 16vmin;
    height: 16vmin;
  }
}
</style>
