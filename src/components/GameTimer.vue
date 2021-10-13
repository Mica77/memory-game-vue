<template>
  <div class="game-timer">
    <button v-if="allowStartGame" @click="$emit('startGame')">Start</button>

    <div class="timer">{{ timerText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    allowStartGame: {
      type: Boolean,
      required: true,
    },
    timerText: {
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-timer {
  display: flex;
  padding-left: 6px;
}

.timer {
  font-size: 26px;
  padding-left: 20px;
}
</style>
