import './App.css';
import UseEffectComponent from './UseEffectComponent';
import UseLayoutEffectComponent from './UseLayoutEffectComponent';
import UseStateComponent from './UseStateComponent';
import UseReducerComponent from './UseReducerComponent';
import UseRefComponent from './UseRefComponent';
import UseMemoComponent from './UseMemoComponent';
import ReactMemoComponent from './ReactMemoComponent';
import CustomHookComponent from './CustomHookComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home work 5</h1>
      </header>
      <main className="App-main">
        <section className="main-section">
          <UseEffectComponent/>
        </section>
        <section className="main-section">
          <UseLayoutEffectComponent/>
        </section> 
        <section className="main-section">
          <UseStateComponent/>
        </section>
        <section className="main-section">
          <UseReducerComponent/>
        </section>
        <section className="main-section">
          <UseRefComponent/>
        </section>
        <section className="main-section">
          <UseMemoComponent/>
        </section>
        <section className="main-section">
          <ReactMemoComponent/>
        </section>
        <section className="main-section">
          <CustomHookComponent/>
        </section>
      </main>
      <footer className="App-footer">
        <p>{'\u00a9'} Triela</p>
      </footer>
    </div>
  );
}

export default App;
