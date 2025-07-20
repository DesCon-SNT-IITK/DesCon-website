import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function Logo({ className, width = 24, height = 24 }: LogoProps) {
  return (
    <Image
      src="/DesCon.png"
      alt="DesCon IITK Hub Logo"
      width={width}
      height={height}
      className={cn("rounded-full", className)}
    />
  );
}
