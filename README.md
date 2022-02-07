<h1 align="center">Minimal Eleventy Boilerplate</h1>

Minimal **[Eleventy](https://www.11ty.dev/)** boilerplate that comes with a few things attached:

-   **[Vite](https://vitejs.dev/) via the [Slinkity](https://slinkity.dev) plugin** for fast HMR-enabled dev experience and optimized bundling of files in production.
-   **[Tailwind](https://tailwindcss.com/)** for simple utility-first CSS authoring.
-   **[Prettier](https://prettier.io/)** for automated code formatting (configured to support .njk files in VS Code by associating them with .html files).

Optional features can be found in repository branches:

-   **[Typescript](https://www.typescriptlang.org/)** to add static typing for type safety and type references

## Install dependencies and start development server

```bash
npm i
npm run dev
```

The development site will run on [localhost:8080](http://localhost:8080/) by default.

## Build for production

```bash
npm run build
```

The production build will appear in the `_site` folder by default, ready to be hosted in any static-site host.

```bash
npm run preview
```

If you want to preview the build output, this will build the site and then serve it immediately on [localhost:8080](http://localhost:8080/) by default.

## 📝 License

This project is MIT licensed.
