export const currentTimeReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TIME' :
      return action.time;
    default:
      return state;
  }
}
