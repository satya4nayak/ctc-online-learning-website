import React from 'react';

const MultipleCard = () => {
  return (
    <div className="bg-white text-center py-8 w-full">

      <div className="carousel-container max-w-screen-xl mx-auto overflow-hidden relative">
        <div className="carousel-track flex gap-5 transition-transform duration-200 ease-out" id="carouselTrack">

          {/* Course Slide 1 */}
          <div className="course-slide flex-shrink-0 w-60 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://img.freepik.com/free-vector/programmer-doing-his-job-office_23-2148274928.jpg?w=740&t=st=1711088385~exp=1711088985~hmac=fef8dad450c84f7f40d188f77b308524acfc3d8866793eb19fe109089b576b25"
              alt="AWS Services"
              className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-400 to-transparent z-10"></div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white z-20">
              AWS Services
            </div>
          </div>

          {/* Course Slide 2 */}
          <div className="course-slide flex-shrink-0 w-60 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://w0.peakpx.com/wallpaper/469/148/HD-wallpaper-fullstack-development-nodejs-programmer-technology.jpg"
              alt="UI/UX Design"
              className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-400 to-transparent z-10"></div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white z-20">
              UI/UX Design
            </div>
          </div>

          {/* Course Slide 3 */}
          <div className="course-slide flex-shrink-0 w-60 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://img.freepik.com/free-vector/programmer-doing-his-job-office_23-2148274928.jpg?w=740&t=st=1711088385~exp=1711088985~hmac=fef8dad450c84f7f40d188f77b308524acfc3d8866793eb19fe109089b576b25"
              alt="Full-Stack Development"
              className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-400 to-transparent z-10"></div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white z-20">
              Full-Stack Development
            </div>
          </div>

          {/* Course Slide 4 */}
          <div className="course-slide flex-shrink-0 w-60 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://w0.peakpx.com/wallpaper/469/148/HD-wallpaper-fullstack-development-nodejs-programmer-technology.jpg"
              alt="DV Tools"
              className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-400 to-transparent z-10"></div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white z-20">
              DV Tools
            </div>
          </div>

          {/* Course Slide 5 */}
          <div className="course-slide flex-shrink-0 w-60 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://img.freepik.com/free-vector/programmer-doing-his-job-office_23-2148274928.jpg?w=740&t=st=1711088385~exp=1711088985~hmac=fef8dad450c84f7f40d188f77b308524acfc3d8866793eb19fe109089b576b25"
              alt="Photography"
              className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-400 to-transparent z-10"></div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white z-20">
              Photography
            </div>
          </div>

          {/* Add More Slides */}
          {/* ... You can repeat or add more course slides here */}
        </div>
      </div>
    </div>
  );
};

export default MultipleCard;
