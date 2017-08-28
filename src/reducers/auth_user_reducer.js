export default function(state=false,action){
  switch(action.type){
    case 'AUTH_USER':
      return action.payload;
  }
  return state;
}
