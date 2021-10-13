<template>
  <div class="card">
    <transition name="overturn">
      <img v-if="card.isOpen" :src="card.imageUrl" />
      <img v-else :src="cardFaceDownUrl" @click="$emit('openCard', card)" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "CardAreaItem",
  props: {
    card: {
      type: Object,
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
.card img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
}

.overturn-leave-active {
  transition: transform 0.3s ease-in;
}

.overturn-leave-to {
  transform: scaleX(0);
}

.overturn-enter-active {
  transition: transform 0.3s ease-in;
  display: none;
}
</style>