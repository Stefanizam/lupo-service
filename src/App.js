import './styles/Main.css';
import NavBar from './components/NavBar';
import ServiceHistory from './components/ServiceHistory';

function App() {
  return (
    <div className="App container-fluid p-0 m-0">
      <NavBar />
      <ServiceHistory />
    </div>
  );
}

export default App;
