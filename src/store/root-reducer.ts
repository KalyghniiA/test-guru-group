import { combineReducers } from '@reduxjs/toolkit';
import { NameSpase } from '../const';
import { apartmentsDataProgress } from './apartments-data-process/apartments-data-process';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpase.ApartmentsData]: apartmentsDataProgress.reducer,
  [NameSpase.App]: appProcess.reducer,
});
