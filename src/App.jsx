import Hero from "./components/Hero"; // Adjust path if necessary
import Navbar from "./components/Navbar"; // Import Navbar component
import Projects from "./components/projects"; // Import Projects component
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import EducationSection from "./components/EducationSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-800 to-gray-900 bg-cover bg-center"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <EducationSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default App;
