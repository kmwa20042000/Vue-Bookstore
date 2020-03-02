<template>
    <a class="card" v-bind:href='book.detail'>
          <div class="front" :style="{ 'background-image': 'url(' + book.cover + ')'}">
          </div>
          <div class="back">
            <div>
              <h2>{{book.title}}</h2>
              <p>{{book.description}}</p>
              <button class="button">Click Here</button>
            </div>
          </div></a>
</template>

<script>

export default {
  props:{
    book:{
      type:Object,
      required: true,
    }
  },
  data () {
    return {
    }
  },
  created(){
    console.log
  }
}

</script>

<style>

</style>
