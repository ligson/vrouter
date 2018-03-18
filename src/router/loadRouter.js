import menus from "@/assets/menu.json";
import { adminAllRouterList } from "@/router/index";

function __loadData (mData, superPath) {
  let path = superPath ? (superPath + "/" + mData.path) : mData.path;
  if (mData.component) {
    for (let i = 0; i < adminAllRouterList.length; i++) {
      console.log(path);
      if (adminAllRouterList[i].path === path) {
        mData.component = adminAllRouterList[i].component;
        break;
      }
    }
    console.log(path);
    console.log(typeof mData.component);
    if ((typeof mData.component) === "string") {
      console.log(mData.component);
    }
    // mData.component = () => import(mData.component);
  }
  if (mData.children) {
    for (let i = 0; i < mData.children.length; i++) {
      __loadData(mData.children[i], path);
    }
  }
}

export function processMenuData () {
  __loadData(menus, null);
  return menus;
};
