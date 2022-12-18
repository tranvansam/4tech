<script lang="ts">
export default {
  name: 'OurPartners'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import partner1 from '~/assets/images/partner1.png'
import partner2 from '~/assets/images/partner2.png'
import partner3 from '~/assets/images/partner3.png'
import partner4 from '~/assets/images/partner4.png'
import partner5 from '~/assets/images/partner5.png'
import partner6 from '~/assets/images/partner6.png'
import partner7 from '~/assets/images/partner7.png'
import arrowSquare from '~/assets/images/arrow_square_left.png'

import TitleAndDescription from '~/components/common/TitleAndDescription.vue'
import useMobile from '~/hooks/useMobile'

const partners = [
  { logo: partner1 },
  { logo: partner2 },
  { logo: partner3 },
  { logo: partner4 },
  { logo: partner5 },
  { logo: partner6 },
  { logo: partner7 }
]

const modules = [Navigation]

const { isMobile } = useMobile()
const slidePerView = computed(() => (isMobile.value ? 2 : 5))
const spaceBetween = computed(() => (isMobile.value ? 12 : 40))
</script>

<template>
  <div id="partners" class="our-partners spacer">
    <TitleAndDescription
      :title="$t('our_partners.title')"
      class="text-center"
    />

    <div class="partner__container">
      <div class="partner__list">
        <swiper
          :modules="modules"
          :slides-per-view="slidePerView"
          :space-between="spaceBetween"
          :navigation="{
            prevEl: '.partner__control--prev',
            nextEl: '.partner__control--next'
          }"
          centeredSlides
          :pagination="{ clickable: true }"
          :initial-slide="2"
        >
          <swiper-slide v-for="(partner, index) in partners" :key="index">
            <div class="partner__item">
              <img :src="partner.logo" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="partner__control partner__control--prev">
        <img :src="arrowSquare" alt="" />
      </div>
      <div class="partner__control partner__control--next">
        <img :src="arrowSquare" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.our-partners {
  padding: 10.67vw 4.27vw;
  background-color: #f6f6f6;
}

.partner {
  &__container {
    margin-top: 10.67vw;
    width: 100%;
    position: relative;
  }

  &__container &__control {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    z-index: 99;
    cursor: pointer;
    width: 10.67vw;
    height: 10.67vw;

    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

    &--prev {
      left: 0;
      transform: translateY(-50%);
    }

    &--next {
      right: 0;
      transform: translateY(-50%) rotate(0.5turn);
    }
  }

  &__list {
    width: 100%;
    overflow: auto;
  }

  &__list &__item {
    width: 50.13vw;
    height: 19.2vw;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-width: 1160px) {
  .our-partners {
    padding: 120px 230px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-and-description {
      .title {
        height: 58px;
        font-size: 60px;
        line-height: 80px;
        letter-spacing: 3.6px;
        display: flex;
        align-items: center;
        text-align: center;
      }
    }
  }

  .partner {
    &__container {
      margin-top: 80px;
    }

    &__list &__item {
      width: 260px;
      height: 100px;
      display: flex;
      justify-content: center;

      img {
        height: 100%;
      }
    }
  }
}
</style>
