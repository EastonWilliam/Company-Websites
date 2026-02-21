import { Achievement } from "@/components/Landing/Achievement/Achievement";

import GoalSection from "@/components/Landing/GoalSection/GoalSections";
import HeroSection from "@/components/Landing/HeroSection";
import ProcessSection from "@/components/Landing/ProcessSection";
import PrimarySection from "@/components/Landing/Primary";
import ProjectsSection from "@/components/Landing/ProjectSection/ProjectSection";
import { FavorsSection } from "@/components/Landing/FavorsSection/FavorsSection";
import { FeedSection } from "@/components/Landing/FeedSection/FeedSection";
import GetInTouchSection from "@/components/Landing/GetInTouch/GetIntouchSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Achievement />
			<PrimarySection />
			<ProjectsSection />
			<FavorsSection />
			<ProcessSection />
			<FeedSection />
			{/* <GetInTouchSection /> */}
		</>
	);
}
