<script lang="ts">
export default {
  name: 'CardGame'
}
</script>

<script setup lang="ts">
import { computed, StyleValue } from 'vue'

interface PropTypes {
  backgroundImage?: string
  title: string
  description: string
}
const props = defineProps<PropTypes>()

const cardGameStyles = computed<StyleValue>(() => {
  if (props.backgroundImage) {
    return { backgroundImage: `url(${props.backgroundImage})` }
  }

  return {}
})
</script>

<template>
  <div class="card-game" :style="cardGameStyles">
    <div class="content">
      <div class="title">{{ props.title }}</div>
      <div class="description">{{ props.description }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-game {
  height: 71.47vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  border-radius: 2.67vw;
  display: flex;
  align-items: flex-end;
  filter: drop-shadow(0px 1.07vw 2.67vw rgba(0, 0, 0, 0.25));

  .content {
    padding-bottom: 2.93vw;
    padding-left: 2.13vw;

    .title {
      font-size: 24px;
      font-weight: 700;
      line-height: 30px;
    }

    .description {
      margin-top: 0.8vw;
      padding-right: 4.8vw;
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0.9px;
    }
  }
}

@media (min-width: 1160px) {
  .card-game {
    height: 560px;

    .content {
      padding-bottom: 40px;
      padding-left: 32px;
      padding-right: 32px;

      .title {
        font-size: 48px;
        line-height: 60px;

        display: flex;
        align-items: flex-end;
        letter-spacing: -1px;
      }

      .description {
        margin-top: 16px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: normal;
      }
    }
  }
}
</style>
