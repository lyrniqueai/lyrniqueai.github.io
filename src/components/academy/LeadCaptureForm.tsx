import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog, DialogContent, DialogDescription,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Download, Calendar } from "lucide-react";
import { submitLeadForm } from "@/services/academy";

// ── Types ─────────────────────────────────────────────────────────────────────

interface LeadCaptureFormProps {
  type: "syllabus" | "workshop";
  courseName?: string;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary";
  buttonClassName?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  organization: string;
  interest: string;
}

const EMPTY_FORM: FormState = {
  name: "", email: "", phone: "", organization: "", interest: "",
};

const WORKSHOP_INTERESTS = [
  { value: "intro-ai",          label: "Introduction to AI" },
  { value: "genai-tools",       label: "GenAI Tools Workshop" },
  { value: "prompt-engineering", label: "Prompt Engineering" },
  { value: "ai-for-business",   label: "AI for Business" },
  { value: "custom",            label: "Custom Workshop" },
];

// ── Component ─────────────────────────────────────────────────────────────────

const LeadCaptureForm = ({
  type,
  courseName,
  buttonText,
  buttonVariant = "default",
  buttonClassName = "",
}: LeadCaptureFormProps) => {
  const [open, setOpen]               = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData]       = useState<FormState>(EMPTY_FORM);
  const { toast } = useToast();

  const isSyllabus = type === "syllabus";
  const Icon = isSyllabus ? Download : Calendar;
  const defaultButtonText = isSyllabus ? "Download Syllabus" : "Request Workshop";

  const setField = (field: keyof FormState) => (value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitLeadForm({ ...formData, type, courseName });

      toast({
        title: isSyllabus ? "Syllabus Request Sent!" : "Workshop Request Received!",
        description: isSyllabus
          ? "We'll send the detailed syllabus to your email shortly."
          : "Our team will contact you within 24 hours to discuss your workshop requirements.",
      });

      setFormData(EMPTY_FORM);
      setOpen(false);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us at lyrnique@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className={buttonClassName}>
          <Icon className="w-4 h-4 mr-2" />
          {buttonText ?? defaultButtonText}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isSyllabus
              ? `Get ${courseName ? `${courseName} ` : ""}Syllabus`
              : "Request a Workshop"}
          </DialogTitle>
          <DialogDescription>
            {isSyllabus
              ? "Enter your details to receive the detailed course syllabus in your inbox."
              : "Tell us about your organization and we'll design a custom workshop for you."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="lead-name">Full Name *</Label>
            <Input
              id="lead-name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setField("name")(e.target.value)}
              required
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-email">Email *</Label>
            <Input
              id="lead-email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setField("email")(e.target.value)}
              required
              maxLength={255}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-phone">Phone Number</Label>
            <Input
              id="lead-phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setField("phone")(e.target.value)}
              maxLength={20}
            />
          </div>

          {!isSyllabus && (
            <>
              <div className="space-y-2">
                <Label htmlFor="lead-org">Organization Name *</Label>
                <Input
                  id="lead-org"
                  placeholder="Your company or college name"
                  value={formData.organization}
                  onChange={(e) => setField("organization")(e.target.value)}
                  required
                  maxLength={200}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lead-interest">Workshop Interest</Label>
                <Select value={formData.interest} onValueChange={setField("interest")}>
                  <SelectTrigger id="lead-interest">
                    <SelectValue placeholder="Select workshop type" />
                  </SelectTrigger>
                  <SelectContent>
                    {WORKSHOP_INTERESTS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-primary border-0 text-foreground font-semibold hover:opacity-90"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : isSyllabus ? "Send Syllabus" : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureForm;
