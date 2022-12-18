<script lang="ts">
export default {
  name: 'TheFooter'
}
</script>

<script setup lang="ts">
import logoImg from '~/assets/images/logo_mobile.png'
import footerImg from '~/assets/images/footer_bg.png'
import LocationIcon from '~/assets/images/location.svg?component'
import MobileIcon from '~/assets/images/mobile.svg?component'
import Email from '~/components/common/Email.vue'

import { socialMediaList, addresses } from '~/constants'
</script>

<template>
  <div id="contact-us" class="footer">
    <div class="content" :style="{ backgroundImage: `url(${footerImg})` }">
      <div class="logo-and-social-media">
        <div class="logo">
          <img :src="logoImg" alt="" />
        </div>
        <div class="social-media-list">
          <div
            class="social-media"
            v-for="(socialMedia, index) in socialMediaList"
            :key="index"
          >
            <component :is="socialMedia.icon" />
          </div>
        </div>
      </div>

      <div class="address">
        <div class="title">Address</div>

        <div class="block location-block">
          <div class="icon">
            <LocationIcon />
          </div>
          <div class="text">
            <p v-for="(address, index) in addresses" :key="index">
              {{ $t(address) }}
            </p>
          </div>
        </div>

        <div class="block address-block">
          <div class="icon">
            <MobileIcon />
          </div>
          <div class="text">
            <p>{{ $t('address.phone') }}</p>
          </div>
        </div>
      </div>

      <div class="subscribe">
        <div class="title">{{ $t('subscribe.title') }}</div>
        <div class="block">
          <div class="text">{{ $t('subscribe.text') }}</div>
        </div>

        <Email class="news-letter-input" variant="outline" />
      </div>
    </div>

    <div class="info">
      <p>2017 Copyright. Policy.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  .content {
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 10.67vw;
    padding-bottom: 16.53vw;
  }

  .logo-and-social-media {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      height: 96px;

      img {
        height: 100%;
      }
    }

    .social-media-list {
      margin-top: 40px;
      width: 168px;
      display: flex;
      justify-content: space-between;

      .social-media {
        display: flex;
      }
    }
  }

  .address,
  .subscribe {
    margin-top: 18.13vw;
    padding-left: 4.27vw;
    padding-right: 4.27vw;
    color: #fff;

    .title {
      font-size: 24px;
      font-weight: 700;
      line-height: 30px;
    }

    .block {
      margin-top: 20px;
      display: flex;

      .icon {
        margin-right: 8px;
        display: flex;
      }

      .text {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;

        p:not(:first-child) {
          margin-top: 12px;
        }
      }
    }

    .address-block {
      align-items: center;
    }

    .news-letter-input {
      margin-top: 4.27vw;
      position: relative;
    }
  }

  .info {
    height: 22.93vw;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #fff;
      font-size: 18px;
      line-height: 23px;
    }
  }
}

@media (min-width: 1160px) {
  .footer {
    .content {
      background-size: 100% 100%;
      padding: 104px 230px 100px 230px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .logo-and-social-media {
        padding-top: 0;
      }

      .address,
      .subscribe {
        margin-top: 0;
        padding: 0;
        width: 410px;

        .block {
          margin-top: 40px;
        }
      }

      .address {
        margin-left: auto;
      }

      .subscribe {
        margin-left: 40px;
      }
    }

    .info {
      height: 80px;
    }
  }
}
</style>
