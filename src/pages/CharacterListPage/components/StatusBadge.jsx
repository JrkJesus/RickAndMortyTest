import { Badge, Flex, Text } from "@mantine/core";
import React from "react";
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { STATUS } from "../../../commons/constants/character";

const StatusBadge = ({ status }) => {
  const statusStyles = {
    [STATUS.ALIVE]: {
      color: "#598029",
      backgroundColor: "#e8f3d8",
      Icon: IoCheckmarkCircleOutline,
    },
    [STATUS.DEAD]: {
      color: "black",
      backgroundColor: "#e7e6e3",
      Icon: IoCloseCircleOutline,
    },
    [STATUS.UNKNOWN]: {
      color: "black",
      backgroundColor: "#e7e6e3",
      Icon: IoAlertCircleOutline,
    },
  };

  const { color, backgroundColor, Icon } =
    statusStyles[status] || statusStyles.Unknown;

  return (
    <Badge
      color={backgroundColor}
      variant="filled"
      style={{ textTransform: "uppercase", padding: "12px" }}
    >
      <Flex justify="center" align="center" direction="row" gap={4}>
        <Icon size={16} color={color} />
        <Text size="sm" fw={500} c={color}>
          {status}
        </Text>
      </Flex>
    </Badge>
  );
};

export default StatusBadge;
