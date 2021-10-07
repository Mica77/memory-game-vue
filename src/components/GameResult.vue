<template>
  <div class="game-result">
    {{ result.timerText }} 
    <span v-show="isTheBest" class="best"> The best!!!</span>
  </div>
</template>

<script>
export default {  
    props: {
        result: {
            type: Object,
            required: true
        },
        isTheBest: {
          type: Boolean
        }
    }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .game-result {
      line-height: 27px;
  }

  .best {
    color: slateblue;
    font-size: 20px;
    margin-left: 12px;
  }
</style>