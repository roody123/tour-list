<h1 align="center">Food Nutrients Counter 🥗</h1>

<img width="1919" height="902" alt="Image" src="https://github.com/user-attachments/assets/d5556188-009f-4c98-9c37-29d383e2734b" />

## 📌 About the project
A web application that allows users to search for data on the composition of products (fats, sugar). The project aims to reinforce skills in working with APIs, processing asynchronous requests, and creating interactive interfaces.

## 🛠 Technologies
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-green?style=for-the-badge&logo=greensock&logoColor=white)

## 📁 Project structure

* `App.jsx` - The main component that manages the search state, API request logic, and animations.
* `ProductCard.jsx` - Child component for displaying nutrient information for the selected product.
* `Loader.jsx` - Loading indicator component to improve user experience.
* `App.css` - Interface styling.

## 🌟 Key Features
* **API Integration:** Fetch requests to the Ninjas Nutrition API to get real-time data.
* **Smooth animations:** Use of the `@gsap/react` hook to create card appearance effects.
* **Improved UX:** Use of the `SweetAlert2` library for attractive error notifications if a product is not found.
* **Responsiveness:** Design that displays correctly on devices with different screen widths.
* **Optimization:** Use `useCallback` to prevent unnecessary renders.

## ⚙️ Installation and launch

**To launch the project locally:**

1. Clone the repository:
```
git clone https://github.com/roody123/nutrition-analysis.git
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```
