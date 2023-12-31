import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`, // md 768px
				lg: `"nav nav" "aside main"`, // 992px
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px, 1fr",
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX="15px">
					<GenreList
						selectedGenre={selectedGenre}
						onSelectGenre={(genre) => setSelectedGenre(genre)}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<PlatformSelector
					selectedPlatform={selectedPlatform}
					onSelectPlatform={(platform) => setSelectedPlatform(platform)}
				/>
				<GameGrid
					selectedPlatform={selectedPlatform}
					selectedGenre={selectedGenre}
				/>
			</GridItem>
		</Grid>
	);
}

export default App;
