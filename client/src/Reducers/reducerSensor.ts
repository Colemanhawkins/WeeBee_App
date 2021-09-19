import { InitialStateType } from "../interfaces/interfaces"
import { Action } from "../types/types";

const Reducer = (state: InitialStateType, action: Action): InitialStateType => {
    switch (action.type) {
        case 'REQUEST_GET': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'SUCCESS_GET': {
            return {
                ...state,
                loading: false,
                sensors: action.payload
            };
        }
        case 'ERROR_GET': {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }
    }
};

export default Reducer;