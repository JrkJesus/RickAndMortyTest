import { Card, Flex, Badge, useMantineTheme } from "@mantine/core";
import { useElementSize, useMediaQuery } from "@mantine/hooks";
import React from "react";

const HorizontalCard = ({ children }) => {
  const theme = useMantineTheme();
  const isRowDirection = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
  const { ref, width, height } = useElementSize();
  const imageSize = (isRowDirection ? height : width) + 32;
  console.log("🇬🇾 imageSize:", imageSize);

  const slots = React.Children.toArray(children).reduce(
    (acc, child) => {
      if (React.isValidElement(child)) {
        if (child.props.slot === "img") {
          acc.img = child;
        } else if (child.props.slot === "badge") {
          acc.badge = child;
        } else {
          acc.content.push(child);
        }
      }
      return acc;
    },
    { img: null, badge: null, content: [] }
  );

  return (
    <Card withBorder padding="0" radius="md">
      <Flex
        align="center"
        padding="0"
        direction={{ base: "column", sm: "row" }}
        style={{ height: "100%", width: "100%" }}
      >
        {slots.img && (
          <>
            {React.cloneElement(slots.img, {
              slot: undefined,
              style: {
                ...slots.img.props.style,
                height: `${imageSize}px`,
                width: `${imageSize}px`,
              },
            })}
          </>
        )}

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
              {React.cloneElement(slots.badge, { slot: undefined })}
            </div>
          )}
          {slots.content}
        </Flex>
      </Flex>
    </Card>
  );
};

export default HorizontalCard;
