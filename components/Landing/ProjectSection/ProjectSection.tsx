"use client";

import Image from "next/image";
import ProjectsSectionContent from "./ProjectSectionContent";

export const ProjectsSection = () => {
	return (
		<section className="relative w-full py-30 md:py-30 overflow-visible z-20">
			{/* Background Layer (extended top & bottom like ::before) */}
			<div className="absolute left-0 right-0 top-[-10%] h-[110%] z-0 pointer-events-none select-none">
				<Image
					src="/assets/images/projectbackground.png"
					alt="Projects background"
					fill
					className="object-cover object-center"
					priority
				/>
			</div>

			{/* Content */}
			<div className="relative z-10">
				<ProjectsSectionContent />
			</div>
		</section>
	);
};

export default ProjectsSection;
