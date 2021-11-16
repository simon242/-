const { ref, onMounted, watch } = Vue

const app = Vue.createApp({
  setup(props, context) {
    const video = ref(null)
    const count = ref(0)
    const audio = ref(null)
    const audiohide = ref(null)

    const handleClick = () => {
      count.value++
	  if (count.value > 100000) {
	  video.value.currentTime = 0
      video.value.play()
      audiohide.value.currentTime = 0
      audiohide.value.play()
	} else{
      video.value.currentTime = 0
      video.value.play()
      audio.value.currentTime = 0
      audio.value.play()

    }
	}
    onMounted(() => {
      count.value = parseInt(localStorage.getItem('toyzagao')) || 0
      document.getElementById('app').onclick = handleClick
	  
    })

    watch(count, (value) => {
      localStorage.setItem('toyzagao', value)
    })

    return {
      video,
      count,
      audio,
      audiohide,
      handleClick
    }
  }
}).mount('#app')
