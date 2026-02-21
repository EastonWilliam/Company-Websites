"use client";

interface SeekButtonProps {
	top: number;
}

export const SeekButton = ({ top }: SeekButtonProps) => {
	return (
		<div
			className="
        hidden md:block
        absolute
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[30px] md:w-[40px]
        h-[60px] md:h-[80px]
        bg-cover
        transition-[top]
        duration-300
        ease-out
      "
			style={{
				top: `${top}px`,
				backgroundImage: "url('/assets/icons/seekbutton.png')",
			}}
		/>
	);
};
