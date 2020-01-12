export const timerReducer = (state = { startTime: 60, isOver: false }, action) => {
  switch (action.type) {
    case 'UPDATE_TIMER' :
      const updatedTimer = {...state};
      updatedTimer[action.propertyToChange] = action.updatedValue
      return updatedTimer;
    default:
      return state;
  }
}
