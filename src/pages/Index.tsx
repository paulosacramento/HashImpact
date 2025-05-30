import { ArrowDown, Zap, Users, Target, ExternalLink, Upload, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PledgeGenerator } from "@/components/PledgeGenerator";
import { OrganizationCard } from "@/components/OrganizationCard";
const Index = () => {
  const steps = [{
    number: "01",
    title: "Get Your Gear Ready",
    description: "You'll need a low-power Bitcoin miner — something like a Bitaxe is perfect. These devices are energy-efficient, quiet, and ideal for home use.",
    icon: <Zap className="w-8 h-8 text-orange-500" />
  }, {
    number: "02",
    title: "Choose Braiins Mining Pool",
    description: "Pick a mining pool that lets you set a custom payout Lightning address, such as Braiins.",
    icon: <Target className="w-8 h-8 text-blue-500" />
  }, {
    number: "03",
    title: "Enter the Organization's Lightning Address",
    description: "In the pool configuration, set the Lightning address of the non-profit you want to support.",
    icon: <Users className="w-8 h-8 text-green-500" />
  }, {
    number: "04",
    title: "Start Mining",
    description: "Power up your miner, confirm it's hashing, and let it run. The rewards go directly to the chosen organization — no intermediaries needed.",
    icon: <Zap className="w-8 h-8 text-purple-500" />
  }];
  const featuredOrganizations = [{
    name: "Bitcoin Education Initiative",
    description: "Teaching Bitcoin fundamentals in developing regions",
    lightningAddress: "donate@bitcoinedu.org",
    impact: "500+ students educated"
  }, {
    name: "Open Source Bitcoin Tools",
    description: "Funding development of Bitcoin privacy tools",
    lightningAddress: "funding@btctools.dev",
    impact: "12 tools maintained"
  }, {
    name: "Lightning Network Adoption",
    description: "Onboarding merchants to Lightning payments",
    lightningAddress: "support@lnadopt.com",
    impact: "200+ merchants onboarded"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="inline-flex items-center rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400 mb-6 border border-yellow-500/30">
              <Zap className="w-4 h-4 mr-2" />
              HashImpact Project
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Turn Mining Power Into Positive Change
            </h1>
          </div>
          
          {/* Image container */}
          <div className="mx-auto max-w-2xl mb-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img src="/lovable-uploads/84863232-7298-4ab5-9c6a-f3e72f8f2427.png" alt="Bitaxe Bitcoin miners" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-gray-300">
            <p className="text-base">What if your Bitcoin miner could do more than just earn you sats? What if it could fund education and help onboard new users to Bitcoin in underprivileged regions — all while humming in the background?</p>
            <p>This guide shows you how to direct the rewards from your low-power Bitcoin miner to vetted organizations using Lightning addresses.


It also helps you chose an organisation that will the most positively impacted by your contribution due to the circumstances or price levels and cost of living in their country.


It's easy to set up, requires no prior coding experience, and turns energy into meaningful impact.</p>
            <p>Whether you've just unboxed a Bitaxe or have a miner running for a long time, you can join a decentralized community that's channeling hashpower for good.</p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold px-8 py-3 text-lg">
              Start Your Impact Journey
            </Button>
            
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
          </div>
        </div>
      </section>

      {/* Featured Organizations - Moved to second position */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-gray-800">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Featured Organizations
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover some of the amazing organizations you can support with your mining rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredOrganizations.map((org, index) => <OrganizationCard key={index} organization={org} />)}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="bg-slate-800/50 hover:bg-slate-700/50 px-8 py-3 text-lg border-2 border-yellow-500/50 text-yellow-400 hover:text-yellow-300" asChild>
              <a href="https://docs.google.com/spreadsheets/d/1GQvSrFTnYREAJ-7rrAU9r9ky10ybeIdH7j0zz63YTwU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                📊 View All Supported Organizations
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section id="guide" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900/20 to-yellow-900/20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              🔧 Step-by-Step Guide
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Follow these simple steps to redirect your mining rewards to organizations making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center text-sm font-bold text-yellow-400 group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    <div className="group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                  {step.title.includes("Braiins") && <Button variant="link" className="mt-3 p-0 h-auto text-yellow-400 hover:text-yellow-300">
                      View full Braiins tutorial
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>}
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Pledge Generator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900/20 to-yellow-900/20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              📢 Make Your Pledge
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Show your commitment to support an organization with your hashrate. Create a shareable pledge card.
            </p>
          </div>
          
          <PledgeGenerator />
        </div>
      </section>

      {/* Get Listed CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            📬 Get Your Organization Listed
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you running a non-profit that aligns with Bitcoin's mission? Apply to be included in our supported organizations list.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold px-8 py-3 text-lg">
            Submit Your Organization
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-yellow-500/20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-300">
              A project by the HashImpact community – Bridging Bitcoin mining and global good.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            <span>|</span>
            <a href="#privacy" className="hover:text-yellow-400 transition-colors">Privacy</a>
            <span>|</span>
            <a href="#github" className="hover:text-yellow-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;