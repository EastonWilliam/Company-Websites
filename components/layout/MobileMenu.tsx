"use client";

import Link from "next/link";
import { X } from "lucide-react";

type Props = {
	open: boolean;
	onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
	return (
		<div
			className={`fixed inset-0 z-50 ${
				open ? "pointer-events-auto" : "pointer-events-none"
			}`}
		>
			<div
				onClick={onClose}
				className={`absolute inset-0 bg-black/40 transition-opacity ${
					open ? "opacity-100" : "opacity-0"
				}`}
			/>

			<div
				className={`absolute right-0 top-0 h-full w-full transform bg-gradient-to-br from-[#FF7C7C] to-[#994B4B]
        transition-transform duration-500 ease-in-out ${
					open ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<button onClick={onClose} className="absolute right-6 top-6 text-white">
					<X size={28} />
				</button>

				<div className="flex h-full flex-col justify-center px-10 text-white">
					{["login", "register", "support", "about"].map((item) => (
						<Link
							key={item}
							href={`/${item}`}
							onClick={onClose}
							className="relative mb-6 text-2xl after:absolute after:-bottom-1 after:left-0 after:h-[3px]
              after:w-0 after:bg-white after:transition-all hover:after:w-6"
						>
							{item}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
