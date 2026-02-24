"use client";

import Image from "next/image";
import { favors } from "@/lib/constants";
import { revalia } from "@/lib/constants";

export default function FavorsSectionContent() {
	return (
		<>
			{/* Top Image */}
			<div className="w-full flex justify-center md:mt-0 mt-[-70px]">
				<Image
					src="/assets/images/favors-top.png"
					alt="Top"
					width={567}
					height={50}
					className="object-contain"
				/>
			</div>

			{/* Title */}
			<div className="container mx-auto px-4">
				<div className="relative w-full text-center">
					<h1
						className={`text-[28px] sm:text-[32px] lg:text-[60px] ${revalia.className} text-black`}
					>
						How do we came with{" "}
						<span className="text-primary">favors?</span>
					</h1>
				</div>
			</div>

			{/* GRID WRAPPER */}
			<div className="container mx-auto px-4 relative">

				<div className="hidden md:block absolute inset-0 pointer-events-none z-10">

					{/* Vertical Line 1 */}
					<div className="absolute top-0 bottom-0 left-1/3 w-[2px] 
		bg-gradient-to-b from-transparent via-primary to-transparent" />

					{/* Vertical Line 2 */}
					<div className="absolute top-0 bottom-0 left-2/3 w-[2px] 
		bg-gradient-to-b from-transparent via-primary to-transparent" />

					{/* Horizontal Line */}
					<div className="absolute left-0 right-0 top-1/2 h-[2px] 
		bg-gradient-to-r from-transparent via-primary to-transparent" />

				</div>

				{/* GRID */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-0">
					{favors.map((item) => (
						<div
							key={item.id}
							className="
								group relative cursor-pointer
								px-4 sm:px-6 md:px-8 py-4
								min-h-[280px] sm:min-h-[300px] md:min-h-[320px]
								grid grid-rows-[120px_1fr]
								rounded-[20px]
								bg-white
								transition-all duration-300
								hover:bg-[#888888]
								hover:shadow-2xl
								hover:-translate-y-1
							"
						>
							{/* TOP SECTION */}
							<div className="flex flex-col items-center justify-center text-center min-h-[120px]">
								<Image
									src={item.icon}
									alt={item.title}
									width={48}
									height={48}
									className="
										object-contain
										transition-all duration-300
										group-hover:brightness-0
										group-hover:invert
									"
								/>

								<h3
									className="
										mt-2 sm:mt-3
										font-[Revalia]
										text-sm sm:text-base md:text-lg
										text-black
										transition-colors duration-300
										group-hover:text-white
									"
								>
									{item.title}
								</h3>
							</div>

							{/* BOTTOM CARD */}
							<div
								className="
									p-4 sm:p-5
									rounded-[20px]
									bg-[rgba(21,21,21,0.2)]
									border border-black
									h-[140px] sm:h-[150px] md:h-[160px]
									flex items-center
									transition-all duration-300
									group-hover:bg-white/10
									group-hover:border-white
								"
							>
								<p
									className="
										font-[Poppins]
										text-center
										text-sm sm:text-base md:text-sm
										text-black
										line-clamp-4
										transition-colors duration-300
										group-hover:text-white/90
									"
								>
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}