import React from "react";
import {Route, Switch } from "react-router-dom";
import {Home} from "containers/Home";
import {BreedOverview} from "containers/BreedOverview";
import {AllBreads} from "containers/AllBreads";
import {RandomBreed} from "containers/RandomBreed";
import {Menu} from "./Menu";

export const Container = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/breed-overview" component={BreedOverview} />
            <Route path="/all-breads" component={AllBreads} />
            <Route path="/random-breed" component={RandomBreed} />
        </Switch>
    </div>
);
