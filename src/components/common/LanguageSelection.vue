<script lang="ts">
export default {
  name: 'LanguageSelection'
}
</script>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'

import caretDown from '~/assets/images/caret_down.png'
import TickIcon from '~/assets/images/tick.svg?component'
import { ILanguage, Nullable } from '~/interfaces'

interface PropTypes {
  items: ILanguage[]
  modelValue?: Nullable<string>
  closeOnSelect?: boolean
  left?: boolean
  right?: boolean
}

const props = withDefaults(defineProps<PropTypes>(), {
  items: () => [] as ILanguage[],
  modelValue: null,
  closeOnSelect: true,
  left: true,
  right: false
})

const emit = defineEmits(['update:modelValue'])

const localValue = ref<Nullable<string>>(null)
const isShowDropdown = ref(false)
const languageSelectionRef = ref(null)

onClickOutside(languageSelectionRef, () => {
  isShowDropdown.value = false
})

const flag = computed(() => {
  const selected = props.items.find((item) => item.value === localValue.value)
  return selected?.icon
})

const dropdownPosition = computed(() => {
  if (props.right) {
    return 'right'
  }

  return 'left'
})

const onChooseLanguage = (language: ILanguage) => {
  if (props.closeOnSelect) {
    isShowDropdown.value = false
  }

  localValue.value = language.value
  emit('update:modelValue', language.value)
}

watch(
  () => props.modelValue,
  (newValue) => {
    localValue.value = newValue
  },
  { immediate: true }
)
</script>

<template>
  <div class="language__selection" ref="languageSelectionRef">
    <div
      class="language__placeholder"
      @click="isShowDropdown = !isShowDropdown"
    >
      <div class="language__placeholder--flag">
        <img v-if="flag" :src="flag" alt="" />
      </div>
      <div class="language__placeholder--caret">
        <img :src="caretDown" alt="" />
      </div>
    </div>

    <div
      class="language__options"
      :class="dropdownPosition"
      v-if="isShowDropdown"
    >
      <div
        class="language__option"
        v-for="language in props.items"
        :key="language.value"
        @click="onChooseLanguage(language)"
      >
        <div class="language__option--checked">
          <TickIcon v-if="language.value === localValue" />
        </div>
        <div class="language__option--flag">
          <img v-if="language.icon" :src="language.icon" alt="" />
        </div>
        <div class="language__option--name">{{ language.label }}</div>
      </div>
    </div>
  </div>
</template>
