import { createSlice } from "@reduxjs/toolkit";

const initialState: { files: FileTab[]} = {
  files: [
    {
      id: 1,
      name: "main",
      type: "executable",
      content: "this is main",
      isSaved: true,
      isOpen: true,
    },
    {
      id: 2,
      name: "function",
      type: "function",
      content: "this is a function",
      isSaved: false,
      isOpen: false,
    },
    {
      id: 3,
      name: "test",
      type: "function",
      content: "this is test function",
      isSaved: false,
      isOpen: false,
    },
  ],
};

const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {
    addFile(state, action) {
      state.files.concat([action.payload]);
    },
    closeFile(state, action) {
      const file = state.files.filter((file) => file.id === action.payload)[0];
      if (file.isSaved) {
        state.files.filter((file) => file.id !== action.payload);
      }
    },
    openTab(state, action){
      state.files = state.files.map((file) => file.id == action.payload ? { ...file, isOpen: true}: file);
    },
    closeTab(state, action) {
      state.files = state.files.map((file) => file.id == action.payload ? { ...file, isOpen: false}: file);
    }
  },
});

export const { addFile, closeFile } = directorySlice.actions;
export default directorySlice.reducer;
