import { Piece } from './piece.model';
import { Cell } from './cell.model'

export const PIECES: Piece[] = [
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0)]  
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(0,-1)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(1,0)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(1,0), new Cell(0,-1)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(1,0), new Cell(0,2), new Cell(0,-1)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(0,2), new Cell(1,0)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(1,0), new Cell(1,-1), new Cell(0,-1)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(1,1), new Cell(0,1), new Cell(1,0), new Cell(1,-1), new Cell(0,-1)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(0,2), new Cell(0,-1), new Cell(1,-1)]
  },
  // {
  //   board: null,
  //   player: null,
  //   centerX: null,
  //   centerY: null,
  //   active: false,
  //   cells: [new Cell(0,0), new Cell(0,1), new Cell(0,2), new Cell(0,-1), new Cell(1,-1)]
  // },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(0,2), new Cell(0,-1), new Cell(0,-2)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(-1,1), new Cell(0,-1), new Cell(1,-1)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(-1,-1), new Cell(-1,0), new Cell(-1,1), new Cell(0,-1), new Cell(1,-1)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(-1,0), new Cell(-1,1), new Cell(0,-1), new Cell(1,-1)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(-1,0), new Cell(-1,1), new Cell(0,-1), new Cell(0,-2)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(1,0), new Cell(0,1), new Cell(0,-1), new Cell(0,-2)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(1,0), new Cell(-1,1), new Cell(0,-1), new Cell(-1,0)]  
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(-1,-1), new Cell(0,-1), new Cell(1,-1)]
  },
]