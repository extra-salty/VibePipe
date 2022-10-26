import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useEffect } from "react";
import { OnboardLED } from "./onboardLedButton.style";
import { setOnboardLed } from "../deviceSlice";

export const StatusGrid = () => {
  const onboardLedState = useAppSelector(state => state.device.onboardLed);
  const dispatch = useAppDispatch();

  const handleStateChange = (onboardLedState: boolean) => {
    console.log(onboardLedState);
    fetch("/led", { method: "PUT", body: onboardLedState ? "0" : "1" })
      .then(response => response.text())
      .then(state => () => dispatch(setOnboardLed(state)));
  };

  useEffect(() => {
    console.log(onboardLedState);

    fetch("/led")
      .then(response => response.text())
      .then(state => () => dispatch(setOnboardLed(state)));
  });

  return (
    <>
      <OnboardLED onClick={() => handleStateChange(onboardLedState)} />
    </>
  );
};
