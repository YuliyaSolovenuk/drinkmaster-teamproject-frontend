import React, { useEffect } from 'react';
import AddDrink from '../../components/AddDrink/AddDrink';
import PreviewDrinks from '../../components/PreviewDrinks/PreviewDrinks';
import { HomePageContainer } from './HomePage.styled';
import { useDispatch } from 'react-redux';
import { useDrink } from 'hooks/useDrink';
import { getMainPageAllDrinks } from 'redux/drinks/drinksOperations';

export default function HomePage() {
  const dispatch = useDispatch();

  const { error } = useDrink();

  useEffect(() => {
    dispatch(getMainPageAllDrinks());
  }, [dispatch]);
  return (
    <>
      <HomePageContainer>
        <AddDrink />
        {error && <p>{error}</p>}
        <PreviewDrinks />
      </HomePageContainer>
    </>
  );
}
