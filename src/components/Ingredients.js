import React from "react";

const Ingredients = () => {
  return (
    <div class="pl-60 mb-5">
      <h2 class="font-bold text-2xl mb-6">Ingredients</h2>
      <p class="mb-6 text-lg">Graham Cracker Crust</p>
      <div class="mb-5">
        <div class="mb-2">
          <input class="mr-2" type="checkbox" />
          <label>
            1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about
            10 full sheet graham crackers)
          </label>
        </div>
        <div class="mb-2">
          <input class="mr-2" type="checkbox" />
          <label>
            5 Tablespoons (70g) <strong>unsalted butter</strong>, melted
          </label>
        </div>
        <div class="mb-2">
          <input class="mr-2" type="checkbox" />
          <label>
            1/4 cup (50g) <strong>granulated sugar</strong>
          </label>
        </div>
      </div>

      <p class="mb-6 text-lg">Cheesecake</p>
      <div>
        <div class="mb-2">
          <input class="mr-2" type="checkbox" />
          <label>
            four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>,
            softened to room temperature
          </label>
        </div>
        <div class="mb-2">
          <input class="mr-2" type="checkbox" />
          <label>
            1 cup (200g) <strong>granulated sugar</strong>
          </label>
        </div>
        <div class="mb-2">
          <input class="mr-2" type="checkbox" />
          <label>
            1 cup (240g) full-fat <strong>sour cream</strong>, at room
            temperature
          </label>
        </div>
        <div class="mb-2">
          <input class="mr-2" type="checkbox" />
          <label>
            1 teaspoon <strong>pure vanilla extract</strong>
          </label>
        </div>
        <div class="mb-2">
          <input class="mr-2" type="checkbox" />
          <label>
            2 teaspoons <strong>fresh lemon juice</strong> (optional, but
            recommended)
          </label>
        </div>
        <div class="mb-2">
          <input class="mr-2" type="checkbox" />
          <label>
            3 large <strong>eggs</strong>, at room temperature
          </label>
        </div>
        <div class="mb-2">
          <input class="mr-2" type="checkbox" />
          <label>
            topping suggestions: salted caramel, lemon curd, strawberry topping,
            chocolate ganache, red wine chocolate ganache, fresh fruit, whipped
            cream, or raspberry sauce (recipe in notes)
          </label>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
