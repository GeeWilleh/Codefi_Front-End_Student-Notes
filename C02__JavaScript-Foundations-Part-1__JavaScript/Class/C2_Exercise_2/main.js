

const food = [
    {
    name: "Apple",
    Price: .25,
},
{
    name: "Ramen",
    Price: .75,
},
{
    name: "ribEye",
    Price: 49,
},
];


const foodList = document.querySelector(".list-food");

for (let item of food) {

  const foodListItem = document.createElement('li');

  foodListItem.innerText = item.name;

  foodList.appendChild(foodListItem);

}
