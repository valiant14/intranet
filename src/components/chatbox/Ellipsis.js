import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
from {
  transform: translate(0, 5px) scale(1.2, 0.85);
}
to {
  transform: translate(0, 0px) scale(0.9, 1.1);
}
`;

const Dot = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50%;
  display: inline-block;
  margin: ${({ size }) => size / 2}px;
  background-color: ${({ color }) => color};
  animation: ${bounce} 300ms ${({ offset }) => offset * 100}ms alternate
    infinite cubic-bezier(0.1, 0.01, 0.15, 0.95);
`;

const Ellipsis = ({ color, size }) => (
  <span>
    <Dot color={color} offset={0} size={size} />
    <Dot color={color} offset={1} size={size} />
    <Dot color={color} offset={2} size={size} />
  </span>
);

export default Ellipsis;
export { Dot };
