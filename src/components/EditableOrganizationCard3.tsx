
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const EditableOrganizationCard3 = () => {
  const organization = {
    name: "Lightning Network Adoption",
    description: "Onboarding merchants to Lightning payments",
    lightningAddress: "support@lnadopt.com",
    impact: "200+ merchants onboarded"
  };
  const { toast } = useToast();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(organization.lightningAddress);
    toast({
      title: "Lightning Address Copied!",
      description: `${organization.lightningAddress} is ready to paste in your mining pool configuration.`,
    });
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm h-full hover:bg-slate-700/80">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5 text-black" />
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
          <p className="text-xs font-medium text-gray-300 mb-1">Impact So Far</p>
          <p className="text-sm font-semibold text-yellow-400">{organization.impact}</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-300">Lightning Address</p>
          <div className="flex items-center gap-2 bg-slate-700/50 border border-yellow-500/20 rounded-lg p-2">
            <code className="text-xs text-gray-300 flex-1 truncate">
              {organization.lightningAddress}
            </code>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopyAddress}
              className="h-6 w-6 p-0 hover:bg-yellow-500/20 text-yellow-400"
            >
              <Copy className="w-3 h-3" />
            </Button>
          </div>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-xs border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:text-yellow-300 hover:border-yellow-400/70 transition-all"
        >
          Learn More
          <ExternalLink className="w-3 h-3 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
};
