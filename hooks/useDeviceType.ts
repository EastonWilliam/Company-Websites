"use client";

import { useEffect, useState } from "react";

export function useDeviceType() {
	const [isDesktop, setIsDesktop] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 1024); // Assuming 1024px as the breakpoint for desktop
		};

		handleResize(); // Initialize the state on component mount
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { isDesktop };
}
