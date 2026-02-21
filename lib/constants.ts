import { StepItem } from "@/components/core/ProcessStep";
import { DiscordIcon, TelegramIcon, LinkedinIcon } from "@/components/ui/icons";
import { Poppins } from "next/font/google";
import { Revalia } from "next/font/google";

export const ROUTES = {
	Landing: "/",
	HOME: "/home",
	ABOUT: "/about",
	CONTACT: "/contact",
	PROJECTS: "/projects",
	SKILLS: "/skills",
	FEEDBACK: "/feedback",
	LOGIN: "/login",
	REGISTER: "/register",
};

export const navs = [
	"Home",
	"Service",
	"Client",
	"Team",
	"Portfolio",
	"Contact",
];

export const footerNavs = [
	{
		index: 1,
		subtitle: "pages",
		contents: [
			{ title: "home", link: ROUTES.HOME },
			{ title: "projects", link: ROUTES.PROJECTS },
			{ title: "about", link: ROUTES.ABOUT },
		],
	},
	{
		index: 2,
		subtitle: "utility pages",
		contents: [
			{ title: "contact", link: ROUTES.CONTACT },
			{ title: "skills", link: ROUTES.SKILLS },
			{ title: "feedback", link: ROUTES.FEEDBACK },
		],
	},
];

export const socialLink = [
	{ Icon: LinkedinIcon, link: "/linkedin" },
	{ Icon: TelegramIcon, link: "/telegram" },
	{ Icon: DiscordIcon, link: "/discord" },
];

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const revalia = Revalia({
	subsets: ["latin"],
	weight: "400",
});

export const steps: StepItem[] = [
	{
		id: 1,
		title: "idea",
		img: "/assets/images/idea.png",
		description:
			"We begin by meeting with your team to determine your key requirements and specifications. Through in-depth discussion, we gain a better understanding of your business goals.",
	},
	{
		id: 2,
		title: "business analysis",
		img: "/assets/images/business.png",
		description:
			"In cooperation with you, we create optimal workflow plan based on your inquiries. We determine the appropriate software and frameworks to provide a scalable solution.",
	},
	{
		id: 3,
		title: "design",
		img: "/assets/images/design.png",
		description:
			"A great design, combined with useful features, leads to a successful product. We give you ideas for an accessible and intuitive user interface options.",
	},
	{
		id: 4,
		title: "development",
		img: "/assets/images/development.png",
		description:
			"Our goal is to be your long-term partner, not just another vendor. We strive to build software that withstands the test of time and truly transforms your business. With an iterative development process, we offer software solutions that evolve through collaboration to meet your needs.",
	},
	{
		id: 5,
		title: "testing",
		img: "/assets/images/test.png",
		description:
			"Software testing is a crucial part of our development process. We employ both, manual and automated testing methods to ensure your application and system functionality operate as designed.",
	},
	{
		id: 6,
		title: "deployment",
		img: "/assets/images/deployment.png",
		description:
			"Once your software has been developed and tested, the final step is deployment. No matter which deployment model you choose, our team can make the process seamless, so you can focus on growing your business.",
	},
	{
		id: 7,
		title: "maintenance and support",
		img: "/assets/images/maintainance.png",
		description:
			"As your business grows, your software needs to scale with it. Our engineers can optimize software performance and make necessary upgrades to support your expansion.",
	},
];

export const users = [
	{
		id: 1,
		name: "Alice",
		bioTitle: "Nice Job",
		bio: "I had the pleasure of working with SilverDigital Bus on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Silver Digital Bus for anyone looking for a talented and professional software development team.",
		img: "/assets/images/avatar-1.png",
	},
	{
		id: 2,
		name: "Bob",
		bioTitle: "Good",
		bio: "I had the pleasure of working with SilverDigital Bus on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Silver Digital Bus for anyone looking for a talented and professional software development team.",
		img: "/assets/images/avatar-2.png",
	},
	{
		id: 3,
		name: "Charlie",
		bioTitle: "Nice Day",
		bio: "I had the pleasure of working with SilverDigital Bus on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Silver Digital Bus for anyone looking for a talented and professional software development team.",
		img: "/assets/images/avatar-3.png",
	},
];

type FavorItem = {
	id: string;
	title: string;
	description: string;
	icon: string;
};

export const favors: FavorItem[] = [
	{
		id: "f1",
		title: "COMPLETE PRODUCT TEAM",
		description:
			"Access Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, or Full-stack developers.",
		icon: "/assets/images/favor-1.png",
	},
	{
		id: "f2",
		title: "FAST ITERATION & FREQUENT RELEASES",
		description:
			"Pre-build components and our own templates let our team deliver more in each sprint - this is the perk of having such experienced web developers on board.",
		icon: "/assets/images/favor-2.png",
	},
	{
		id: "f3",
		title: "BUSINESS-TAILORED ARCHITECTURE",
		description:
			"Always designed and developed with your company’s growth and the product’s scalability in mind.",
		icon: "/assets/images/favor-3.png",
	},
	{
		id: "f4",
		title: "THOROUGH QUALITY ASSURANCE",
		description:
			"We do QA before each deploy through manual and automated tests that catch bugs, performance issues, and conversion blockers.",
		icon: "/assets/images/favor-4.png",
	},
	{
		id: "f5",
		title: "SCALABLE & SECURE INFRASTRUCTURE",
		description:
			"Web development services full of custom solutions optimized for efficiency, flexibility, and deployment speed.",
		icon: "/assets/images/favor-5.png",
	},
	{
		id: "f6",
		title: "WORLD-CLASS UI/UX",
		description:
			"Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression. Designed to help your business with user adoption.",
		icon: "/assets/images/favor-6.png",
	},
];
