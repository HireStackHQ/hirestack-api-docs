import { API } from '@stoplight/elements';
import openapi from './openapi.yaml'

import '@stoplight/elements/styles.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <API apiDescriptionUrl={openapi} />
    </div>
  );
}

export default App;
