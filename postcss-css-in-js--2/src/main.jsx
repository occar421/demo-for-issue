import styled from "styled-components";
import { render } from "react-dom";
import React from "react";

const MyButton = styled.button`
  padding: 100px;
  font-size: 48px;
  color: yellow;
  background-color: darkslategray; 
`;

const Base = styled.div({
  [MyButton]: {
    color: 'white',
  },
  // MyButton: { // won't work
  //   color: 'white',
  // },
});

render(
  <div>
    <Base>
      <MyButton>Foo</MyButton>
    </Base>
    <MyButton>Bar</MyButton>
  </div>,
  document.getElementById("main")
);
