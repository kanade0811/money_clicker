import { reactive } from "vue";

export const globals=reactive({
  wallet:0,
  worth:1,
  spawn:1,
  autoRate:0.5 //自動でお金を回収するときの倍率
});

export function addMoney(amount){
  globals.wallet+=amount;
}
