import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Very Easy" targetTime={1}/>
        <TimerChallenge title="Easy" targetTime={2}/>
        <TimerChallenge title="Medium" targetTime={5}/>
        <TimerChallenge title="Hard" targetTime={7.5}/>
        <TimerChallenge title="Very Hard" targetTime={8.6}/>
        <TimerChallenge title="Pros only" targetTime={11.3}/>
        <TimerChallenge title="BOSS FIGHT" targetTime={32.2}/>
      </div>
    </>
  );
}

export default App;
