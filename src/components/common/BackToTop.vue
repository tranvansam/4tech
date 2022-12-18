<script lang="ts">
export default {
  name: 'CardGame'
}
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import arrowDownIcon from '~/assets/images/arrow_down.png'

const currentPositionY = ref(0)
const scrollClass = ref('')
const backToTopRef = ref<HTMLDivElement>()

const handleScroll = () => {
  if (currentPositionY.value > window.scrollY) {
    // scroll up
    scrollClass.value = 'down'
  } else {
    // scroll down
    scrollClass.value = 'up'
  }

  currentPositionY.value = window.scrollY
}

const scrollTo = () => {
  const scrollTop = document.documentElement.scrollTop
  scrollTop ? scrollToTop() : scrollToBottom()
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

onMounted(() => {
  backToTopRef.value?.addEventListener('click', scrollTo)
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  backToTopRef.value?.removeEventListener('click', scrollTo)
  document.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="back-to-top" ref="backToTopRef">
    <div class="wrap" :class="scrollClass">
      <img :src="arrowDownIcon" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.back-to-top {
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .wrap {
    width: calc(5 / 6 * 100%);
    height: calc(5 / 6 * 100%);
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transform: rotateZ(-0.5turn);

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: transform 0.3s linear;

    img {
      margin-top: 4px;
    }

    &.down {
      transform: rotateZ(0);
    }
  }
}
</style>
