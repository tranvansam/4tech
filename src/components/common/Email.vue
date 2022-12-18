<script lang="ts">
export default {
  name: 'Email'
}
</script>

<script setup lang="ts">
import ArrowRightIcon from '~/assets/images/arrow_right.svg?component'

interface PropTypes {
  variant?: string
  placeholder?: string
}

const VARIANTS: { [variant: string]: string } = {
  white: 'white',
  outline: 'outline'
}

const props = withDefaults(defineProps<PropTypes>(), {
  variant: 'white',
  placeholder: 'Enter your email'
})
</script>

<template>
  <div class="email" :class="{ [props.variant]: VARIANTS[props.variant] }">
    <input type="email" :placeholder="props.placeholder" />
    <ArrowRightIcon />
  </div>
</template>

<style scoped lang="scss">
.email {
  position: relative;

  input {
    padding: 18px 38px 18px 14px;
    width: 100%;
    height: 56px;
    background-color: #fff;
    color: #545454;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    border: 1px solid #fff;
    border-radius: 8px;

    &::placeholder {
      color: inherit;
    }
  }

  :deep(svg) {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
  }

  &.outline {
    input {
      background-color: transparent;
      color: #fff;
    }

    :deep(svg) {
      right: 14px;
      color: #fff;
    }
  }
}
</style>
