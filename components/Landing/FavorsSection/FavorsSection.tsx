import FavorsSectionContent from "./FacvorsSectionContent";

export const FavorsSection = () => {
	return (
		<section className="relative w-full h-[850px] py-12 md:py-20 overflow-visible bg-white mt-[-90px] z-10">
			<div
				className="
                absolute inset-0
                bg-no-repeat
                bg-cover
                bg-top md:bg-center
                pointer-events-none
                select-none
                z-0
                "
				style={{ backgroundImage: "url('/assets/images/favorsection.png')" }}
			>
				<div className="relative z-10">
					<FavorsSectionContent />
				</div>
			</div>
		</section>
	);
};
