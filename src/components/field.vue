<script setup>
import { ref } from "vue";
import { useClick } from "@/composables/click";

const items = ref([
  { id: 1, value: 10 },
  { id: 2, value: 20 }
]);

const { collect } = useClick();

function onClick(item) {
  collect(item);
  items.value = items.value.filter(i => i.id !== item.id);
}
</script>

<template>
  <div>
    <div
      v-for="item in items"
      :key="item.id"
      @click="onClick(item)"
      class="money"
    >
      💰 {{ item.value }}
    </div>
  </div>
</template>
