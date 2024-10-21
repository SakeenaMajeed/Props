import React from "react";

interface Iprops {
  text: string;
  bgcolor: string;
  textcolor: string;
}
const Button = (props: Iprops) => {
  console.log(props);
  return (
    <>
      <button className={`${props.bgcolor} ${props.textcolor} px-4 py-2`}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
