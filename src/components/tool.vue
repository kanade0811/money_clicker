<template>
  <div id="tool">

    <div id="wallet">
      所持金：{{ globals.wallet }}
      <br></br>
      1つ当たりの収入：{{ globals.worth }}
    </div>

    <div class="building-container">
      <div class="main-button" @click="worth.isOpen = !worth.isOpen">
        worth
      </div>

      <Transition name="drawer">
        <div class="tool" v-if="worth.isOpen">
          今のレベル:{{ worth.level }} <br>
          アップグレード費用:{{ worth.cost }} <br>
          収入が{{ globals.worth }}→{{ globals.worth*worth.gain }}に
          <div class="upgrade-btn" @click=" worth.do ">
            グレードアップ
          </div>
        </div>
      </Transition>
    </div>

  </div>
</template>

<script setup>
import '@/assets/style/tool.css';
import { globals } from '@/globals';
import { worth } from '@/conposables/button/worth.js';
</script>