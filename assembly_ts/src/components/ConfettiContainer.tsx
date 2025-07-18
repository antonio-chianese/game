import type { JSX } from "react";
import Confetti from "react-confetti";

export default function ConfettiContainer({
	isGameWon,
}: {
	isGameWon: boolean;
}): JSX.Element | null {
	if (!isGameWon) {
		return null;
	} else {
		return <Confetti gravity={0.5} recycle={false} numberOfPieces={1000} />;
	}
}
