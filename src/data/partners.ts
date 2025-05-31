
import { Zap, Users, Target } from "lucide-react";

export interface Partner {
  title: string;
  description: string;
  linkText: string;
  linkUrl?: string;
  icon: any;
}

export const partners: Partner[] = [
  {
    title: "Braiins Pool",
    description: "Leading mining pool that enables custom Lightning address payouts, making this project possible.",
    linkText: "Visit Braiins Pool",
    icon: Zap
  },
  {
    title: "Bitcoin Community",
    description: "Built by and for the Bitcoin community. Open source and transparent.",
    linkText: "Join the Community",
    icon: Users
  },
  {
    title: "Technical Contributors",
    description: "Special thanks to developers and technical contributors who help maintain this project.",
    linkText: "Contribute on GitHub",
    icon: Target
  }
];
