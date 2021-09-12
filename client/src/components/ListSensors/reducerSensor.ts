import { Action, InitialStateType } from "../../interfacesAndTypes/interfacesAndTypes"

const GetReducer = (state: InitialStateType, action: Action) => {

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
                sensors: state.sensors.push(action.data),
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

export default GetReducer;