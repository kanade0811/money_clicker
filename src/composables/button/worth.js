// お金1つ当たりの金額が増える建物
import { globals } from "@/globals";
import { reactive } from "vue";

export const worth = reactive({
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
      globals.worth *= this.gain;
    }
  },
});