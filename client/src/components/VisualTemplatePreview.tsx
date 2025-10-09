import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";

interface VisualTemplatePreviewProps {
  id: string;
  name: string;
  isPremium: boolean;
  variant: "modern" | "classic" | "creative" | "minimal";
  onSelect: (id: string) => void;
}

export default function VisualTemplatePreview({ id, name, isPremium, variant, onSelect }: VisualTemplatePreviewProps) {
  const renderModernTemplate = () => (
    <div className="w-full h-full bg-white text-black p-4 text-[6px] leading-tight">
      <div className="flex gap-2">
        <div className="w-1/3 bg-slate-800 text-white p-2">
          <div className="w-10 h-10 rounded-full bg-slate-600 mx-auto mb-2"></div>
          <h3 className="font-bold text-center mb-2">John Smith</h3>
          <p className="text-[5px] text-center mb-2">Senior Sales Associate</p>
          <div className="space-y-1 text-[5px]">
            <p className="font-semibold">Contact</p>
            <p>123-456-7890</p>
            <p>john@email.com</p>
            <p className="font-semibold mt-2">Skills</p>
            <p>Sales Management</p>
            <p>Team Leadership</p>
            <p>Client Relations</p>
          </div>
        </div>
        <div className="w-2/3 p-2">
          <h2 className="font-bold text-[7px] mb-1">Professional Summary</h2>
          <p className="text-[5px] mb-2">Experienced sales professional with 5+ years...</p>
          <h2 className="font-bold text-[7px] mb-1">Work History</h2>
          <div className="space-y-1 text-[5px]">
            <p className="font-semibold">Senior Sales Associate</p>
            <p>Company Name | 2020-2024</p>
            <p className="font-semibold">Sales Associate</p>
            <p>Previous Co | 2018-2020</p>
          </div>
          <h2 className="font-bold text-[7px] mt-2 mb-1">Education</h2>
          <p className="text-[5px]">Bachelor of Business Administration</p>
        </div>
      </div>
    </div>
  );

  const renderClassicTemplate = () => (
    <div className="w-full h-full bg-white text-black p-4 text-[6px] leading-tight">
      <h1 className="font-bold text-[9px] text-center mb-1">John Smith</h1>
      <p className="text-[5px] text-center text-gray-600 mb-2">john@email.com | 123-456-7890</p>
      <div className="border-t border-b border-gray-300 py-1 mb-2">
        <h2 className="font-bold text-[7px]">PROFESSIONAL SUMMARY</h2>
        <p className="text-[5px]">Results-driven professional with expertise in...</p>
      </div>
      <h2 className="font-bold text-[7px] mb-1">EXPERIENCE</h2>
      <div className="space-y-1 text-[5px] mb-2">
        <div>
          <p className="font-semibold">Senior Sales Associate</p>
          <p className="text-gray-600">Company Name | 2020-2024</p>
        </div>
      </div>
      <h2 className="font-bold text-[7px] mb-1">EDUCATION</h2>
      <p className="text-[5px]">Bachelor of Business Administration</p>
      <h2 className="font-bold text-[7px] mt-1 mb-1">SKILLS</h2>
      <p className="text-[5px]">Sales • Leadership • Communication</p>
    </div>
  );

  const renderCreativeTemplate = () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 text-black p-4 text-[6px] leading-tight">
      <div className="bg-purple-600 text-white p-2 rounded mb-2">
        <h1 className="font-bold text-[9px]">John Smith</h1>
        <p className="text-[6px]">Creative Designer</p>
      </div>
      <div className="space-y-1">
        <div className="bg-white/80 p-2 rounded">
          <h2 className="font-bold text-[7px] text-purple-600 mb-1">About</h2>
          <p className="text-[5px]">Passionate designer with eye for detail...</p>
        </div>
        <div className="bg-white/80 p-2 rounded">
          <h2 className="font-bold text-[7px] text-purple-600 mb-1">Work History</h2>
          <p className="text-[5px] font-semibold">Lead Designer</p>
          <p className="text-[5px]">Design Studio | 2021-2024</p>
        </div>
        <div className="bg-white/80 p-2 rounded">
          <h2 className="font-bold text-[7px] text-purple-600 mb-1">Skills</h2>
          <p className="text-[5px]">UI/UX • Figma • Adobe Creative Suite</p>
        </div>
      </div>
    </div>
  );

  const renderMinimalTemplate = () => (
    <div className="w-full h-full bg-white text-black p-4 text-[6px] leading-tight">
      <h1 className="font-bold text-[10px] mb-0.5">John Smith</h1>
      <p className="text-[6px] text-gray-600 mb-2">john@email.com • 123-456-7890 • linkedin.com/in/johnsmith</p>
      <div className="space-y-2">
        <div>
          <h2 className="font-bold text-[7px] mb-0.5">EXPERIENCE</h2>
          <div className="border-l-2 border-gray-300 pl-1 space-y-1 text-[5px]">
            <div>
              <p className="font-semibold">Senior Sales Associate • Company Name</p>
              <p className="text-gray-600">2020-2024</p>
            </div>
            <div>
              <p className="font-semibold">Sales Associate • Previous Company</p>
              <p className="text-gray-600">2018-2020</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-[7px] mb-0.5">EDUCATION</h2>
          <p className="text-[5px]">Bachelor of Business Administration</p>
          <p className="text-[5px] text-gray-600">University Name | 2018</p>
        </div>
        <div>
          <h2 className="font-bold text-[7px] mb-0.5">SKILLS</h2>
          <p className="text-[5px]">Sales Management • Team Leadership • CRM Tools • Client Relations</p>
        </div>
      </div>
    </div>
  );

  const renderTemplate = () => {
    switch (variant) {
      case "modern":
        return renderModernTemplate();
      case "classic":
        return renderClassicTemplate();
      case "creative":
        return renderCreativeTemplate();
      case "minimal":
        return renderMinimalTemplate();
      default:
        return renderMinimalTemplate();
    }
  };

  return (
    <Card 
      className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
      onClick={() => onSelect(id)}
      data-testid={`card-template-${id}`}
    >
      <div className="relative aspect-[8.5/11] bg-muted">
        <div className="absolute inset-0 p-3">
          {renderTemplate()}
        </div>
        {isPremium && (
          <Badge className="absolute top-3 right-3 bg-chart-4 text-foreground gap-1">
            <Crown className="w-3 h-3" />
            Premium
          </Badge>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-background/95 backdrop-blur px-4 py-2 rounded-lg">
            <p className="text-sm font-semibold">Click to use template</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1" data-testid={`text-template-name-${id}`}>{name}</h3>
      </div>
    </Card>
  );
}
