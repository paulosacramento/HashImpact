
import { ArrowDown, Zap, Users, Target, ExternalLink, Upload, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PledgeGenerator } from "@/components/PledgeGenerator";
import { SectionSeparator } from "@/components/SectionSeparator";
import { PartnerCard } from "@/components/PartnerCard";
import { EditableOrganizationCard1 } from "@/components/EditableOrganizationCard1";
import { EditableOrganizationCard2 } from "@/components/EditableOrganizationCard2";
import { EditableOrganizationCard3 } from "@/components/EditableOrganizationCard3";

// Import static data
import { steps } from "@/data/steps";
import { partners } from "@/data/partners";
import { featuredOrganizations } from "@/data/organizations";
import { heroContent, sectionsContent, footerContent } from "@/data/content";

const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="inline-flex items-center rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400 mb-6 border border-yellow-500/30">
              <Zap className="w-4 h-4 mr-2" />
              {heroContent.badge.text}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              {heroContent.title}
            </h1>
          </div>
          
          {/* Image container */}
          <div className="mx-auto max-w-2xl mb-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img alt={heroContent.heroImage.alt} className="w-full h-full object-cover" src={heroContent.heroImage.src} />
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-gray-300">
            <p className="text-2xl">{heroContent.subtitle}</p>
            {heroContent.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold px-8 py-3 text-lg">
              {heroContent.ctaButton.text}
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
              {sectionsContent.featuredOrganizations.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {sectionsContent.featuredOrganizations.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <EditableOrganizationCard1 />
            <EditableOrganizationCard2 />
            <EditableOrganizationCard3 />
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="bg-slate-800/50 hover:bg-slate-700/50 px-8 py-3 text-lg border-2 border-yellow-500/50 text-yellow-400 hover:text-yellow-300" asChild>
              <a href={sectionsContent.featuredOrganizations.externalLink.url} target="_blank" rel="noopener noreferrer">
                {sectionsContent.featuredOrganizations.externalLink.text}
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
              {sectionsContent.stepByStepGuide.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {sectionsContent.stepByStepGuide.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center text-sm font-bold text-yellow-400 group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>
                      <div className="group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-orange-500" />
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
                    {step.videoLink && (
                      <Button variant="link" className="mt-3 p-0 h-auto text-yellow-400 hover:text-yellow-300" asChild>
                        <a href={step.videoLink} target="_blank" rel="noopener noreferrer">
                          {step.videoLinkText}
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pledge Generator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900/20 to-yellow-900/20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              {sectionsContent.pledgeGenerator.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {sectionsContent.pledgeGenerator.subtitle}
            </p>
          </div>
          
          <PledgeGenerator />
        </div>
      </section>

      {/* Get Listed CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            {sectionsContent.getListedCta.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {sectionsContent.getListedCta.subtitle}
          </p>
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold px-8 py-3 text-lg">
            {sectionsContent.getListedCta.ctaButton.text}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Partners and Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900/20 to-yellow-900/20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              {sectionsContent.partnersSupport.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {sectionsContent.partnersSupport.subtitle}
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
              {sectionsContent.partnersSupport.ctaButton.text}
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
              {footerContent.description}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {footerContent.links.map((link, index) => (
              <React.Fragment key={index}>
                <a href={link.href} className="hover:text-yellow-400 transition-colors">{link.text}</a>
                {index < footerContent.links.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
