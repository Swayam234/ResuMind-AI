import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Download, Edit2 } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface EditableTemplateEditorProps {
  variant: "modern" | "classic" | "creative" | "minimal";
  templateName: string;
}

export default function EditableTemplateEditor({ variant, templateName }: EditableTemplateEditorProps) {
  const [formData, setFormData] = useState({
    name: "John Smith",
    jobTitle: "Senior Sales Associate",
    email: "john@email.com",
    phone: "123-456-7890",
    linkedin: "linkedin.com/in/johnsmith",
    summary: "Experienced sales professional with 5+ years in B2B sales and team leadership. Proven track record of exceeding targets.",
    experience1Title: "Senior Sales Associate",
    experience1Company: "Company Name",
    experience1Period: "2020-2024",
    experience1Desc: "Led sales team of 8 members, exceeded quarterly targets by 25%",
    experience2Title: "Sales Associate",
    experience2Company: "Previous Company",
    experience2Period: "2018-2020",
    experience2Desc: "Managed key client relationships, achieved 120% of annual quota",
    education: "Bachelor of Business Administration",
    educationSchool: "University Name",
    educationYear: "2018",
    skills: "Sales Management • Team Leadership • CRM Tools • Client Relations • Negotiation",
  });

  const handleDownload = async () => {
    const element = document.getElementById("editable-template-preview");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`resume-${templateName}.pdf`);
  };

  const renderModernTemplate = () => (
    <div className="w-full bg-white text-black p-8 min-h-[1100px]">
      <div className="flex gap-6">
        <div className="w-1/3 bg-slate-800 text-white p-6 -ml-8 -mt-8 min-h-[1100px]">
          <div className="w-24 h-24 rounded-full bg-slate-600 mx-auto mb-4"></div>
          <h3 
            className="font-bold text-xl text-center mb-2" 
            contentEditable 
            suppressContentEditableWarning
            onBlur={(e) => setFormData(prev => ({ ...prev, name: e.currentTarget.textContent || "" }))}
          >
            {formData.name}
          </h3>
          <p 
            className="text-sm text-center mb-6 text-slate-300"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setFormData(prev => ({ ...prev, jobTitle: e.currentTarget.textContent || "" }))}
          >
            {formData.jobTitle}
          </p>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold mb-2">Contact</p>
              <p contentEditable suppressContentEditableWarning className="text-slate-300">{formData.phone}</p>
              <p contentEditable suppressContentEditableWarning className="text-slate-300">{formData.email}</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Skills</p>
              <div contentEditable suppressContentEditableWarning className="text-slate-300 whitespace-pre-wrap">
                {formData.skills.split('•').map(s => s.trim()).join('\n')}
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 pt-4">
          <h2 className="font-bold text-xl mb-3">Professional Summary</h2>
          <p contentEditable suppressContentEditableWarning className="text-sm mb-6 text-gray-700">{formData.summary}</p>
          
          <h2 className="font-bold text-xl mb-3">Work History</h2>
          <div className="space-y-4 mb-6">
            <div>
              <p contentEditable suppressContentEditableWarning className="font-semibold text-lg">{formData.experience1Title}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600">{formData.experience1Company} | {formData.experience1Period}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm mt-1 text-gray-700">{formData.experience1Desc}</p>
            </div>
            <div>
              <p contentEditable suppressContentEditableWarning className="font-semibold text-lg">{formData.experience2Title}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600">{formData.experience2Company} | {formData.experience2Period}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm mt-1 text-gray-700">{formData.experience2Desc}</p>
            </div>
          </div>
          
          <h2 className="font-bold text-xl mb-3">Education</h2>
          <p contentEditable suppressContentEditableWarning className="font-semibold">{formData.education}</p>
          <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600">{formData.educationSchool} | {formData.educationYear}</p>
        </div>
      </div>
    </div>
  );

  const renderClassicTemplate = () => (
    <div className="w-full bg-white text-black p-8 min-h-[1100px]">
      <h1 contentEditable suppressContentEditableWarning className="font-bold text-3xl text-center mb-2">{formData.name}</h1>
      <p contentEditable suppressContentEditableWarning className="text-center text-gray-600 mb-6">
        {formData.email} | {formData.phone} | {formData.linkedin}
      </p>
      
      <div className="border-t-2 border-b-2 border-gray-300 py-3 mb-6">
        <h2 className="font-bold text-xl mb-2">PROFESSIONAL SUMMARY</h2>
        <p contentEditable suppressContentEditableWarning className="text-sm text-gray-700">{formData.summary}</p>
      </div>
      
      <h2 className="font-bold text-xl mb-3">EXPERIENCE</h2>
      <div className="space-y-4 mb-6">
        <div>
          <p contentEditable suppressContentEditableWarning className="font-semibold text-lg">{formData.experience1Title}</p>
          <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600">{formData.experience1Company} | {formData.experience1Period}</p>
          <p contentEditable suppressContentEditableWarning className="text-sm mt-1">{formData.experience1Desc}</p>
        </div>
        <div>
          <p contentEditable suppressContentEditableWarning className="font-semibold text-lg">{formData.experience2Title}</p>
          <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600">{formData.experience2Company} | {formData.experience2Period}</p>
          <p contentEditable suppressContentEditableWarning className="text-sm mt-1">{formData.experience2Desc}</p>
        </div>
      </div>
      
      <h2 className="font-bold text-xl mb-3">EDUCATION</h2>
      <p contentEditable suppressContentEditableWarning className="font-semibold">{formData.education}</p>
      <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600 mb-6">{formData.educationSchool} | {formData.educationYear}</p>
      
      <h2 className="font-bold text-xl mb-3">SKILLS</h2>
      <p contentEditable suppressContentEditableWarning className="text-sm">{formData.skills}</p>
    </div>
  );

  const renderCreativeTemplate = () => (
    <div className="w-full bg-gradient-to-br from-purple-50 to-pink-50 text-black p-8 min-h-[1100px]">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-6">
        <h1 contentEditable suppressContentEditableWarning className="font-bold text-3xl mb-2">{formData.name}</h1>
        <p contentEditable suppressContentEditableWarning className="text-xl">{formData.jobTitle}</p>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white/80 backdrop-blur p-6 rounded-lg">
          <h2 className="font-bold text-xl text-purple-600 mb-3">About Me</h2>
          <p contentEditable suppressContentEditableWarning className="text-sm">{formData.summary}</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur p-6 rounded-lg">
          <h2 className="font-bold text-xl text-purple-600 mb-3">Work Experience</h2>
          <div className="space-y-3">
            <div>
              <p contentEditable suppressContentEditableWarning className="font-semibold text-lg">{formData.experience1Title}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600">{formData.experience1Company} | {formData.experience1Period}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm mt-1">{formData.experience1Desc}</p>
            </div>
            <div>
              <p contentEditable suppressContentEditableWarning className="font-semibold text-lg">{formData.experience2Title}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600">{formData.experience2Company} | {formData.experience2Period}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm mt-1">{formData.experience2Desc}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur p-6 rounded-lg">
            <h2 className="font-bold text-xl text-purple-600 mb-3">Education</h2>
            <p contentEditable suppressContentEditableWarning className="font-semibold">{formData.education}</p>
            <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600">{formData.educationSchool}</p>
          </div>
          <div className="bg-white/80 backdrop-blur p-6 rounded-lg">
            <h2 className="font-bold text-xl text-purple-600 mb-3">Contact</h2>
            <p contentEditable suppressContentEditableWarning className="text-sm">{formData.email}</p>
            <p contentEditable suppressContentEditableWarning className="text-sm">{formData.phone}</p>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur p-6 rounded-lg">
          <h2 className="font-bold text-xl text-purple-600 mb-3">Skills</h2>
          <p contentEditable suppressContentEditableWarning className="text-sm">{formData.skills}</p>
        </div>
      </div>
    </div>
  );

  const renderMinimalTemplate = () => (
    <div className="w-full bg-white text-black p-8 min-h-[1100px]">
      <h1 contentEditable suppressContentEditableWarning className="font-bold text-3xl mb-2">{formData.name}</h1>
      <p contentEditable suppressContentEditableWarning className="text-gray-600 mb-6">
        {formData.email} • {formData.phone} • {formData.linkedin}
      </p>
      
      <div className="space-y-6">
        <div>
          <h2 className="font-bold text-xl mb-3">EXPERIENCE</h2>
          <div className="border-l-4 border-gray-300 pl-4 space-y-4">
            <div>
              <p contentEditable suppressContentEditableWarning className="font-semibold text-lg">{formData.experience1Title} • {formData.experience1Company}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600 mb-1">{formData.experience1Period}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm">{formData.experience1Desc}</p>
            </div>
            <div>
              <p contentEditable suppressContentEditableWarning className="font-semibold text-lg">{formData.experience2Title} • {formData.experience2Company}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600 mb-1">{formData.experience2Period}</p>
              <p contentEditable suppressContentEditableWarning className="text-sm">{formData.experience2Desc}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="font-bold text-xl mb-3">EDUCATION</h2>
          <p contentEditable suppressContentEditableWarning className="font-semibold">{formData.education}</p>
          <p contentEditable suppressContentEditableWarning className="text-sm text-gray-600">{formData.educationSchool} | {formData.educationYear}</p>
        </div>
        
        <div>
          <h2 className="font-bold text-xl mb-3">SKILLS</h2>
          <p contentEditable suppressContentEditableWarning className="text-sm">{formData.skills}</p>
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
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Edit2 className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">Edit Your Resume - {templateName}</h2>
          </div>
          <Button onClick={handleDownload} data-testid="button-download-resume">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Click on any text in the resume to edit it directly. Your changes will be saved automatically.
        </p>
      </Card>

      <Card className="p-0 overflow-hidden">
        <div id="editable-template-preview" className="max-w-[850px] mx-auto" data-testid="editable-resume-preview">
          {renderTemplate()}
        </div>
      </Card>
    </div>
  );
}
