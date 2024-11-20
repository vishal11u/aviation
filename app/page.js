import AviationCourses from "@/components/courses/AviationCourses";
import AviationJobsSection from "@/components/courses/AviationJobsSection ";
import CourseCard from "@/components/courses/CourseCard";
import AviationStudyComponent from "@/components/home/AviationStudyComponent ";
import HelpSection from "@/components/home/HelpSection";
import Hero from "@/components/home/Hero";
import OfficeSection from "@/components/home/OfficeSection ";
import StudentTestimonial from "@/components/home/StudentTestimonial";
import FAQAccordion from "@/components/layout/FAQAccordion";
import Footer from "@/components/layout/Footer";
import AviationSalary from "@/components/universities/AviationSalary";
import AviationUniversities from "@/components/universities/UniversityCard";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <CourseCard />
      <AviationStudyComponent />
      <AviationCourses />
      <AviationSalary />
      <AviationJobsSection />
      <StudentTestimonial />
      <AviationUniversities />
      <OfficeSection />
      <HelpSection />
      <FAQAccordion />
    </>
  );
}

export default page;
