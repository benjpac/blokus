import { Piece } from './piece.model';
import { Cell } from './cell.model'

export const PIECES: Piece[] = [
  {
    board: null,
    player: null,
    centerX: 1,
    centerY: 1,
    active: false,
    cells: [new Cell(0,0, null)]  
  },
  {
    board: null,
    player: null,
    centerX: 3,
    centerY: 1,
    active: false,
    cells: [new Cell(0,0, null), new Cell(0,1, null)] 
  },
  {
    board: null,
    player: null,
    centerX: 5,
    centerY: 2,
    active: false,
    cells: [new Cell(0,0, null), new Cell(0,1, null), new Cell(0,-1, null)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(0,1, null), new Cell(1,0, null)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(0,1, null), new Cell(1,0, null), new Cell(0,-1, null)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(1,0, null), new Cell(0,2, null), new Cell(0,-1, null)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(0,1, null), new Cell(0,2, null), new Cell(1,0, null)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(0,1, null), new Cell(1,0, null), new Cell(1,-1, null), new Cell(0,-1, null)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(1,1, null), new Cell(0,1, null), new Cell(1,0, null), new Cell(1,-1, null), new Cell(0,-1, null)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(0,1, null), new Cell(0,2, null), new Cell(0,-1, null), new Cell(1,-1, null)]
  },
  // {
  //   board: null,
  //   player: null,
  //   centerX: null,
  //   centerY: null,
  //   active: false,
  //   cells: [new Cell(0,0, null), new Cell(0,1, null), new Cell(0,2, null), new Cell(0,-1, null), new Cell(1,-1, null)]
  // },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(0,1, null), new Cell(0,2, null), new Cell(0,-1, null), new Cell(0,-2, null)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(0,1, null), new Cell(-1,1, null), new Cell(0,-1, null), new Cell(1,-1, null)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(-1,-1, null), new Cell(-1,0, null), new Cell(-1,1, null), new Cell(0,-1, null), new Cell(1,-1, null)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(-1,0, null), new Cell(-1,1, null), new Cell(0,-1, null), new Cell(1,-1, null)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(-1,0, null), new Cell(-1,1, null), new Cell(0,-1, null), new Cell(0,-2, null)]
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(1,0, null), new Cell(0,1, null), new Cell(0,-1, null), new Cell(0,-2, null)] 
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(1,0, null), new Cell(-1,1, null), new Cell(0,-1, null), new Cell(-1,0, null)]  
  },
  {
    board: null,
    player: null,
    centerX: null,
    centerY: null,
    active: false,
    cells: [new Cell(0,0, null), new Cell(0,1, null), new Cell(-1,-1, null), new Cell(0,-1, null), new Cell(1,-1, null)]
  },
]