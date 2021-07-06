const beanUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const beanButton = document.querySelector("#run-beanv-button");
beanButton.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

const coffeeButton = document.querySelector("#run-coffee-button");
coffeeButton.addEventListener("click", () => {
    getAllCoffee()
        .then(coffee => {
            console.log(coffee);
        })
});

function getAllBeanVarieties() {
    return fetch(beanUrl).then(resp => resp.json());
}
function getAllCoffee() {
    return fetch(coffeeUrl).then(resp => resp.json());
}
