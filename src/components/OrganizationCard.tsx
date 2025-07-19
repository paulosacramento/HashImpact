
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CountryFlag } from "@/components/CountryFlag";

interface Organization {
  id: string;
  name: string;
  country: string;
  price_level_index: number;
  lightning_address: string;
  geyser_url: string;
}

interface OrganizationCardProps {
  organization: Organization;
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  const { toast } = useToast();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(organization.lightning_address);
    toast({
      title: "Lightning address copied!",
      description: `${organization.lightning_address} has been copied to your clipboard.`,
    });
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm h-full hover:bg-slate-700/80">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <CountryFlag country={organization.country} className="w-10 h-10" />
            <div>
              <CardTitle className="text-lg font-semibold text-white leading-tight">
                {organization.name}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <span className="text-gray-300">{organization.country}</span>
                <Badge variant="secondary" className="text-xs bg-slate-600/50 text-yellow-400 border-yellow-500/20">
                  PLI: {organization.price_level_index}
                </Badge>
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-sm mb-2 text-gray-300">Lightning Address</h4>
            <div className="flex items-center gap-2 p-3 bg-slate-700/50 border border-yellow-500/20 rounded-lg">
              <code className="flex-1 text-sm font-mono break-all text-gray-300">
                {organization.lightning_address}
              </code>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={handleCopyAddress}
                className="shrink-0 h-6 w-6 p-0 hover:bg-yellow-500/20 text-yellow-400"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full text-xs bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold transition-all" 
          onClick={() => window.open(organization.geyser_url, '_blank')}
        >
          <ExternalLink className="mr-2 h-3 w-3" />
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
