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

  return { moneys, spawnMoney };
}


  
  // タップされたとき
  const tapMoney = (id) => {
    globals.wallet += globals.worth;
    moneys.value = moneys.value.filter(m => m.id !== id);
  };

  // spawn の値に応じて定期生成
  setInterval(() => {
    for (let i = 0; i < globals.spawn; i++) {
      spawnMoney();
    }
  }, 1000);

  return {
    moneys,
    tapMoney,
  };
}
