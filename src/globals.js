import { reactive } from "vue";

export const globals=reactive({
  wallet:0,
  worth:1,
  spawn:1
});

export function addMoney(amount){
  globals.wallet+=amount;
}
