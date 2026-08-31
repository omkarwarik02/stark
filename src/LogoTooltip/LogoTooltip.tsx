import { useState, type ReactNode } from "react";

interface LogoTooltipProps {
  logo: ReactNode;
  label: string;
  size?: number;
  className?: string;
}

export default function LogoTooltip({
  logo,
  label,
  size = 32,
  className,
}: LogoTooltipProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div className={className}>
        <div
          className="[&_img]:w-full [&_img]:h-full [&_img]:object-contain relative"
          style={{ width: size, height: size }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering && (
            <div className="flex items-center justify-center gap-1.5 bg-[#464858] rounded-lg  absolute bottom-full left-1/2 -translate-x-1/2 ">
              <span className="text-xs text-white py-1 px-3">{label}</span>
            </div>
          )}
          {logo}
        </div>
      </div>
    </>
  );
}
