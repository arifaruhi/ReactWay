import React from 'react';

const buttonColor = {

    color1:{
        color: '#fff',
        backgroundColor: '#8e44ad',
        textTransform: 'uppercase',
    },

    color2:{
        color: '#fff',
        backgroundColor: '#00aeef'
    },

    noneBackground: {
        color:'black',
        border: 'none',
    },
    sliderButton: {
        color: 'black',
        backgroundColor: '#e5e9f2',
        border: 'none',
    }
     
}

const Button = (props) => {
    const getButtonColor = buttonColor[props.variant];

  return (
    <>
       <button style={{
          padding: '1.1rem 1.5rem',
          cursor: 'pointer',
          fontWeight: 'bold',
          borderRadius: '7px',
          border: '1px solid white',
          margin: "5px",
          ...getButtonColor
       }}>{props.text}</button>
    </>
  )
}

export default Button