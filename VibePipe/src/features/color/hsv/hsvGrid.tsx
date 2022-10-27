import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { HueIcon, SaturationIcon, LightnessIcon } from "./icons.style";
import { HueSlider, SaturationSlider, LightnessSlider } from "./sliders.style";
import { Control, HueControl } from "./control.style";
import { setHue, setSaturation, setLightness } from "../colorSlice";

export const ControlGrid = () => {
  const { hue, saturation, lightness } = useAppSelector(state => state.color);
  // const saturation = useAppSelector(state => state.color.saturation);
  // const lightness = useAppSelector(state => state.color.lightness);
  const dispatch = useAppDispatch();

  return (
    <>
      <HueIcon />
      <HueSlider
        value={hue}
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        onChange={e => dispatch(setHue(e.target.value))}
      />
      <Control value={hue} onChange={e => dispatch(setHue(e.target.value))} />
      <SaturationIcon />
      <SaturationSlider
        value={saturation}
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        onChange={e => dispatch(setSaturation(e.target.value))}
      />
      <Control
        value={saturation}
        onChange={e => dispatch(setSaturation(e.target.value))}
      />
      <LightnessIcon />
      <LightnessSlider
        value={lightness}
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        onChange={e => dispatch(setLightness(e.target.value))}
      />
      <Control
        value={lightness}
        onChange={e => dispatch(setLightness(e.target.value))}
      />
    </>
  );
};
