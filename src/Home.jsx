import React from 'react';


const Home = () => {

  // Executes only Once during a refresh of the screen
  let showHeader = false;


  const handleClick = () => { // fixed
    alert('Clicking Show Header');
    showHeader = true;
  };

  return (
    <div>
      {console.log(showHeader)}
      {showHeader && <h1 style={{ backgroundColor: 'aqua' }} >Header</h1>}
      <button
        onClick={handleClick}
      >Show Header</button>
    </div>
  );
};


export default Home;