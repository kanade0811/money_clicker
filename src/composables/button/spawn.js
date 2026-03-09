// お金のスポーン頻度が上がる建物
import { Building } from "@/components/building";
import { globals } from "@/globals";
import { reactive } from "vue";

export const spawn = reactive(
  new Building(
    (t)=>globals.spawn *= t.gain
  )
);
