// import { all } from "redux-saga/effects";

// import productSagas from "./product";
// import uiSagas from "./ui";

// export default function* rootSaga() {
//     yield all([...productSagas, ...uiSagas]);
// }
import { all, select, takeLatest } from "redux-saga/effects";

function* saveState() {
    const state = yield select();
    yield localStorage.setItem("initState", JSON.stringify(state));
}

export default function* rootSaga() {
    yield all([takeLatest("*", saveState)]);
}
