import {
  Badge,
  Group,
  Flex,
  Text,
  Grid,
  Image,
  Container,
  ActionIcon,
} from "@mantine/core";
import React from "react";
import HorizontalCard from "../../../commons/components/HorizontalCard/HorizontalCard";
import FavoriteIcon from "./FavoriteIcon";
import StatusBadge from "./StatusBadge";

const CharacterCard = ({ character }) => {
  return (
    <HorizontalCard>
      <FavoriteIcon favorite={character.favorite} slot="leftIcon" />

      <StatusBadge status={character.status} slot="badge" />

      <Image slot="img" src={character.image} alt={character.name} />

      <Flex direction="column" justify="space-between" align="flex-start">
        <Text size="xl" fw={700} mb={4}>
          {character.name}
        </Text>
        <Text size="sm" c="dimmed" fw={500} mb={12}>
          {character.species}
        </Text>
      </Flex>

      <Grid
        colGap="sm"
        gutter={0}
        justify="space-between"
        align="flex-start"
        style={{ width: "100%" }}
      >
        <Grid.Col span={6} padding={0}>
          <Text size="sm" fw={700} c="dimmed">
            Last known location:
          </Text>
          <Text size="sm">{character.location}</Text>
        </Grid.Col>
        <Grid.Col span={6} padding={0}>
          {" "}
          <Text size="sm" c="dimmed" fw={700}>
            First seen in:
          </Text>
          <Text size="sm">{character.firstEpisode}</Text>
        </Grid.Col>
      </Grid>
    </HorizontalCard>
  );
};

export default CharacterCard;
