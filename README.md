# AI Health Consultation System# Getting Started with Create React App

A modern, responsive web application for AI-powered health consultations built with React, TypeScript, and Tailwind CSS.This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🚀 Features## Available Scripts

### ✅ Completed FeaturesIn the project directory, you can run:

- **Modern UI Design System**: Custom components with consistent styling

- **Responsive Layout**: Mobile-first design with sidebar navigation### `npm start`

- **User Authentication UI**: Login, registration, and profile setup forms

- **Dashboard Homepage**: Health metrics overview and quick actionsRuns the app in the development mode.\

- **Profile Management**: User profile with Indian phone number formatOpen [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **Health Tracking**: Blood pressure, heart rate, and weight monitoring

- **TypeScript Integration**: Full type safety throughout the applicationThe page will reload if you make edits.\

You will also see any lint errors in the console.

### 🚧 In Development

- AI-powered chat consultation interface### `npm test`

- Symptom input forms with severity tracking

- Emergency alert systemLaunches the test runner in the interactive watch mode.\

- Real-time health assessmentsSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- Medical history tracking

### `npm run build`

## 🛠️ Tech Stack

Builds the app for production to the `build` folder.\

- **Frontend**: React 19.1.1 with TypeScriptIt correctly bundles React in production mode and optimizes the build for the best performance.

- **Styling**: Tailwind CSS 3.4.0

- **Routing**: React Router DOM 7.9.2The build is minified and the filenames include the hashes.\

- **Forms**: React Hook Form 7.63.0 with Yup validationYour app is ready to be deployed!

- **Icons**: Lucide React

- **Build Tool**: Create React AppSee the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 📦 Installation### `npm run eject`

1. **Clone the repository\*\***Note: this is a one-way operation. Once you `eject`, you can’t go back!\*\*

````bash

git clone <repository-url>If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

cd ai-health-consultation

```Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.



2. **Install dependencies**You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

```bash

npm install## Learn More

````

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

3. **Start development server**

```bashTo learn React, check out the [React documentation](https://reactjs.org/).

npm start
```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Alert.tsx
│   │   ├── ProgressBar.tsx
│   │   └── LoadingSpinner.tsx
│   └── layout/             # Layout components
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── Layout.tsx
├── pages/                  # Application pages
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Profile.tsx
│   ├── ProfileSetup.tsx
│   ├── Consultation.tsx
│   ├── HealthTracker.tsx
│   ├── HealthAssessment.tsx
│   └── About.tsx
├── types/                  # TypeScript definitions
│   └── index.ts
├── services/               # API services (placeholder)
├── hooks/                  # Custom React hooks (placeholder)
├── utils/                  # Utility functions (placeholder)
└── App.tsx                 # Main application component
```

## 🎨 Design System

### Colors

- **Primary**: Blue theme (`primary-50` to `primary-900`)
- **Secondary**: Gray scale for text and backgrounds
- **Status**: Green (success), Red (error), Yellow (warning)

### Components

- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Consistent container with shadow and padding
- **Input**: Form inputs with icons and error states
- **Alert**: Status messages with icons

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS v3.4.0 with custom configuration:

- Custom color palette
- Extended spacing and typography
- Forms plugin for better form styling

### TypeScript

Strict TypeScript configuration with:

- Interface definitions for all data models
- Type-safe component props
- Comprehensive error handling types

## 📱 Pages Overview

1. **Dashboard**: Health metrics overview with quick access to features
2. **Login/Register**: User authentication with form validation
3. **Profile Setup**: Multi-step onboarding for new users
4. **Profile**: User information display with Indian contact format
5. **Consultation**: AI chat interface (in development)
6. **Health Tracker**: Personal health metrics tracking
7. **Health Assessment**: Symptom checker and health evaluation
8. **About**: Application information and support

## 🚀 Development Roadmap

### Phase 1: Foundation ✅

- [x] Project setup and structure
- [x] UI component library
- [x] Layout and navigation
- [x] Authentication UI
- [x] Dashboard implementation

### Phase 2: Chat Interface (Current)

- [ ] Chat UI components
- [ ] Symptom input forms
- [ ] Emergency alert system
- [ ] Real-time messaging
- [ ] State management

### Phase 3: Backend Integration

- [ ] API service layer
- [ ] Authentication system
- [ ] Database integration
- [ ] AI model integration

### Phase 4: Advanced Features

- [ ] Health data analytics
- [ ] Medical history
- [ ] Appointment scheduling
- [ ] Notifications system

### Phase 5: Production

- [ ] Performance optimization
- [ ] Security implementation
- [ ] Testing suite
- [ ] Deployment setup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## 🐛 Known Issues

- Development server requires manual restart after some configuration changes
- TypeScript strict mode may require additional type definitions for some third-party packages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shyam**

- Email: shyam@example.com
- Phone: +91 98765 43210

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS for the utility-first approach
- Lucide React for beautiful icons
- TypeScript team for type safety

---

**Note**: This is an active development project. Features and documentation are continuously updated as development progresses.
