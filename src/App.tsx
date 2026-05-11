import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import MainSite from "@/pages/MainSite";

import AcademyHome from "@/pages/academy/Index";
import AcademyAbout from "@/pages/academy/About";
import AcademyCourses from "@/pages/academy/Courses";
import AcademyCourseDetail from "@/pages/academy/CourseDetail";
import AcademyWorkshops from "@/pages/academy/Workshops";
import AcademyResources from "@/pages/academy/Resources";
import AcademyContact from "@/pages/academy/Contact";
import AcademyForStudents from "@/pages/academy/ForStudents";
import AcademyForColleges from "@/pages/academy/ForColleges";
import AcademyForOrganizations from "@/pages/academy/ForOrganizations";
import AcademyFAQ from "@/pages/academy/FAQ";
import AcademyBlog from "@/pages/academy/Blog";
import AcademyBlogPost from "@/pages/academy/BlogPost";
import NotFound from "@/pages/academy/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main services site */}
            <Route path="/" element={<MainSite />} />

            {/* Academy wing */}
            <Route path="/academy" element={<AcademyHome />} />
            <Route path="/academy/about" element={<AcademyAbout />} />
            <Route path="/academy/courses" element={<AcademyCourses />} />
            <Route path="/academy/courses/:slug" element={<AcademyCourseDetail />} />
            <Route path="/academy/workshops" element={<AcademyWorkshops />} />
            <Route path="/academy/resources" element={<AcademyResources />} />
            <Route path="/academy/contact" element={<AcademyContact />} />
            <Route path="/academy/for-students" element={<AcademyForStudents />} />
            <Route path="/academy/for-colleges" element={<AcademyForColleges />} />
            <Route path="/academy/for-organizations" element={<AcademyForOrganizations />} />
            <Route path="/academy/faq" element={<AcademyFAQ />} />
            <Route path="/academy/blog" element={<AcademyBlog />} />
            <Route path="/academy/blog/:slug" element={<AcademyBlogPost />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
