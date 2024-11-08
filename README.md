# Mafia The Mobile App

## What the App Does

Mafia The Mobile App aims to provide the authentic experience of playing the standard analog version of the game while providing an alternative to using playing cards or tokens, while also providing a much clearer overview of the game's state for players and game masters.

## Rules of the Game

---

### Players are divided into **two groups**:

- **The Police**, who are tasked with identifying Mafia members and eliminating them by <u>voting during the day</u> phase of the game.
- **The Mafia**, who aim to kill all other players either by <u>assassination during the night</u> phase or by voting during the day while staying unidentified.

---

### **Game ends** when there are **no Mafia members alive** or when **Mafia controls the voting** with a majority of votes.

---

### **Additional Roles**

Currently, the game features two additional roles:

- **Detective**, who can check other players' roles during the night.
- **Medic**, who can save another player from being assassinated during the night.

---

# App Flow

<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;  margin-bottom: 40px;">
  <div style="justify-content: flex-start;">
    <h3 style="font-weight: bold; ">Onboarding and Main Menu</h3>
    <p style="margin-right: 20px; margin-top: 30px; margin-left: 15px;">
      Upon opening the app, you're greeted with a screen to create a <b>unique nickname</b>. 
      <br><br>
      Once your nickname is set, you're directed to the main menu, where you can choose to either <b>host</b> a game or <b>join</b> an existing one.
      <br><br>
      If you decide to join, you’ll be prompted to enter a <b>code</b> provided by the game host. After entering the code, you’ll join the game, ready to take on your role and start playing.
    </p>
  </div>
  <img src="readMeAssets/SimulatorScreenRecording-iPhone15Pro-2024-10-10at20.00.49-ezgif.com-video-to-gif-converter.gif" alt="Gif 1: Creating a Nickname" width="300" style="margin-left: 60px;">
</div>

---

<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin-top: 40px; margin-bottom: 40px;">
  <img src="readMeAssets/SimulatorScreenRecording-iPhone15Pro-2024-10-10at20.00.49-ezgif.com-video-to-gif-converter.gif" alt="Gif 1: Creating a Nickname" width="300" style="margin-right: 60px;">
  
  <div style="justify-content: flex-end; text-align: left;">
    <h3 style="font-weight: bold;">Host Perspective</h3>
    <p style="margin-right: 20px; margin-top: 30px; margin-left: 15px;">
      As the host, once you create a game, you’ll receive a <b>unique game code</b> to share with other players so they can join your room.
      <br><br>
      Before starting the game, you can adjust various <b>settings</b> to customize the experience. Options include:
      <br>
      - Selecting <b>additional roles</b> (such as Medic and Detective).
      <br>
      - Setting the <b>number of Mafia</b> members.
      <br>
      - Enabling or disabling the <b>“Show Roles After Death”</b> feature.
      <br><br>
      In the lobby, you’ll see the avatars of players who have joined. Once everyone is ready, you can start the game.
      <br><br>
      During the game, you have full control as the host. You can see an <b>overview of all the roles, as well as each individual player's role</b>, and manage the game by <b>assigning kills</b> based on votes or assassinations.
      <br><br>
      Once the game concludes, the <b>winning team will be announced</b>, letting everyone know who outwitted whom.
    </p>
  </div>
</div>

---

<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin-top: 40px; margin-bottom: 40px;">
  <div style="justify-content: flex-start;">
    <h3 style="font-weight: bold;">Player Side</h3>
    <p style="margin-right: 20px; margin-top: 30px; margin-left: 15px; text-align: left;">
      After joining a game, you’ll enter the game lobby. Here, you can <b>customize your avatar</b> to give yourself a unique look. Then, you’ll wait for the host to start the game.
      <br><br>
      When the game begins, you’ll be shown your role and objective, which may be as a Mafia member, Policeman, or a Detective, and Medic if the additional roles are enabled. Your role will guide your actions as the game progresses.
      <br><br>
      Throughout the game, you can keep track of the events and see which players are eliminated in each round. At the end, the winning team will be announced, and you'll see whether your team succeeded.
    </p>
  </div>
  <img src="readMeAssets/SimulatorScreenRecording-iPhone15Pro-2024-10-10at20.00.49-ezgif.com-video-to-gif-converter.gif" alt="Gif 1: Creating a Nickname" width="300" style="margin-left: 60px;">
