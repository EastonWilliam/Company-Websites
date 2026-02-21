"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectItem = {
	id: string;
	title: string;
	description: string;
	image: string; // string path from /public
};

export default function ProjectsSectionContent() {
	const projects: ProjectItem[] = useMemo(
		() => [
			{
				id: "p1",
				title: "Project 01",
				description: "Modern UI and performance focused build.",
				image: "/assets/images/project01.png",
			},
			{
				id: "p2",
				title: "Project 02",
				description: "Analytics and dashboards experience.",
				image: "/assets/images/project02.png",
			},
			{
				id: "p3",
				title: "Project 03",
				description: "Responsive and accessible landing page.",
				image: "/assets/images/project03.png",
			},
		],
		[],
	);

	const [active, setActive] = useState(0);
	const total = projects.length;

	const prev = useCallback(() => {
		setActive((curr) => (curr - 1 + total) % total);
	}, [total]);

	const next = useCallback(() => {
		setActive((curr) => (curr + 1) % total);
	}, [total]);

	const getPosition = (index: number) => {
		const leftIndex = (active - 1 + total) % total;
		const rightIndex = (active + 1) % total;

		if (index === active) return "center";
		if (index === leftIndex) return "left";
		if (index === rightIndex) return "right";
		return "hidden";
	};

	return (
		<>
			{/* Title */}
			<div className="container mx-auto py-6 md:py-16 px-4">
				<h1 className="text-white text-3xl md:text-6xl font-['Revalia']">
					Our Newest <span className="text-primary">Projects</span>
				</h1>
			</div>

			{/* Carousel */}
			<div className="relative w-full h-[420px] md:h-[560px] px-3 md:px-6">
				{/* Left Button */}
				<button
					onClick={prev}
					className="
    absolute top-1/2 -translate-y-1/2 left-[23%] z-30
    w-8 h-8 md:w-12 md:h-12
    bg-primary
    rounded-xl
    flex items-center justify-center
    text-black
    shadow-md
    hover:shadow-xl
    hover:scale-110
    transition-all duration-300 ease-in-out
  "
				>
					<ChevronLeft size={40} />
				</button>

				{/* Right Button */}
				<button
					onClick={next}
					className="
    absolute top-1/2 -translate-y-1/2 right-[23%] z-30
    w-8 h-8 md:w-12 md:h-12
    bg-primary
    rounded-xl
    flex items-center justify-center
    text-black
    shadow-md
    hover:shadow-xl
    hover:scale-110
    transition-all duration-300 ease-in-out
  "
				>
					<ChevronRight size={40} />
				</button>
				<div className="relative w-full h-full overflow-hidden">
					{projects.map((project, idx) => {
						const pos = getPosition(idx);
						const base =
							"absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out cursor-pointer";

						const variants: Record<string, string> = {
							center:
								"left-1/2 -translate-x-1/2 w-[64%] md:w-[56%] z-30 opacity-100",
							left: "left-[11%] md:left-[12%] -translate-x-1/2 w-[22%] md:w-[24%] z-20 opacity-100",
							right:
								"left-[89%] md:left-[88%] -translate-x-1/2 w-[22%] md:w-[24%] z-20 opacity-100",
							hidden: "left-1/2 -translate-x-1/2 w-0 opacity-0 z-10",
						};

						return (
							<div
								key={project.id}
								onClick={next}
								className={`${base} ${variants[pos]}`}
							>
								<div className="relative w-full h-[320px] md:h-[460px]">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className={`object-contain transition-all duration-300 ${
											pos === "center" ? "" : "grayscale"
										}`}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Desktop Progress Bar */}
			<div className="hidden md:block w-full mt-6">
				<div className="relative mx-auto h-1 w-[60%] lg:w-[50%] xl:w-[45%] bg-white rounded-full">
					<div
						className="absolute top-1/2 -translate-y-1/2 h-4 bg-primary rounded-full transition-all duration-700"
						style={{
							left: `${(100 / total) * active}%`,
							width: `${100 / total}%`,
						}}
					/>
				</div>
			</div>

			{/* Mobile Dots */}
			<div className="flex md:hidden justify-center gap-2 mt-4">
				{projects.map((_, i) => (
					<div
						key={i}
						className={`h-2 rounded-full transition-all duration-300 ${
							i === active ? "w-5 bg-purple-500" : "w-2 bg-white/60"
						}`}
					/>
				))}
			</div>
		</>
	);
}
