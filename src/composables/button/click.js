import { addMoney } from "@/globals";

export function useClick() {
  function collect(item) {
    // item.value に金額が入ってる想定
    addMoney(item.value);
  }

  return {
    collect
  };
}
