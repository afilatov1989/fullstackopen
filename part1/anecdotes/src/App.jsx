import { useState } from "react";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  let maxKey = 0;
  let maxVal = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] > maxVal) {
      maxVal = points[i];
      maxKey = i;
    }
  }

  const vote = (anecdoteNum) => {
    const copy = [...points];
    copy[anecdoteNum] += 1;
    setPoints(copy);
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={() => vote(selected)}>vote</button>
      <button
        onClick={() =>
          setSelected(randomIntFromInterval(0, anecdotes.length - 1))
        }
      >
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[maxKey]}</div>
    </>
  );
};

export default App;
