import React from 'react'; // needed for creating a component which uses
// CardLink Component Codes

// functions
// use either function/arrowfunction for creating components


function CardLink({ title, description, link }) {

  // console.log(props);
  return (
    <div
      style={{
        border: "1px solid",
        backgroundColor: 'yellowgreen',
        height: 200, // '150px'
        width: '300px',
        borderRadius: '10px',
        padding: 16,
        margin: 16,
        minWidth: 300
      }}
    >
      <div
        style={{
          display: 'inline-block'
        }}>
        <i class="fa-solid fa-house fa-2x"></i>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <br />
      <a
        href={link}
      >
        View Link
      </a>
    </div>
  );
}

export default CardLink;