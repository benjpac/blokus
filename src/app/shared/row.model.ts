import { Cell } from "./cell.model";

export class Row {
  constructor(
    public y: number,
    public cells: Cell[]
  ) {}
}