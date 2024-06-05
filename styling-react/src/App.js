import './App.css';
import MyCssModule from './MyCssModule';
import SassComponent from './SassComponent';

function App() {
  return (
    <div>
      <SassComponent/>
      <MyCssModule inverted={true}/>
    </div>
  );
}

export default App;
