"use client";

type Props = {
	open: boolean;
	onClick: () => void;
};

export default function HamburgerButton({ open, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
		>
			<span
				className={`h-[2px] w-6 bg-white transition ${open && "rotate-45 translate-y-2"}`}
			/>
			<span
				className={`h-[2px] w-6 bg-white transition ${open && "opacity-0"}`}
			/>
			<span
				className={`h-[2px] w-6 bg-white transition ${open && "-rotate-45 -translate-y-2"}`}
			/>
		</button>
	);
}
