fetch("http://localhost:8088/foods")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
        parsedFoods.forEach((food) => {
            funcForFoodItems(food.name, food.ethnicity, food.category);
        }

        )
    })


const funcForFoodItems = (name, ethnicity, category) => {
    const htmlRep = ` <section class="FoodList">
        <h1 class="foodName">${name}</h1>
        <h2 class="foodEthnicity">${ethnicity}</h2>
        <h3 class="foodCategory">${category}</h3>
    </section>`

    const whereToPlace = document.querySelector(".foodList")

    whereToPlace.innerHTML += htmlRep
}