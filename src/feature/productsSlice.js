import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsFilters",
  initialState: { search: "", category: "", limit: 12, offset: 0 },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setFilters: (state, action) => {
      state.search = action.payload.search || "";
      state.category = action.payload.category || "";
    },
    setLimit: (state) => {
      state.limit = state.limit + 12;
    },
    setOffset: (state) => {
      state.offset = state.offset + 10;
    },
  },
});

export default productsSlice.reducer;
export const { setSearch, setCategory, setFilters, setLimit, setOffset } =
  productsSlice.actions;
