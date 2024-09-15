import React from "react";

const TestAnimation = () => {
  return (
    <div className="relative h-screen bg-gray-100 flex items-center justify-center">
      <div className="absolute bottom-0 right-[500px] top-16 animate-float">
        <img
          src="/src/assets/images/favIcon.png"
          alt="Floating Image"
          class="w-40 h-40"
        />
      </div>
    </div>
  );
};

export default TestAnimation;
