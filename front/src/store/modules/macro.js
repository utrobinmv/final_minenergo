export default {
  state(){
    return {
      // Заглужки
      initMacroData: {
        labels: ['l1','l2','l3','l4','l5','l6','l7'],
        datasets: [
          {
            id: 0,
            visible: true,
            data: [40, 39, 10, 40, 39, NaN ,NaN, NaN],
            borderColor: '#12ff52',
            fill: false,
            label: 'график1 Факт',
          },
          {
            id: 1,
            visible: true,
            data: [NaN, NaN, NaN, NaN, 39, 40 ,51, 57],
            borderColor: '#ff5',
            fill: false,
            label: 'график1 Прогноз',
          },
          {
            id: 2,
            visible: true,
            data: [42, 37, 24, 48, 42, NaN ,NaN, NaN],
            borderColor: '#f32214',
            fill: false,
            label: 'график2 Факт',
          },
          {
            id: 3,
            visible: true,
            data: [NaN, NaN, NaN, NaN, 42, 45 ,54, 55],
            borderColor: '#255374',
            fill: false,
            label: 'график2 Прогноз',
          },
          {
            id: 4,
            visible: true,
            data: [22, 27, 24, 38, 45, NaN ,NaN, NaN],
            borderColor: '#f12254',
            fill: false,
            label: 'график3 Факт',
          },
          {
            id: 5,
            visible: true,
            data: [NaN, NaN, NaN, NaN, 45, 42 ,34, 45],
            borderColor: '#25f874',
            fill: false,
            label: 'график3 Прогноз',
          }
        ]
      },
      macroData: {
        labels: ['l1','l2','l3','l4','l5','l6','l7'],
        datasets: [
          {
            id: 0,
            visible: true,
            data: [40, 39, 10, 40, 39, NaN ,NaN, NaN],
            borderColor: '#12ff52',
            fill: false,
            label: 'график1 Факт',
          },
          {
            id: 1,
            visible: true,
            data: [NaN, NaN, NaN, NaN, 39, 40 ,51, 57],
            borderColor: '#ff5',
            fill: false,
            label: 'график1 Прогноз',
          },
          {
            id: 2,
            visible: true,
            data: [42, 37, 24, 48, 42, NaN ,NaN, NaN],
            borderColor: '#f32214',
            fill: false,
            label: 'график2 Факт',
          },
          {
            id: 3,
            visible: true,
            data: [NaN, NaN, NaN, NaN, 42, 45 ,54, 55],
            borderColor: '#255374',
            fill: false,
            label: 'график2 Прогноз',
          },
          {
            id: 4,
            visible: true,
            data: [22, 27, 24, 38, 45, NaN ,NaN, NaN],
            borderColor: '#f12254',
            fill: false,
            label: 'график3 Факт',
          },
          {
            id: 5,
            visible: true,
            data: [NaN, NaN, NaN, NaN, 45, 42 ,34, 45],
            borderColor: '#e35f29',
            fill: false,
            label: 'график3 Прогноз',
          }
        ]
      }
    }
  },
  mutations: {
    updateMacro(){

    },
    changeState(state, params){
      state.macroData = state.initMacroData
      state.macroData.datasets[params.id].visible = !state.macroData.datasets[params.id].visible
      let newData = state.macroData.datasets.map(dataset => dataset.visible === true ? dataset: {label: dataset.label})
      console.log(newData);

      state.macroData = {
        labels: ['l1','l2','l3','l4','l5','l6','l7'],
        datasets: newData
      }
    },
  },
  actions: {
    async fetchMacro(ctx){
      const response = await fetch('https://jsonplaceholder.typicode.com/users')    
      const macroData = await response.json()
      console.log(macroData);

      ctx.commit('updateMacro')

      return Promise.resolve('done')
    },

  },
  getters: {
    macroData(state){
      return state.macroData
    },
    initMacroData(state){
      return state.initMacroData
    }
  }
}