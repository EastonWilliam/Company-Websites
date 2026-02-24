"use client";

import React from "react";
import { poppins, revalia } from "@/lib/constants";

const achievements = [
	{ value: "5+", label: "Years of Experience" },
	{ value: "57+", label: "Successful Projects" },
	{ value: "80+", label: "Active Clients" },
	{ value: "120+", label: "Happy Customers" },
];

export const Achievement = () => {
	return (
		<section
			className="relative w-full min-h-screen text-white bg-cover bg-center flex items-center justify-center  lg:mt-[-200] sm:mt-[-100] z-0"
			style={{ backgroundImage: "url('/assets/images/achievement-back.png')" }}
		>
			<div className="absolute inset-0"></div>

			<div className="relative w-full flex flex-col items-center gap-12 mt-[300px] px-8 ">
				<div
					className="relative max-w-[1440px] w-full lg:h-[314px] h-[fit-content] px-8 py-6
                     border-2 border-dashed border-primary rounded-xl flex flex-col items-center"
				>
					<div className="relative w-max mx-auto -top-17">
						<div
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                            w-[102%] h-15 bg-primary rounded-xl opacity-30"
						></div>
						<h2
							className={`relative px-8 py-6 text-4xl font-bold
                            bg-secondary text-white border border-[#FFFFFF0D] rounded-xl ${revalia.className}`}
						>
							Achievement
						</h2>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-center justify-end items-center h-full mt-[-100px] sm:mt-[-50px]">
						{achievements.map((achievement, index) => (
							<div
								key={index}
								className="rounded-xl hover:shadow-lg transition duration-300 flex flex-col items-center justify-center p-6 w-full sm:w-64"
								style={{
									backgroundImage: "url(/assets/images/card-border.png)",
									backgroundSize: "100% 100%",
									backgroundRepeat: "no-repeat",
								}}
							>
								<div className="text-[60px] sm:text-4xl font-bold mb-2 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
								>
									{achievement.value}
								</div>
								<div className={`text-sm text-gray-300 ${poppins.className}`}>
									{achievement.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
