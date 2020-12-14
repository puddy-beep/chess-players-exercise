
import './App.css';
import PlayerList from './Components/PlayerList';
import RankingMean from './Components/RankingMean';
import YoungestPlayer from './Components/YoungestPlayer';
import React from 'react';
import axios from 'axios';

class Encapsulamento extends React.Component { //react class component, that requires the render method 
  //(if any were to be used) to be inside of it.
  //when it extends to React.Component, it **inherits** methods with pre-determined behaviours
   // from react lifecycle components, like render() and componentdidmount()
   //this class in particular will encapsulate all of our UI components

   constructor(props){ // the constructor will be implicitly added in any react app, but if we need 
     super(props); //to change something about it, we need to declare it in our code. this here is
     //the standard constructor syntax.
     this.atualizaLista = this.atualizaLista.bind(this); //the .bind() method here guarantees that 
     //atualizaLista's (from PlayersList) effect will take place here, in his father, Encapsulamento.
   }
  
   state = {players: []}
        //react object inside the method, that will prepare the render to receive the json resource, after
        //it's mounted. Therefore, it needs to define an empty attribute that will receive it. 
        //After the resource is received, the state will be updated in the render.
        //in this case, the attribute will be an empty array called "players" in json sytax,
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
  atualizaLista(playerId){
    let listaJog = this.state.players.filter (player => { //the filter method will filter out 
      //specific items that meet a criteria that we define.
      if (player.id == playerId){ //in this case, if player.id is the same as the id passed as a parameter
        //(when we callback this funcion over at the deleting funcion PlayerList.js), the id will
        //be filtered (...)
        return false;
      } else {
        return true;
      } 
    }
    )
    this.setState({players:listaJog}); //(...) and the state with the playerlist will 
    //now be updated to the same value as the variable listaJog (which now has the previous state, but filtered)
  }
  
   render(){
  return (
    <div> 
     <PlayerList jogadores={this.state.players}/> 
     <RankingMean jogadores={this.state.players}/>
     <YoungestPlayer jogadores={this.state.players} atualiza={this.atualizaLista}/>
    </div>  // everything you return in a component must be encapsulated inside a tag (this case, an empty div)
    
    //the updated state (now containing the body (data) of our package) from here (app.js)
    // will now be recieved by "jogadores", which will be used as a property on the 
    //function components over at PlayerList.js, RankingMean.js
  );
  }

  
}

export default Encapsulamento;
