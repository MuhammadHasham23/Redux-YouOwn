export default function(state={},action){
  switch(action.type){
    case 'ADD_VIDEO':
      return action.payload;
  }
  return state;
}
