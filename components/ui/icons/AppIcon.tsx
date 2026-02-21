// import { FC } from "react";

// import { colors } from "@theme/themePrimitives";
// import LogoIcon from "@/assets/icons/logo.svg";
// import DownIcon from "@/assets/icons/down.svg";

// export const ICONS_MAP = {
//     logo: LogoIcon,
//     "arrow-icon": ArrowIcon,
//     "arrow-down": DownIcon,
// };

// export type IconName = keyof typeof ICONS_MAP;

// interface AppIconProps {
//     name: IconName
//     width?: number
//     height?: number
//     size?: number
//     color?: keyof typeof colors
//     borderRadius?: string
//     className?: string
// }

// export const AppIcon: FC<AppIconProps> = ({
//     name,
//     color,
//     size = 20,
//     width,
//     height,
//     borderRadius,
//     className
// }) => {
//     const IconComponent = ICONS_MAP[name];

//     if (!IconComponent) {
//         console.warn(`Icon with name "${name}" does not exist.`);
//         return null;
//     }

//     const finalWidth = width ?? size;
//     const finalHeight = height ?? size;

//     return (
//         <div
//             className={'flex items-center justify-center ' + className}
//             style={{
//                 color: color ? colors[color] : undefined
//             }}
//         >
//             <IconComponent width={finalWidth} height={finalHeight} color={color} />
//         </div>
//     )
// }
