Build a “Campus Companion” React Native app (Expo CLI or React Native CLI) that helps students track events, notes, and quick links.

🏫 Campus Companion — React Native App
📘 Project Overview
The Campus Companion app is a mobile application developed using React Native (Expo CLI) that helps students easily manage their daily campus life. It provides access to events, notes, and quick links, and allows users to maintain their profile and settings in a structured interface.
This project demonstrates the use of Drawer, Tab, and Stack Navigation, React Hooks, validation handling, and cross-platform feedback (Toast/Alert). It is responsive, modular, and built using React Native core components only.
________________________________________
⚙️ Technologies & Tools Used
Tool / Library	Purpose / Why Used
React Native (Expo CLI)	To build and run the cross-platform mobile app easily on Android & iOS.
VS Code	Code editor used for writing and managing the project.
@react-navigation/native	Main library to manage navigation between screens.
@react-navigation/drawer	Implements the drawer navigation for Home, Events, Profile, and Settings.
@react-navigation/bottom-tabs	Used inside Home to create Feed and Notes tabs.
@react-navigation/stack	Used in Events to navigate to Event Details with custom animations.
useState, useEffect, useRef Hooks	To manage component state, simulate fetching, and handle focus/scroll actions.
Class Component (LegacyClock)	Demonstrates lifecycle methods (componentDidMount & componentWillUnmount).
Platform Module	To show Toast on Android and Alert on iOS after successful note/profile save.
Flexbox & StyleSheet	For responsive layout and clean UI styling without inline styles.
________________________________________
🧩 Features Implemented
•	Drawer Navigation → Home, Events, Profile, Settings
•	Bottom Tab inside Home → Feed, Notes
•	Stack Navigation in Events → EventDetails
•	Responsive Feed Grid (1 or 2 columns) depending on screen width.
•	Notes Form with validation, save functionality, and feedback.
•	Profile Form with editable email/phone and inline validation.
•	Simulated Event Fetching with loading state using useEffect.
•	Custom Animation Transition when navigating to EventDetails.
•	LegacyClock component to demonstrate class lifecycle methods.
•	Platform-specific Feedback: Toast on Android, Alert on iOS.
________________________________________
🏗️ Project Folder Structure
CampusCompanion/
│
├── App.js
│
├── navigation/
│   ├── DrawerNavigator.js
│   ├── HomeTabs.js
│   ├── EventsStack.js
│
├── screens/
│   ├── FeedScreen.js
│   ├── NotesScreen.js
│   ├── EventsScreen.js
│   ├── EventDetailsScreen.js
│   ├── ProfileScreen.js
│   ├── SettingsScreen.js
│
├── components/
│   ├── QuickLinkItem.js
│   ├── LegacyClock.js
│   ├── NoteItem.js
│
├── data/
│   ├── events.json
│   ├── links.json
│
├── hooks/
│   └── useFetchEvents.js
│
├── assets/
│   ├── banner.jpg
│   ├── profile.jpg
│   └── event1.jpg (etc.)
│
└── package.json
________________________________________
💻 Project Setup & Execution
Step 1: Install Expo CLI
npm install -g expo-cli
Step 2: Create Project
expo init CampusCompanion
Select Blank (JavaScript).
Step 3: Install Dependencies
npm install @react-navigation/native @react-navigation/drawer @react-navigation/bottom-tabs @react-navigation/stack prop-types
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
Step 4: Run the App
npx expo start
•	Press a to open on Android Emulator
•	Or scan the QR code in Expo Go on your phone.
________________________________________
🧠 Code Highlights
🗂️ Navigation
•	DrawerNavigator.js handles main sections: Home, Events, Profile, Settings.
•	HomeTabs.js adds Feed and Notes tabs inside Home.
•	EventsStack.js manages navigation from Events → EventDetails with a custom transition.
📝 Notes Form Validation
const disabled = !validateTitle(title) || !validateDesc(description);
<Button title="Save Note" onPress={saveNote} disabled={disabled} />
💾 Simulated Data Fetch
useEffect(() => {
  const t = setTimeout(() => {
    setEvents(eventsData);
    setLoading(false);
  }, 1000);
  return () => clearTimeout(t);
}, []);
🧭 Responsive Feed
const [columns, setColumns] = useState(Dimensions.get('window').width < 600 ? 1 : 2);
🕒 Class Component Example
componentDidMount() {
  this.timer = setInterval(() => this.setState({ time: new Date() }), 1000);
}
componentWillUnmount() {
  clearInterval(this.timer);
}
______________________________________
🏁 Conclusion
The Campus Companion project successfully demonstrates how to integrate multiple navigation types in a single React Native app using Expo CLI.
It follows good development practices like:
•	Modular folder structure
•	Clear state management using Hooks
•	Reusable components
•	Form validation and user feedback
•	Responsive and adaptive design
Through this project, we learned how to:
•	Combine Drawer, Tab, and Stack navigation.
•	Implement platform-specific behaviors.
•	Manage lifecycle in both class and functional components.
•	Build a complete, interactive, and visually structured mobile app for students.

