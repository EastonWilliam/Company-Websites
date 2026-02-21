"use client";

import Link from "next/link";
import Image from "next/image";

import { footerNavs, socialLink } from "@/lib/constants";
import { poppins, revalia } from "@/lib/constants";
import Logo from "./Logo";

export default function Footer() {
	return (
		<section className="relative h-[500px] max-h-[500px] overflow-hidden bg-[#0B0B0F]">
			{/* Background */}
			<Image
				src="/assets/images/footer-back.png"
				alt="Footer background"
				fill
				className="absolute inset-0 z-0 object-cover"
				priority
			/>

			{/* Main wrapper */}
			<div className="relative z-20 mx-auto flex h-full w-full items-center justify-between">
				{/* LEFT — Video */}
				<div className="relative hidden h-full w-[40%] lg:block">
					{/* Visible viewport */}
					<div className="relative h-full overflow-hidden">
						<video
							autoPlay
							loop
							muted
							playsInline
							className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
      "
						>
							<source src="/assets/videos/footerVideo.mp4" type="video/mp4" />
						</video>

						{/* Logo — perfectly centered */}
						<div
							className="
      pointer-events-none
      absolute
      inset-0
      z-20
      flex
      items-center
      justify-center
    "
						>
							<Logo width={180} />
						</div>
					</div>
				</div>

				{/* RIGHT — Content */}
				<div className="ml-auto flex w-full flex-col gap-10 px-10 lg:w-[60%] lg:px-25">
					{/* Heading */}
					<h1
						className={`text-[32px] leading-tight text-white sm:text-[40px] lg:text-[56px] ${revalia.className}`}
					>
						<span className="text-[#FF7C7C]">Work </span>
						With Us
					</h1>

					{/* Email input */}
					<div className="flex flex-col gap-4 rounded-[20px] border border-white px-6 py-4 sm:flex-row sm:items-center">
						<input
							type="email"
							placeholder="Enter your email"
							className={`w-full bg-transparent text-[16px] text-gray-300 outline-none sm:text-[18px] ${poppins.className}`}
						/>

						<Link
							href="/register"
							className="
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#FF7C7C]
                px-6
                py-3
                text-[16px]
                text-white
                transition
                hover:opacity-90
                sm:min-w-[160px]
                sm:text-[18px]
              "
						>
							Get Started
						</Link>
					</div>

					{/* Nav + Social */}
					<div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
						{/* Nav */}
						<div className="grid grid-cols-2 gap-8 sm:grid-cols-2 w-[50%] px-5">
							{footerNavs.map((nav, i) => (
								<div key={i} className="flex flex-col items-start gap-4">
									<p
										className={`mb-4 text-[16px] font-bold uppercase text-white sm:text-[18px] ${poppins.className}`}
									>
										{nav.subtitle}
									</p>

									<div className="flex flex-col gap-2">
										{nav.contents.map((item, j) => (
											<Link
												key={j}
												href={item.link}
												className="text-[14px] capitalize text-gray-400 transition hover:text-white sm:text-[16px]"
											>
												{item.title}
											</Link>
										))}
									</div>
								</div>
							))}
						</div>

						{/* Social */}
						<div className="flex flex-col items-start gap-4 md:items-end px-5">
							<div className="flex gap-4">
								{socialLink.map(({ Icon }, i) => (
									<Icon key={i} width={32} height={32} />
								))}
							</div>

							<p className={`text-[14px] text-gray-400 ${poppins.className}`}>
								© 2025 Digital Moon.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
