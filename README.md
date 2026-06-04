# MyPortfolio

Personal portfolio of Nuria Antón - FullStack Web Developer

## 🛠️ Tech Stack

| Category | Technology |
|----------|-------------|
| **Framework** | Next.js 13.2.4 |
| **Language** | JavaScript / React 18.2.0 |
| **Styling** | Tailwind CSS 3.2.7 |
| **Fonts** | Google Fonts (Poppins, Roboto Mono) |
| **Icons** | React Icons |
| **Deployment** | Vercel |

## 🚀 Local Development

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/nuriia99/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with yarn
   # yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to: [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs the linter |

## 🌐 Deploy on Vercel

The project is deployed at: **https://myportfolio.vercel.app**

### Deploy Your Own on Vercel

1. Create an account at [Vercel](https://vercel.com)
2. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```
3. Run the deployment:
   ```bash
   vercel
   ```
4. Or connect your GitHub repository directly to Vercel for automatic deployment

## ✨ Features

- **Dark/Light Mode**: Toggle to switch between light and dark themes
- **Responsive Design**: Adapts to mobile, tablet, and desktop
- **Sections**:
  - Personal Presentation
  - About Me
  - Technical & Soft Skills
  - Projects
  - Contact Information
- **Animations**: Scroll reveal effects
- **Project Gallery**: Image carousel for projects
- **External Links**: LinkedIn, GitHub, PDF Resume
- **Smooth Navigation**: Smooth scroll between sections

## 📁 Project Structure

```
MyPortfolio/
├── app/
│   ├── api/
│   │   └── hello/
│   │       └── route.js      # Example API route
│   ├── techs/               # Tech components
│   ├── Carousel.jsx         # Carousel component
│   ├── ProjectCard.jsx     # Project card component
│   ├── globals.css          # Global styles
│   ├── layout.js            # Main layout
│   └── page.js              # Main page
├── public/
│   ├── *.png, *.svg, *.pdf  # Static assets
│   └── cv.pdf               # Resume / CV
├── package.json
├── tailwind.config.js
├── next.config.js
└── jsconfig.json
```

## 🔧 Customization

### Changing Content

Edit `app/page.js` to modify:
- Name and description
- Displayed projects
- Contact information
- Skills

### Styling

Global styles are in `app/globals.css`. Tailwind is configured in `tailwind.config.js`.

## 📄 License

MIT License - See the [LICENSE](LICENSE) file for details.

---

Questions or suggestions? Open an issue or contact via LinkedIn.