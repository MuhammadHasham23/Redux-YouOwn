import { combineReducers } from 'redux';
import videoAdd from './add_video_reducer';
import authUser from './auth_user_reducer';
import addSavedVideo from './addSavedVideo.js';
const rootReducer = combineReducers({
  videoAdd : videoAdd,
  userAdd : authUser,
  addSavedVideo:addSavedVideo
});

export default rootReducer;
