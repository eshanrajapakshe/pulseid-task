import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOffer } from '../../../types/offers';

interface OfferState {
  offers: IOffer[];
}

const initialState: OfferState = {
  offers: [],
};

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<IOffer[]>) => {
      state.offers = action.payload;
    },
  },
});

export const { setOffers } = offerSlice.actions;
export default offerSlice.reducer;
