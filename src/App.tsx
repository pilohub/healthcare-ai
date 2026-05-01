import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Hospitals from "./components/pages/Hospitals";
import Emergency from "./components/pages/Emergency";
import Status from "./components/pages/Status";
import Contacts from "./components/pages/Contacts";
import BookAppointment from "./components/pages/BookAppointment";
import StudentPortal from "./components/pages/StudentPortal";
import Quiz from "./components/pages/Quiz";
import Notes from "./components/pages/Notes";
import DrugInfo from "./components/pages/DrugInfo";
import Anatomy from "./components/pages/Anatomy";
import BMI from "./components/pages/BMI";
import HeartRate from "./components/pages/HeartRate";
import Physiology from "./components/pages/Physiology";
import Pathology from "./components/pages/Pathology";
import HowItWorks from "./components/pages/HowItWorks";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";
import Support from "./components/pages/Support";
import Pharmacology from "./components/pages/Pharmacology";
import Circulatory from "./components/pages/physiology/Circulatory";
import Respiratory from "./components/pages/physiology/Respiratory";
import Nervous from "./components/pages/physiology/Nervous";
import Digestive from "./components/pages/physiology/Digestive";
import Skeletal from "./components/pages/physiology/Skeletal";
import Muscular from "./components/pages/physiology/Muscular";
import PhysiologyStart from "./components/pages/physiology/PhysiologyStart";
import DrugClassification from "./components/pages/pharmacology/DrugClassification";
import Pharmacokinetics from "./components/pages/pharmacology/Pharmacokinetics";
import Pharmacodynamics from "./components/pages/pharmacology/Pharmacodynamics";
import Antibiotics from "./components/pages/pharmacology/Antibiotics";
import DrugAdministration from "./components/pages/pharmacology/DrugAdministration";
import AdverseEffects from "./components/pages/pharmacology/AdverseEffects";
import PharmacologyStart from "./components/pages/pharmacology/PharmacologyStart";
import CellInjury from "./components/pages/pathology/CellInjury";
import Infections from "./components/pages/pathology/Infections";
import Genetic from "./components/pages/pathology/Genetic";
import Cardiac from "./components/pages/pathology/Cardiac";
import Neuro from "./components/pages/pathology/Neuro";
import Lab from "./components/pages/pathology/Lab";
import PathologyStart from "./components/pages/pathology/StartLearning";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/status" element={<Status />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/Student" element={<StudentPortal />} />
        <Route path="/book" element={<BookAppointment />} />

        <Route path="/" element={<StudentPortal />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/drug" element={<DrugInfo />} />
        <Route path="/anatomy" element={<Anatomy />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/heart" element={<HeartRate />} />

        <Route path="/physiology" element={<Physiology />} />
        <Route path="/circulatory" element={<Circulatory />} />
        <Route path="/respiratory" element={<Respiratory />} />
        <Route path="/nervous" element={<Nervous />} />
        <Route path="/digestive" element={<Digestive />} />
        <Route path="/skeletal" element={<Skeletal />} />
        <Route path="/muscular" element={<Muscular />} />
        <Route path="/physiology-start" element={<PhysiologyStart />} />

        <Route path="/pharmacology" element={<Pharmacology />} />
        <Route path="/pathology" element={<Pathology />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />

        <Route path="/drugclassification" element={<DrugClassification />} />
        <Route path="/pharmacokinetics" element={<Pharmacokinetics />} />
        <Route path="/pharmacodynamics" element={<Pharmacodynamics />} />
        <Route path="/antibiotics" element={<Antibiotics />} />
        <Route path="/drugadministration" element={<DrugAdministration />} />
        <Route path="/adverseeffects" element={<AdverseEffects />} />
        <Route path="/pharmacologystart" element={<PharmacologyStart />} />

        <Route path="/pathology/cell" element={<CellInjury />} />
        <Route path="/pathology/infection" element={<Infections />} />
        <Route path="/pathology/genetic" element={<Genetic />} />
        <Route path="/pathology/cardiac" element={<Cardiac />} />
        <Route path="/pathology/neuro" element={<Neuro />} />
        <Route path="/pathology/lab" element={<Lab />} />
        <Route path="/pathology/start" element={<PathologyStart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;