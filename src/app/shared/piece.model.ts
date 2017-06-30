import { Cell } from "./cell.model"

export class Piece {
  constructor(
    public board: number,
    public player: string,
    public centerX: number,
    public centerY: number,
    public active: boolean,
    public cells: Cell[],
  ) {}
}
