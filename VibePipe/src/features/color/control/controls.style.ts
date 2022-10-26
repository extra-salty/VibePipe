import styled from "styled-components";

// interface ledGridProps {
//   color: string;
// }

// const attrs = `
//   type: "number",
//   min: 0,
// `;

const props = `  
  background: transparent;
  color: white;
  border: none;
  width: 50px;
  height: 25px;
  /* color: white; */
`;

export const HueControl = styled.input.attrs({
  type: "number",
  min: 0,
  max: 360,
})`
  ${props}
`;

export const SaturationControl = styled.input.attrs({
  type: "number",
  min: 0,
  max: 100,
})`
  ${props}
`;

export const LightnessControl = styled.input.attrs({
  type: "number",
  min: 0,
  max: 100,
})`
  ${props}
`;

// export const BrightnessControl = styled.input.attrs({
//   type: "number",
//   min: 0,
//   max: 100,
// })`
//   ${props}
// `;
