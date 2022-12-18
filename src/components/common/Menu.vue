<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<script setup lang="ts">
import { onUnmounted, ref, watch, Transition } from 'vue'

import { IMenuItem } from '~/interfaces'
import menuIcon from '~/assets/images/menu.png'
import closeIcon from '~/assets/images/close.png'

interface PropTypes {
  items: IMenuItem[]
}

const props = withDefaults(defineProps<PropTypes>(), {
  items: () => [] as IMenuItem[]
})

const isShowMenu = ref(false)

onUnmounted(() => {
  document.body.style.overflow = 'visible'
})

watch(isShowMenu, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }
})
</script>

<template>
  <div class="menu">
    <div class="menu__toggle">
      <img :src="menuIcon" alt="" @click="isShowMenu = !isShowMenu" />
    </div>

    <Transition name="menu__bar">
      <div class="menu__bar" v-if="isShowMenu">
        <div class="menu__actions">
          <slot name="actions">
            <slot name="language-selection"></slot>

            <slot name="menu-close">
              <div class="menu__close" @click="isShowMenu = false">
                <img :src="closeIcon" alt="" />
              </div>
            </slot>
          </slot>
        </div>

        <ul class="menu__nav">
          <li
            class="menu__item"
            v-for="(item, index) in props.items"
            :key="index"
            @click="isShowMenu = false"
          >
            <a v-if="item.link" :href="item.link" class="menu__link">
              {{ item.label }}
            </a>
            <template v-else>{{ item.label }}</template>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
