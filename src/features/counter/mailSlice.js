import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

export const mailSlice = createSlice({
  name: 'mail',
  initialState :{
      sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.closeSendMessage = false;
    },
  },
});

export const { openSendMessage, closeSendMessage} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.selectSendMessageIsOpen;

export default mailSlice.reducer;
