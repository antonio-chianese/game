import type { JSX } from "react";

export default function Header(): JSX.Element {
	return (
		<header>
			<h1 className="title">Assembly: Endgame</h1>
			<p className="subtitle">
				Guess the word in under 8 attempts to keep the programming world
				safe from Assembly!
			</p>
		</header>
	);
}
