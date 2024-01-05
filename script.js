const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Ciao Vue!',
        image: 'kvara.jpeg'
       
      }
    }
  }).mount('#app')