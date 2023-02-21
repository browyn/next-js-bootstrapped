import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (gdm) => gdm({ serializableCheck: false }).concat(api.middleware),
});
