import {Reducer} from "redux";
import {GlobalEventState} from "./types";
import {CHANGE_GLOBAL_EVENT} from "./actions";

const initialState: GlobalEventState = {
    globalEventValue: "initial global event"
};

export const rootReducer: Reducer<GlobalEventState> = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_GLOBAL_EVENT:{
            return {...state, globalEventValue: action.payload}
        }
        default: {
            return state;
        }
    }
};
