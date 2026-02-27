<script setup>
import '@/assets/style/tool.css'
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

  <!-- 
  <div id="wallet">
    所持金：{{ globals.wallet }}<br>
    1つ当たりの収入：{{ globals.worth }}<br>
    お金のスポーン頻度：{{ globals.spawn }}
  </div>

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
