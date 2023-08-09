React Native Project ReadMe:

Welcome to the OnboardingApp repository! This ReadMe file will guide you through the project structure, tech stack used, and the steps to run the project locally.

Project Structure
The project follows a structured layout to maintain code organization and improve maintainability. Here's an overview of the main directories:

android: Contains the Android-specific files and configurations.
ios: Contains the iOS-specific files and configurations.
node_modules: Houses the project's dependencies (generated automatically).
src: This is where the majority of your application code will reside.
assets: Store static assets like images.
components: Reusable React Native components used throughout the app.
screens: React Native screen components that define different views of the app.
styles: styles of the views.
helper: Utility functions used across the application.
App.tsx: The entry point of your application.

Tech Stack Used
React Native: A JavaScript framework for building mobile applications using React.
React Navigation: A popular library for handling navigation and routing.
Firebase: A online platform used for authentication services.
PropTypes: Runtime type checking for React props.
NetInfo: A library for network information.

Getting Started
Follow these steps to run the project locally:

Clone the Repository: Start by cloning this repository to your local machine using the following command:

git clone https://github.com/JawadSadiq01/OnBoarding-App.git
Navigate to Project Directory: Move into the project directory:

bash
Copy code
cd OnboardingApp
Install Dependencies: Install the project dependencies using your preferred package manager (npm or yarn):

npm install
Start the Metro Server: Run the Metro server, which bundles and serves your app:
npm start

npx react-native run-android
Run the Application on a Simulator/Device:

For iOS: Use Xcode or the command line to build and run the app on an iOS simulator or device:

pod install
npx react-native run-ios