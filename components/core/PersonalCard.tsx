"use client";

import Image from "next/image";
import React from "react";

export interface PersonalCardProps {
	name: string;
	bioTitle: string;
	bio: string;
	img: string;
}

export const PersonalCard: React.FC<PersonalCardProps> = React.memo(
	({ name, bioTitle, bio, img }) => {
		return (
			<div className="relative mx-auto w-full max-w-[1121px] rounded-[100px] overflow-hidden shadow-[4px_4px_12px_rgba(0,0,0,0.66)]">
				{/* Background */}
				<div className="absolute inset-0 -z-10">
					<Image
						src="/assets/images/feedback.png"
						alt="card background"
						fill
						className="object-cover"
					/>
				</div>

				<div className="flex flex-col lg:flex-row items-center">
					{/* Avatar Section */}
					<div className="relative flex items-center justify-center lg:justify-end w-full lg:w-[500px] h-auto lg:h-[614px] my-6 lg:my-0">
						{/* Avatar background (hidden on mobile) */}
						<div className="absolute inset-0 hidden lg:block">
							<Image
								src="/assets/images/avatar-back.png"
								alt="avatar background"
								fill
							/>
						</div>

						{/* Avatar circle wrapper */}
						<div className="relative flex items-center justify-center w-[260px] sm:w-[300px] lg:w-[342px] h-[260px] sm:h-[300px] lg:h-[342px]">
							<Image
								src="/assets/images/avatar-circle.png"
								alt="avatar circle"
								fill
								className="object-contain"
							/>

							<div className="relative w-[90%] h-[90%] lg:w-[100%] aspect-square">
								<Image
									src={img}
									alt={name}
									fill
									className="object-contain"
								/>
							</div>
						</div>
					</div>

					{/* Text Section */}
					<div className="w-[90%] lg:w-[55%] px-6 py-8 flex flex-col items-center justify-center gap-4 text-center">
						<h3 className="font-bold underline text-primary text-[28px] md:text-[48px] lg:text-[60px] font-['Revalia']">
							{name}
						</h3>

						<p className="font-bold text-black text-[24px] md:text-[32px] lg:text-[40px] font-['Poppins']">
							{bioTitle}
						</p>

						<p className="font-bold text-black text-[14px] md:text-[16px] lg:text-[20px] font-['Poppins]">
							{bio}
						</p>
					</div>
				</div>
			</div>
		);
	},
);
