import { NameSpase, QUANTITY_CARDS, STEP_SHOW_CARD } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { State } from '../../types/state';

type InitialState = {
  quantityShownCards: number;
};

const initialState: InitialState = {
  quantityShownCards: QUANTITY_CARDS,
};

export const appProcess = createSlice({
  name: NameSpase.App,
  initialState,
  reducers: {
    increaseLimit: (state) => {
      state.quantityShownCards += STEP_SHOW_CARD;
    },
  },
});

const selectAppState = (state: State) => state[NameSpase.App];

export const selectStateQuantityShownCard = (state: State) => selectAppState(state).quantityShownCards;

export const { increaseLimit } = appProcess.actions;
