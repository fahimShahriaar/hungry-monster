function displayMealList() {
    document.getElementById('search-btn').addEventListener('click', function () {
        // clearing previous display value
        document.getElementById('selected-meal-div').innerText = '';
        document.getElementById('meal-details-div').innerText = '';

        // displayMealList() function starts
        const userInput = document.getElementById('search-box').value;
        console.log(userInput);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
            .then(response => response.json())
            .then(data => {
                const mealList = data.meals;

                for (const meal of mealList) {
                    const mealThumb = meal.strMealThumb;
                    const mealTitle = meal.strMeal;
                    const mealId = meal.idMeal;
                    const mealDiv = document.getElementById('selected-meal-div');
                    const mealItem = document.createElement('div');
                    const mealInfo = `
                    <img src="${mealThumb}">
                    <h6>${mealTitle}</h6>
                    <p>${mealId}</p>
                `;
                    mealItem.innerHTML = mealInfo;
                    mealDiv.appendChild(mealItem);
                }

            })
            .catch((error) => {
                document.getElementById('selected-meal-div').innerText = `Didn't find anything. Please try another food`;
              });
    })
}

displayMealList();


function displayMealDetails() {
    document.getElementById('selected-meal-div').addEventListener('click', function (event) {
        // clearing previous display value
        document.getElementById('meal-details-div').innerText = '';
        // displayMealDetails function starts
        const mealItem = event.target.parentNode;
        const mealId = mealItem.children[2].innerText;
        console.log(mealId);
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
        .then(data => {
            const mealDetail = data.meals[0];
            console.log(mealDetail);
            const mealThumb = mealDetail.strMealThumb;
            const mealTitle = mealDetail.strMeal;
            let mealInfo = `
                <img src="${mealThumb}">
                <h4>${mealTitle}</h4>
                <h6>Ingredients</h6>
                <p>${mealDetail.strIngredient1}</p>
                <p>${mealDetail.strIngredient2}</p>
                <p>${mealDetail.strIngredient3}</p>
                <p>${mealDetail.strIngredient4}</p>
                <p>${mealDetail.strIngredient5}</p>
                <p>${mealDetail.strIngredient6}</p>
            `;
            const mealDetailsDiv = document.getElementById('meal-details-div');
            const mealInfoDiv = document.createElement('div');
            mealInfoDiv.innerHTML = mealInfo;
            mealDetailsDiv.appendChild(mealInfoDiv);

        })
    })
}

displayMealDetails();
























// function displayCategoryList() {
//     fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
//         .then(response => response.json())
//         .then(data => {
//             const categoryList = data.meals;
//             for (const category of categoryList) {
//                 document.getElementById('category-list').innerText += ` ${category.strCategory},`;
//             }
//         })
// }
// displayCategoryList();

// function getUserInputAndSearch() {
//     document.getElementById('search-btn').addEventListener('click', function () {
//         const userInput = document.getElementById('search-box').value;
//         // console.log(userInput);

//         getSelectedCategoryMeal(userInput);
//     })
// }

// getUserInputAndSearch();


// function getSelectedCategoryMeal(userInput) {
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${userInput}`)
//         .then(response => response.json())
//         .then(data => {
//             const mealList = data.meals;
//             for (const meal of mealList) {
//                 // console.log(meal);
//                 const mealThumb = meal.strMealThumb;
//                 const mealTitle = meal.strMeal;
//                 console.log(mealThumb);              
//                 console.log(mealTitle);

//                 const mealDiv = document.getElementById('selected-meal-div');
//                 const mealItem = document.createElement('div');
//                 const mealInfo = `
//                     <img src="${mealThumb}">
//                     <h6>${mealTitle}</h6>
//                 `;
//                 mealItem.innerHTML = mealInfo;

//                 mealDiv.appendChild(mealItem);
//             }
//         })
// }