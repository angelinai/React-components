import { createStore, applyMiddleware } from 'redux'; 
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

console.log(typeof(rootReducer));

export default function configureStore(initialState){
    return createStore(
            rootReducer, 
            initialState
          //  ,applyMiddleware(reduxImmutableStateInvariant)
        );
}

