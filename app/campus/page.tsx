import React from "react";

const campus = () => {
  return (
    <div className="min-h-screen mt-10">
      <div id="fancy" className="flex justify-center mb-8">
        <h3 className="text-4xl mb-4">
          <span className="font-bold">Student</span> Life
          <div className="flex gap-14 my-4">
            <div className="p-10 border rounded-3xl w-100 h-150 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]">
              1
            </div>
            <div className="p-10 border rounded-3xl w-100 h-150 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]">
              2
            </div>
            <div className="p-10 border rounded-3xl w-100 h-150 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.50)]">
              3
            </div>
          </div>
        </h3>
      </div>
    </div>
  );
};

export default campus;
