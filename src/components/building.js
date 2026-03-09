// worth, spawnの元となるclass
import { globals } from "@/globals";

export class Building {
  constructor(func) {
    // ボタンが押されているか否か
    this.isOpen = false;
    // レベル＝何回強化されたか
    this.level = 1;
    // 次のレベルにするために必要なコスト
    this.cost = 1;
    // 強化コストの上昇率
    this.growth = 2;
    // 強化したことで得られる効率の上昇率
    this.gain = 2;
    // 強化したことによる効果の関数
    this.func=func;
  }
  // 表示の切り替え
  toggle() {
    this.isOpen = !this.isOpen;
  }
  boost() {
    if (globals.wallet < this.cost) {
      // もっとなんか出します
      console.log("お金が足りません");
    } else {
      this.level++;
      globals.wallet -= this.cost;
      this.cost *= this.growth;
      this.func(this);
    }
  }
}
