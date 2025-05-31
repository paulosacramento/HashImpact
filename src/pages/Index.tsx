
import { ArrowDown, Zap, Users, Target, ExternalLink, Upload, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PledgeGenerator } from "@/components/PledgeGenerator";
import { SectionSeparator } from "@/components/SectionSeparator";
import { PartnerCard } from "@/components/PartnerCard";
import { EditableOrganizationCard1 } from "@/components/EditableOrganizationCard1";
import { EditableOrganizationCard2 } from "@/components/EditableOrganizationCard2";
import { EditableOrganizationCard3 } from "@/components/EditableOrganizationCard3";

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
  const partners = [{
    title: "Braiins Pool",
    description: "Leading mining pool that enables custom Lightning address payouts, making this project possible.",
    linkText: "Visit Braiins Pool",
    icon: <Zap className="w-6 h-6 text-blue-400" />
  }, {
    title: "Bitcoin Community",
    description: "Built by and for the Bitcoin community. Open source and transparent.",
    linkText: "Join the Community",
    icon: <Users className="w-6 h-6 text-green-400" />
  }, {
    title: "Technical Contributors",
    description: "Special thanks to developers and technical contributors who help maintain this project.",
    linkText: "Contribute on GitHub",
    icon: <Target className="w-6 h-6 text-purple-400" />
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
              <img alt="Bitaxe Bitcoin miners" className="w-full h-full object-cover" src="/lovable-uploads/889526d5-d5e3-4fcc-ba16-85672464fd6f.png" />
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-gray-300">
            <p className="text-2xl">What if your home Bitcoin miner could power real change in underprivileged regions?</p>
            <p>If you already own a BitAxe, NerdQaxe, or Canaan Avalon (Nano / Mini 3 / Q) and live in a high-income country, the rewards from your home Bitcoin miner likely don't make a significant difference in your life.</p>
            <p>This guide shows you how to redirect those rewards—via Lightning addresses—to trusted organizations in lower-income regions, where even small contributions can go much further.</p>
            
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

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-gray-800">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-white">
                  Mission: Turn Hobby Mining into Meaningful Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 leading-relaxed">
                  Your Bitcoin miner can do more than earn sats — it can help fund education, support communities, and onboard new users in underserved regions. We help hobby miners direct their rewards to trusted Bitcoin-related non-profits.
                </div>
              </CardContent>
            </Card>

            {/* Problem */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-white">
                  Problem: Limited Value, Missed Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 leading-relaxed">
                  In high-income countries, mining rewards are often too small to matter. But those same sats could go much further in regions with weaker currencies and greater need — where Bitcoin can truly empower.
                </div>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-white">
                  Solution: Simple Setup, Maximum Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 leading-relaxed">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Easy Setup – Step-by-step guides to get your miner ready.</span>
                  </div>
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Smart Matching – Choose an org based on the type on region or economic impact.</span>
                  </div>
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Seamless Giving – Use Lightning addresses to send rewards with minimal fees.</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-white">
                  Impact: Mining That Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 leading-relaxed">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Support vital work in hard-to-reach areas.</span>
                  </div>
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Strengthen circular Bitcoin economies.</span>
                  </div>
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Show the world that mining can be for good — not just profit.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            <EditableOrganizationCard1 />
            <EditableOrganizationCard2 />
            <EditableOrganizationCard3 />
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="bg-slate-800/50 hover:bg-slate-700/50 px-8 py-3 text-lg border-2 border-yellow-500/50 text-yellow-400 hover:text-yellow-300" asChild>
              <a href="https://docs.google.com/spreadsheets/d/1GQvSrFTnYREAJ-7rrAU9r9ky10ybeIdH7j0zz63YTwU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                📊 View All Listed Organizations
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <SectionSeparator imageUrl="/lovable-uploads/a96e0b77-b82a-4c10-804b-626f027c29de.png" alt="Global Bitcoin network with mining nodes and lightning connections" />

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
            {/* Step 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center text-sm font-bold text-yellow-400 group-hover:scale-110 transition-transform">
                    01
                  </div>
                  <div className="group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-orange-500" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  Get Your Bitaxe Ready
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  You'll need a low-power Bitcoin miner — something like a Bitaxe is perfect. These devices are energy-efficient, quiet, and ideal for home use. Watch the video until 30:00.
                </p>
                <Button variant="link" className="mt-3 p-0 h-auto text-yellow-400 hover:text-yellow-300" asChild>
                  <a href="https://www.youtube.com/watch?v=QAwSXZ3L7Pc&t=1424s" target="_blank" rel="noopener noreferrer">
                    Video tutorial
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center text-sm font-bold text-yellow-400 group-hover:scale-110 transition-transform">
                    02
                  </div>
                  <div className="group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  Choose Braiins Mining Pool
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Pick a mining pool that lets you set a custom payout Lightning address, such as Braiins. Watch the video until 29:10.
                </p>
                <Button variant="link" className="mt-3 p-0 h-auto text-yellow-400 hover:text-yellow-300" asChild>
                  <a href="https://youtu.be/jC-Wp4J4Jb4?si=2CY4vADA8fnIefVe&t=1294" target="_blank" rel="noopener noreferrer">
                    View full Braiins tutorial
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center text-sm font-bold text-yellow-400 group-hover:scale-110 transition-transform">
                    03
                  </div>
                  <div className="group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  Enter the Organization's Lightning Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  In the previous step, enter the Lightning address of the organization you want to support instead of your own. That's it.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center text-sm font-bold text-yellow-400 group-hover:scale-110 transition-transform">
                    04
                  </div>
                  <div className="group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  Let It Run
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Just let the miner run — funds will go to the organization you chose. You can track payouts on the Braiins dashboard.
                </p>
              </CardContent>
            </Card>
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

      {/* Partners and Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900/20 to-yellow-900/20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              🤝 Partners and Support
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              This project is made possible by the support of our partners and the Bitcoin community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {partners.map((partner, index) => <PartnerCard key={index} partner={partner} partnerId={`partner-${index}`} />)}
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-lg mb-6">
              Want to support this project or become a partner?
            </p>
            <Button size="lg" variant="outline" className="bg-slate-800/50 hover:bg-slate-700/50 px-8 py-3 text-lg border-2 border-yellow-500/50 text-yellow-400 hover:text-yellow-300">
              Get in Touch
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
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
