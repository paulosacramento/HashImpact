
export interface Organization {
  name: string;
  description: string;
  lightningAddress: string;
  impact: string;
}

export const featuredOrganizations: Organization[] = [
  {
    name: "Bitcoin Education Initiative",
    description: "Teaching Bitcoin fundamentals in developing regions",
    lightningAddress: "donate@bitcoinedu.org",
    impact: "500+ students educated"
  },
  {
    name: "Open Source Bitcoin Tools",
    description: "Funding development of Bitcoin privacy tools",
    lightningAddress: "funding@btctools.dev",
    impact: "12 tools maintained"
  },
  {
    name: "Lightning Network Adoption",
    description: "Onboarding merchants to Lightning payments",
    lightningAddress: "support@lnadopt.com",
    impact: "200+ merchants onboarded"
  }
];
