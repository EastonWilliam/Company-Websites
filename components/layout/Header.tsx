"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import HamburgerButton from "../ui/Buttons/Hamburger";
import { useDeviceType } from "@/hooks/useDeviceType";

export default function Header() {
	const { isDesktop } = useDeviceType();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 80) {
				// scrolling down
				setIsHidden(true);
			} else {
				// scrolling up
				setIsHidden(false);
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<header
				className={`fixed top-0 left-0 w-full h-[84px] bg-zinc-900 shadow-md z-50 flex items-center transition-transform duration-300 ease-in-out ${isHidden ? "-translate-y-full" : "translate-y-0"
					}`}
			>
				<div className="w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
					{isDesktop ? (
						<DesktopNav />
					) : (
						<div className="flex items-center justify-between h-16 w-full">
							<Logo />
							<HamburgerButton
								open={isMobileMenuOpen}
								onClick={() => setIsMobileMenuOpen(true)}
							/>
						</div>
					)}
				</div>
			</header>

			<MobileMenu
				open={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
			/>
		</>
	);
}