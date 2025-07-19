
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Upload, Copy, Share2, Zap, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generatePledgeImage, type PledgeData } from "@/utils/pledgeImageGenerator";
import { supabase } from "@/integrations/supabase/client";

interface Organization {
  id: string;
  name: string;
  country: string;
  price_level_index: number;
}

export const PledgeGenerator = () => {
  const { toast } = useToast();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [formData, setFormData] = useState({
    organizationId: "",
    monthsOfSupport: "",
    startDate: "",
    endDate: "",
    minerPhoto: null as File | null,
    minerName: ""
  });
  const [showPledge, setShowPledge] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    try {
      const { data, error } = await supabase
        .from('organizations')
        .select('id, name, country, price_level_index')
        .order('name');

      if (error) {
        console.error('Error fetching organizations:', error);
        toast({
          title: "Error",
          description: "Failed to load organizations. Please try again.",
          variant: "destructive"
        });
        return;
      }

      setOrganizations(data || []);
    } catch (error) {
      console.error('Error fetching organizations:', error);
    }
  };

  const getSelectedOrganization = () => {
    return organizations.find(org => org.id === formData.organizationId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const selectedOrg = getSelectedOrganization();
    
    if (!selectedOrg || !formData.monthsOfSupport) {
      toast({
        title: "Missing Information",
        description: "Please select an organization and months of support to create your pledge.",
        variant: "destructive"
      });
      return;
    }

    setIsGeneratingImage(true);
    
    try {
      // Generate the pledge image
      const pledgeData: PledgeData = {
        organization: selectedOrg.name,
        monthsOfSupport: formData.monthsOfSupport,
        minerName: formData.minerName || undefined,
        minerPhoto: formData.minerPhoto
      };

      const imageBlob = await generatePledgeImage(pledgeData);
      const imageUrl = URL.createObjectURL(imageBlob);
      setGeneratedImage(imageUrl);
      
      setShowPledge(true);
      toast({
        title: "Pledge Created!",
        description: "Your commitment to mining for good has been generated with a certificate image."
      });
    } catch (error) {
      console.error('Error generating pledge image:', error);
      toast({
        title: "Error",
        description: "Failed to generate pledge image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleCopyPledge = () => {
    const selectedOrg = getSelectedOrganization();
    if (!selectedOrg) return;
    
    const pledgeText = `🚀 I'm pledging my Bitcoin mining hashrate to support ${selectedOrg.name} for ${formData.monthsOfSupport} months! Join me in turning mining power into positive change. #HashImpact`;
    navigator.clipboard.writeText(pledgeText);
    toast({
      title: "Copied to Clipboard!",
      description: "Share your pledge on social media to inspire others."
    });
  };

  const handleDownloadImage = () => {
    const selectedOrg = getSelectedOrganization();
    if (generatedImage && selectedOrg) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `hashimpact-pledge-${selectedOrg.name.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Image Downloaded!",
        description: "Your pledge certificate has been saved to your device."
      });
    }
  };

  if (showPledge) {
    const selectedOrg = getSelectedOrganization();
    
    return (
      <Card className="max-w-2xl mx-auto bg-gradient-to-br from-orange-50 to-purple-50 border-2 border-orange-200">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Your HashImpact Pledge
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Generated Certificate Image */}
          {generatedImage && (
            <div className="text-center">
              <img 
                src={generatedImage} 
                alt="Pledge Certificate" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg border-2 border-amber-200"
              />
            </div>
          )}

          <div className="text-center space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Supporting Organization</h3>
              <p className="text-2xl font-bold text-orange-600">{selectedOrg?.name}</p>
               {selectedOrg && (
                 <p className="text-sm text-gray-600 mt-1">
                   {selectedOrg.country}
                 </p>
               )}
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Duration</h4>
                <p className="text-lg font-semibold text-gray-900">
                  {formData.monthsOfSupport} {parseInt(formData.monthsOfSupport) === 1 ? 'month' : 'months'}
                </p>
              </div>
            </div>

            {formData.minerName && (
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Miner Setup</h4>
                <p className="text-lg font-semibold text-gray-900">{formData.minerName}</p>
              </div>
            )}
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Button onClick={handleCopyPledge} variant="outline">
              <Copy className="w-4 h-4 mr-2" />
              Copy Pledge Text
            </Button>
            {generatedImage && (
              <Button onClick={handleDownloadImage} className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Download Certificate
              </Button>
            )}
            <Button variant="outline" onClick={() => setShowPledge(false)}>
              Create Another
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-gray-900">
          Create Your Mining Pledge
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
              Organization *
            </Label>
            <Select 
              value={formData.organizationId} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, organizationId: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an organization to support" />
              </SelectTrigger>
              <SelectContent>
                {organizations.map(org => (
                  <SelectItem key={org.id} value={org.id}>
                    <div className="flex flex-col">
                      <span className="font-medium">{org.name}</span>
                      <span className="text-sm text-gray-500">
                        {org.country}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthsOfSupport" className="text-sm font-medium text-gray-700">
              Months of Support *
            </Label>
            <Select 
              value={formData.monthsOfSupport} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, monthsOfSupport: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select duration of support" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                  <SelectItem key={month} value={month.toString()}>
                    {month} {month === 1 ? 'month' : 'months'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="minerName" className="text-sm font-medium text-gray-700">
              Miner Name/Model (Optional)
            </Label>
            <Input
              id="minerName"
              placeholder="e.g., Bitaxe 601"
              value={formData.minerName}
              onChange={(e) => setFormData(prev => ({ ...prev, minerName: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Miner Photo (Optional)
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">
                Drop your miner photo here or click to upload
              </p>
              <Input
                type="file"
                accept="image/*"
                className="max-w-xs mx-auto"
                onChange={(e) => setFormData(prev => ({ ...prev, minerPhoto: e.target.files?.[0] || null }))}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold py-3 text-lg"
            disabled={isGeneratingImage}
          >
            {isGeneratingImage ? "Creating Your Pledge..." : "Create My Pledge"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
