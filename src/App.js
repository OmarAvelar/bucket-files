import logo from './logo.svg';
import './App.css';
import S3FileManager from './S3FileManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <S3FileManager />
        </div>
      </header>
    </div>
  );
}

export default App;
