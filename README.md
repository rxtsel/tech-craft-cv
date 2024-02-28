# 🤓 TechCraftCV

> [!IMPORTANT]
> 🚀 This open-source project is currently under active development. Feel free to contribute and help make it even better! 🌟

## Table of Contents

- [1. Introduction](#1-introduction)
- [2. Goals and Objectives](#2-goals-and-objectives)
- [3. Architecture Overview](#3-architecture-overview)
- [4. Features](#4-features)
- [5. Technology Stack](#5-technology-stack)
- [6. Installation](#6-installation)
- [7. How to contribute](#7-how-to-contribute)
- [8. TODOS](#8-canvas)

## 1. Introduction

The TechCraftCV project aims to revolutionize the way developers create resumes by providing an intelligent and user-friendly platform powered by AI. This document outlines the design and implementation details of the TechCraftCV application.

## 2. Goals and Objectives

- Create a tool tailored for developers to effortlessly generate professional resumes.
- Offer customizable templates and intuitive content management features.
- Ensure seamless user experience and easy navigation.
- Using AI to provide CV translation.

## 3. Architecture Overview

The architecture of TechCraftCV consists of a frontend developed in Next.js and a backend built in Subapase, with communication between them via a REST API.

- **Frontend (Next.js):** We use Next.js to develop a modern and responsive user interface.

- **Backend (Subapase):** We have chosen Subapase as our backend to manage business logic and data management. Subapase offers us a flexible and scalable structure to efficiently build and maintain our REST API.

- **Communication:** Communication between the frontend and backend is carried out through a REST API, ensuring clear separation of responsibilities and seamless integration between the two components of the application.

## 4. Features

- **Predefined Harvard Tech CV**:

  Utilize a predefined CV template based on the format recommended by Harvard specifically tailored for tech professionals. This template has been refined based on feedback from recruiters, ensuring it meets industry standards and effectively showcases technical skills and experience.

- **Customizable CV Themes**:

  Provide users with the option to choose from a selection of different themes for their CVs. These themes offer varied styles and designs, allowing users to personalize their resumes to match their preferences and personality.

- **AI-Powered Internationalization Support**:

  Integrate AI-driven internationalization support to assist users in adapting their CVs for different regions and languages. Initially, users will be prompted to input their OpenAI API key to leverage this service, enabling dynamic language and content adjustments to cater to diverse audiences.

## 5. Technology Stack

- **Backend**: We utilize Subapase for the backend, which provides PostgreSQL database, authentication, among other services.
- **Frontend**: Our frontend is developed using Next.js.
- **Additional tools and libraries**: We employ [OpenIA](https://openai.com/product), [HugeIcons](https://hugeicons.com/), and [Shadcn](https://ui.shadcn.com/) in the project.

## 6. Installation

Clone this repository:

```bash
git clone git@github.com:rxtsel/dev-craft-cv.git
```

Install dependencies:

```bash
pnpm i
```

Run local server

```bash
pnpm run dev
```

## 7. How to contribute

- Fork this repository.
- Create a new branch with the name of the feature you want to develop.
- Make your changes and commit them using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
- Push the changes to your fork.
- Create a pull request to the main repository.
- Wait for the review and approval of the pull request.

## 8. CANVAS:

The project canvas is available [here](https://github.com/users/rxtsel/projects/1).
