import { createSlice } from '@reduxjs/toolkit';
import {
  getMainPageAllDrinks,
  getDrinkById,
  getPopularDrinks,
  getRequestedDrink,
  addMyDrink,
  removeDrink,
  removeOwnDrink,
  getOwnDrinks,
  addDrinkToFavorite,
  getFavoriteAll,
} from './drinksOperations';
import { handlePending, handleRejected } from '../../hooks/handlers';
const initialState = {
  searchQuery: '',
  mainPageDrinks: [],
  drinks: [],
  drinkById: [],
  favoriteDrinks: [],
  popularDrinks: [],
  isLoading: false,
  error: null,
  total: 0,
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(getMainPageAllDrinks.pending, handlePending)
      .addCase(getMainPageAllDrinks.fulfilled, (state, action) => {
        state.mainPageDrinks = action.payload.mainPageDrinks;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMainPageAllDrinks.rejected, handleRejected)

      .addCase(getDrinkById.pending, handlePending)
      .addCase(getDrinkById.fulfilled, (state, action) => {
        state.drinkById = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getDrinkById.rejected, handleRejected)

      .addCase(getPopularDrinks.pending, handlePending)
      .addCase(getPopularDrinks.fulfilled, (state, action) => {
        state.popularDrinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getPopularDrinks.rejected, handleRejected)

      .addCase(getRequestedDrink.pending, handlePending)
      .addCase(getRequestedDrink.fulfilled, (state, action) => {
        state.drinks = action.payload.data;
        state.total = action.payload.quantityTotal;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRequestedDrink.rejected, handleRejected)

      .addCase(addMyDrink.pending, handlePending)
      .addCase(addMyDrink.fulfilled, (state, action) => {
        state.drinks.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addMyDrink.rejected, handleRejected)

      .addCase(removeDrink.pending, handlePending)
      .addCase(removeDrink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.favoriteDrinks.findIndex(
          drink => drink._id === action.payload.result._id
        );
        state.favoriteDrinks.splice(index, 1);
      })
      .addCase(removeDrink.rejected, handleRejected)

      .addCase(removeOwnDrink.pending, handlePending)
      .addCase(removeOwnDrink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.drinks.findIndex(
          drink => drink._id === action.payload.result._id
        );
        state.drinks.splice(index, 1);
      })

      .addCase(getOwnDrinks.pending, handlePending)
      .addCase(getOwnDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload.drinks;
        state.total = action.payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOwnDrinks.rejected, handleRejected)

      .addCase(addDrinkToFavorite.pending, handlePending)
      .addCase(addDrinkToFavorite.fulfilled, (state, action) => {
        state.favoriteDrinks.push(action.payload.result);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDrinkToFavorite.rejected, handleRejected)

      .addCase(getFavoriteAll.pending, handlePending)
      .addCase(getFavoriteAll.fulfilled, (state, action) => {
        state.favoriteDrinks = action.payload.drinks;
        state.total = action.payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavoriteAll.rejected, handleRejected),
});

export const drinksReducer = drinksSlice.reducer;
