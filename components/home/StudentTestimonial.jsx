import { ArrowRight, Play } from "lucide-react";
import React from "react";
import Student1 from "../../public/assets/universities/student1.svg";
import Student2 from "../../public/assets/universities/student2.svg";
import Image from "next/image";

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

const Button = ({ children, variant, size, className, ...props }) => {
  let btnClasses = "rounded-md font-medium transition-colors";

  if (variant === "outline") {
    btnClasses += " border px-4 py-2 hover:bg-pink-50 hover:text-pink-500";
  } else if (variant === "ghost") {
    btnClasses += " px-3 py-1 hover:bg-pink-50 hover:text-pink-500";
  } else {
    btnClasses += " bg-pink-500 text-white px-6 py-3 hover:bg-pink-600";
  }

  if (size === "sm") {
    btnClasses += " text-sm";
  }

  return (
    <button className={`${btnClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

const StudentTestimonial = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row px-6 py-12 gap-8">
      {/* Left Section */}
      <div className="lg:w-1/3">
        <span className="text-pink-500 text-sm font-medium uppercase">
          Success Story
        </span>
        <h2 className="text-[36px] font-bold text-gray-900 mt-2 leading-snug">
          Real Stories from <br /> Real Students
        </h2>
        <p className="text-gray-600 text-base mt-4">
          From dreamers to achievers, hear directly from the students about
          their experience with Select Your University.
        </p>
        <button className="inline-flex text-[12px] items-center mt-6 border border-gray-300 text-pink-500 text-sm px-5 py-2 rounded hover:text-pink-600 hover:border-pink-500 transition-all">
          View More Success Stories
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[56%_44%] gap-6">
        {/* First Testimonial */}
        <Card>
          <CardContent className={"border overflow-hidden rounded-lg"}>
            <p className="text-gray-800 font-semibold text-[32px] italic leading-relaxed py-5 relative">
              <span className="text-pink-500 text-6xl absolute -top-1 -left-5">
                "
              </span>
              The process was so <span className="text-pink-500">smooth</span>{" "}
              and engaging. The counsellors were very polite and helpful.
              <span className="text-pink-500 text-6xl absolute bottom-3 left-22">
                "
              </span>
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={Student1}
                  alt="Student Avatar"
                  className="w-12 h-28 rounded-ful drop-shadow-md"
                />
                <div className="ml-4">
                  <h4 className="text-gray-900 font-semibold text-[17px]">
                    Atul Kumar
                  </h4>
                  <p className="text-[13px] text-gray-800 font-medium">
                    University of California, 2014
                  </p>
                  <p className="text-[12px] text-gray-600">
                    MS in Computer Science
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="mt-4 flex items-center text-[12px] text-gray-600 hover:text-pink-500"
              >
                Watch their Story
                <Play
                  size={16}
                  className="ml-2 border-2 h-5 w-5 p-0.5 rounded-full"
                />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Second Testimonial */}
        <Card>
          <CardContent className="flex flex-col justify-between h-full py-12 border overflow-hidden rounded-lg">
            <p className="text-gray-800 text-[25px] italic leading-relaxed mb-6">
              Held my hand like a <br /> friend and very <br /> patiently guided
              me <br /> through the process.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <Image
                src={Student2}
                alt="Student Avatar"
                className="w-18 h-28 rounded-ful drop-shadow-md"
              />
              <Button
                variant="ghost"
                size="sm"
                className="mt-4 flex items-center text-gray-600 hover:text-pink-500"
              >
                Watch their Story
                <Play
                  size={16}
                  className="ml-2 border-2 h-5 w-5 p-0.5 rounded-full"
                />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentTestimonial;
