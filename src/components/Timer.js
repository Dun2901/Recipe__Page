import React from "react";

const Timer = () => {
  return (
    <div class="px-14 py-4 shadow-md">
      <div class="flex items-center ">
        <i class="fa-solid fa-utensils text-orange-400"></i>
        <div class="pl-2">
          <div class="text-[15px] color-priority my-1">YIELD</div>
          <div class=" text-orange-400 font-light text-[15px] my-1">
            12servings
          </div>
        </div>
      </div>

      <div class="flex items-center">
        <i class="fa-regular fa-clock"></i>
        <div class="pl-2">
          <div class="text-[12px] color-priority my-1">PREP-TIME</div>
          <div class="color-priority font-light text-[15px] my-1">
            45minutes
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <i class="fa-regular fa-clock"></i>
        <div class="pl-2">
          <div class="text-[12px] color-priority my-1">COOK-TIME</div>
          <div class="color-priority font-light text-[15px] my-1">1hour</div>
        </div>
      </div>

      <div class="flex items-center">
        <i class="fa-regular fa-clock"></i>
        <div class="pl-2">
          <div class="text-[12px] color-priority my-1">TOTAL-TIME</div>
          <div class="color-priority font-light text-[15px] my-1">7.75hour</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
