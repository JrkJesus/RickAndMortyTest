import { STATUS } from "../../../commons/constants/character";

const statusMapper = (status) => {
  const mapping = {
    Alive: STATUS.ALIVE,
    Dead: STATUS.DEAD,
    unknown: STATUS.UNKNOWN,
  };
  return mapping[status] || STATUS.UNKNOWN;
};

export const characterMapper = (characters) => {
  return characters.map((data) => ({
    id: data?.id,
    name: data?.name,
    status: statusMapper(data?.status),
    species: data?.species,
    location: data?.location?.name,
    image: data?.image,
    firstEpisode: data?.episode[0],
    created: data?.created,
    favorite: "NOT_FAVORITE",
  }));
};

export const fistSeenMapper = (data) => `${data?.episode} - ${data?.name}`;
