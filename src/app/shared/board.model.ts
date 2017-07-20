import { Row } from "./row.model";

export class Board {
  constructor(
    public rows: Row[],
    public activePieceKey: string,
    public sharedBoardKey: string,
  ) {}
}
