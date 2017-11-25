
import { setItem, getItem} from '../utils/storage'
export const roles = ['admin','user']
export const permission = (role) => {


}


export function getCurrentLoginUser() {
  const currentLoginUser = window.localStorage.getItem('currentLoginUser');
  return currentLoginUser ? JSON.parse(currentLoginUser) : null;
}


export function setCurrentLoginUser(user) {
  window.localStorage.setItem('currentLoginUser', JSON.stringify(user));
}

export function setUserType(userType) {
  setItem('user-type', userType);
}

export function getUserType() {
  return getItem('user-type');
}

export function getPermission() {
  return getItem('allPermissions');
}

export function setPermission(menuTreeData) {
  const allPermissions = menuTreeData.map(m => m.code);
  setItem('allPermissions', allPermissions);
}

export function hasPermission(permission) {
  return getPermission().indexOf(permission) > -1;
}
