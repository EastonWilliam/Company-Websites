import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { poppins, revalia } from "@/lib/constants";

export default function HeroDescription() {
	return (
		<div className="w-full flex flex-col py-40 sm:py-10 gap-6 md:gap-8 lg:gap-12 lg:items-start lg:text-left ">
			{/* Who we are */}
			<div className="flex gap-4 w-full md:justify-center lg:justify-start items-center">
				<h4
					className={`${poppins.className} text-sm sm:text-base lg:text-lg font-semibold text-white whitespace-nowrap`}
				>
					Who we are
				</h4>

				{/* Line */}
				<div className="flex-1 h-[2px] bg-[#FF7C7CCC]" />
			</div>

			{/* Main Content */}
			<div className="flex flex-col gap-4 lg:gap-6 lg:items-start w-full">
				{/* Big Title */}
				<h1
					className={`
            ${revalia.className}
            text-[#FF7C7CCC]
            text-[68px] sm:text-[68px] md:text-[90px] lg:text-[128px]
            leading-[0.9] lg:leading-[0.8]
            tracking-[-1px] lg:tracking-[-2px]
            drop-shadow-[2px_8px_8px_rgba(0,0,0,0.8)]
          `}
				>
					B
					<span
						className={`
              ${revalia.className}
              text-white
              text-[32px] sm:text-[32px] md:text-[45px] lg:text-[60px]
            `}
					>
						uilding Long-Term Remote Engineering Teams for US Product Companies
					</span>
				</h1>

				{/* Subtitle */}
				<p
					className={`${poppins.className}
            text-white
            text-base sm:text-lg lg:text-xl
            font-semibold
          `}
				>
					We connect experienced global software engineers with high-quality US
					tech teams through a structured, interview-driven placement and
					collaboration model — designed for trust, stability, and long-term
					success
				</p>
			</div>

			{/* CTA Button */}
			<div className="w-full flex justify-center md:justify-start lg:justify-start">
				<Link
					href={ROUTES.REGISTER}
					className={`
      inline-flex items-center justify-center
      bg-[#FF7C7CCC] hover:bg-[#FF7C7C]
      text-white
      px-8
      py-4
      rounded-full
      text-lg sm:text-xl
      font-bold
      transition-all duration-300
      w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]
      
      drop-shadow-[2px_8px_8px_rgba(0,0,0,0.8)]
    `}
				>
					Get in Touch
				</Link>
			</div>
		</div>
	);
}
