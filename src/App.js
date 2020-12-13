
import './App.css';
import PlayerList from './Components/PlayerList';

function Encapsulamento(props) { // this is a react function component, with the only parameter
  //it can receive: "props"
  return (
    <div> 
     <PlayerList />
    </div>
  ); // everything you return in a component must be encapsulated inside a tag (this case, an empty div)
}

export default Encapsulamento;
