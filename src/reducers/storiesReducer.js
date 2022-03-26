import { types } from "../types/types";



const initialState = {
    active: null,
    activeComments:[],
    stories:[]
};

export const storiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.storiesTopTen:
            return{
                ...state,
                stories: action.payload
            };

        case types.storiesSetActive:
            return{
                ...state,
                active: action.payload
            }
            case types.storiesClearActive:
                return{
                    ...state,
                    active: null
                }
                
            case types.storiesSetActiveComments:
                return{
                    ...state,
                    active: {
                        ...state.active,
                        kids: action.payload
                    }
                }
            case types.storiesClearActiveComments:
                return{
                    ...state,
                    activeComments: []
                }
        default:
            return state;
    }
};