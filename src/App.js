import './App.css';

import Card from './Card';


function App() {
  return (
    <div className="App">
      <div className='cardContainer' >
        <label htmlFor={'FName'}>FName:</label>
        <input type={"FName"} id={"FName"} />
      </div>
      <div className='cardContainer' >
        <label htmlFor={'Age'}>Age:</label>
        <input type={"Age"} id={"Age"} />
      </div>
      <div className='cardContainer' >
        <label htmlFor={'DOB'}>DOB:</label>
        <input type={"DOB"} id={"DOB"} />
      </div>
      {/* <Card cardName="FName" />
      <Card cardName="Age" inpType='number' />
      <Card cardName="DOB" inpType='date' /> */}
      {/* above cardName, inpType  are props are for the custom component*/}
    </div>
  );
}

export default App;
