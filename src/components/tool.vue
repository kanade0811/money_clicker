<template>
  <div id="tool">
    <div id="wallet">
      所持金：{{ globals.wallet }}
      <br></br>
      1つ当たりの収入：{{ globals.worth }}
      <br></br>
      お金のスポーン頻度：{{ globals.spawn }}
    </div>

    <div id="buildings-wrapper">

      <div class="building-container">
        <div class="main-button" @click="worth.isOpen = !worth.isOpen">worth</div>
        <Transition name="drawer">
          <div class="tool" v-if="worth.isOpen">
            今のレベル:{{ worth.level }} <br>
            アップグレード費用:{{ worth.cost }} <br>
            収入が{{ globals.worth }}→{{ globals.worth * worth.gain }}に
            <div class="upgrade-btn" @click=" worth.do ">
              グレードアップ
            </div>
          </div>
        </Transition>
      </div>

      <div class="building-container">
        <div class="main-button" @click="spawn.isOpen = !spawn.isOpen">spawn</div>
        <Transition name="drawer">
        <div class="tool" v-if="spawn.isOpen">
          今のレベル:{{ spawn.level }} <br>
          アップグレード費用:{{ spawn.cost }} <br>
          収入が{{ globals.spawn }}→{{ globals.spawn*spawn.gain }}に
          <div class="upgrade-btn" @click=" spawn.do ">
            グレードアップ
          </div>
        </div>
      </Transition>
      </div>

    </div>
  </div>
</template>

<script setup>
import '@/assets/style/tool.css';
import { globals } from '@/globals';
import { worth } from '@/composables/button/worth.js';
import { spawn } from '@/composables/button/spawn.js';
</script>