import { ArrowDown, Zap, Users, Target, ExternalLink, Upload, Calendar, CheckCircle, AlertCircle, Edit2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PledgeGenerator } from "@/components/PledgeGenerator";
import { OrganizationCard } from "@/components/OrganizationCard";
import { SectionSeparator } from "@/components/SectionSeparator";
import { useState, useEffect } from "react";
const Index = () => {
  // Editable content state
  const [editableContent, setEditableContent] = useState({
    mission: {
      title: "Mission: Turn Hobby Mining into Meaningful Support",
      description: "Your Bitcoin miner can do more than earn sats — it can help fund education, support communities, and onboard new users in underserved regions. We help hobby miners direct their rewards to trusted Bitcoin-related non-profits."
    },
    problem: {
      title: "Problem: Limited Value, Missed Opportunity",
      description: "In high-income countries, mining rewards are often too small to matter. But those same sats could go much further in regions with weaker currencies and greater need — where Bitcoin can truly empower."
    },
    solution: {
      title: "Solution: Simple Setup, Maximum Impact",
      description: "Easy Setup – Step-by-step guides to get your miner ready.\nSmart Matching – Choose an org based on values, region, or economic impact.\nSeamless Giving – Use Lightning addresses to send rewards with minimal fees."
    },
    impact: {
      title: "Impact: Mining That Matters",
      description: "Support vital work in hard-to-reach areas.\nStrengthen circular Bitcoin economies.\nShow the world that mining can be for good — not just profit."
    }
  });
  const [editingCard, setEditingCard] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState({
    title: "",
    description: ""
  });

  // Load content from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('hashimpact-editable-content');
    if (saved) {
      try {
        setEditableContent(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to parse saved content:', error);
      }
    }
  }, []);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('hashimpact-editable-content', JSON.stringify(editableContent));
  }, [editableContent]);
  const startEditing = (cardKey: string) => {
    setEditingCard(cardKey);
    setTempContent(editableContent[cardKey as keyof typeof editableContent]);
  };
  const saveEdit = () => {
    if (editingCard) {
      setEditableContent(prev => ({
        ...prev,
        [editingCard]: tempContent
      }));
    }
    setEditingCard(null);
    setTempContent({
      title: "",
      description: ""
    });
  };
  const cancelEdit = () => {
    setEditingCard(null);
    setTempContent({
      title: "",
      description: ""
    });
  };
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
  const renderEditableCard = (cardKey: string, icon: React.ReactNode, iconBgClass: string, iconColorClass: string) => {
    const content = editableContent[cardKey as keyof typeof editableContent];
    const isEditing = editingCard === cardKey;
    return <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 relative">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${iconBgClass} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
              {icon}
            </div>
            {!isEditing && <Button variant="ghost" size="sm" onClick={() => startEditing(cardKey)} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <Edit2 className="w-4 h-4" />
              </Button>}
          </div>
          {isEditing ? <div className="space-y-3">
              <input type="text" value={tempContent.title} onChange={e => setTempContent(prev => ({
            ...prev,
            title: e.target.value
          }))} className="w-full bg-slate-700 text-white text-xl font-semibold border border-slate-600 rounded-md px-3 py-2" />
              <div className="flex gap-2">
                <Button onClick={saveEdit} size="sm" className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-1" />
                  Save
                </Button>
                <Button onClick={cancelEdit} size="sm" variant="outline">
                  <X className="w-4 h-4 mr-1" />
                  Cancel
                </Button>
              </div>
            </div> : <CardTitle className="text-2xl font-semibold text-white">
              {content.title}
            </CardTitle>}
        </CardHeader>
        <CardContent>
          {isEditing ? <textarea value={tempContent.description} onChange={e => setTempContent(prev => ({
          ...prev,
          description: e.target.value
        }))} className="w-full h-32 bg-slate-700 text-gray-300 border border-slate-600 rounded-md px-3 py-2 resize-none" /> : <div className="text-gray-300 leading-relaxed">
              {content.description.split('\n').map((line, index) => <div key={index} className={line.trim().startsWith('-') || line.trim().startsWith('•') ? "flex items-start gap-3 mb-2" : "mb-2"}>
                  {line.trim().startsWith('-') || line.trim().startsWith('•') ? <>
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{line.replace(/^[-•]\s*/, '')}</span>
                    </> : <span>{line}</span>}
                </div>)}
            </div>}
        </CardContent>
      </Card>;
  };
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
            <p className="text-2xl">What if your Bitcoin miner could fund education and help onboard new users to Bitcoin in underprivileged regions?</p>
            <p>This guide shows you how to direct the rewards from your low-power Bitcoin miner to vetted organizations using Lightning addresses.


It also helps you chose an organisation that will the most positively impacted by your contribution due to the circumstances or price levels and cost of living in their country.


It's easy to set up, requires no prior coding experience, and turns energy into meaningful impact.</p>
            
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
            {renderEditableCard('mission', <Target className="w-6 h-6 text-yellow-400" />, 'from-yellow-500/20 to-amber-500/20 border border-yellow-500/30', 'text-yellow-400')}

            {/* Problem */}
            {renderEditableCard('problem', <AlertCircle className="w-6 h-6 text-red-400" />, 'from-red-500/20 to-orange-500/20 border border-red-500/30', 'text-red-400')}

            {/* Solution */}
            {renderEditableCard('solution', <Zap className="w-6 h-6 text-blue-400" />, 'from-blue-500/20 to-cyan-500/20 border border-blue-500/30', 'text-blue-400')}

            {/* Impact */}
            {renderEditableCard('impact', <Users className="w-6 h-6 text-green-400" />, 'from-green-500/20 to-emerald-500/20 border border-green-500/30', 'text-green-400')}
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