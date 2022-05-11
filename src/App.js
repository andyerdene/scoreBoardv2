import "./App.css";
import Player from "./components/Player";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />
      {/* {players.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          key={player.id.toString()}
        />
      ))} */}
    </div>
  );
}
