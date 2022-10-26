import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { HueIcon, SaturationIcon, LightnessIcon } from "./icons.style";
import { HueSlider, SaturationSlider, LightnessSlider } from "./sliders.style";
import {
  HueControl,
  SaturationControl,
  LightnessControl,
} from "./controls.style";
import { setHue, setSaturation, setLightness } from "../colorSlice";

export const ControlGrid = () => {
  const {hue, saturation, lightness} = useAppSelector(state => state.color);
  // const saturation = useAppSelector(state => state.color.saturation);
  // const lightness = useAppSelector(state => state.color.lightness);
  const dispatch = useAppDispatch();

  return (
    <>
      <HueIcon />
      <HueSlider
        value={hue}
        saturation={saturation}
        lightness={lightness}
        onChange={e => dispatch(setHue(e.target.value))}
      />
      <HueControl
        value={hue}
        onChange={e => dispatch(setHue(e.target.value))}
      />
      <SaturationIcon />
      <SaturationSlider
        hue={hue}
        value={saturation}
        lightness={lightness}
        onChange={e => dispatch(setSaturation(e.target.value))}
      />
      <SaturationControl
        value={saturation}
        onChange={e => dispatch(setSaturation(e.target.value))}
      />
      <LightnessIcon />
      <LightnessSlider
        hue={hue}
        saturation={saturation}
        value={lightness}
        onChange={e => dispatch(setLightness(e.target.value))}
      />
      <LightnessControl
        value={lightness}
        onChange={e => dispatch(setLightness(e.target.value))}
      />
    </>
  );
};
