export const timerReducer = (state = { startTime: null, isOver: false }, action) => {
  switch (action.type) {
    case 'UPDATE_TIMER' :
      const updatedTimer = {...state};
      updatedTimer[action.propertyToChange] = action.updatedValue
      return updatedTimer;
    default:
      return state;
  }
}
