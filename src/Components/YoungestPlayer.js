import React from 'react';



function youngest(jogadores){ 
    let playerYear = 0;
    let highestYear = 0;
    jogadores.map(jogador => { 
        playerYear = pegaAno(jogador.born_at) //this will map the players year
        if (highestYear < playerYear){
            highestYear = playerYear
        };
    }
    );
     return highestYear
}

function pegaAno(fullDate){
    let dateSplit = fullDate.split('-'); //would print an array such as ["09", "08", "1997"]
    let yearString = dateSplit[2]; //index = 2, only "1997"
    return parseInt(yearString); //method that converts string to integer
}


export default function YoungestPlayer(props){ // this is a react function component, with the only parameter
    //it can receive: "props" - properties. We will return our component here 

    return(
        <div>Youngest Player: {youngest(props.jogadores)}</div>
    )
}