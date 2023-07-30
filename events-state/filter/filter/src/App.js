import ProjectList from './components/ProjectList';
import ButtonFilter from './components/button_group/Sandbox'
import './App.css';

function App() {
  return (<div>
    <div>
      <ButtonFilter/>
    </div>
    <div>
        <ProjectList/>
    </div>
    </div>
  );
}

export default App;
