<script lang="ts">
export default {
  name: 'AboutUs'
}
</script>

<script setup lang="ts">
import witchImg from '~/assets/images/witch.png'
import mapImg from '~/assets/images/pin_map.png'
import { benefits } from '~/constants'
import TitleAndDescription from '~/components/common/TitleAndDescription.vue'
</script>

<template>
  <div id="about-us" class="about-us spacer">
    <div class="statistics-and-benefit-box">
      <div class="statistics-box">
        <TitleAndDescription
          :title="$t('about_us.title')"
          :description="$t('about_us.description')"
        />

        <div class="statistics">
          <div class="statistic">
            <div class="statistic__title">
              <span>600</span>
              <span>M</span>
              <span>+</span>
            </div>
            <div class="statistic__description">{{ $t('about_us.users') }}</div>
          </div>
          <div class="statistic">
            <div class="statistic__title">
              <span>135</span>
              <span>+</span>
            </div>
            <div class="statistic__description">{{ $t('about_us.games') }}</div>
          </div>
        </div>
      </div>

      <div class="benefits-box">
        <div class="benefits">
          <div
            class="benefit"
            v-for="(benefit, index) in benefits"
            :key="index"
          >
            <div class="icon">
              <div class="wrap">
                <component :is="benefit.icon" />
              </div>
            </div>
            <div class="text">
              <div class="title">{{ $t(benefit.titleKey) }}</div>
              <div class="content">{{ $t(benefit.descriptionKey) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="witch-and-map">
      <div class="pseudo"></div>
      <div class="witch">
        <img :src="witchImg" alt="" />
      </div>
      <div class="map">
        <img :src="mapImg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-us {
  .statistics {
    display: flex;
    margin-top: 40px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 40px;

    .statistic {
      &__title {
        font-weight: 700;
        letter-spacing: -1px;
        color: #079bee;

        span:nth-child(1) {
          font-size: 44px;
          line-height: 54px;
        }

        span:nth-child(2) {
          font-size: 20px;
          line-height: 24px;
        }

        span:last-child {
          font-size: 36px;
          line-height: 44px;
        }
      }

      &__description {
        margin-top: 4px;
        color: #000;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        width: 164px;
      }

      &:not(:first-child) {
        margin-left: 16px;
      }
    }
  }

  .benefits-box {
    background-color: #eee;

    .benefits {
      padding: 40px 16px;

      .benefit {
        display: flex;

        .icon {
          width: 60px;

          .wrap {
            width: 40px;
            height: 40px;
            background-color: #e3fcff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .text {
          flex: 1;

          .title {
            height: 36px;
            font-size: 24px;
            font-weight: 700;
            line-height: 30px;
          }

          .content {
            margin-top: 12px;
            color: #757575;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          }
        }

        &:not(:first-child) {
          margin-top: 40px;
        }
      }
    }
  }

  .witch-and-map {
    padding-top: 10.67vw;

    .witch {
      display: flex;
      padding-left: 11.2vw;
      padding-right: 8.8vw;
      z-index: 1;
     
      
      img {
        width: 100%;
        animation: witchMb 6s infinite 2s linear;
      }
    }

    .map {
      margin-top: -8.27vw;
      display: flex;

      img {
        width: 100%;
      }
    }
  }
}

@media (min-width: 1160px) {
  .about-us {
    width: 1160px;
    margin-left: auto;
    margin-right: auto;

    .statistics-and-benefit-box {
      display: flex;
      justify-content: space-between;

      .statistics-box,
      .benefits-box {
        width: 560px;
      }

      .title-and-description {
        padding: 0;

        .title {
          color: #000;
          font-family: 'Playfair Display';
          font-size: 60px;
          font-weight: 900;
          line-height: 60px;
          letter-spacing: 3.6px;
        }

        .description {
          margin-top: 40px;
        }
      }

      .statistics {
        margin-top: 79px;
        padding: 0;

        flex-direction: column;

        .statistic {
          .title {
            span:nth-child(2n) {
              font-size: 40px;
              line-height: 49px;
            }

            span:first-child,
            span:last-child {
              font-size: 80px;
              line-height: 98px;
            }
          }

          &:not(:first-child) {
            margin-left: 0;
            margin-top: 39px;
          }
        }
      }

      .benefits-box {
        display: flex;
        justify-content: center;
        align-items: center;

        .benefits {
          width: 410px;
          padding: 0;

          .benefit {
            .icon {
              width: 74px;

              .wrap {
                width: 50px;
                height: 50px;
              }
            }

            .text {
              flex: 1;

              .title {
                height: 29px;
              }

              .content {
                margin-top: 8px;
              }
            }

            &:not(:first-child) {
              margin-top: 42px;
            }
          }
        }
      }
    }

    .witch-and-map {
      padding-top: 68px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .pseudo{
        width: 100%;
        height: 437px;
      }
      .witch {
        margin-left: 0;
        padding-left: 0;
        padding-right: 0;
        position: absolute;
        top:0px;
        right: 0px;
        width: 533px;
        height: 437px;
        animation: witchPC 6s infinite 2s linear;
        img{
          animation: none;
        }
       
      }

      .map {
        margin-top: -101px;
        display: flex;
        width: 100%;
      }
    }
  }

}
@keyframes witchMb {
  0%{
   
    transform: translateY(-35%) translateX(40%) scale(0.5);
    opacity: 0;
  }
  40%{
    transform: scale(1);
    opacity: 1;
  
  }
  50%{
    transform: scale(1) rotate(3deg);
    opacity: 1;
  
  }
  60%{
    transform: scale(1);
    opacity: 1;
  
  }
  100%{
    transform: translateY(-35%) translateX(-40%) scale(0.5);
    opacity: 0;
    
  }
}
@keyframes witchPC {
  0%{
    top:0px;
    right: 0px;
    opacity: 0;
    transform: scale(0.7);
  }
  40%{
    top:95px;
    right: calc(50% - 267px);
    transform: scale(1) ;
    opacity: 1;
  
  }
  50%{
    top:95px;
    right: calc(50% - 267px);
    transform: scale(1) rotate(5deg);
    opacity: 1;
  
  }
  60%{
    top:95px;
    right: calc(50% - 267px);
    transform: scale(1) ;
    opacity: 1;
  
  }
  100%{
    top:0px;
    right:calc(100% - 500px);
    transform: scale(0.7);
    opacity: 0;
    
  }
}


</style>
