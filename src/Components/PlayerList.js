import React from 'react';
import axios from 'axios';



export default function PlayerList(props) {
    function deletePlayer(id){
        axios.delete('http://localhost:9000/api/players/' + id) //concatenation of the list and a player id
            .then(response =>{
                    let status = response.status; //status code: 202, 404, etc
                    if (status === 202){ //aka ACCEPTED
                        props.atualiza(id);
                    } 
                }
             );
        }

        return(
            <div>
                <ol>
                { //these curly braces will allow us to mix both html and javascript inside 
            //an html tag (<div> in this case) -  (different from script tag, which would only allow a portion
            //of pure js code inside an html file. In this jSX (JS+HTML file, compiled by React)
            //we will use curly braces. JSX is not required by React, however this way we can
            //organize markup (html/css) and logic (js) in the same file (not in different files),
            //similar to how an UI would be organized. 
               props.jogadores.map(player =>
                <li>n°: {player.id}, 
                Name: {player.name},
                Rank: {player.rank},
                Birth date: {player.born_at},
                Hometown: {player.hometown}.
                 <button onClick={() => deletePlayer(player.id)}> Delete player</button> </li> 
                 //in React, we have to call an anonymous arrow func for the onClick to work
                
                ) //now we'll render (over at app.js) the state from players that is recieving our new js list that
                //...we GET't. For that, we'll use the syntax props.jogadores (which is the response's
                //data only, remember?) and use the method map(). This method sweeps through an object/array
                //attributes/elements and performs actions in each one of them (similar to a loop, but more
                //advanced and with a simpler syntax). We'll call each element "player", followed by a
                //fat arrow, and in this case, generate (render) a list of each players' attributes. 
                //these iterations as list items will all be encapsulated by a <ol> (ordinal list), and
                //...since "player.attribute" (JS) is between the <li> tags (HTML), we need to use the curly braces.
                }
                </ol>
            
            </div>
        );
    

}   
