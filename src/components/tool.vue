<script setup>
import '@/assets/style/tools/hamburger.css'
import '@/assets/style/tools/wallet.css'
import '@/assets/style/tools/building.css'
import { globals } from '@/globals'
import { worth } from '@/composables/button/worth'
import { spawn } from '@/composables/button/spawn'
</script>

<template>

  <!-- ラベル内をチェックボックスとする -->
  <label class="menu-label">
    <input type="checkbox" class="menu-checkbox">
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </label>

  <div id="wallet">
    所持金：{{ globals.wallet }}<br>
    1つ当たりの収入：{{ globals.worth }}<br>
    お金のスポーン頻度：{{ globals.spawn }}
  </div>

  <div id="buildings-wrapper">
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

  <!--   
  <div id="buildings-wrapper">
    <div class="building-container">
      <div class="main-button" @click=" worth.toggle ">
        worth
      </div>
      <Transition name="drawer">
        <div class="drawer-box" v-if="worth.isOpen">
          今のレベル:{{ worth.level }} <br>
          アップグレード費用:{{ worth.cost }} <br>
          収入が{{ globals.worth }}→{{ globals.worth * worth.gain }}に
          <div class="upgrade-button" @click=" worth.boost ">
            グレードアップ
          </div>
        </div>
      </Transition>
    </div>

    <div class="building-container">
      <div class="main-button" @click=" spawn.toggle ">
        spawn
      </div>
      <Transition name="drawer">
        <div class="drawer-box" v-if="spawn.isOpen">
          今のレベル:{{ spawn.level }} <br>
          アップグレード費用:{{ spawn.cost }} <br>
          スポーン頻度が{{ globals.spawn }}→{{ globals.spawn * spawn.gain }}に
          <div class="upgrade-button" @click=" spawn.boost ">
            グレードアップ
          </div>
        </div>
      </Transition>
    </div>
  </div>
   -->
</template>
