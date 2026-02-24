import { reactive } from "vue";

export const globals=reactive({
  wallet:10000,
  worth:1000,
  spawn:10
});

export function addMoney(amount){

  globals.wallet+=amount;
}