</div>

# Technologies Used

To build Mafia The Mobile App, I utilized a range of powerful tools and services across both the frontend and backend to ensure high performance, scalability, and a seamless user experience.

### Frontend Technologies

- **React Native**  
  React Native is the core framework I used to build the mobile app. It enables writing native mobile applications using JavaScript and React, making the development process faster while allowing for native performance across both iOS and Android.

- **Expo**  
  Expo simplifies the React Native development process with built-in features like push notifications, asset management, and easy configuration, reducing the need for manual setup and allowing for rapid iteration.

- **React Navigation**  
  For routing and navigation within the app, React Navigation was essential. It provides a flexible and customizable solution for handling stack, tab, and drawer navigation, creating an intuitive user experience.

- **Apollo Client**  
  Apollo Client is used for managing GraphQL data. It connects the app to the backend GraphQL API, making it easy to fetch, cache, and manage data in a performant and declarative manner.

- **GraphQL**  
  GraphQL allows for efficient querying of data from the server. It enables clients to request exactly the data they need, avoiding over-fetching and reducing network usage, which is particularly useful in a game app where dynamic data exchange is frequent.

- **Sentry**  
  Sentry is integrated for error monitoring and performance tracking. It helps track and debug any app crashes or performance issues in real-time, ensuring a smoother user experience by identifying issues early.

- **React Native Reanimated**  
  To create smooth and engaging animations in the app, React Native Reanimated was essential. It allows for performant animations that feel natural and seamless, contributing to the app's polished look and feel.

- **React Native Gesture Handler**  
  This library improves touch gestures, enabling better user interaction with the app. It allows for custom gestures like swipes, pinches, and long presses, which are crucial for an interactive game experience.

- **Tamagui**  
  Tamagui is used to optimize and streamline the UI development process. It allows for faster styling and better cross-platform design consistency, improving performance and simplifying UI code.

- **i18next**  
  i18next provides multilingual support in the app, allowing players to enjoy the game in different languages. It’s a powerful tool for managing translations and ensuring global accessibility.

- **Storybook**  
  Storybook is used for developing and testing UI components in isolation. It helps visualize different UI states, ensuring consistency and reusability of components across the app.

- **React Native Toast Message**  
  This library enables the display of toast notifications within the app, alerting users to important events (like player eliminations) without interrupting their gameplay.

- **AI-Generated Art**  
  All the art assets in the app were created using AI tools. This allowed me to generate unique and customized avatars and icons quickly, maintaining a cohesive visual style throughout the game.

### Backend Technologies

- **AWS AppSync**  
  AWS AppSync is the backbone of the app's API, handling all GraphQL operations. It supports real-time data synchronization via WebSockets and subscriptions, ensuring that the game state and player actions are reflected instantly on all devices. This is particularly useful in a dynamic multiplayer environment like Mafia, where players need to see up-to-date information immediately.

- **AWS DynamoDB**  
  DynamoDB serves as the app’s database, offering a fast and flexible NoSQL solution. It’s designed to scale with the app’s growth, providing low-latency access to player data and game state. DynamoDB ensures that game sessions, player information, and roles are stored and retrieved quickly during gameplay.

- **AWS Lambda**  
  AWS Lambda powers the serverless architecture behind the app, enabling automatic scaling of backend services. Lambda functions are used for various tasks such as user authentication, role assignment, and managing game state transitions. This serverless approach reduces infrastructure complexity and operational overhead.

- **Serverless Framework**  
  The Serverless Framework was used to deploy and manage the app’s backend on AWS, allowing for the development of scalable functions without worrying about infrastructure. It automates the setup of services like AWS Lambda, DynamoDB, and API Gateway.
