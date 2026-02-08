<h1 align="center">Tour List ✈️</h1>

## 📌 About the Project
A React-based website that allows users to explore popular tourist destinations, browse through photo galleries, and manage their travel wishlist.

## 🛠 Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## 📁 Project Structure

* `App.js` — The main component that manages the global state of the city list and deletion logic.
* `CityCard.js` — A child component responsible for the logic and display of an individual city card.
* `data.js` — A data module containing city names, descriptions, and image URL arrays.



## 🌟 Key Features
* **Dynamic Rendering:** Displays a list of cities by mapping through an array of objects using the `.map()` method.
* **Independent Sliders:** Each card features its own local state to manage a personalized image carousel.
* **Smart Descriptions:** A "Read More" functionality that toggles long descriptions using the `substring` method for a cleaner UI.
* **List Management:** Users can remove individual destination cards or clear the entire list with a single click.

## ⚙️ Usage and Setup
You are free to use the code of this project for your own purposes — for learning, modification, or as a foundation for your own ideas.

**To run the project:**

1. Clone the repository:
```
git clone https://github.com/roody123/tour-list.git
```

2. Install dependencies:
```
npm install
```

3. Start the development server:

```
npm start
```
