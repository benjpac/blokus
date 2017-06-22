import { Piece } from './piece.model';
import { Cell } from './cell.model'

export const PIECES: Piece[] = [
  {
    board: null,
    player: null,
    centerX: 1,
    centerY: 1,
    active: false,
    cells: [new Cell(0,0)]  
  },
  {
    board: null,
    player: null,
    centerX: 3,
    centerY: 1,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1)] 
  },
  {
    board: null,
    player: null,
    centerX: 5,
    centerY: 2,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(0,-1)] 
  },
  {
    board: null,
    player: null,
    centerX: 7,
    centerY: 1,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(1,0)]
  },
  {
    board: null,
    player: null,
    centerX: 10,
    centerY: 2,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(1,0), new Cell(0,-1)]
  },
  {
    board: null,
    player: null,
    centerX: 13,
    centerY: 2,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(0,2), new Cell(0,-1)]
  },
  {
    board: null,
    player: null,
    centerX: 1,
    centerY: 4,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(0,2), new Cell(1,0)] 
  },
  {
    board: null,
    player: null,
    centerX: 4,
    centerY: 5,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(1,1), new Cell(1,0)]
  },
  {
    board: null,
    player: null,
    centerX: 7,
    centerY: 5,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(1,0), new Cell(1,-1), new Cell(0,-1)]
  },
  {
    board: null,
    player: null,
    centerX: 10,
    centerY: 6,
    active: false,
    cells: [new Cell(1,1), new Cell(0,1), new Cell(1,0), new Cell(1,-1), new Cell(0,-1)]
  },
  {
    board: null,
    player: null,
    centerX: 1,
    centerY: 9,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(0,2), new Cell(0,-1), new Cell(1,-1)]
  },
  {
    board: null,
    player: null,
    centerX: 12,
    centerY: 14,
    active: false,
    cells: [new Cell(0,0), new Cell(1,0), new Cell(0,1), new Cell(0,-1), new Cell(-1,0)]  
  },
  {
    board: null,
    player: null,
    centerX: 13,
    centerY: 8,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(0,2), new Cell(0,-1), new Cell(0,-2)]
  },
  {
    board: null,
    player: null,
    centerX: 4,
    centerY: 9,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(-1,1), new Cell(0,-1), new Cell(1,-1)]
  },
  {
    board: null,
    player: null,
    centerX: 2,
    centerY: 14,
    active: false,
    cells: [new Cell(-1,-1), new Cell(-1,0), new Cell(-1,1), new Cell(0,-1), new Cell(1,-1)] 
  },
  {
    board: null,
    player: null,
    centerX: 7,
    centerY: 9,
    active: false,
    cells: [new Cell(0,0), new Cell(-1,0), new Cell(-1,1), new Cell(0,-1), new Cell(1,-1)] 
  },
  {
    board: null,
    player: null,
    centerX: 9,
    centerY: 11,
    active: false,
    cells: [new Cell(0,0), new Cell(-1,0), new Cell(-1,1), new Cell(0,-1), new Cell(0,-2)]
  },
  {
    board: null,
    player: null,
    centerX: 11,
    centerY: 11,
    active: false,
    cells: [new Cell(0,0), new Cell(1,0), new Cell(0,1), new Cell(0,-1), new Cell(0,-2)] 
  },
  {
    board: null,
    player: null,
    centerX: 6,
    centerY: 14,
    active: false,
    cells: [new Cell(0,0), new Cell(1,0), new Cell(-1,1), new Cell(0,-1), new Cell(-1,0)]  
  },
  {
    board: null,
    player: null,
    centerX: 9,
    centerY: 14,
    active: false,
    cells: [new Cell(0,0), new Cell(0,1), new Cell(-1,1), new Cell(0,-1), new Cell(1,1)]
  },
]