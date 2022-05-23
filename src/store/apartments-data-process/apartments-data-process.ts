import { APIRoute, LoadingStatus, NameSpase } from '../../const';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Apartment as ApartmentType } from '../../types/apartments';

type InitialState = {
  apartments: ApartmentType[];
  apartmentsStatus: LoadingStatus;
};

const initialState: InitialState = {
  apartments: [],
  apartmentsStatus: LoadingStatus.Idle,
};

export const fetchApartmentsAction = createAsyncThunk<
  ApartmentType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchApartments', async (_arg, { extra: api }) => {
  const { data } = await api.get<ApartmentType[]>(APIRoute.apartments);
  return data;
});

export const apartmentsDataProgress = createSlice({
  name: NameSpase.ApartmentsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchApartmentsAction.pending, (state) => {
        state.apartmentsStatus = LoadingStatus.Loading;
      })
      .addCase(fetchApartmentsAction.fulfilled, (state, { payload }) => {
        state.apartments = payload;
        state.apartmentsStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchApartmentsAction.rejected, (state) => {
        state.apartmentsStatus = LoadingStatus.Failed;
      });
  },
});

const selectApartmentsState = (state: State) => state[NameSpase.ApartmentsData];

export const selectApartments = (state: State) => selectApartmentsState(state).apartments;
export const selectApartmentsStatus = (state: State) => selectApartmentsState(state).apartmentsStatus;
