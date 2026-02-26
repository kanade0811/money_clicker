// お金1つ当たりの金額が増える建物
import { Building } from "@/components/building";
import { globals } from "@/globals";
import { reactive } from "vue";

export const worth = reactive(
  new Building(
    (t)=>globals.worth *= t.gain
  )
);