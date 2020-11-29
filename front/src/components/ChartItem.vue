<template>
  <div class='chart'>
    <input type="checkbox" v-model="mode" v-on:change="changeMode">
    <p class='chart__text'>{{chart.label}}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return {
      mode:true
    }
  },
  props: {
    chart: Object,
  },
  methods: {
    ...mapMutations(['changeState']),
    changeMode(){
    this.changeState({id:this.chart.id, mode:this.mode})
    }
  }
}
</script>

<style>
.chart{
    display: flex;
    flex-direction: row;
  }
  .chart__text{
    margin: 5px;
    font-size: 14px;
    color: rgb(75, 75, 75)
  }
</style>