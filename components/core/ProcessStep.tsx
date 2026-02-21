"use client";

import Image from "next/image";

export interface StepItem {
	id: number;
	title: string;
	description: string;
	img: string;
}

interface ProcessStepProps {
	step: StepItem;
	isEven: boolean;
	stepRef: (el: HTMLDivElement | null) => void;
}

export const ProcessStep = ({ step, isEven, stepRef }: ProcessStepProps) => {
	return (
		<div
			ref={stepRef}
			className="relative flex flex-col md:flex-row items-center justify-between px-2 md:px-0 gap-6 md:gap-12"
		>
			{/* IMAGE */}
			<div
				className={`w-full md:w-[45%] max-w-full 
                    ${isEven ? "md:order-1" : "md:order-2"} order-2`}
			>
				<Image
					src={step.img}
					alt={step.title}
					width={800}
					height={600}
					className="w-full h-auto rounded-lg"
				/>
			</div>

			{/* DESCRIPTION */}
			<div
				className={`w-full md:w-[45%] flex flex-col gap-4 
                    ${isEven ? "md:order-2" : "md:order-1"} order-1`}
			>
				<h4 className="uppercase font-['Revalia'] text-[32px] md:text-[48px] text-white">
					{step.id}. {step.title}
				</h4>
				<p className="font-['Inter'] text-[18px] md:text-[24px] text-white/65">
					{step.description}
				</p>
			</div>
		</div>
	);
};
