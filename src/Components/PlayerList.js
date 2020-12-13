import React from 'react';
import axios from 'axios';

class PlayerList extends React.Component{ //react class component, that requires the render method 
    //(if any were to be used) to be inside of it.
    //when it extends to React.Component, it **inherits** methods with pre-determined behaviours
     // from react lifecycle components, like render() and componentdidmount()

    state = {players: []}
        //react object inside the method, that will prepare the render to receive the json resource, after
        //it's mounted. Therefore, it needs to define an empty attribute that will receive it. 
        //After the resource is received, the state will be updated in the render.
        //in this case, the attribute will be an empty array called "player" in json sytax,
        //(that's why the :).
        

    componentDidMount(){ //will happen after render()
        axios.get('http://192.168.15.12:9000/api/players').then(response => { 
            const players = response.data;
            this.setState({players});
        });
        //axios will GET (http method such as post, put, etc) 
        //...this resource, a Json with an objects list.
        //after the get, we'll use a fat arrow syntax with .then() method
        //we'll call the response of this get "response". 
        //lets create a new variable "players" that will recieve only the data (body/payload),
        //which is the json player list, 
        //and not the entire package (with status code, headers, etc).
        // this. refers to this current file (Personlist.js), and setState updates the state that 
        //...already existed in the beginning, and contained an empty object - players. 
        //now that we have recieved our json player list and attributed it to players, 
        //we need to update our pre-existing state, and the render will be updated.   
           

    }
    render(){
        return(
            <div>
                <ol>
                { //these curly braces will allow us to mix both html and javascript inside 
            //an html tag (<div> in this case) -  (different from script tag, which would only allow a portion
            //of pure js code inside an html file. In this jSX (JS+HTML file, compiled by React)
            //we will use curly braces. JSX is not required by React, however this way we can
            //organize markup (html/css) and logic (js) in the same file (not in different files),
            //similar to how an UI would be organized. 
               this.state.players.map(player =>
                <li>{player.name}, Rank: {player.rank}, Birth date: {player.born_at}, Hometown: {player.hometown}.</li>
                
                ) //now we'll render the state from players that is recieving our new js list that
                //...we GET't. For that, we'll use the syntax this.state.players (which is the response's
                //data only, remember?) and use the method map(). This method sweeps through an object/array
                //attributes/elements and performs actions in each one of them (similar to a loop, but more
                //advanced and with a simpler syntax). We'll call each element "player", followed by a
                //fat arrow, and in this case, generate (render) a list of each players' infos. 
                //these iterations as list items will all be encapsulated by a <ol> (ordinal list), and
                //...since "player.attribute" (JS) is between the <li> tags (HTML), we need to use the curly braces.
                }
                </ol>
            
            </div>
        );
    }

}   

export default PlayerList;