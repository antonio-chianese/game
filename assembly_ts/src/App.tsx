import { useState } from "react";

import AriaLiveStatus from "./components/AriaLiveStatus";
import ConfettiContainer from "./components/ConfettiContainer";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguagesList from "./components/LanguagesList";
import NewGameButton from "./components/NewGameButton";
import WordContainer from "./components/WordContainer";

import { languages } from "./languages";
import { getRandomWord } from "./utils";

export default function App() {
	// State values
	const [currentWord, setCurrentWord] = useState<string>((): string =>
		getRandomWord(),
	);
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	// Derived values
	const wrongGuessCount: number = guessedLetters.filter(
		(letter: string): boolean => !currentWord.includes(letter),
	).length;

	const attempts: number = languages.length - 1;
	const isGameLost: boolean = wrongGuessCount >= attempts;
	const isGameWon: boolean =
		!isGameLost &&
		currentWord
			.split("")
			.every((letter: string): boolean =>
				guessedLetters.includes(letter),
			);
	const isGameOver: boolean = isGameLost || isGameWon;
	const lastGuessedLetter: string = guessedLetters[guessedLetters.length - 1];
	const isWrongGuess: boolean =
		guessedLetters.length > 0 && !currentWord.includes(lastGuessedLetter);

	return (
		<main>
			<ConfettiContainer isGameWon={isGameWon} />
			<Header />
			<GameStatus
				isGameWon={isGameWon}
				isGameLost={isGameLost}
				isGameOver={isGameOver}
				isWrongGuess={isWrongGuess}
				wrongGuessCount={wrongGuessCount}
			/>
			<LanguagesList wrongGuessCount={wrongGuessCount} />
			<WordContainer
				currentWord={currentWord}
				guessedLetters={guessedLetters}
				isGameLost={isGameLost}
			/>
			<AriaLiveStatus
				currentWord={currentWord}
				guessedLetters={guessedLetters}
				lastGuessedLetter={lastGuessedLetter}
				attempts={attempts}
				wrongGuessCount={wrongGuessCount}
			/>
			<Keyboard
				guessedLetters={guessedLetters}
				setGuessedLetters={setGuessedLetters}
				currentWord={currentWord}
				isGameOver={isGameOver}
			/>
			<NewGameButton
				isGameOver={isGameOver}
				setCurrentWord={setCurrentWord}
				setGuessedLetters={setGuessedLetters}
			/>
		</main>
	);
}
