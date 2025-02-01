import './styles/Main.css';
import NavBar from './components/NavBar';
import ServiceHistory from './components/ServiceHistory';

function App() {
  return (
    <div className="App py-5 px-0 m-0">
      <NavBar />
      <ServiceHistory />
    </div>
  );
}

export default App;
