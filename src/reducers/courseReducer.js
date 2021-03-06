 
// Recucers >> slice up management on the single store in Redux
export function createReducer(state = [], action) {
   switch(action.type) {
        case 'CREATE_COURSE':
            // wrong >> 
            // state.push(actions.course); return state;

            // correct: return brand new state as state is immutable
            return [...state, // new instance of state array
                Object.assign({}, action.course) // make deep copy of state
            ];
        default:
            return state;
   }
}

export default createReducer;