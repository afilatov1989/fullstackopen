import { useState } from "react";

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

function Feedback({ stats, setStats }) {
  const createHandler = (type) => () => setStats[type](stats[type] + 1);

  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" onClick={createHandler("good")} />
      <Button text="neutral" onClick={createHandler("neutral")} />
      <Button text="bad" onClick={createHandler("bad")} />
    </div>
  );
}

function Statistics({ stats }) {
  if (stats.good <= 0 && stats.neutral <= 0 && stats.bad <= 0) {
    return <p>No feedback given</p>;
  }

  const all = stats.good + stats.neutral + stats.bad;
  const average = (stats.good - stats.bad) / all;
  const positive = (stats.good / all) * 100;

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={stats.good} />
          <StatisticLine text="neutral" value={stats.neutral} />
          <StatisticLine text="bad" value={stats.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + " %"} />
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = { good, neutral, bad };
  const setStats = { good: setGood, neutral: setNeutral, bad: setBad };

  return (
    <>
      <Feedback stats={stats} setStats={setStats} />
      <Statistics stats={stats} />
    </>
  );
}

export default App;
