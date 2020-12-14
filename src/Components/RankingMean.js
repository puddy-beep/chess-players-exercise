import React from 'react'

function calculaMedia(jogadores){
    let soma = 0;
    jogadores.map(jogador => soma += jogador.rank);
    let divisao = soma/jogadores.length;
    return divisao
}




export default function RankingMean(props){ //Here, we created a simple function component to 
                                            //...calculate the mean between players' rankings.
    const mean = calculaMedia(props.jogadores);
    
    return(<div>Ranking Mean: {mean.toFixed(2)}</div>) //.toFixed is a JS method that limits the number
                                                        //...of digits after the comma


}