import clsx from "clsx";
import type { JSX } from "react";

type Props = {
	currentWord: string;
	guessedLetters: string[];
	isGameLost: boolean;
};

export default function WordContainer({
	currentWord,
	guessedLetters,
	isGameLost,
}: Props): JSX.Element {
	let letterId = 1;

	const wordHTML: JSX.Element[] = currentWord
		.split("")
		.map((letter: string): JSX.Element => {
			const shouldRevealLetters: boolean =
				isGameLost || guessedLetters.includes(letter);

			const wordClassName: string = clsx(
				"word",
				isGameLost &&
					!guessedLetters.includes(letter) &&
					"missed-letter",
			);

			return (
				<span key={letterId++} className={wordClassName}>
					{shouldRevealLetters && letter.toUpperCase()}
				</span>
			);
		});

	return <section className="word-container">{wordHTML}</section>;
}
