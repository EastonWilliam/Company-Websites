import FavorsSectionContent from "./FacvorsSectionContent";

export const FavorsSection = () => {
	return (
		<section className="relative w-full h-[880px] py-15 md:py-20 bg-white mt-[-100px] z-10">

			{/* Background Layer */}
			<div
				className="absolute inset-0 bg-no-repeat bg-cover bg-top md:bg-center pointer-events-none z-0"
				style={{ backgroundImage: "url('/assets/images/favorsection.png')" }}
			/>

			{/* Content Layer */}
			<div className="relative z-10">
				<FavorsSectionContent />
			</div>

		</section>
	);
};