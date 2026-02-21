"use client";

import { useState } from "react";
import Image from "next/image";
import PrimarySectionContent from "./PrimarySectionContent";

export default function PrimarySection() {
	const [rotation, setRotation] = useState(0);

	return (
		<div className="relative w-[1920px] h-[1080px] overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 h-[120vh]">
				<Image
					src="/assets/images/primaryback.png"
					alt="Primary Background"
					fill
					priority
					className="object-cover"
				/>
			</div>

			{/* Rotating Skill Image */}
			<div
				className="absolute top-[15%] left-1/2 w-[130%] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
				style={{
					transform: `translateX(-50%) rotate(${rotation}deg)`,
					transformOrigin: "50% 50%",
				}}
			>
				<Image
					src="/assets/images/primaryskills.png"
					alt="Primary Skill Set"
					width={1920}
					height={1080}
					className="w-full h-auto"
					priority
				/>
			</div>

			{/* Content */}
			<div className="relative h-[50vh] sm:h-[80vh] lg:h-[120vh] py-20 max-w-7xl mx-auto px-6">
				<PrimarySectionContent onSelect={setRotation} />
			</div>
		</div>
	);
}
