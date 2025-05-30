
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Organization {
  name: string;
  description: string;
  lightningAddress: string;
  impact: string;
}

interface OrganizationCardProps {
  organization: Organization;
}

export const OrganizationCard = ({ organization }: OrganizationCardProps) => {
  const { toast } = useToast();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(organization.lightningAddress);
    toast({
      title: "Lightning Address Copied!",
      description: `${organization.lightningAddress} is ready to paste in your mining pool configuration.`,
    });
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
            {organization.name}
          </CardTitle>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {organization.description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-4">
        <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-3">
          <p className="text-xs font-medium text-gray-700 mb-1">Impact So Far</p>
          <p className="text-sm font-semibold text-orange-600">{organization.impact}</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-700">Lightning Address</p>
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
            <code className="text-xs text-gray-800 flex-1 truncate">
              {organization.lightningAddress}
            </code>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopyAddress}
              className="h-6 w-6 p-0 hover:bg-orange-100"
            >
              <Copy className="w-3 h-3" />
            </Button>
          </div>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-xs hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all"
        >
          Learn More
          <ExternalLink className="w-3 h-3 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
};
