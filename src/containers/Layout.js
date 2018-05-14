import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, BreedOverview, AllBreeds, RandomBreed } from 'containers/index';
import { Menu } from '../components/Menu/Menu';

export class Layout extends React.Component{
    render()
    {
        return (
            <div>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/breed-overview" component={BreedOverview}/>
                    <Route path="/all-breads" component={AllBreeds}/>
                    <Route path="/random-breed" component={RandomBreed}/>
                </Switch>
            </div>
        );
    }
}
