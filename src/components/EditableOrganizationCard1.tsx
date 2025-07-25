import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Mail, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const EditableOrganizationCard1 = () => {
  const organization = {
    name: "BTC Shule",
    description: "Burundi",
    lightningAddress: "btcshule@geyser.fund",
    impact: "48.9",
    url: "https://btcshule.com/",
    email: "kbelyinobel@gmail.com",
    twitter: "https://x.com/btcshule"
  };
  const {
    toast
  } = useToast();
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(organization.lightningAddress);
    toast({
      title: "Lightning Address Copied!",
      description: `${organization.lightningAddress} is ready to paste in your mining pool configuration.`
    });
  };
  return <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm h-full hover:bg-slate-700/80">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden">
            {/* Burundi flag background */}
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-green-600"></div>
            </div>
            {/* White circle with stars */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full border border-red-600 flex items-center justify-center">
                <div className="text-red-600 text-xs font-bold">★</div>
              </div>
            </div>
          </div>
          <CardTitle className="text-lg font-semibold text-white leading-tight">
            {organization.name}
          </CardTitle>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          {organization.description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-4">
        <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border border-yellow-500/20 rounded-lg p-3">
          <p className="text-xs font-medium text-gray-300 mb-1">Price Level Index (2021)</p>
          <p className="text-sm font-semibold text-yellow-400">{organization.impact}</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-300">Lightning Address</p>
          <div className="flex items-center gap-2 bg-slate-700/50 border border-yellow-500/20 rounded-lg p-2">
            <code className="text-xs text-gray-300 flex-1 truncate">
              {organization.lightningAddress}
            </code>
            <Button size="sm" variant="ghost" onClick={handleCopyAddress} className="h-6 w-6 p-0 hover:bg-yellow-500/20 text-yellow-400">
              <Copy className="w-3 h-3" />
            </Button>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1 text-xs bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold transition-all" asChild>
            
          </Button>
          <Button size="sm" className="flex-1 text-xs bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold transition-all" asChild>
            
          </Button>
        </div>

        <Button size="sm" className="w-full text-xs bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold transition-all" asChild>
          <a href={organization.url} target="_blank" rel="noopener noreferrer">
            Learn More
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </Button>
      </CardContent>
    </Card>;
};