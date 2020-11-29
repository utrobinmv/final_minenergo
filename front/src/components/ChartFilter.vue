<template>
  <div class='chartFilter'>
    <h3 сlass='charFilter__header'>Фильтр</h3>
    <div class='chart' v-for="chart in charts" :key='chart.id'>
      <ChartItem :chart='chart'/>
    </div>
  </div>
</template>

<script>
import ChartItem from '@/components/ChartItem'

export default {
  components: {
    ChartItem
  },
  props: {
    charts: Array
  },
  computed:{
    
  },
}
</script>

<style>
  .chartFilter {
    padding: 20px;
    border: 1px solid #D1D1D1;
    margin-right: 20px;
  }
  .charFilter__header{
    font-size: 16px;
  }

</style>