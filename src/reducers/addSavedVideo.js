export default function(state=[],action){
  switch(action.type){
    case 'ADD_SAVED_VIDEO':
      return [...state,action.payload];
  }
  return state;
}
