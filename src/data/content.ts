
export interface HeroContent {
  badge: {
    text: string;
    icon: string;
  };
  title: string;
  heroImage: {
    src: string;
    alt: string;
  };
  subtitle: string;
  description: string[];
  ctaButton: {
    text: string;
    action: string;
  };
}

export interface SectionContent {
  title: string;
  subtitle?: string;
  description?: string;
}

export const heroContent: HeroContent = {
  badge: {
    text: "HashImpact Project",
    icon: "zap"
  },
  title: "Turn Mining Power Into Positive Change",
  heroImage: {
    src: "/lovable-uploads/889526d5-d5e3-4fcc-ba16-85672464fd6f.png",
    alt: "Bitaxe Bitcoin miners"
  },
  subtitle: "What if your home Bitcoin miner could power real change in underprivileged regions?",
  description: [
    "If you already own a BitAxe, NerdQaxe, or Canaan Avalon (Nano / Mini 3 / Q) and live in a high-income country, the rewards from your home Bitcoin miner likely don't make a significant difference in your life.",
    "This guide shows you how to redirect those rewards—via Lightning addresses—to trusted organizations in lower-income regions, where even small contributions can go much further."
  ],
  ctaButton: {
    text: "Start Your Impact Journey",
    action: "scroll-to-guide"
  }
};

export const sectionsContent = {
  featuredOrganizations: {
    title: "Featured Organizations",
    subtitle: "Discover some of the amazing organizations you can support with your mining rewards",
    externalLink: {
      text: "📊 View All Listed Organizations",
      url: "https://docs.google.com/spreadsheets/d/1GQvSrFTnYREAJ-7rrAU9r9ky10ybeIdH7j0zz63YTwU/edit?usp=sharing"
    }
  },
  stepByStepGuide: {
    title: "🔧 Step-by-Step Guide",
    subtitle: "Follow these simple steps to redirect your mining rewards to organizations making a difference"
  },
  pledgeGenerator: {
    title: "📢 Make Your Pledge",
    subtitle: "Show your commitment to support an organization with your hashrate. Create a shareable pledge card."
  },
  getListedCta: {
    title: "📬 Get Your Organization Listed",
    subtitle: "Are you running a non-profit that aligns with Bitcoin's mission? Apply to be included in our supported organizations list.",
    ctaButton: {
      text: "Submit Your Organization",
      action: "external-link"
    }
  },
  partnersSupport: {
    title: "🤝 Partners and Support",
    subtitle: "This project is made possible by the support of our partners and the Bitcoin community",
    ctaButton: {
      text: "Get in Touch",
      action: "contact"
    }
  }
};

export const footerContent = {
  description: "A project by the HashImpact community – Bridging Bitcoin mining and global good.",
  links: [
    { text: "Contact", href: "#contact" },
    { text: "Privacy", href: "#privacy" },
    { text: "GitHub", href: "#github" }
  ]
};
