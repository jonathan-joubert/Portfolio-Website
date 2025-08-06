import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

const serviceKey = import.meta.env.VITE_EMAIL_SERVICE_KEY;
const templateKey = import.meta.env.VITE_EMAIL_TEMPLATE_KEY;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const captchaKey = import.meta.env.VITE_CAPTCHA_PUBLIC_KEY;


export function ContactSection() {
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
  emailjs.init(publicKey);
}, []);

const handleCaptchaChange = (value) => {
  if (value) {
    setCaptchaValid(true);
  } else {
    setCaptchaValid(false);
  }
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!captchaValid){
    toast({title:"Please complete the RECaptcha"});
    return;
  }

  emailjs.send(
    serviceKey,    
    templateKey,   
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    }
  ).then(
    () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    (error) => {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("EmailJS Error:", error);
    }
  );
};

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rjoubert@fibco.co.za",
      link: "mailto:rjoubert@fibco.co.za"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kempton Park, South Africa",
      link: "https://www.google.com/maps/place/Kempton+Park"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Soonest Availability",
      link: null
    }
  ];

  return (
    <section id="contact" className="bg-secondary/30 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to connect or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, you're looking for a potential candidate, or just want to 
                discuss the latest in Linux and development trends, I'm always excited to connect 
                with fellow enthusiasts and potential employers.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
              <h4 className="font-semibold mb-2">Open to Opportunities</h4>
              <p className="text-sm opacity-90">
                Currently available for internship and full-time opportunities. 
                Particularly interested in roles involving Linux, database development, and full-stack development.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="mt-1"
                />
              </div>

              <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={captchaKey}
                onChange={handleCaptchaChange}
                 />
              </div>



              <Button type="submit" className="w-full" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}