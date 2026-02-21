"use client";

import React, { useEffect, useRef, useState } from "react";

import { ProcessStep } from "@/components/core/ProcessStep";
import { ProcessTitle } from "@/components/core/ProcessTitle";
import { SeekBar } from "@/components/core/SeekBar";
import { SeekButton } from "@/components/core/SeekButton";
import { steps } from "@/lib/constants";
import { Sekuya } from "next/font/google";

export const ProcessSectionContent: React.FC = () => {
	const containRef = useRef<HTMLDivElement>(null);
	const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [dotY, setDotY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const container = containRef.current;
			if (!container) return;

			const containerTop = container.getBoundingClientRect().top;
			const viewportMiddle = window.innerHeight / 2;

			let closestIndex = 0;
			let smallestDistance = Infinity;

			stepRefs.current.forEach((el, i) => {
				if (!el) return;
				const rect = el.getBoundingClientRect();
				const center = rect.top + rect.height / 2;
				const dist = Math.abs(center - viewportMiddle);

				if (dist < smallestDistance) {
					smallestDistance = dist;
					closestIndex = i;
				}
			});

			const active = stepRefs.current[closestIndex];
			if (active) {
				const rect = active.getBoundingClientRect();
				setDotY(rect.top + rect.height / 2 - containerTop);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div ref={containRef} className="relative mt-6 mb-6 md:mt-10 md:mb-10">
			<ProcessTitle />
			<SeekBar />
			<SeekButton top={dotY} />

			<div className="mt-0 flex flex-col gap-6 md:gap-12">
				{steps.map((step, index) => (
					<ProcessStep
						key={step.id}
						step={step}
						isEven={step.id % 2 === 0}
						stepRef={(el: HTMLDivElement | null) =>
							(stepRefs.current[index] = el)
						}
					/>
				))}
			</div>
		</div>
	);
};
