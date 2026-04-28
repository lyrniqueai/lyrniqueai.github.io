import { Link } from "react-router-dom";
import { Globe, ExternalLink } from "lucide-react";
import logo from "@/assets/lyrnique-logo.png";

const AcademyFooter = () => {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 flex items-center space-x-3">
              <img src={logo} alt="Lyrnique Academy" className="h-10 w-10" />
              <span className="text-2xl font-bold gradient-text">Academy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI for Everyone: Vision Codes Your Future
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/academy/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/academy/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/academy/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/academy/workshops" className="text-sm text-muted-foreground hover:text-primary transition-colors">Workshops</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/academy/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/academy/for-students" className="text-sm text-muted-foreground hover:text-primary transition-colors">For Students</Link></li>
              <li><Link to="/academy/for-colleges" className="text-sm text-muted-foreground hover:text-primary transition-colors">For Colleges</Link></li>
              <li><Link to="/academy/for-organizations" className="text-sm text-muted-foreground hover:text-primary transition-colors">For Organizations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://twitter.com/lyrnique" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/lyrnique" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Lyrnique Services
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lyrnique Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AcademyFooter;
