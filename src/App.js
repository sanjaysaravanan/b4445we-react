import './App.css';

import Card from './Card';


function App() {
  return (
    <div className="App">
      <Card cardName="FName" />
      <Card cardName="Age" inpType='number' />
      <Card cardName="DOB" inpType='date' />
      {/* above cardName, inpType  are props are for the custom component*/}
    </div>
  );
}

export default App;
