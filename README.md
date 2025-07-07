# Electron React TailwindCSS shadcn/ui Template

A modern desktop application template built with **Electron**, **React**, **TypeScript**, **TailwindCSS**, and **shadcn/ui** components.

## 🚀 Features

- ⚡ **Electron** - Build cross-platform desktop apps
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🎯 **shadcn/ui** - Beautiful and accessible UI components
- 📘 **TypeScript** - Type safety and better developer experience
- 🔥 **Hot Reload** - Fast development with React Fast Refresh
- 📦 **Webpack** - Module bundling and optimization

## 🛠️ Tech Stack

- [Electron](https://electron.atom.io/) - Desktop app framework
- [React](https://facebook.github.io/react/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Webpack](https://webpack.js.org/) - Module bundler
- [React Fast Refresh](https://www.npmjs.com/package/react-refresh) - Hot reloading

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd <your-project-name>
npm install
```

## 🚀 Development

Start the app in development mode:

```bash
npm start
```

## 📦 Building

To package the app for production:

```bash
npm run package
```

## 🎨 UI Components

This template includes pre-configured shadcn/ui components. To add new components:

```bash
npx shadcn-ui@latest add <component-name>
```

Available components: button, input, card, dialog, and many more from the [shadcn/ui library](https://ui.shadcn.com/).

## 📁 Project Structure

```
src/
├── main/          # Electron main process
├── renderer/      # React app
│   ├── components/
│   │   └── ui/    # shadcn/ui components
│   ├── lib/       # Utilities
│   └── ...
└── ...
```

## � License

MIT License - feel free to use this template for your projects!

---

**Happy coding! 🎉**
