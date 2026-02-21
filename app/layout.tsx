import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Digital Moon",
	description: "SilverDigitalBus Team",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} bg-background text-text antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
