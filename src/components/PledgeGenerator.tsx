import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Upload, Copy, Share2, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const PledgeGenerator = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    organization: "",
    monthsOfSupport: "",
    startDate: "",
    endDate: "",
    minerPhoto: null as File | null,
    minerName: ""
  });
  const [showPledge, setShowPledge] = useState(false);
  const organizations = ["Bitcoin Education Initiative", "Open Source Bitcoin Tools", "Lightning Network Adoption", "Bitcoin Privacy Research", "African Bitcoin Network"];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.organization || !formData.monthsOfSupport || !formData.startDate || !formData.endDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to create your pledge.",
        variant: "destructive"
      });
      return;
    }
    setShowPledge(true);
    toast({
      title: "Pledge Created!",
      description: "Your commitment to mining for good has been generated."
    });
  };
  const handleCopyPledge = () => {
    const pledgeText = `🚀 I'm pledging my Bitcoin mining hashrate to support ${formData.organization} for ${formData.monthsOfSupport} months from ${formData.startDate} to ${formData.endDate}! Join me in turning mining power into positive change. #HashImpact #Bitcoin4Good`;
    navigator.clipboard.writeText(pledgeText);
    toast({
      title: "Copied to Clipboard!",
      description: "Share your pledge on social media to inspire others."
    });
  };
  if (showPledge) {
    return <Card className="max-w-2xl mx-auto bg-gradient-to-br from-orange-50 to-purple-50 border-2 border-orange-200">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Your HashImpact Pledge
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Supporting Organization</h3>
              <p className="text-2xl font-bold text-orange-600">{formData.organization}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Duration</h4>
                <p className="text-lg font-semibold text-gray-900">{formData.monthsOfSupport} months</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Start Date</h4>
                <p className="text-lg font-semibold text-gray-900">{formData.startDate}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 mb-1">End Date</h4>
                <p className="text-lg font-semibold text-gray-900">{formData.endDate}</p>
              </div>
            </div>

            {formData.minerName && <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Miner Setup</h4>
                <p className="text-lg font-semibold text-gray-900">{formData.minerName}</p>
              </div>}
          </div>

          <div className="flex gap-3 justify-center">
            <Button onClick={handleCopyPledge} className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700">
              <Copy className="w-4 h-4 mr-2" />
              Copy Pledge
            </Button>
            <Button variant="outline" onClick={() => setShowPledge(false)}>
              Create Another
            </Button>
          </div>
        </CardContent>
      </Card>;
  }
  return <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-gray-900">
          Create Your Mining Pledge
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
              Organization Name *
            </Label>
            <Input id="organization" placeholder="Enter organization name (e.g., Bitcoin Education Initiative)" value={formData.organization} onChange={e => setFormData(prev => ({
            ...prev,
            organization: e.target.value
          }))} className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthsOfSupport" className="text-sm font-medium text-gray-700">
              Months of Support *
            </Label>
            <Select value={formData.monthsOfSupport} onValueChange={value => setFormData(prev => ({
            ...prev,
            monthsOfSupport: value
          }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select duration of support" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({
                length: 12
              }, (_, i) => i + 1).map(month => <SelectItem key={month} value={month.toString()}>
                    {month} {month === 1 ? 'month' : 'months'}
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            
          </div>

          <div className="space-y-2">
            <Label htmlFor="minerName" className="text-sm font-medium text-gray-700">
              Miner Name/Model (Optional)
            </Label>
            <Input id="minerName" placeholder="e.g., Bitaxe Ultra, Raspberry Pi Setup" value={formData.minerName} onChange={e => setFormData(prev => ({
            ...prev,
            minerName: e.target.value
          }))} />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Miner Photo (Optional)
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Drop your miner photo here or click to upload
              </p>
              <Input type="file" accept="image/*" className="hidden" onChange={e => setFormData(prev => ({
              ...prev,
              minerPhoto: e.target.files?.[0] || null
            }))} />
            </div>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white py-3 text-lg">
            Create My Pledge
          </Button>
        </form>
      </CardContent>
    </Card>;
};