import React from "react";
import photo1 from "../assets/images/photo1.png";

const Header = () => {
  return (
    <div class="pl-60">
      <h1 class="pt-12 font-bold text-4xl mb-3">Classic Cheesecake Recipe</h1>
      <p class="mr-64">
        Look no further for a creamy and ultra smooth classic cheesecake recipe!
        Paired with a buttery graham cracker crust, no one can deny its simple
        decadence. For the best results, bake in a water bath.
      </p>
      <div class="rounded-md py-6">
        <img src={photo1} alt="1" />
      </div>
    </div>
  );
};

export default Header;
