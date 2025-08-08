# Timeline Component

A simple and interactive timeline component that shows project items in horizontal lanes.

## 🚀 Deploy

https://timeline-airtable-guierba.vercel.app/

## 🛠️ Stack

- **React**
- **Typescript**
- **TailwindCSS**


## 📌 Requirements

- **Node.js**: **v22** (recommended)

Vite has a problem with old versions of Node.js. If you use Node.js below version 22, you can get this error:

```js
TypeError: crypto.hash is not a function
```
 - [TypeError: crypto.hash is not a function · Issue #20287 · vitejs/vite](https://github.com/vitejs/vite/issues/20287)
 - [TypeError: crypto.hash is not a function | Dev Server not starting · vitejs/vite · Discussion #20411](https://github.com/vitejs/vite/discussions/20411)

## 🏗️ How to Run

1. Install the packages:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and go to the local server URL shown in the terminal.

## 💡 What I Like About My Implementation

- **Smart lane system**: Items that don't overlap share the same lane to save space
- **Zoom feature**: You can zoom in and out using mouse wheel or buttons
- **Clean design**: Simple and easy to understand interface
- **Good performance**: Fast loading and smooth interactions

## 🔄 What I Would Change If I Did It Again

- Add drag and drop to move items to different dates
- Allow editing item names by clicking on them
- Add different colors for different types of items
- Add keyboard shortcuts for better accessibility
- Save zoom level and position when you refresh the page
- Improvement layout on Mobile

## 🎨 How I Made Design Decisions

- **Looked at project management tools** like Gantt charts for inspiration
- **Used simple colors** (gray and blue)
- **Made lanes clearly separated** so users can easily see different items
- **Added lane numbers** to help users know which lane they are looking at
- **Put zoom controls on top** where users expect to find them
- **Used hover effects** to show which items you can interact with

**Visual References:**
- https://webflow.com/made-in-webflow/timeline
- https://www.smartdraw.com/gantt-chart/

## 🧪 How I Would Test This With More Time

- **Unit tests**: Test the lane assignment logic and date calculations
- **Component tests**: Test that timeline items show in the right places
- **User tests**: Watch real users try to use the timeline
- **Performance tests**: Check how it works with hundreds of items
- **Mobile tests**: Test touch interactions on phones and tablets
- **Accessibility tests**: Make sure people with disabilities can use it
