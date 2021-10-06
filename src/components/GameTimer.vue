<template>
  <div class="game-timer">
    <button v-if="$store.getters.allowStartGame" @click="$store.dispatch('startGame')">Start</button> 
    <div class="timer"> {{ $store.getters.timerText}}</div>
  </div>
</template>

<script>
export default {  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .game-timer {
    display: flex; 
  }

  .timer {
      font-size: 26px;
      padding-left: 20px;      
  }
</style>
