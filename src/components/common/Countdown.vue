<script lang="ts">
export default {
  name: 'Countdown'
}
</script>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { ONE_SECOND } from '~/constants'
import { Nullable } from '~/interfaces'
import { durationToObject, to2Digits } from '~/utils'

interface PropTypes {
  finishTime: Date | string | number
  isMobile: boolean
}

const props = withDefaults(defineProps<PropTypes>(), {})
const emit = defineEmits(['finish'])

const duration = ref(
  new Date(props.finishTime).getTime() - new Date().getTime()
)
const timer = ref<Nullable<number>>(null)

const durationObject = computed(() => {
  return durationToObject(duration.value)
})

const prefixClass = ref(props.isMobile ? 'countdown' : 'countdown-pc')

onMounted(() => {
  timer.value = window.setInterval(() => {
    if (duration.value <= 0) {
      emit('finish')

      if (timer.value !== null) {
        window.clearInterval(timer.value)
        timer.value = null
      }
    } else {
      duration.value = duration.value - ONE_SECOND
    }
  }, ONE_SECOND)
})

onUnmounted(() => {
  if (timer.value !== null) {
    window.clearInterval(timer.value)
  }
})

watch(
  () => props.finishTime,
  (newValue) => {
    duration.value = new Date(newValue).getTime() - new Date().getTime()
  },
  {
    immediate: true
  }
)

watch(
  () => props.isMobile,
  (isMobile) => {
    prefixClass.value = isMobile ? 'countdown' : 'countdown-pc'
  },
  { immediate: true }
)
</script>

<template>
  <div :class="`${prefixClass}`">
    <div :class="`${prefixClass}__time`">
      <span>{{ durationObject.days }}</span>
      <span>{{ $t('hero.countdown.days') }}</span>
    </div>
    <div :class="`${prefixClass}__divider`">:</div>

    <div :class="`${prefixClass}__time`">
      <span>{{ to2Digits(durationObject.hours) }}</span>
      <span>{{ $t('hero.countdown.hours') }}</span>
    </div>
    <div :class="`${prefixClass}__divider`">:</div>

    <div :class="`${prefixClass}__time`">
      <span>{{ to2Digits(durationObject.minutes) }}</span>
      <span>{{ $t('hero.countdown.minutes') }}</span>
    </div>
    <div :class="`${prefixClass}__divider`">:</div>

    <div :class="`${prefixClass}__time`">
      <span>{{ to2Digits(durationObject.seconds) }}</span>
      <span>{{ $t('hero.countdown.seconds') }}</span>
    </div>
  </div>
</template>
