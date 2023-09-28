import React from "react";
import { Link } from "react-router-dom";

function ColorList({colors}) {
    const colorLinks = colors.map(color => (
        <Link key={color.name} to={`colors/${color.name}`}>
            <span className="color-name">{color.name}</span>
        </Link>
    ))
    return (
        <div id="colors">
            {colorLinks}
        </div>
    )
}

export default ColorList;