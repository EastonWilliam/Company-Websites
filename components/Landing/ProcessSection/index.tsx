"use client";

import Image from "next/image";
import { ProcessSectionContent } from "./ProcessSectionContent";

export default function ProcessSection() {
	return (
		<section className="relative w-full min-h-[800px] md:min-h-[1000px]">
			{/* BACKGROUND IMAGE */}
			<div className="absolute inset-0 -z-10">
				<Image
					src="/assets/images/processback.png"
					alt="Process background"
					fill
					className="object-cover object-top"
					priority
				/>

				{/* GRADIENT OVERLAY */}
				<div className="absolute inset-0 bg-gradient-to-t from-[rgba(123,123,123,0.52)] to-[rgba(21,21,21,0.53)]" />
			</div>

			{/* CONTENT */}
			<div className="relative container mx-auto px-4 py-20">
				<ProcessSectionContent />
			</div>
		</section>
	);
}
