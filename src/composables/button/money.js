import { ref } from "vue";
import { globals } from "@/globals";

let nextId = 1; 

export function useMoney() {
  const moneys = ref([]);

  function spawnMoney(fieldRef) {
    const field = fieldRef.value;
    if (!field) return;

    const width = field.clientWidth;
    const height = field.clientHeight;

    const x = Math.random() * (width - 60);
    const y = Math.random() * (height - 60);

    moneys.value.push({
      id: nextId++, 
      x,
      y
    });
  }

  const tapMoney = (id) => {
    globals.wallet += globals.worth;
    moneys.value = moneys.value.filter(m => m.id !== id);
  };

  const startSpawn = (fieldRef) => {
    setInterval(() => {
      for (let i = 0; i < globals.spawn; i++) {
        spawnMoney(fieldRef);
      }
    }, 1000);
  };

  return {
    moneys,
    tapMoney,
    startSpawn
  };
}