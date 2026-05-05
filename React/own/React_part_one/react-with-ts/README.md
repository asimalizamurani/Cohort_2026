# ✨ Tasks - Apple-Inspired Todo App

A beautiful, modern todo application built with **React** and **TypeScript**, featuring a stunning Apple-design UI and complete CRUD functionality.

![Tasks App](https://img.shields.io/badge/React-19.2.5-61DAFB?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript) ![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite)

---

## 🎯 Features

### ✅ Complete CRUD Operations
- **Create**: Add new tasks with title and description
- **Read**: View all tasks with advanced filtering (All, Active, Completed)
- **Update**: Edit existing tasks or toggle completion status
- **Delete**: Remove individual tasks or clear all completed tasks at once

### 🎨 Apple-Inspired Design
- Clean, minimalist interface following Apple's design principles
- Smooth animations and transitions
- Responsive layout that works on all devices
- Glass-morphism effects and subtle shadows
- System font stack for native look

### 📊 Smart Features
- **Progress Tracking**: Real-time statistics showing total tasks, completed count, and progress percentage
- **Task Filtering**: View all tasks, only active tasks, or only completed tasks
- **Inline Editing**: Edit task titles and descriptions directly
- **Character Limits**: Title limit of 50 characters, description limit of 200 characters
- **Empty States**: Beautiful empty state UI with helpful messages
- **Keyboard Support**: Press Enter to quickly add tasks

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd react-with-ts
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - The app will typically run at `http://localhost:5173`
   - Your browser should automatically open the app

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
react-with-ts/
├── src/
│   ├── App.tsx              # Main application component with all CRUD logic
│   ├── App.css              # Complete styling with Apple design
│   ├── main.tsx             # React entry point
│   └── vite-env.d.ts        # Vite type definitions
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── README.md              # This file
```

---

## 💻 How to Use

### Adding Tasks
1. Type your task title in the "What needs to be done?" field
2. (Optional) Add a note in the description field
3. Click the **Add Task** button or press **Enter**

### Completing Tasks
- Click the **checkbox** next to any task to mark it as complete
- Completed tasks will show a strikethrough and fade effect

### Editing Tasks
- Click the **edit icon** (pencil) on any task
- Modify the title and description
- Click **Save** to apply changes or **Cancel** to discard

### Deleting Tasks
- Click the **delete icon** (trash) on any task to remove it
- Use **Clear Completed** button to remove all completed tasks at once

### Filtering Tasks
- **All**: View all tasks
- **Active**: View only incomplete tasks
- **Completed**: View only completed tasks

### Viewing Statistics
- See real-time stats: Total tasks, Completed count, and Progress percentage
- Stats automatically update as you modify tasks

---

## 🎨 Design Highlights

### Color Palette
- **Primary Blue**: `#0071e3` - Accent color for buttons and highlights
- **Background**: `#f5f5f7` to `#e8e8eb` - Soft gradient
- **Text**: `#1d1d1f` - Deep black for primary text
- **Secondary**: `#86868b` - Apple's signature gray

### Typography
- **Font Stack**: System fonts (SF Pro Display, Segoe UI, Helvetica Neue)
- **Sizes**: 44px for headers, 15px for body text
- **Weight**: 700 for bold, 600 for semi-bold, 400 for regular

### Interactive Elements
- **Hover Effects**: Smooth transforms and shadow depth changes
- **Focus States**: Clear 1px blue outline on inputs
- **Active States**: Pressed-in button effect
- **Animations**: Fade-in transitions with staggered delays

---

## 🔧 Technologies Used

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.5 | UI framework |
| **TypeScript** | 6.0 | Type safety |
| **Vite** | 8.0 | Build tool & dev server |
| **ESLint** | 10.2.1 | Code quality |

---

## 📝 Data Structure

Each task is stored as a `Todo` object:

```typescript
interface Todo {
  id: string              // Unique identifier (timestamp-based)
  title: string          // Task title (max 50 characters)
  description: string    // Optional task description (max 200 characters)
  completed: boolean     // Completion status
  createdAt: Date       // Creation timestamp
}
```

---

## 🔄 State Management

The app uses React's built-in `useState` hook for state management:

```typescript
const [todos, setTodos] = useState<Todo[]>([])
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [editingId, setEditingId] = useState<string | null>(null)
const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')
```

---

## ✨ Key Functions

### Create
- `addTodo()` - Creates a new task with unique timestamp ID

### Read
- `filteredTodos` - Computed array based on current filter

### Update
- `toggleTodo()` - Toggle task completion status
- `startEdit()` - Enter edit mode for a task
- `saveEdit()` - Save edited task data

### Delete
- `deleteTodo()` - Remove a single task
- `clearCompleted()` - Remove all completed tasks

---

## 🎯 Future Enhancements

Potential features for future versions:
- ✨ Local storage persistence
- 📱 Mobile app version
- 🌓 Dark mode toggle
- 🏷️ Task categories/tags
- ⏰ Due dates and reminders
- 🔔 Notifications
- 📊 Analytics dashboard
- 🌐 Cloud sync
- 🎵 Sound effects
- 👥 Collaboration features

---

## 📜 Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build production-optimized bundle
npm run lint     # Run ESLint to check code quality
npm run preview  # Preview production build locally
```

---

## 🎓 Learning Resources

This project demonstrates:
- React functional components and hooks
- TypeScript interfaces for type safety
- State management with `useState`
- Event handling and delegation
- CSS animations and transitions
- Responsive design principles
- Apple design system implementation

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

Created as a learning project for React and TypeScript development.

---

## 🙏 Acknowledgments

- Design inspiration from Apple's iOS and macOS interfaces
- Built with React 19 and TypeScript
- Icons and UI patterns from modern design systems

---

## 📧 Support

For issues, questions, or suggestions, feel free to reach out!

**Happy task managing! 🎉**
