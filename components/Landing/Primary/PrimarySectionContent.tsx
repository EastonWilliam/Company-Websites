"use client";

import Image from "next/image";

const primaryButtons = [
	{ title: "frontend", link: "#frontend", rotation: 0 },
	{ title: "backend", link: "#backend", rotation: 270 },
	{ title: "AI", link: "#ai", rotation: 90 },
	{ title: "database", link: "#database", rotation: 45 },
	{ title: "mobile", link: "#mobile", rotation: 315 },
	{ title: "cloud", link: "#cloud", rotation: 180 },
	{ title: "UI/UX", link: "#ui", rotation: 135 },
];

type PrimarySectionContentProps = {
	onSelect: (rotation: number) => void;
};

export default function PrimarySectionContent({
	onSelect,
}: PrimarySectionContentProps) {
	return (
		<div
			className="relative w-full h-full flex flex-col items-center justify-end gap-6 lg:gap-10 my-3 md:my-6 lg:my-10 lg:pb-[140px]"
		>
			{/* Title */}
			<div className="border-b border-primary">
				<h1 className="font-['Revalia'] text-[24px] lg:text-[60px] text-black">
					Priamry
					<span className="text-primary">
						{" "}
						Development Skills
					</span>
				</h1>
			</div>

			{/* Buttons */}
			<div className=" w-full flex flex-row justify-between items-center gap-1 lg:gap-3">
				{primaryButtons.map((primaryButton, index) => (
					<button
						key={index}
						onClick={() => onSelect?.(primaryButton.rotation)}
						className=" capitalize text-black text-[12px] lg:text-[24px] px-6 py-1 lg:px-9 lg:py-2 border border-black rounded-full transition-all duration-300 cursor-pointer hover:bg-primary hover:text-white"
					>
						{primaryButton.title}
					</button>
				))}
			</div>

			{/* Bottom Center Image */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
				<Image
					src="/assets/images/primary-bottom.png"
					width={567}
					height={10}
					alt="Decorative element"
					className="block"
					priority
				/>
			</div>
		</div>
	);
}