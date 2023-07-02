import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        lang: langReducer
    }
})

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
+
