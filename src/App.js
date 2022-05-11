import "./App.css";
import Player from "./components/Player";
import Header from "./components/Header";

const players = [
  {
    name: "Guil",
    score: 50,
    id: 1,
  },
  {
    name: "Treasure",
    score: 85,
    id: 2,
  },
  {
    name: "Ashley",
    score: 95,
    id: 3,
  },
  {
    name: "James",
    score: 80,
    id: 4,
  },
];

export default function App() {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />
      {players.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          key={player.id.toString()}
        />
      ))}
    </div>
  );
}
