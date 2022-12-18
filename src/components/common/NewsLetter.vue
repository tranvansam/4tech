<script lang="ts">
export default {
  name: 'NewsLetter'
}
</script>

<script setup lang="ts">
import Email from '~/components/common/Email.vue'

interface PropTypes {
  content: string
  placeholder: string
  isMobile: boolean
}

const props = withDefaults(defineProps<PropTypes>(), {
  content: ''
})
</script>

<template>
  <div class="news-letter" :class="isMobile ? '' : 'pc'">
    <p class="news-letter__content">{{ props.content }}</p>
    <Email class="news-letter__input" :placeholder="props.placeholder" />
  </div>
</template>
