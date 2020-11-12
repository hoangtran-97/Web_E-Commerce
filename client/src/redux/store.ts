import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import { AppState, User, ToastMessage } from "../typings";
import createRootReducer from "./reducers";
import rootSaga from "./sagas";

const initState: AppState = {
    product: {
        inCart: [],
        list: [],
    },
    ui: {
        toast: {} as ToastMessage,
    },
    user: {
        list: [],
        currentUser: {} as User,
        token: "",
    },
};

export default function makeStore(initialState = initState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, thunk];
    let composeEnhancers = compose;
    // localStorage.clear();
    const localState = localStorage.getItem("initState");
    localState && (initialState = JSON.parse(localState));
    if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            composeEnhancers = (window as any)
                .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }

    const store = createStore(
        createRootReducer(),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((module as any).hot) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (module as any).hot.accept("./reducers", () => {
            const nextReducer = require("./reducers").default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
