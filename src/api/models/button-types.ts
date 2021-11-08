/**
 * Numbers
 */
enum Numbers {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE
}

/**
 * Actions
 */
enum Actions {
  CLEAR = 'clear',
  BRACKETS = 'brackets',
  PERCENTAGE = 'percentage',
  DIVIDE = 'divide',
  MULTIPLY = 'multiply',
  MINUS = 'minus',
  PLUS = 'plus',
  CHANGE_SIGN = 'change-sign',
  ADD_COMMA = 'add-comma',
  EQUAL = 'equal'
}

/**
 * Button Types
 */
type ButtonTypes = Numbers | Actions;

export { ButtonTypes, Actions, Numbers };