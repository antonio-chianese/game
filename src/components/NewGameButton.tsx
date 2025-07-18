import clsx from "clsx";
import type { JSX } from "react";
import { getRandomWord } from "../utils";

type Props = {
	isGameOver: boolean;
	setCurrentWord: React.Dispatch<React.SetStateAction<string>>;
	setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function NewGameButton({
	isGameOver,
	setCurrentWord,
	setGuessedLetters,
}: Props): JSX.Element {
	const newGameClass: string = clsx(
		"before-new-game",
		isGameOver && "new-game",
	);

	function gameOver(): void {
		setCurrentWord(getRandomWord());
		setGuessedLetters([]);
	}

	return (
		<button
			type="button"
			onClick={isGameOver ? () => gameOver() : undefined}
			className={newGameClass}
		>
			{isGameOver && "New game"}
		</button>
	);
}
