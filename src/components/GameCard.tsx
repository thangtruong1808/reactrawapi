import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../Services/image-url";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card borderRadius={20} overflow="hidden" boxShadow="dark-lg">
			<Image src={getCroppedImageURL(game.background_image)}></Image>
			<CardBody mt={"-10px"}>
				<Heading fontSize="l">{game.name}</Heading>
				<HStack justifyContent={"space-between"} mt={"10px"}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
