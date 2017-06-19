import { Cell } from "./cell.model"

export class Piece {
  constructor(
    public board: number,
    public player: number,
    public centerX: number,
    public centerY: number,
    public active: boolean,
    public cells: Cell[],
  ) {}
}
