import { ref } from "vue";
import { globals } from "@/globals";

let nextId = 1;

export function useMoney() {
  const moneys = ref([]);

  //  最大数を画面サイズから計算
  function getMaxMoney(field) {
    const width = field.clientWidth;
    const height = field.clientHeight;

    return Math.floor((width * height) / 15000); // ←調整OK
  }

  function spawnMoney(fieldRef) {
  console.log({
  wallet: globals.wallet,
  worth: globals.worth,
  autoRate: globals.autoRate,
  calc: globals.worth * globals.autoRate
});
    
    const field = fieldRef.value;
    if (!field) return;

    const max = getMaxMoney(field);

    //  上限超えたら自動回収
    if (moneys.value.length >= max) {
      globals.wallet += globals.worth * globals.autoRate;
      return;
    }

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