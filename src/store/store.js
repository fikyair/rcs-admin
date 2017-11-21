import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


function promiseMiddleware() {
  return (next) => (action) => {
    const { promise, types, ...rest } = action

    if (!promise) {
      return next(action)
    }

    const [REQUEST, SUCCESS, FAILURE] = types;

    next({...rest, type: REQUEST})

    return promise().then(
      (result) => {
        const { data, code} =  result;
        if(code  == '200'){
            next({...rest, data, type: SUCCESS})
        } else {
            next({...rest, result, type: FAILURE})
        }
      },
      (error) => {
        next({...rest, error, type: FAILURE})
      }
    )
  }
}

export default function() {
  const finalCreateStore = composeWithDevTools(applyMiddleware(promiseMiddleware))(createStore)
  return finalCreateStore(reducers)
}



