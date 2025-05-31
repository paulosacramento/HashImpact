
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Edit2, Save, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface Partner {
  title: string;
  description: string;
  linkText: string;
  icon: React.ReactNode;
}

interface PartnerCardProps {
  partner: Partner;
  partnerId: string;
}

export const PartnerCard = ({ partner, partnerId }: PartnerCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPartner, setEditedPartner] = useState(partner);
  const { toast } = useToast();

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`partner-${partnerId}`);
    if (saved) {
      try {
        const savedPartner = JSON.parse(saved);
        setEditedPartner({ ...savedPartner, icon: partner.icon }); // Keep original icon
      } catch (e) {
        console.error('Error loading partner data:', e);
      }
    }
  }, [partnerId, partner.icon]);

  const handleSave = () => {
    localStorage.setItem(`partner-${partnerId}`, JSON.stringify({
      title: editedPartner.title,
      description: editedPartner.description,
      linkText: editedPartner.linkText
    }));
    setIsEditing(false);
    toast({
      title: "Partner Updated!",
      description: "Your changes have been saved locally.",
    });
  };

  const handleCancel = () => {
    setEditedPartner(partner);
    setIsEditing(false);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 relative">
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
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            {editedPartner.icon}
          </div>
        </div>
        <CardTitle className="text-xl font-semibold text-white">
          {isEditing ? (
            <input
              value={editedPartner.title}
              onChange={(e) => setEditedPartner({ ...editedPartner, title: e.target.value })}
              className="bg-slate-700 border border-yellow-500/50 rounded px-3 py-2 text-white w-full text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              placeholder="Partner title"
              autoFocus
            />
          ) : (
            editedPartner.title
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="text-gray-300 leading-relaxed mb-4">
          {isEditing ? (
            <textarea
              value={editedPartner.description}
              onChange={(e) => setEditedPartner({ ...editedPartner, description: e.target.value })}
              className="bg-slate-700 border border-yellow-500/50 rounded px-3 py-2 text-gray-300 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              placeholder="Partner description"
            />
          ) : (
            editedPartner.description
          )}
        </div>
        <div className="flex items-center">
          {isEditing ? (
            <input
              value={editedPartner.linkText}
              onChange={(e) => setEditedPartner({ ...editedPartner, linkText: e.target.value })}
              className="bg-slate-700 border border-yellow-500/50 rounded px-3 py-2 text-yellow-400 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              placeholder="Link text"
            />
          ) : (
            <Button variant="link" className="p-0 h-auto text-yellow-400 hover:text-yellow-300">
              {editedPartner.linkText}
              <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
