"use client";

import Link from "next/link";

type Props = {
	width?: number;
	height?: number;
};

export function TelegramIcon({ width = 52, height = 52 }: Props) {
	return (
		<Link href={"/"} className="flex items-center">
			<img
				src="/assets/icons/telegram.svg"
				alt="Telegram"
				style={{ width: `${width}px`, height: `${height}px` }}
				className="cursor-pointer"
			/>
		</Link>
	);
}

export function DiscordIcon({ width = 52, height = 52 }: Props) {
	return (
		<Link href={"/"} className="flex items-center">
			<img
				src="/assets/icons/discord.svg"
				alt="Discord"
				style={{ width: `${width}px`, height: `${height}px` }}
				className="cursor-pointer"
			/>
		</Link>
	);
}

export function LinkedinIcon({ width = 52, height = 52 }: Props) {
	return (
		<Link href={"/"} className="flex items-center">
			<img
				src="/assets/icons/linkedin.svg"
				alt="Linkedin"
				style={{ width: `${width}px`, height: `${height}px` }}
				className="cursor-pointer"
			/>
		</Link>
	);
}
