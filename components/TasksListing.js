import React from "react";

const TasksListing = () => {
  return (
    <div className="grid grid-cols-[0.2fr_1fr_1fr_1fr_0.5fr] w-full bg-background text-text-primary">
      <div className="px-3 py-3 border text-wrap border-r-black">index</div>
      <div className="px-3 py-3 text-center border text-wrap border-r-black">
        Name
      </div>
      <div className="px-3 py-3 text-center border text-wrap border-r-black">
        Description
      </div>
      <div className="px-3 py-3 text-center border text-wrap border-r-black">
        Dates
      </div>
      <div className="px-3 py-3 text-center border text-wrap border-x">
        Tags
      </div>
    </div>
  );
};

export default TasksListing;
