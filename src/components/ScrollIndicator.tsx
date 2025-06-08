
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  variant?: "primary" | "secondary";
  className?: string;
}

export const ScrollIndicator = ({ 
  variant = "primary", 
  className 
}: ScrollIndicatorProps) => {
  return (
    <div className={cn(
      "flex justify-center items-center py-8",
      className
    )}>
      <div className={cn(
        "animate-bounce cursor-pointer transition-all duration-300 hover:scale-110",
        variant === "primary" 
          ? "text-yellow-400 hover:text-yellow-300" 
          : "text-gray-400 hover:text-gray-300"
      )}>
        <ArrowDown 
          className={cn(
            "drop-shadow-lg",
            variant === "primary" ? "w-8 h-8" : "w-6 h-6"
          )} 
        />
      </div>
    </div>
  );
};
