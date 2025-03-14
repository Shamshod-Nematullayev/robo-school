# RoboSchoolApp

RoboSchoolApp is a web application built with **Vite**, **React**, and **TypeScript**. It uses **styled-components** for styling. The key feature of this project is that it allows content management via **Google Sheets**, eliminating the need for a traditional API.

## Features
- Built with **Vite**, **React**, and **TypeScript**
- Styled using **styled-components**
- Content dynamically managed via **Google Sheets**
- No backend API required for data updates

## Solution
The challenge was to create a fully manageable website **without using an API**. The solution involved integrating **Google Sheets** as a dynamic content source, allowing administrators to update website content easily.

- Google Sheets is used as a database alternative
- Data is fetched and displayed dynamically
- No need for complex backend infrastructure

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/Shamshod-Nematullayev/roboschoolapp.git
   ```
2. Install dependencies:
   ```sh
   cd roboschoolapp
   npm install
   ```
3. Update **constants.ts** with your **Google Sheets ID** (instead of using an `.env` file, the `sheet_id` is directly stored in `constants.ts`).
4. Run the development server:
   ```sh
   npm run dev
   ```

## Live Demo
Check out the live version here: [RoboSchoolApp](https://roboschoolapp.netlify.app)

## Author
Developed by **Shamshod Ne'matullayev**.
GitHub: [Shamshod-Nematullayev](https://github.com/Shamshod-Nematullayev)

