import React from "react";
import { Link } from "react-router-dom";

import { Ul, Li, Nav } from "./Menu.style";

export const Menu = () => {
    return (
        <Nav>
            <Ul>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/breed-overview">BreedOverview</Link>
                </Li>
                <Li>
                    <Link to="/all-breads">AllBreads</Link>
                </Li>
                <Li>
                    <Link to="/random-breed">RandomBreed</Link>
                </Li>
            </Ul>
        </Nav>
    );
};