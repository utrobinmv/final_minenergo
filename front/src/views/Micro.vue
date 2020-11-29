<template>
  <div>
    <div class='main'>
      <ChartFilter :charts='initMicroData.datasets'/>
      <Chart :width="900" v-if='dataLoaded' :chartData='microData'/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Chart from '@/components/Chart'
import ChartFilter from '@/components/ChartFilter'

export default {
  components: {
    Chart, ChartFilter
  },
  data(){
    return {
      dataLoaded: false,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
 
  async mounted(){
    // Запрос на макро данные
    this.fetchMicro()
     .then(() => this.dataLoaded = true)
  },
  methods: {
    ...mapActions(['fetchMicro']),
  },
  computed: {
    ...mapGetters(['microData', 'initMicroData']),
  },
}
</script>

<style>
  .main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
   
  }
</style>