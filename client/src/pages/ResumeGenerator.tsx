import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Wand2 } from "lucide-react";
import VisualTemplatePreview from "@/components/VisualTemplatePreview";
import EditableTemplateEditor from "@/components/EditableTemplateEditor";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Diverse templates inspired by LinkedIn, Canva, and professional resume designs
const templates = [
  { id: "professional-clean", name: "Professional Clean", category: "All Industries", isPremium: false, variant: "professional" as const, hasPhoto: false },
  { id: "modern-photo", name: "Modern with Photo", category: "All Industries", isPremium: false, variant: "modern-photo" as const, hasPhoto: true },
  { id: "executive-photo", name: "Executive Profile", category: "Management", isPremium: true, variant: "executive" as const, hasPhoto: true },
  { id: "creative-designer", name: "Creative Designer", category: "Design & Creative", isPremium: true, variant: "creative-photo" as const, hasPhoto: true },
  { id: "minimal-ats", name: "Minimal ATS-Friendly", category: "All Industries", isPremium: false, variant: "minimal" as const, hasPhoto: false },
  { id: "two-column-photo", name: "Two Column with Photo", category: "Tech & Business", isPremium: false, variant: "two-column" as const, hasPhoto: true },
  { id: "sidebar-professional", name: "Sidebar Professional", category: "Data & Analytics", isPremium: true, variant: "sidebar-photo" as const, hasPhoto: true },
  { id: "elegant-business", name: "Elegant Business", category: "Business & Finance", isPremium: false, variant: "elegant" as const, hasPhoto: false },
  { id: "tech-minimal", name: "Tech Minimal", category: "Tech & Engineering", isPremium: false, variant: "minimal" as const, hasPhoto: false },
  { id: "canva-inspired", name: "Canva Inspired", category: "Marketing & Sales", isPremium: true, variant: "creative-photo" as const, hasPhoto: true },
  { id: "linkedin-style", name: "LinkedIn Style", category: "All Industries", isPremium: false, variant: "modern-photo" as const, hasPhoto: true },
  { id: "classic-professional", name: "Classic Professional", category: "All Industries", isPremium: false, variant: "professional" as const, hasPhoto: false },
];

export default function ResumeGenerator() {
  const [activeTab, setActiveTab] = useState("automatic");
  const [formData, setFormData] = useState({
    name: "",
    jobRole: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    education: "",
    achievements: "",
  });
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    console.log("Generating resume with:", formData);
    setShowPreview(true);
  };

  const handleTemplateSelect = (id: string) => {
    console.log("Template selected:", id);
    setSelectedTemplate(id);
    setShowPreview(true);
  };

  const handleDownload = async () => {
    const element = document.getElementById("resume-preview");
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Resume Generator</h1>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="automatic" data-testid="tab-automatic">
                <Wand2 className="w-4 h-4 mr-2" />
                Automatic Generator
              </TabsTrigger>
              <TabsTrigger value="template" data-testid="tab-template">
                Template-Based
              </TabsTrigger>
            </TabsList>

            <TabsContent value="automatic">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Tell us about yourself</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} data-testid="input-name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="jobRole">Target Job Role</Label>
                      <Input id="jobRole" value={formData.jobRole} onChange={(e) => handleInputChange("jobRole", e.target.value)} data-testid="input-job-role" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} data-testid="input-email-resume" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} data-testid="input-phone" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="experience">Work Experience</Label>
                      <Textarea id="experience" value={formData.experience} onChange={(e) => handleInputChange("experience", e.target.value)} data-testid="textarea-experience" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="skills">Skills (comma-separated)</Label>
                      <Input id="skills" value={formData.skills} onChange={(e) => handleInputChange("skills", e.target.value)} data-testid="input-skills" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="education">Education</Label>
                      <Textarea id="education" value={formData.education} onChange={(e) => handleInputChange("education", e.target.value)} data-testid="textarea-education" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="achievements">Key Achievements</Label>
                      <Textarea id="achievements" value={formData.achievements} onChange={(e) => handleInputChange("achievements", e.target.value)} data-testid="textarea-achievements" className="mt-1" />
                    </div>
                    <Button onClick={handleGenerate} className="w-full" data-testid="button-generate">
                      Generate Resume
                    </Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Preview</h2>
                    {showPreview && (
                      <Button onClick={handleDownload} data-testid="button-download">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    )}
                  </div>
                  <div id="resume-preview" className="bg-white text-black p-8 rounded-lg min-h-[600px]" data-testid="preview-resume">
                    {showPreview ? (
                      <div className="space-y-4" contentEditable suppressContentEditableWarning>
                        <h1 className="text-3xl font-bold">{formData.name || "Your Name"}</h1>
                        <p className="text-lg text-gray-600">{formData.jobRole || "Job Title"}</p>
                        <div className="text-sm text-gray-600">
                          <p>{formData.email || "email@example.com"} | {formData.phone || "+1 234 567 8900"}</p>
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold mb-2">Experience</h2>
                          <p className="whitespace-pre-wrap">{formData.experience || "Your experience here..."}</p>
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold mb-2">Skills</h2>
                          <p>{formData.skills || "Your skills..."}</p>
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold mb-2">Education</h2>
                          <p className="whitespace-pre-wrap">{formData.education || "Your education..."}</p>
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
                          <p className="whitespace-pre-wrap">{formData.achievements || "Your achievements..."}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        Fill the form and click Generate to see preview
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="template">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Choose a Template</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {templates.map(template => (
                    <VisualTemplatePreview 
                      key={template.id} 
                      id={template.id}
                      name={template.name}
                      isPremium={template.isPremium}
                      variant={template.variant}
                      onSelect={handleTemplateSelect} 
                    />
                  ))}
                </div>
              </div>

              {selectedTemplate && (
                <EditableTemplateEditor 
                  variant={templates.find(t => t.id === selectedTemplate)?.variant as any || "minimal"}
                  templateName={templates.find(t => t.id === selectedTemplate)?.name || "Resume"}
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
