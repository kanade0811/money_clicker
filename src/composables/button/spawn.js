// お金のスポーン頻度が上がる建物
import { globals } from "@/globals";
import { reactive } from "vue";

export const spawn = reactive({
  isOpen: false,
  level: 1,
  cost: 1,
  growth: 2,
  gain: 2,
  do() {
    if (globals.wallet < this.cost) {
      console.log("お金が足りません");
    } else {
      this.level++;
      globals.wallet -= this.cost;
      this.cost *= this.growth;
      globals.spawn *= this.gain;
    }
  },
});