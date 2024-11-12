import AviationJobsSection from "@/components/courses/AviationJobsSection ";
import CourseCard from "@/components/courses/CourseCard";
import AviationFees from "@/components/home/AviationFees";
import AviationStudyComponent from "@/components/home/AviationStudyComponent ";
import HelpSection from "@/components/home/HelpSection";
import Hero from "@/components/home/Hero";
import OfficeSection from "@/components/home/OfficeSection ";
import FAQAccordion from "@/components/layout/FAQAccordion";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AviationAdmissionGuide from "@/components/universities/AviationAdmissionGuide";
import AviationSalary from "@/components/universities/AviationSalary";
import AviationUniversities from "@/components/universities/UniversityCard";
import React from "react";

function page() {
  return (
    <>
      <Header />

      <Hero />

      <CourseCard />

      <AviationStudyComponent />

      <AviationUniversities />

      <AviationAdmissionGuide />

      <AviationJobsSection />

      <AviationFees />

      <AviationSalary />

      <OfficeSection />

      <HelpSection />

      <FAQAccordion />

      <Footer />
    </>
  );
}

export default page;
