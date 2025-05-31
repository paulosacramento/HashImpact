
import { Zap, Users, Target } from "lucide-react";

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: any;
  videoLink?: string;
  videoLinkText?: string;
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Get Your Gear Ready",
    description: "You'll need a low-power Bitcoin miner — something like a Bitaxe is perfect. These devices are energy-efficient, quiet, and ideal for home use.",
    icon: Zap,
    videoLink: "https://www.youtube.com/watch?v=QAwSXZ3L7Pc&t=1424s",
    videoLinkText: "Video tutorial"
  },
  {
    number: "02",
    title: "Choose Braiins Mining Pool",
    description: "Pick a mining pool that lets you set a custom payout Lightning address, such as Braiins.",
    icon: Target,
    videoLink: "https://youtu.be/jC-Wp4J4Jb4?si=51H-LAqZnRlrRL1G&t=1292",
    videoLinkText: "View full Braiins tutorial"
  },
  {
    number: "03",
    title: "Enter the Organization's Lightning Address",
    description: "In the pool configuration, set the Lightning address of the non-profit you want to support.",
    icon: Users
  },
  {
    number: "04",
    title: "Start Mining",
    description: "Power up your miner, confirm it's hashing, and let it run. The rewards go directly to the chosen organization — no intermediaries needed.",
    icon: Zap
  }
];
