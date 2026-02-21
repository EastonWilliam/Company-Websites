import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LandingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="min-h-screen flex flex-col text-text">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
}
