<script lang="ts">
export default {
  name: 'Hero'
}
</script>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import heroImg from '~/assets/images/hero_bg.jfif'
import logoMobileImg from '~/assets/images/logo_mobile.png'
import logoPCImg from '~/assets/images/logo.png'
import ongTienImg from '~/assets/images/ong_tien_1.png'

import { menuItems, languages } from '~/constants'
import useMobile from '~/hooks/useMobile'
import useAppStore from '~/store/stores/appStore'

import Countdown from '~/components/common/Countdown.vue'
import LanguageSelection from '~/components/common/LanguageSelection.vue'
import Menu from '~/components/common/Menu.vue'
import MenuPc from '~/components/common/MenuPc.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'

const { isMobile } = useMobile()
const appStore = useAppStore()
const { locale, t } = useI18n()

const menuItemsComputed = computed(() =>
  menuItems.map((item) => {
    return { link: item.link, label: t(item.labelKey) }
  })
)
const languagesComputed = computed(() =>
  languages.map((language) => {
    return {
      value: language.value,
      label: t(language.labelKey),
      icon: language.icon
    }
  })
)

watch(
  () => appStore.currentLanguage,
  (newValue: string) => {
    locale.value = newValue
  },
  { immediate: true }
)
</script>

<template>
  <div class="hero">
    <div class="background">
      <div class="layer-1">
        <div class="layer-2">
          <div
            class="layer-3"
            :style="{
              backgroundImage: `linear-gradient(180deg, rgba(0, 10, 255, 0.5) 0%, rgba(0, 0, 0, 0) 41.57%), url(${heroImg})`
            }"
          ></div>
        </div>
      </div>
    </div>

    <div class="hero__navbar">
      <div :class="isMobile ? 'logo-mobile' : 'logo-pc'">
        <img :src="isMobile ? logoMobileImg : logoPCImg" alt="" />
      </div>

      <Menu v-if="isMobile" :items="menuItemsComputed">
        <template #language-selection>
          <LanguageSelection
            :items="languagesComputed"
            v-model="appStore.currentLanguage"
          />
        </template>
      </Menu>

      <MenuPc v-else :items="menuItemsComputed" class="hero__menu-pc">
        <template #language-selection>
          <LanguageSelection
            :items="languagesComputed"
            v-model="appStore.currentLanguage"
            right
          />
        </template>
      </MenuPc>
    </div>

    <div class="hero__wrap">
      <div class="hero__title">
        {{ $t('hero.title', { breakline: '' }) }}
      </div>

      <Countdown
        class="hero__countdown"
        :finish-time="new Date(2023, 0, 18)"
        :is-mobile="isMobile"
      />

      <div class="hero__content">
        <NewsLetter
          :content="$t('hero.news_letter.text')"
          :placeholder="$t('hero.news_letter.placeholder')"
          :is-mobile="isMobile"
        />
      </div>
    </div>

    <div class="hero__fairy">
      <img :src="ongTienImg" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  padding-top: 29.87vw;
  height: 219.73vw;
  position: relative;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 162.13vw;
    z-index: -1;
    overflow: hidden;

    .layer-1 {
      width: 100%;
      height: 162.13vw;
      overflow: hidden;
      background: radial-gradient(
        27.72% 27.79% at 50.81% 68.15%,
        #210544 0%,
        rgba(23, 5, 68, 0.71) 50.52%,
        rgba(23, 5, 68, 0) 100%
      );
      backdrop-filter: blur(5px);

      .layer-2 {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 800vw;
        height: 800vw;
        border-radius: 50%;
        overflow: hidden;
        z-index: -1;

        .layer-3 {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 315.73vw;
          height: 178.13vw;
          background-size: cover;
          background-position: center;
        }
      }
    }
  }

  &__navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    padding: 6.4vw 4.27vw;
    height: 29.87vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) -25%,
      rgba(0, 0, 0, 0) 100%
    );

    .logo-mobile {
      height: 10.67vw;

      img {
        height: 100%;
      }
    }
  }

  &__navbar &__menu-pc {
    margin-top: 40px;
  }

  &__wrap {
    padding: 6.4vw 4.27vw 0 4.27vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  &__wrap &__title {
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 900;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.6px;
  }

  &__wrap &__countdown {
    margin-top: 10.13vw;
  }

  &__wrap &__content {
    margin-top: 10.67vw;
  }

  &__fairy {
    margin-top: 2.93vw;
    margin-left: 4.53vw;
    margin-right: 4.27vw;
    height: 68.8vw;
    position: relative;
    display: flex;
    overflow: hidden;

    img {
      position: absolute;
      left: 10.4vw;
      bottom: -3.73vw;
      width: 93.6vw;
      height: 93.6vw;
    }
  }
}

@media (min-width: 1160px) {
  .hero {
    height: 1018px;
    padding-top: 162px;

    .background {
      height: 100%;

      .layer-1 {
        height: 988px;

        .layer-2 {
          width: 4895px;
          height: 4895px;

          .layer-3 {
            width: 1920px;
            height: 1083px;
          }
        }
      }
    }

    &__navbar {
      padding: 0 80px 0 79px;
      height: 162px;
      align-items: flex-start;

      .logo-pc {
        height: 64px;
        margin-top: 20px;
      }
    }

    &__wrap {
      margin-top: 132px;
      padding-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__wrap &__title {
      width: 860px;
      font-size: 80px;
      line-height: 120px;
    }

    &__wrap &__countdown {
      margin-top: 21px;
    }

    &__wrap &__content {
      margin-top: 97px;
      width: 560px;
    }

    &__fairy {
      margin: 0;
      width: 938px;
      height: 938px;
      position: absolute;
      left: -89px;
      top: 85px;

      img {
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
      }
    }
  }
}
</style>
