/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
  const n = recipes.length;
  const result = [];
  const ingredientsToRecipesMap = {};
  const recipesNeedCounts = {};
  for (let i = 0 ; i < n ; i++) {
    for (let ingredient of ingredients[i]) {
      if (!ingredientsToRecipesMap[ingredient]) ingredientsToRecipesMap[ingredient] = [];
      ingredientsToRecipesMap[ingredient].push(recipes[i]);
    }
    recipesNeedCounts[recipes[i]] = ingredients[i].length;
  }

  while (supplies.length) {
    const nextSupplies = [];
    for (let supply of supplies) {
      if (!ingredientsToRecipesMap[supply]) continue;
      for (let recipe of ingredientsToRecipesMap[supply]) {
        recipesNeedCounts[recipe]--;
        if (recipesNeedCounts[recipe] === 0) {
          result.push(recipe);
          nextSupplies.push(recipe);
        }
      }
    } 
    supplies = nextSupplies;
  }

  return result;
};

const recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"];
console.log(findAllRecipes(recipes, ingredients, supplies));