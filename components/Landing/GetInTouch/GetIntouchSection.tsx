import { ROUTES } from "@/lib/constants";
import Link from "next/link";

export default function GetInTouchSection() {
	return (
		<section
			className="
        flex flex-col items-center justify-center
        min-h-screen
        
        text-center
      "
			style={{ backgroundImage: "url('/assets/images/getintouch-back.png')" }}
		>
			{/* Heading */}

			<h1
				className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl
           text-center leading-snug 
           relative stroke-text"
			>
				Connecting the dots so the system runs like clockwork
			</h1>
			{/* Button Container */}
			<div className="w-full flex justify-center">
				<Link
					href={ROUTES.REGISTER}
					className="
            inline-flex items-center justify-center
            bg-[#FF7C7CCC] hover:bg-[#FF7C7C]
            text-white
            px-6 sm:px-8
            py-3 sm:py-4
            rounded-full
            text-base sm:text-lg md:text-xl
            font-bold
            transition-all duration-300
            hover:scale-105
            hover:shadow-xl
            w-full sm:w-auto
            max-w-xs sm:max-w-sm md:max-w-md
            drop-shadow-[2px_8px_8px_rgba(0,0,0,0.8)]
          "
				>
					Get in Touch
				</Link>
			</div>
		</section>
	);
}
