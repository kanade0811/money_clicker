import { addMoney } from "@/globals";
import { worth } from "./worth";

export function useClick() {
  function collect(item) {
    // item.value に金額が入ってる想定
    addMoney(worth);
  }

  return {
    collect
  };
}
