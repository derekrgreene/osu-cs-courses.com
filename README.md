# 🚀 OSU CS Courses
[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

## Prerequisites
- Node.js
- npm
- Git

## Clone the Repository
```bash
git clone https://github.com/derekrgreene/osu-cs-courses.com.git
cd osu-cs-courses.com
```

## Install Dependencies
```bash
npm install
```

## ⚙️ Development
```bash
npm run dev
```

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
|   |   |   ├── courses/
|   |   |   ├── guides/
|   |   |   ├── reference/
|   |   |   └── resources/
|   |   ├── community.md
|   |   ├── courses.md
|   |   ├── resources.md
|   |   ├── roadmaps.md
|   |   └── index.mdx
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Astro looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview build locally, before deploying          |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🤝 Contributing

Contributions from the OSU CS community are welcome! Whether you're a current student, alumni, or faculty member, your knowledge and experience are valuable!

How to Contribute

1. **Fork the repository** - Create your own copy of the project to work on.
2. **Create a branch** - Make your changes in a new branch.
3. **Submit a pull request** - Once you've made your changes, submit a PR for review.

### Guidelines

- Follow the existing formatting and structure for consistency
- Include accurate information based on recent course experiences
- Add references or sources where applicable
- For course pages, use the template provided in src/content/docs/courses/_template.md

## 📋 Tasks and Roadmap
High Priority

### ❗High Priority
- ✅  Create markdown pages for all CS courses in the `/courses` folder
- [ ] Develop study resource listings for core classes
- [ ] Design and update the website favicon
- ✅  Complete basic navigation structure

Course Pages to Create

### Course Pages in need of Content
- [ ] CS 161: Introduction to Computer Science I
- [ ] CS 162: Introduction to Computer Science II
- [ ] CS 225: Discrete Structures in Computer Science
- [ ] CS 261: Data Structures
- [ ] CS 271: Computer Architecture and Assembly Language
- [ ] CS 290: Web Development
- [ ] CS 325: Analysis of Algorithms
- [ ] CS 340: Introduction to Databases
- [ ] CS 344: Operating Systems I
- [ ] CS 361: Software Engineering I
- [ ] CS 362: Software Engineering II
- [ ] CS 372: Computer Networks
- [ ] CS 475: Parallel Programming
- [ ] (Add remaining missing courses to README)

### Feature Roadmap

- [ ] Integrate professor reviews from rate my professor
- [ ] Add difficulty ratings for each course
- [ ] Add job/internship resources section
- [ ] Develop discussion forum or integration with existing community platforms (e.g. Discord)

## 📚 Additional Resources

Check out [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
