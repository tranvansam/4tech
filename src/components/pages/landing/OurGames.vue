<script lang="ts">
export default {
  name: 'OurGames'
}
</script>

<script setup lang="ts">
import { games } from '~/constants'

import CardGame from '~/components/common/CardGame.vue'
import TitleAndDescription from '~/components/common/TitleAndDescription.vue'

const ourGames1 = games.slice(0, 3)
const ourGames2 = games.slice(3, 6)
const ourGames3 = games.slice(6, 9)
const ourGames4 = games.slice(9)
</script>

<template>
  <div id="games" class="our-games spacer">
    <TitleAndDescription
      :title="$t('our_games.title')"
      :description="$t('our_games.description')"
      class="text-center"
    />

    <div class="games">
      <div class="column column-1">
        <div class="column">
          <CardGame
            v-for="(game, index) in ourGames1"
            :key="index"
            v-bind="game"
          />
        </div>
        <div class="column">
          <CardGame
            v-for="(game, index) in ourGames2"
            :key="index"
            v-bind="game"
          />
        </div>
      </div>
      <div class="column column-2">
        <div class="column">
          <CardGame
            v-for="(game, index) in ourGames3"
            :key="index"
            v-bind="game"
          />
        </div>
        <div class="column">
          <CardGame
            v-for="(game, index) in ourGames4"
            :key="index"
            v-bind="game"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.our-games {
  .title-and-description {
    padding-left: 4.27vw;
    padding-right: 4.27vw;

    .title {
      height: 15.73vw;
      font-family: 'Playfair Display';
      font-size: 10px;
      font-weight: 900;
      line-height: 50px;
      letter-spacing: 0.6px;
      color: #000000;
    }

    .description {
      margin-top: 4.27vw;
      color: #757575;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  .games {
    margin-top: 10.67vw;
    display: flex;
    justify-content: space-between;

    .column {
      flex: 1;
      display: flex;

      flex-direction: column;

      &.column-1 {
        justify-content: flex-start;
        margin-left: 4.27vw;
        margin-bottom: 9.6vw;
        margin-right: 2vw;
      }

      &.column-2 {
        justify-content: flex-end;
        margin-right: 4.27vw;
        margin-top: 9.6vw;
        margin-left: 2vw;
      }

      .column {
        &:nth-child(2n) {
          margin-top: 5.33vw;
        }

        > *:not(:first-child) {
          margin-top: 5.33vw;
        }
      }
    }
  }
}

@media (min-width: 1160px) {
  .our-games {
    .title-and-description {
      margin-left: auto;
      margin-right: auto;
      padding: 0;
      width: 860px;

      .title {
        font-size: 60px;
        line-height: 60px;
        letter-spacing: 3.6px;
      }

      .description {
        margin-top: 24px;
        color: #757575;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }

    .games {
      margin-top: 80px;

      .column {
        flex: 1;
        display: flex;
        flex-wrap: wrap;

        flex-direction: row;

        &.column-1 {
          margin-bottom: 0;
          margin-left: 80px;
          margin-right: 20px;
        }

        &.column-2 {
          margin-top: 0;
          margin-left: 20px;
          margin-right: 80px;
        }

        .column {
          &:first-child {
            margin-right: 20px;
          }

          &:last-child {
            margin-left: 20px;
          }

          &:nth-child(2n) {
            margin-top: 118px;
          }

          &:nth-child(2n + 1) {
            margin-bottom: 118px;
          }

          > *:not(:first-child) {
            margin-top: 40px;
          }
        }
      }
    }
  }
}
</style>
