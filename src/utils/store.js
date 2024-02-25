import {configureStore} from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarslice";
import livechatReducer from "./livechatSlice";
import videosByKeywordReducer from "./videosByKeywordSlice"
import searchQueryReducer from "./searchQuerySlice"
const appStore=configureStore({
    reducer:{
        sidebar:sidebarReducer,
        livechat:livechatReducer,
        videosByKeyword:videosByKeywordReducer,
        searchQuery:searchQueryReducer,
    }
});
export default appStore