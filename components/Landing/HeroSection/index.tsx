import HeroDescription from "./HeroDescription";

export default function HeroSection() {
	return (
		<section className="relative min-h-[90vh] md:min-h-[75vh] lg:h-[1080px] overflow-hidden">
			{/* Video wrapper */}
			<div className="absolute inset-0 w-full h-full z-0">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="w-full h-full object-cover"
				>
					<source src="/assets/videos/hero-video.mp4" type="video/mp4" />
				</video>

				{/* Gradient overlay ONLY on the video */}
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,1))",
					}}
				/>
			</div>

			{/* Hero content */}
			<div className="relative z-20 max-w-[1440px] mx-auto px-5 sm:px-6 sm:py-20 lg:px-8 md:py-25 lg:py-[122px] h-full flex">
				<div className="w-full lg:max-w-[1044px]">
					<HeroDescription />
				</div>
			</div>
		</section>
	);
}
