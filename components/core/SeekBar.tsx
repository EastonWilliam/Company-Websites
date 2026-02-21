"use client";

export const SeekBar = () => {
	return (
		<div
			className="
        hidden md:flex
        absolute
        left-1/2 -translate-x-1/2
        top-[350px]
        h-[calc(100%-350px)]
        w-[4px]
        opacity-40
        rounded
      "
			style={{
				backgroundImage: "linear-gradient(white 50%, transparent 50%)",
				backgroundSize: "4px 12px",
				backgroundRepeat: "repeat-y",
			}}
		/>
	);
};
