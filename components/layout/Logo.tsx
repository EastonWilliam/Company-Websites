"use client";

import Link from "next/link";

type Props = {
	width?: number;
	height?: number;
};

export default function Logo({ width = 110, height = 44 }: Props) {
	return (
		<Link href={"/"} className="flex items-center">
			<img
				src="/assets/icons/logo.svg"
				alt="Digital Moon"
				style={{ width: `${width}px`, height: `${height}px` }}
				className="cursor-pointer"
			/>
		</Link>
	);
}
