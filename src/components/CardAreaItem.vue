<template>
  <div class="card">
    <transition name="overturn">
      <img v-show="!!card.isOpen" :src="card.imageUrl" />
    </transition>
    <transition name="overturn">
      <img
        v-show="!card.isOpen"
        :src="cardFaceDownUrl"
        @click="$emit('open', card)"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "card-area-item",
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
  emits: ["open"],
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