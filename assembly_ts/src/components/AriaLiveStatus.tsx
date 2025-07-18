import type { JSX } from "react";

type Props = {
	currentWord: string;
	guessedLetters: string[];
	lastGuessedLetter: string;
	attempts: number;
	wrongGuessCount: number;
};

export default function AriaLiveStatus({
	currentWord,
	guessedLetters,
	lastGuessedLetter,
	attempts,
	wrongGuessCount,
}: Props): JSX.Element {
	return (
		<output className="sr-only" aria-live="polite">
			<p>
				{currentWord.includes(lastGuessedLetter)
					? `Correct! The letter ${lastGuessedLetter} is in the word.`
					: `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
				You have {attempts - wrongGuessCount} attempts left.
			</p>
			<p>
				Current word:{" "}
				{currentWord
					.split("")
					.map((letter: string): string =>
						guessedLetters.includes(letter)
							? `${letter}.`
							: "blank.",
					)
					.join(" ")}
			</p>
		</output>
	);
}
