const {kCombination} = require('./k-combination')

const BOARD_SIZE = 7
const NUM_INTERSECTIONS = BOARD_SIZE ** 2 - 4  // 4 is the number of corners
const NUM_PLAYERS = 2
const NUM_PLAYER_PIECES = 17

const ASCII_MARKERS = ['X', 'O']

const args = process.argv.slice(2)

if (args.length != NUM_PLAYERS) {
  console.error('Usage: <red k-combination number> <blue k-combination number>')
  process.exit(1)
}

const board = []  // order: A2, [...], A6, B1, [...], B7, C1, etc.
for (let player = 0; player < NUM_PLAYERS; player++) {
  let positions = new Set(
    kCombination(NUM_PLAYER_PIECES, parseInt(args[player]))
  )
  let offset = 0
  for (let index = 0; index < NUM_INTERSECTIONS; index++) {
    if (index in board)
      offset += 1
    else if (positions.has(index - offset))
      board[index] = player
  }
}

for (let y = 0; y < BOARD_SIZE; y++) {
  let row = []

  for (let x = 0; x < BOARD_SIZE; x++) {
    let offset  // to take the corners into account
    if (x == 0) {
      offset = 1
    } else if (x == BOARD_SIZE - 1) {
      offset = 3
    } else {
      offset = 2
    }

    if ((x == 0 || x == BOARD_SIZE - 1) && (y == 0 || y == BOARD_SIZE - 1)) {
      row.push(' ')  // corner
    } else {
      let index = x * BOARD_SIZE + (BOARD_SIZE - 1 - y) - offset
      row.push(index in board ? ASCII_MARKERS[board[index]] : '.')
    }
  }
  console.log(row.join(' '))
}
