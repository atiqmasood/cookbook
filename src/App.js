import React, {useState} from 'react';
import {Container, Grid} from '@material-ui/core';
import styled from 'styled-components';
import recipes from './assests/recipes';
import Header from './components/Header';
import AppList from './components/AppList';
import RecipeDetail from './components/RecipeDetail';

const GridStyle = styled(Grid)`
    padding: 1rem;
`;
const ContainerStyle = styled(Container)`
    margin-top: 4rem;
`;

function App() {
  const [selectedItem, setState] = useState('');

  // handle selected item 
  function showDetails(selectedItem){
    setState(selectedItem)
  }

  return (
    <div>
      <Header/>
      <ContainerStyle>
        <GridStyle container spacing={2}>
            <Grid item xs={12} md={7}>
              <AppList showDetails={showDetails} recipeList={recipes} />
            </Grid>
            <Grid item xs={12} md={5}>
              <RecipeDetail itemDetail={selectedItem} />
            </Grid>
        </GridStyle>
      </ContainerStyle>
    </div>
  );
}

export default App;
