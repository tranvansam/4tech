<script lang="ts">
export default {
  name: 'MenuPc',
  components: { LanguageSelection }
}
</script>

<script setup lang="ts">
import { IMenuItem } from '~/interfaces'
import LanguageSelection from './LanguageSelection.vue'

interface PropTypes {
  items: IMenuItem[]
}

const props = withDefaults(defineProps<PropTypes>(), {
  items: () => [] as IMenuItem[]
})
</script>

<template>
  <div class="menu-pc">
    <ul class="menu-pc__nav">
      <li
        class="menu-pc__item"
        v-for="(item, index) in props.items"
        :key="index"
      >
        <a v-if="item.link" :href="item.link" class="menu-pc__link">
          {{ item.label }}
        </a>
        <template v-else>{{ item.label }}</template>
      </li>
      <li class="menu-pc__item">
        <slot name="language-selection"></slot>
      </li>
    </ul>
  </div>
</template>
