import { ArrowDown, Zap, Users, Target, ExternalLink, Upload, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  // Random company logos with 1:1 aspect ratio
  const companyLogos = [{
    name: "Bitcoin Design Community",
    logo: "/lovable-uploads/ac2c1c00-76fb-4ea0-b819-92b9515ef4d1.png"
  }, {
    name: "256 Foundation",
    logo: "/lovable-uploads/954001e3-627d-40c4-a3bb-012085857025.png"
  }, {
    name: "Federation of Bitcoin Circular Economies",
    logo: "/lovable-uploads/b5695891-e91d-4d45-b94a-8a368df81de7.png"
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
              HashImpact.Social
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Turn Mining Power Into Positive Change
            </h1>
          </div>
          
          {/* Image container */}
          <div className="mx-auto max-w-2xl mb-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img alt="Global Bitcoin network with mining nodes and lightning connections" className="w-full h-full object-cover" src="/lovable-uploads/583c80b6-72cd-4922-b72e-21ff331f6d43.png" />
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-gray-300">
            <p className="text-2xl">What if your home Bitcoin miner could power real change in underprivileged regions?</p>
            <p>If you already own a BitAxe, NerdQaxe, or Canaan Avalon (Nano / Mini 3 / Q) and live in a high-income country, the rewards from your home Bitcoin miner likely don't make a significant difference in your life.</p>
            
            {/* Standout Card */}
            <Card className="group bg-gradient-to-r from-yellow-500 to-amber-600 border-2 border-yellow-400 backdrop-blur-sm hover:border-yellow-300 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/40 transform hover:scale-[1.02] mx-auto max-w-2xl">
              <CardContent className="p-8">
                <p className="text-xl font-bold text-black leading-relaxed">HashImpact helps individual miners based in wealthy countries to channel their Bitcoin mining earnings into trusted organisations in underdeveloped regions. HashImpact is NOT a pool.</p>
              </CardContent>
            </Card>
            
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            
            
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
                    <span>Smart Matching – Choose an org based on region or potential economic impact of your contribution.</span>
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

      {/* Impact Calculation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-y border-green-500/20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-green-500/20 px-6 py-3 text-sm font-medium text-green-400 mb-8 border border-green-500/30">
            <Target className="w-5 h-5 mr-2" />
            Real Impact Calculator
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Your Mining Power in Action
          </h2>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-green-500/20 p-8 mb-6">
            <div className="text-6xl font-bold text-green-400 mb-4">$400</div>
            <p className="text-xl text-gray-300 mb-4">
              Assuming a Bitcoin price of $100,000, <span className="text-yellow-400 font-semibold">twenty Bitaxes</span> would collectively send approximately <span className="text-green-400 font-semibold">$400</span> over the course of one year.
            </p>
            <p className="text-lg text-gray-400">
              While this might seem modest in a high-income country, it can make a significant difference in regions where the average daily income is much lower.
            </p>
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
      <SectionSeparator imageUrl="/lovable-uploads/df2ee800-2458-4927-a3ce-2e39bf8d7ca0.png" alt="Global Bitcoin network with mining nodes and lightning connections" />

      {/* Step-by-Step Guide */}
      <section id="guide" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900/20 to-yellow-900/20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Step-by-Step Guide</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Follow these simple steps to redirect your mining rewards to organizations that make a difference</p>
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
                  Set Up Braiins as Your Mining Pool
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">Pick a mining pool that lets you set a custom payout Lightning address, such as Braiins. Watch the video until 29:10. IMPORTANT: Instructions for connecting to the Ocean pool are currently being prepared, as it offers a more decentralized alternative to Braiins.</p>
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Make Your Pledge</h2>
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">Get Your Organization Listed</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you running a non-profit that aligns with Bitcoin's mission? Apply to be included in our supported organizations list.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold px-8 py-3 text-lg" asChild>
            <a href="https://forms.gle/MFmXB3dkn6GYJbTr8" target="_blank" rel="noopener noreferrer">
              Submit Your Organization
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-indigo-900/20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about the HashImpact project
            </p>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left">
                  What is the HashImpact Project?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  HashImpact is a community-led initiative that helps hobby Bitcoin miners redirect their mining rewards—via Lightning—toward trusted, Bitcoin-focused nonprofits in lower-income regions, turning small amounts of hashrate into meaningful social impact.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left">
                  Why should I donate my mining rewards instead of keeping them?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  If you live in a high-income country, the sats you earn from a low-power miner often aren't life-changing. In many parts of the world, however, even a few dollars' worth of Bitcoin can fund school supplies, internet access, or community workshops—stretching your mining power far further than it would at home.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left">
                  Which miners are compatible?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  <p className="mb-3">The guide currently focuses on small, energy-efficient devices such as:</p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>Bitaxe series (Bitaxe Ultra, NerdQaxe, etc.)</li>
                    <li>Canaan Avalon Nano, Mini 3, and Avalon Q</li>
                  </ul>
                  <p>But any miner that lets you set a custom payout Lightning address in the pool settings should work.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left">
                  What is a Lightning address, and is it safe to use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  A Lightning address looks like an email (e.g., donate@bitcoinedu.org). It routes payments over the Lightning Network, which is fast, low-fee, and well suited for micro-donations. Using a nonprofit's Lightning address is as secure as sending any Lightning payment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left">
                  Can I split rewards between myself and an organization?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  Not yet. The current workflow sends 100% of pool payouts to the nonprofit's Lightning address. If you need a split, you'd have to run multiple workers/miners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left">
                  What if Bitcoin's price or network difficulty changes?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  Your miner's hashrate stays the same, but fiat value fluctuates. Think of the donation in sats, not dollars; organizations will receive the actual BTC amount you mine, regardless of price swings. You can always pause or adjust your pledge if economics change dramatically.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left">
                  How do I show my commitment publicly?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  Use the "Create My Pledge" form to generate a shareable pledge card. Fill in the organization, duration, miner model, and (optionally) a photo of your rig. Share the card on social media to inspire fellow miners.
                </AccordionContent>
              </AccordionItem>

              

              <AccordionItem value="item-9" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left">
                  Are donations tax-deductible?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  It depends on your jurisdiction and whether the recipient organization is registered as a charity there. Consult a local tax professional; HashImpact itself does not issue tax receipts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left">
                  Organisations in what countries are eligible to be presented on the website?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  <p className="mb-3">HashImpact focuses on nonprofits operating in lower-income or emerging-market economies, where a modest Bitcoin stream can create outsized impact. The current eligibility list includes:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm">
                    <span>Afghanistan</span>
                    <span>Albania</span>
                    <span>Algeria</span>
                    <span>Angola</span>
                    <span>Armenia</span>
                    <span>Azerbaijan</span>
                    <span>Bangladesh</span>
                    <span>Belize</span>
                    <span>Benin</span>
                    <span>Bhutan</span>
                    <span>Bolivia</span>
                    <span>Bosnia and Herzegovina</span>
                    <span>Botswana</span>
                    <span>Brazil</span>
                    <span>Burkina Faso</span>
                    <span>Burundi</span>
                    <span>Cambodia</span>
                    <span>Cameroon</span>
                    <span>Cape Verde</span>
                    <span>Central African Republic</span>
                    <span>Chad</span>
                    <span>China</span>
                    <span>Colombia</span>
                    <span>Comoros</span>
                    <span>Democratic Republic of the Congo</span>
                    <span>Republic of the Congo</span>
                    <span>Djibouti</span>
                    <span>Dominica</span>
                    <span>Ecuador</span>
                    <span>Egypt</span>
                    <span>El Salvador</span>
                    <span>Equatorial Guinea</span>
                    <span>Eritrea</span>
                    <span>Eswatini</span>
                    <span>Ethiopia</span>
                    <span>Fiji</span>
                    <span>Gabon</span>
                    <span>Gambia</span>
                    <span>Ghana</span>
                    <span>Guatemala</span>
                    <span>Guinea</span>
                    <span>Guinea-Bissau</span>
                    <span>Haiti</span>
                    <span>Honduras</span>
                    <span>India</span>
                    <span>Indonesia</span>
                    <span>Iran</span>
                    <span>Iraq</span>
                    <span>Ivory Coast</span>
                    <span>Jamaica</span>
                    <span>Jordan</span>
                    <span>Kenya</span>
                    <span>Kyrgyzstan</span>
                    <span>Laos</span>
                    <span>Lebanon</span>
                    <span>Lesotho</span>
                    <span>Liberia</span>
                    <span>Libya</span>
                    <span>Madagascar</span>
                    <span>Malawi</span>
                    <span>Mali</span>
                    <span>Mauritania</span>
                    <span>Moldova</span>
                    <span>Mongolia</span>
                    <span>Morocco</span>
                    <span>Mozambique</span>
                    <span>Myanmar</span>
                    <span>Namibia</span>
                    <span>Nepal</span>
                    <span>Nicaragua</span>
                    <span>Niger</span>
                    <span>Nigeria</span>
                    <span>North Macedonia</span>
                    <span>Pakistan</span>
                    <span>Paraguay</span>
                    <span>Peru</span>
                    <span>Philippines</span>
                    <span>Rwanda</span>
                    <span>São Tomé and Príncipe</span>
                    <span>Senegal</span>
                    <span>Sierra Leone</span>
                    <span>Somalia</span>
                    <span>South Africa</span>
                    <span>South Sudan</span>
                    <span>Sri Lanka</span>
                    <span>Sudan</span>
                    <span>Suriname</span>
                    <span>Syria</span>
                    <span>Tajikistan</span>
                    <span>Tanzania</span>
                    <span>Thailand</span>
                    <span>Timor-Leste</span>
                    <span>Togo</span>
                    <span>Tunisia</span>
                    <span>Turkmenistan</span>
                    <span>Uganda</span>
                    <span>Ukraine</span>
                    <span>Uzbekistan</span>
                    <span>Vietnam</span>
                    <span>Zambia</span>
                    <span>Zimbabwe</span>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-yellow-400 text-left">
                  Organisations in what countries are not eligible?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  <p className="mb-3">Due to a significantly higher cost-of-living index—which would undermine the "small sats, big impact" thesis—nonprofits based in the following countries or territories are not currently featured:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm">
                    <span>Andorra</span>
                    <span>Antigua and Barbuda</span>
                    <span>Argentina</span>
                    <span>Aruba</span>
                    <span>Australia</span>
                    <span>Austria</span>
                    <span>Bahamas, The</span>
                    <span>Bahrain</span>
                    <span>Barbados</span>
                    <span>Belarus</span>
                    <span>Belgium</span>
                    <span>Bermuda</span>
                    <span>Brunei Darussalam</span>
                    <span>Bulgaria</span>
                    <span>Canada</span>
                    <span>Cayman Islands</span>
                    <span>Chile</span>
                    <span>Costa Rica</span>
                    <span>Croatia</span>
                    <span>Curaçao</span>
                    <span>Cyprus</span>
                    <span>Czechia</span>
                    <span>Denmark</span>
                    <span>Dominican Republic</span>
                    <span>Estonia</span>
                    <span>Faroe Islands</span>
                    <span>Finland</span>
                    <span>France</span>
                    <span>Georgia</span>
                    <span>Germany</span>
                    <span>Greece</span>
                    <span>Greenland</span>
                    <span>Grenada</span>
                    <span>Guyana</span>
                    <span>Hong Kong SAR, China</span>
                    <span>Hungary</span>
                    <span>Iceland</span>
                    <span>Ireland</span>
                    <span>Israel</span>
                    <span>Italy</span>
                    <span>Japan</span>
                    <span>Kazakhstan</span>
                    <span>Kiribati</span>
                    <span>Korea, Rep.</span>
                    <span>Kosovo</span>
                    <span>Kuwait</span>
                    <span>Latvia</span>
                    <span>Lithuania</span>
                    <span>Luxembourg</span>
                    <span>Macao SAR, China</span>
                    <span>Malaysia</span>
                    <span>Maldives</span>
                    <span>Malta</span>
                    <span>Marshall Islands</span>
                    <span>Mauritius</span>
                    <span>Mexico</span>
                    <span>Micronesia, Fed. Sts.</span>
                    <span>Montenegro</span>
                    <span>Nauru</span>
                    <span>Netherlands</span>
                    <span>New Zealand</span>
                    <span>Norway</span>
                    <span>Oman</span>
                    <span>Palau</span>
                    <span>Panama</span>
                    <span>Papua New Guinea</span>
                    <span>Poland</span>
                    <span>Portugal</span>
                    <span>Puerto Rico</span>
                    <span>Qatar</span>
                    <span>Romania</span>
                    <span>Russian Federation</span>
                    <span>Samoa</span>
                    <span>San Marino</span>
                    <span>Saudi Arabia</span>
                    <span>Serbia</span>
                    <span>Seychelles</span>
                    <span>Singapore</span>
                    <span>Sint Maarten (Dutch part)</span>
                    <span>Slovak Republic</span>
                    <span>Slovenia</span>
                    <span>Solomon Islands</span>
                    <span>Spain</span>
                    <span>St. Kitts and Nevis</span>
                    <span>St. Lucia</span>
                    <span>St. Vincent and the Grenadines</span>
                    <span>Sweden</span>
                    <span>Switzerland</span>
                    <span>Tonga</span>
                    <span>Trinidad and Tobago</span>
                    <span>Turkmenistan</span>
                    <span>Uganda</span>
                    <span>Ukraine</span>
                    <span>Uzbekistan</span>
                    <span>Vietnam</span>
                    <span>Zambia</span>
                    <span>Zimbabwe</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Partners and Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900/20 to-yellow-900/20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Partners and Support</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              This project is made possible by the support of our partners and the Bitcoin community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {companyLogos.map((company, index) => <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4">
                  <img src={company.logo} alt={`${company.name} logo`} className="w-24 h-24 object-cover rounded-lg" />
                </div>
                <p className="text-center text-sm text-gray-300 max-w-xs">
                  {company.name}
                </p>
              </div>)}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="bg-slate-800/50 hover:bg-slate-700/50 px-8 py-3 text-lg border-2 border-yellow-500/50 text-yellow-400 hover:text-yellow-300" asChild>
              <a href="https://signal.me/#eu/bnRkjd73ME2K7HCY6S84pLJCtpJUyH0FkJPbbOegZNL0ePlxjcZL0KvegXtJpIfI" target="_blank" rel="noopener noreferrer">
                Get in Touch
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
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
            <a href="https://signal.me/#eu/bnRkjd73ME2K7HCY6S84pLJCtpJUyH0FkJPbbOegZNL0ePlxjcZL0KvegXtJpIfI" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Contact</a>
            <span>|</span>
            <a href="#privacy" className="hover:text-yellow-400 transition-colors">Privacy</a>
            <span>|</span>
            <a href="https://github.com/paulosacramento/hashpower-for-good" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;