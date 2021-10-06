<template>        
    <div class="card">
      <transition name="overturn">
        <img v-if="card.isOpen" :src="card.imageUrl" />
        <img v-else="!card.isOpen" :src="cardFaceDownUrl" @click="$emit('open')">
       </transition>
    </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    card: {
      type: String,
      required: true,
    },
    cardFaceDownUrl: {
        type: String,
        default: './img/cardFaceDown.JFIF'
    }
  }
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
  transition: all .3s ease-in; 
}

.overturn-leave-active + img {
  height: 0
}

.overturn-leave-to {
  transform: scaleX(0);  
}

</style>