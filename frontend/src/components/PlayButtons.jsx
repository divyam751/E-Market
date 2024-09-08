import React from "react";
import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";

const PlayButtons = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=host.exp.exponent";
  const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  return (
    <>
      <GooglePlayButton
        url={APKUrl}
        theme={"dark"}
        className={"custom-style"}
        width={"100%"}
        height={"70px"}
      />
      <AppStoreButton
        url={iOSUrl}
        theme={"dark"}
        className={"custom-style"}
        width={"100%"}
        height={"70px"}
      />
    </>
  );
};

export default PlayButtons;
