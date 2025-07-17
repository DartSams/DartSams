import React from "react";


export const Pokemon = () => {

    const pokeIds = [1, 4, 7, 25, 150];
    
    return (
        <div>
            {pokeIds.map((id) => (
                <img
                  key={id}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={`Pokemon ${id}`}
                />
              ))}
        </div>
    )
}