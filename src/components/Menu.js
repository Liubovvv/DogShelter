import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/breed-overview">BreedOverview</Link>
        </li>
        <li>
            <Link to="/all-breads">AllBreads</Link>
        </li>
        <li>
            <Link to="/random-breed">RandomBreed</Link>
        </li>
    </ul>
);