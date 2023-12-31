import {
	Button,
	Center,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../Services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	// const { genres } = useGenres();
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageURL(genre.image_background)}
						></Image>
						<Button
							color={genre.id === selectedGenre?.id ? "tomato" : "normal"}
							variant="link"
							size="md"
							onClick={() => onSelectGenre(genre)}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
