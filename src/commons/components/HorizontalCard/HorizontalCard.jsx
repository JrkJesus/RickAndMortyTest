import { Card, Flex, Badge, useMantineTheme } from "@mantine/core";
import { useElementSize, useMediaQuery } from "@mantine/hooks";
import React from "react";

const HorizontalCard = ({ children }) => {
  const theme = useMantineTheme();
  const isRowDirection = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
  const { ref, width, height } = useElementSize();
  const imageSize = (isRowDirection ? height : width) + 32;

  const slots = React.Children.toArray(children).reduce(
    (acc, child) => {
      if (React.isValidElement(child)) {
        if (!child.props.slot) {
          acc.content.push(child);
        } else {
          const styles =
            child.props.slot === "img"
              ? {
                  style: {
                    ...child.props.style,
                    height: `${imageSize}px`,
                    width: `${imageSize}px`,
                  },
                }
              : {};

          acc[child.props.slot] = React.cloneElement(child, {
            slot: undefined,
            ...styles,
          });
        }
      }
      return acc;
    },
    { img: null, badge: null, content: [], leftIcon: null, rightIcon: null }
  );

  return (
    <Card withBorder padding="0" radius="md">
      {slots.leftIcon && (
        <div style={{ position: "absolute", top: "8px", left: "8px" }}>
          {slots.leftIcon}
        </div>
      )}
      {slots.rightIcon && (
        <div style={{ position: "absolute", top: "8px", right: "8px" }}>
          {slots.rightIcon}
        </div>
      )}
      <Flex
        align="center"
        padding="0"
        direction={{ base: "column", sm: "row" }}
        style={{ height: "100%", width: "100%" }}
      >
        {slots.img && <>{slots.img}</>}

        <Flex
          direction="column"
          justify="space-between"
          align="flex-start"
          gap={16}
          ref={ref}
          style={{
            minWidth: isRowDirection ? 350 : undefined,
            height: "100%",
            width: "100%",
            padding: "16px",
            position: "relative",
            transition: "min-width 0.2s ease",
          }}
        >
          {slots.badge && (
            <div style={{ position: "absolute", top: 16, right: 16 }}>
              {slots.badge}
            </div>
          )}
          {slots.content}
        </Flex>
      </Flex>
    </Card>
  );
};

export default HorizontalCard;
