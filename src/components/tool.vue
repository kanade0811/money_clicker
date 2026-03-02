<script setup>
import '@/assets/style/tools/main.css'

import { globals } from '@/globals'
import { worth } from '@/composables/button/worth'
import { spawn } from '@/composables/button/spawn'
</script>

<template>
  <div id="wallet">
    所持金：{{ globals.wallet }}<br>
    1つ当たりの収入：{{ globals.worth }}<br>
    お金のスポーン頻度：{{ globals.spawn }}
  </div>

  <label class="menu">
    <input type="checkbox" class="menu-checkbox">
    <span class="chevron"></span>
  </label>

  <div id="buildings-wrapper">
    <div class="wallet-space"></div>
    
    <div class="building-container">
      <div class="main-button">
        worth
      </div>
      <div class="drawer">
        <p>今のレベル</p>
        <p>{{ worth.level }}</p>
        <p>アップグレード費用</p>
        <p>{{ worth.cost }}</p>
        <p>収入の変化</p>
        <p>{{ globals.worth }} → {{ globals.worth * worth.gain }}</p>
        <div class="upgrade-button" @click=" worth.boost ">
          グレードアップ
        </div>
      </div>
    </div>

    <div class="building-container">
      <div class="main-button">
        spawn
      </div>
      <div class="drawer">
        <p>今のレベル</p>
        <p>{{ spawn.level }}</p>
        <p>アップグレード費用</p>
        <p>{{ spawn.cost }}</p>
        <p>スポーン頻度の変化</p>
        <p>{{ globals.worth }} → {{ globals.worth * spawn.gain }}</p>
        <div class="upgrade-button" @click=" spawn.boost ">
          グレードアップ
        </div>
      </div>
    </div>
  </div>

</template>
