import { onMounted, onUnmounted, ref } from 'vue'

const isMobile = ref(false)

const handleResize = () => {
  const vw = document.documentElement.clientWidth || 0
  isMobile.value = vw < 1160
}

const useMobile = () => {
  onMounted(() => {
    handleResize()
    window.removeEventListener('resize', handleResize)
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { isMobile }
}

export default useMobile
