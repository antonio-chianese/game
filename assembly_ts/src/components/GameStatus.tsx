import clsx from "clsx";
import type { JSX } from "react";
import { languages } from "../languages";
import { getFarewellText } from "../utils";

type Props = {
	isGameWon: boolean;
	isGameLost: boolean;
	isGameOver: boolean;
	isWrongGuess: boolean;
	wrongGuessCount: number;
};

export default function GameStatus({
	isGameWon,
	isGameLost,
	isGameOver,
	isWrongGuess,
	wrongGuessCount,
}: Props): JSX.Element {
	const gameStatusClass: string = clsx("game-status", {
		won: isGameWon,
		lost: isGameLost,
		farewell: !isGameOver && isWrongGuess,
	});

	function renderGameStatus() {
		if (!isGameOver && isWrongGuess) {
			return (
				<p>"{getFarewellText(languages[wrongGuessCount - 1].name)}"</p>
			);
		}

		if (isGameWon) {
			return (
				<>
					<h2>You win!</h2>
					<p>Well done! 🎉</p>
				</>
			);
		}

		if (isGameLost) {
			return (
				<>
					<h2>Game over!</h2>
					<p>You lose! Better start learning Assembly 😭</p>
				</>
			);
		}

		return null;
	}

	return (
		<output aria-live="polite" className={gameStatusClass}>
			{renderGameStatus()}
		</output>
	);
}
