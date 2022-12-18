<script lang="ts">
export default {
  name: 'HomePage'
}
</script>

<script setup lang="ts">
import Hero from '~/components/pages/landing/Hero.vue'
import BackToTop from '~/components/common/BackToTop.vue'
import AboutUs from '~/components/pages/landing/AboutUs.vue'
import OurGames from '~/components/pages/landing/OurGames.vue'
import OurPartners from '~/components/pages/landing/OurPartners.vue'
import TheFooter from '~/components/pages/landing/TheFooter.vue'
</script>

<template>
  <Hero />
  <AboutUs />
  <OurGames />
  <OurPartners />
  <TheFooter />
  <BackToTop />
</template>

<route lang="yaml">
meta:
  layout: blank
  requireAuth: false
</route>
