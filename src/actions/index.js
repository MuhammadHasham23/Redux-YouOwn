import {ADD_VIDEO} from './types/types'
import {AUTH_USER} from './types/types'
import {ADD_SAVED_VIDEO} from './types/types'
export function addVideos(videos){
  return{
    type:ADD_VIDEO,
    payload:videos
  }
}
export function authUser(user){
  return{
    type:AUTH_USER,
    payload:user
  }
}
export function addSavedVideo(url){
  return{
    type:'ADD_SAVED_VIDEO',
    payload:url
  }
}
