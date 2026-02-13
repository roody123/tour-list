<h1 align="center">Food Nutrients Counter 🥗</h1>

<img width="1919" height="902" alt="Image" src="https://github.com/user-attachments/assets/d5556188-009f-4c98-9c37-29d383e2734b" />

## 📌 О проекте
Веб-приложение, которое позволяет пользователям искать данные о составе продуктов (жиры, сахар). Проект направлен на закрепление навыков работы с API, обработки асинхронных запросов и создания интерактивного интерфейса.

## 🛠 Технологии
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-green?style=for-the-badge&logo=greensock&logoColor=white)

## 📁 Структура проекта

* `App.jsx` - Главный компонент, управляющий состоянием поиска, логикой API запросов и анимаций.
* `ProductCard.jsx` - Дочерний компонент для отображения информации о нутриентах выбранного продукта.
* `Loader.jsx` - Компонент индикатора загрузки для улучшения пользовательского опыта.
* `App.css` - Стилизация интерфейса.

## 🌟 Ключевые особенности
* **Интеграция с API:** Fetch-запросы к API Ninjas Nutrition для получения актуальных данных в реальном времени.
* **Плавные анимации:** Использование хука `@gsap/react` для создания эффектов появления карточек.
* **Улучшенный UX:** Использование библиотеки `SweetAlert2` для красивых уведомлений об ошибках, если продукт не найден.
* **Адаптивность:** Дизайн, корректно отображающийся на устройствах с разной шириной экрана.
* **Оптимизация:** Использование `useCallback` для предотвращения лишних рендеров.

## ⚙️ Установка и запуск

**Чтобы запустить проект локально:**

1. Склонируйте репозиторий:
```
git clone https://github.com/roody123/nutrition-analysis.git
```

2. Установите зависимости:
```
npm install
```

3. Запустите сервер для разработки:
```
npm run dev
```
