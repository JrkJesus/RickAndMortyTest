import React from "react";
import { FAVORITES_STATES } from "../../../commons/constants/character";
import { MdStar } from "react-icons/md";
import { ActionIcon } from "@mantine/core";

const FavoriteIcon = ({ favorite, onClick }) => {
  const favProps = {
    [FAVORITES_STATES.NOT_FAVORITE]: {
      bgColor: "#fafbfb",
      fillColor: "#818d75",
      icon: MdStar,
    },
    [FAVORITES_STATES.FAVORITE]: {
      bgColor: "#b7db8a",
      fillColor: "#598029",
      icon: MdStar,
    },
    [FAVORITES_STATES.DISABLED]: {
      bgColor: "#e7e6e3",
      fillColor: "#818d75",
      icon: MdStar,
    },
  };
  const currFavorite =
    favProps[favorite] || favProps[FAVORITES_STATES.NOT_FAVORITE];
  const Icon = currFavorite.icon;

  return (
    <ActionIcon
      size="lg"
      radius="xl"
      variant="filled"
      autoContrast={false}
      color={currFavorite.bgColor}
      onClick={onClick}
    >
      <Icon
        style={{
          color: currFavorite.fillColor,
          // stroke: currFavorite.fillColor,
          fill: "currentColor",
        }}
      />
    </ActionIcon>
  );
};

export default FavoriteIcon;
