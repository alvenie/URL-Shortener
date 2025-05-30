# Next.js URL Shortener

A modern, full-stack URL shortener built with Next.js (App Router) and MongoDB. Instantly generate shareable, custom short links that redirect to any destination.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Running Locally](#running-locally)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## About

This project is a simple yet robust URL shortener built for my CS391 mini project 4. Users can enter a long URL and specify a custom alias. The app generates a short link (e.g., `https://short-url-me.vercel.app/alias`) that, when visited, instantly redirects to the original URL. All mappings are securely stored in MongoDB.  
The project demonstrates best practices in Next.js App Router, secure environment variable handling, and MongoDB integration.

---

## Features

- **Instant Short Links**: Generate short URLs with custom aliases.
- **Custom Aliases**: Prevents duplicate aliases; users are notified if an alias is taken.
- **Automatic Redirection**: Visiting a short URL instantly redirects to the original.
- **Backend Validation**: All URLs and aliases are validated server-side.
- **Copy & Share**: Easily copy your new short link to share anywhere.
- **Secure**: Secrets are never exposed to the client or committed to the repo.
- **Responsive UI**: Clean, modern interface using MUI and Tailwind CSS.

---

## Demo

Try the live demo: [https://url-shortener.vercel.app/](https://url-shortener.vercel.app/)

---

## Tech Stack

- [Next.js (App Router)](https://nextjs.org/)
- [MongoDB](https://mongodb.com/)
- [MUI](https://mui.com/) and [Tailwind CSS](https://tailwindcss.com/) for styling

---

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account or local MongoDB instance

### Installation

1. **Clone the repository:**

- git clone https://github.com/alvenie/URL-Shortener.git
- cd URL-Shortener

2. **Installing dependencies:**

- npm install

### Environment Variables

- Create a `.env.local` file in the root of your project with the following:

  1. MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/url-shortener?retryWrites=true&w=majority
  2. BASE_URL=http://localhost:3000


- Set `BASE_URL` to your deployed domain when in production (e.g., `https://url-shortener.vercel.app/`).

### Running Locally

- npm run dev

## Usage

1. Enter a long URL and a custom alias.
2. Click **Shorten**.
3. Copy the generated short URL and share it.
4. When anyone visits the short URL, they are instantly redirected to the original.

---

## Project Structure

- app/[alias]/page.tsx `# Handles dynamic redirection`
- api/shorten/route.ts `# API endpoint for creating short URLs`
- layout.tsx `# App layout (header, global styles)`
- page.tsx `# Main landing page`
- components/ShortUrlDisplay.tsx `# Form for input, submission, and output`
- lib/createNewUrl.ts `# For creating and inserting urls in MongoDB`
- db.ts `# MongoDB connection helper`
- .env.local `# Environment variables`
    
---

## Deployment

1. **Push to GitHub**.
2. **Connect to Vercel** and set environment variables (`MONGO_URI`, `BASE_URL`) in the dashboard.
3. **Deploy**.

---

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an [issue](https://github.com/alvenie/mp-5/issues) or submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs/)
- [MongoDB Documentation](https://mongodb.com/docs/)
- [MUI Documentation](https://mui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---
