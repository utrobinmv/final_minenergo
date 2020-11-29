export default {
    state(){
      return {
        // Заглужки
        initMicroData: {
          labels: ['l1','l2','l3','l4','l5','l6','l7'],
          datasets: [
            {
              id: 0,
              visible: true,
              data: [22, 31, 20, 30, 35, NaN ,NaN, NaN],
              borderColor: '#12ff52',
              fill: false,
              label: 'график1 Факт',
            },
            {
              id: 1,
              visible: true,
              data: [NaN, NaN, NaN, NaN, 35, 39 ,38, 47],
              borderColor: '#ff5',
              fill: false,
              label: 'график1 Прогноз',
            },
            {
              id: 2,
              visible: true,
              data: [41, 27, 26, 38, 42, NaN ,NaN, NaN],
              borderColor: '#f32214',
              fill: false,
              label: 'график2 Факт',
            },
            {
              id: 3,
              visible: true,
              data: [NaN, NaN, NaN, NaN, 42, 47 ,46, 51],
              borderColor: '#255374',
              fill: false,
              label: 'график2 Прогноз',
            }
          ]
        },
        microData: {
          labels: ['l1','l2','l3','l4','l5','l6','l7'],
          datasets: [
            {
                id: 0,
                visible: true,
                data: [22, 31, 20, 30, 35, NaN ,NaN, NaN],
                borderColor: '#12ff52',
                fill: false,
                label: 'график1 Факт',
            },
            {
                id: 1,
                visible: true,
                data: [NaN, NaN, NaN, NaN, 35, 39 ,38, 47],
                borderColor: '#ff5',
                fill: false,
                label: 'график1 Прогноз',
            },
            {
                id: 2,
                visible: true,
                data: [41, 27, 26, 38, 42, NaN ,NaN, NaN],
                borderColor: '#f32214',
                fill: false,
                label: 'график2 Факт',
            },
            {
                id: 3,
                visible: true,
                data: [NaN, NaN, NaN, NaN, 42, 47 ,46, 51],
                borderColor: '#255374',
                fill: false,
                label: 'график2 Прогноз',
            }
          ]
        }
      }
    },
    mutations: {
      updateMicro(){
  
      },
      changeState(state, params){
        state.microData = state.initMicroData
        state.microData.datasets[params.id].visible = !state.microData.datasets[params.id].visible
        let newData = state.microData.datasets.map(dataset => dataset.visible === true ? dataset: {label: dataset.label})
        console.log(newData);
  
        state.microData = {
          labels: ['l1','l2','l3','l4','l5','l6','l7'],
          datasets: newData
        }
      },
    },
    actions: {
      async fetchMicro(ctx){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')    
        const microData = await response.json()
        console.log(microData);
  
        ctx.commit('updateMicro')
  
        return Promise.resolve('done')
      },
  
    },
    getters: {
      microData(state){
        return state.microData
      },
      initMicroData(state){
        return state.initMicroData
      }
    }
  }