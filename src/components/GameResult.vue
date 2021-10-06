<template>
  <div class="game-result">
    {{ result.timerText }} 
    <span v-show="$store.getters.results.length > 1 && result.timerValue == $store.getters.bestTimerValue" class="best">
      The best!!!
    </span>
  </div>
</template>

<script>
export default {  
    props: {
        result: {
            type: Object,
            required: true
        }
    }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .best {
    color: slateblue;
    font-size: 20px;
    margin-left: 12px;
  }
</style>