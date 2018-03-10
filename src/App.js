import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Ingredients from './containers/ingredients.container';
import Meals from './containers/meals.container';
import Meal from './containers/meal.container';
import MealForm from './containers/meal-form.container';
import Search from './containers/search.container';
import Navbar from './components/navbar.component';
import './styles/main.scss';

const App = () => (
  <div className="ui container">
    <Router>
      <div>
        <Navbar />
        <div className="page-container">
          <Switch>
            <Route path="/meals/form" component={MealForm} />
            <Route path="/meals/:id" component={Meal} />
            <Route path="/meals" component={Meals} />
            <Route path="/ingredients" component={Ingredients} />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default App;
