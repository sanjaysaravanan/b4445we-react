import React from 'react';

// *****Commonent should return jsx syntax*****
// Created Custom Tag/Component
// Only  frist argument can be props
// const Card = (props) => { // without destructure

//   console.log('Line 8', props);
//   // normal js code
//   // must return html tags
//   return (
//     <div className='cardContainer' >
//       <label htmlFor={props.cardName}>{props.cardName}:</label>
//       <input type='text' id={props.cardName} />
//     </div>
//   );
// }

const Card = ({ cardName, inpType = "text" }) => { // with destructure most preffered way

  // normal js code
  // must return html tags
  return (
    <div className='cardContainer' >
      <label htmlFor={cardName}>{cardName}:</label>
      <input type={inpType} id={cardName} />
    </div>
  );
}


export default Card;
