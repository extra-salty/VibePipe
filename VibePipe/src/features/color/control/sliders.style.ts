import styled from "styled-components";

interface Props {
  hue?: number;
  saturation?: number;
  lightness?: number;
}

const properties = `
  -webkit-appearance: none;
  height: 10px;
  width: 300px;
  margin: 10px 0;
`;

const webkitSLiderThumbProps = `
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 15px;
  width: 15px;
  border-radius: 3px;
`;

export const HueSlider = styled.input.attrs<Props>(props => ({
  type: "range",
  max: 360,
  style: {
    background: `linear-gradient(
    to right,
    hsl(0 ${props.saturation}% ${props.lightness}%),
    hsl(60 ${props.saturation}% ${props.lightness}%),
    hsl(120 ${props.saturation}% ${props.lightness}%),
    hsl(180 ${props.saturation}% ${props.lightness}%),
    hsl(240 ${props.saturation}% ${props.lightness}%),
    hsl(300 ${props.saturation}% ${props.lightness}%),
    hsl(360 ${props.saturation}% ${props.lightness}%)
    )`,
  },
}))<Props>`
  ${properties};
  &::-webkit-slider-thumb {
    ${webkitSLiderThumbProps};
    background: ${props =>
      `hsl(${props.hue} ${props.saturation}% ${props.value}%)`};
  }
`;

export const SaturationSlider = styled.input.attrs<Props>(props => ({
  type: "range",
  max: 100,
  style: {
    background: `linear-gradient(
    to right,
    hsl(${props.hue} 0% ${props.lightness}%),
    hsl(${props.hue} 100% ${props.lightness}%)
    )`,
  },
}))<Props>`
  ${properties};
  &::-webkit-slider-thumb {
    ${webkitSLiderThumbProps};
    background: ${props =>
      `hsl(${props.hue} ${props.saturation}% ${props.value}%)`};
  }
`;

export const LightnessSlider = styled.input.attrs<Props>(props => ({
  type: "range",
  max: 100,
  style: {
    background: `linear-gradient(
    to right,
    hsl(${props.hue} ${props.saturation}% 0%),
    hsl(${props.hue} ${props.saturation}% 50%),
    hsl(${props.hue} ${props.saturation}% 100%)
    )`,
  },
}))<Props>`
  ${properties};
  &::-webkit-slider-thumb {
    ${webkitSLiderThumbProps};
    background: ${props =>
      `hsl(${props.hue} ${props.saturation}% ${props.value}%)`};
  }
`;
