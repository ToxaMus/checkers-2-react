import { Ceil } from "./ceil";
import { Colors } from "./colors";

export class Board {
    ceils: Ceil[][] = []

    public initCeils() {
        for (let i = 0; i < 8; i++) {
            const row: Ceil[] = []

            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !=0 ) {
                    row.push(new Ceil(this, j, i, Colors.BLACK, null))
                } else {
                    row.push(new Ceil(this, j, i, Colors.WHITE  , null))
                }

            }
            this.ceils.push(row)
        }
    }
}