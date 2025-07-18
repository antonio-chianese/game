import clsx from "clsx";
import type { JSX } from "react";

type Props = {
	guessedLetters: string[];
	setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
	currentWord: string;
	isGameOver: boolean;
};

export default function Keyboard({
	guessedLetters,
	setGuessedLetters,
	currentWord,
	isGameOver,
}: Props): JSX.Element {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let letterId = 1;

	const keyboard: JSX.Element[] = alphabet
		.split("")
		.map((letter: string): JSX.Element => {
			const isGuessed: boolean = guessedLetters.includes(letter);
			const isCorrect: boolean =
				isGuessed && currentWord.includes(letter);
			const isWrong: boolean = isGuessed && !currentWord.includes(letter);
			const className: string = clsx({
				correct: isCorrect,
				wrong: isWrong,
			});

			return (
				<button
					type="button"
					key={letterId++}
					className={className}
					disabled={isGameOver}
					aria-disabled={guessedLetters.includes(letter)}
					aria-label={`Letter ${letter}`}
					onClick={() => addGuessedLetter(letter)}
				>
					{letter.toUpperCase()}
				</button>
			);
		});

	function addGuessedLetter(letter: string): void {
		setGuessedLetters((prevGuessed: string[]): string[] =>
			prevGuessed.includes(letter)
				? prevGuessed
				: [...prevGuessed, letter],
		);
	}

	return <section className="keyboard">{keyboard}</section>;
}
