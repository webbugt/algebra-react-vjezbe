import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

import createSagaMiddleware from '@redux-saga/core'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: [sagaMiddleware]
})