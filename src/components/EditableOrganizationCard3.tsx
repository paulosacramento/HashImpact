
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Zap, Edit2, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

export const EditableOrganizationCard3 = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [organization, setOrganization] = useState({
    name: "Lightning Network Adoption",
    description: "Onboarding merchants to Lightning payments",
    lightningAddress: "support@lnadopt.com",
    impact: "200+ merchants onboarded"
  });
  const { toast } = useToast();

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('editable-org-card-3');
    if (saved) {
      try {
        setOrganization(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading organization data:', e);
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('editable-org-card-3', JSON.stringify(organization));
    setIsEditing(false);
    toast({
      title: "Organization Updated!",
      description: "Your changes have been saved locally.",
    });
  };

  const handleCancel = () => {
    const saved = localStorage.getItem('editable-org-card-3');
    if (saved) {
      try {
        setOrganization(JSON.parse(saved));
      } catch (e) {
        setOrganization({
          name: "Lightning Network Adoption",
          description: "Onboarding merchants to Lightning payments",
          lightningAddress: "support@lnadopt.com",
          impact: "200+ merchants onboarded"
        });
      }
    }
    setIsEditing(false);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(organization.lightningAddress);
    toast({
      title: "Lightning Address Copied!",
      description: `${organization.lightningAddress} is ready to paste in your mining pool configuration.`,
    });
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm h-full hover:bg-slate-700/80 relative">
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        {!isEditing ? (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsEditing(true)}
            className="h-8 w-8 p-0 hover:bg-yellow-500/20 text-yellow-400"
          >
            <Edit2 className="w-4 h-4" />
          </Button>
        ) : (
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={handleSave}
              className="h-8 w-8 p-0 hover:bg-green-500/20 text-green-400"
            >
              <Save className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCancel}
              className="h-8 w-8 p-0 hover:bg-red-500/20 text-red-400"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5 text-black" />
          </div>
          <CardTitle className="text-lg font-semibold text-white leading-tight">
            {isEditing ? (
              <input
                value={organization.name}
                onChange={(e) => setOrganization({ ...organization, name: e.target.value })}
                className="bg-slate-700 border border-yellow-500/50 rounded px-2 py-1 text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-500/50 w-full"
                placeholder="Organization name"
              />
            ) : (
              organization.name
            )}
          </CardTitle>
        </div>
        {isEditing ? (
          <textarea
            value={organization.description}
            onChange={(e) => setOrganization({ ...organization, description: e.target.value })}
            className="bg-slate-700 border border-yellow-500/50 rounded px-2 py-1 text-gray-300 text-sm resize-none h-16 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 w-full"
            placeholder="Organization description"
          />
        ) : (
          <p className="text-gray-300 text-sm leading-relaxed">
            {organization.description}
          </p>
        )}
      </CardHeader>
      
      <CardContent className="pt-0 space-y-4">
        <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border border-yellow-500/20 rounded-lg p-3">
          <p className="text-xs font-medium text-gray-300 mb-1">Impact So Far</p>
          {isEditing ? (
            <input
              value={organization.impact}
              onChange={(e) => setOrganization({ ...organization, impact: e.target.value })}
              className="bg-slate-700 border border-yellow-500/50 rounded px-2 py-1 text-yellow-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-500/50 w-full"
              placeholder="Impact description"
            />
          ) : (
            <p className="text-sm font-semibold text-yellow-400">{organization.impact}</p>
          )}
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-300">Lightning Address</p>
          <div className="flex items-center gap-2 bg-slate-700/50 border border-yellow-500/20 rounded-lg p-2">
            {isEditing ? (
              <input
                value={organization.lightningAddress}
                onChange={(e) => setOrganization({ ...organization, lightningAddress: e.target.value })}
                className="bg-slate-700 border border-yellow-500/50 rounded px-2 py-1 text-gray-300 text-xs flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                placeholder="Lightning address"
              />
            ) : (
              <code className="text-xs text-gray-300 flex-1 truncate">
                {organization.lightningAddress}
              </code>
            )}
            {!isEditing && (
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCopyAddress}
                className="h-6 w-6 p-0 hover:bg-yellow-500/20 text-yellow-400"
              >
                <Copy className="w-3 h-3" />
              </Button>
            )}
          </div>
        </div>

        {!isEditing && (
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:text-yellow-300 hover:border-yellow-400/70 transition-all"
          >
            Learn More
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
