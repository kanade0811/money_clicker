import { ref } from "vue";
import { globals } from "@/globals";

export function useMoney() {
  const moneys = ref([]);

  function spawnMoney(fieldRef) {
    const field = fieldRef.value;
    const width = field.clientWidth;
    const height = field.clientHeight;

    const x = Math.random() * (width - 60);
    const y = Math.random() * (height - 60);

    moneys.value.push({
      id: Date.now(),
      x,
      y
    });
  }

  const tapMoney = (id) => {
    globals.wallet += globals.worth;
    moneys.value = moneys.value.filter(m => m.id !== id);
  };

  // 定期生成
  const startSpawn = (fieldRef) => {
    setInterval(() => {
      for (let i = 0; i < globals.spawn; i++) {
        spawnMoney(fieldRef);
      }
    }, 1000);
  };

  return {
    moneys,
    spawnMoney,
    tapMoney,
    startSpawn
  };
}