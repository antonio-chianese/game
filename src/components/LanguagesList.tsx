import clsx from "clsx";
import type { JSX } from "react";
import type { Languages } from "../languages";
import { languages } from "../languages";

export default function LanguagesList({
	wrongGuessCount,
}: {
	wrongGuessCount: number;
}): JSX.Element {
	const languagesHTML: JSX.Element[] = languages.map(
		(item: Languages, index: number): JSX.Element => {
			const isLanguageLost: boolean = index < wrongGuessCount;
			const className: string = clsx("language", isLanguageLost && "lost");

			const styles: Omit<Languages, "name"> = {
				color: item.color,
				backgroundColor: item.backgroundColor,
			};

			return (
				<span className={className} style={styles} key={item.name}>
					{item.name}
				</span>
			);
		},
	);
	return <section className="languages-list">{languagesHTML}</section>;
}
