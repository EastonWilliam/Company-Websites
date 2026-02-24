"use client";

import { useState } from "react";
import Link from "next/link";

import { users, ROUTES } from "@/lib/constants";
import { PersonalCard } from "@/components/core/PersonalCard";

export const FeedSectionContent = () => {
	const [index, setIndex] = useState(0);
	const [animate, setAnimate] = useState(false);

	const handleNext = () => {
		setAnimate(true);
		setTimeout(() => {
			setIndex((prev) => (prev + 1) % users.length);
			setAnimate(false);
		}, 300);
	};

	const handlePrev = () => {
		setAnimate(true);
		setTimeout(() => {
			setIndex((prev) => (prev - 1 + users.length) % users.length);
			setAnimate(false);
		}, 300);
	};

	const { name, bioTitle, bio, img } = users[index];

	return (
		<div className="w-full my-16">
			{/* Header */}
			<div className="flex flex-col lg:flex-row items-center justify-center mb-10 gap-6">
				<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black font-['Revalia'] text-center lg:text-left">
					Feedback
				</h2>
			</div>

			{/* Carousel */}
			<div className="flex items-center justify-center gap-4 lg:gap-8 max-w-7xl mx-auto px-4">
				{/* Left Arrow */}
				<button
					onClick={handlePrev}
					className="bg-primary shadow-lg rounded-2xl w-15 h-15 md:w-15 md:h-15 lg:w-20 lg:h-20 flex items-center justify-center transition hover:scale-105 text-black text-[28px]  md:text-[32px]  lg:text-[48px] cursor-pointer"
				>
					{"<"}
				</button>

				{/* Card with fade animation */}
				<div
					className={`transition-all duration-300 ${animate ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
						} w-full flex justify-center`}
				>
					<PersonalCard name={name} bioTitle={bioTitle} bio={bio} img={img} />
				</div>

				{/* Right Arrow */}
				<button
					onClick={handleNext}
					className="bg-primary shadow-lg rounded-2xl w-15 h-15 md:w-15 md:h-15 lg:w-20 lg:h-20 flex items-center justify-center transition hover:scale-105 text-black text-[28px]  md:text-[32px]  lg:text-[48px] cursor-pointer"
				>
					{">"}
				</button>
			</div>

			{/* Dot Indicator */}
			<div className="flex justify-center mt-8 gap-2">
				{users.map((_, i) => (
					<div
						key={i}
						className={`h-3 w-3 rounded-full transition-all duration-300 ${i === index ? "bg-primary w-6" : "bg-gray-400"
							}`}
					/>
				))}
			</div>
		</div>
	);
};
