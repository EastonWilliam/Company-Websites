"use client";

import Image from "next/image";
import { FeedSectionContent } from "./FeedSectionContent";

export const FeedSection = () => {
	return (
		<section className="relative w-full py-16">
			{/* Background */}
			<Image
				src="/assets/images/feedback-back.png" // public path
				alt="feedback background"
				fill
				className="object-cover -z-10"
				priority
			/>

			{/* Gradient Borders */}
			<div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#FF7C7C] via-[#994B4B] to-[#FF7C7C]" />
			<div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#FF7C7C] via-[#994B4B] to-[#FF7C7C]" />

			<div className="relative container mx-auto px-6">
				<FeedSectionContent />
			</div>
		</section>
	);
};
