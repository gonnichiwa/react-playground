import './App.css';
import MyCssModule from './MyCssModule';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';

function App() {
  return (
    <div>
      <SassComponent/>
      <MyCssModule inverted={true}/>
      <StyledComponent/>
    </div>
  );
}

export default App;
