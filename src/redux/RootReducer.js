import { combineReducers } from "redux";
import userInfo from "./reducers/auth";

//Combining the reducer's into a rootReducer
const RootReducer = combineReducers({
    auth: userInfo,
});

export default RootReducer;