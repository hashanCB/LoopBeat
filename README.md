# 🎵 LoopBeat - Education & Testing Purpose
<img width="1438" alt="Screenshot 2025-03-21 at 04 16 42" src="https://github.com/user-attachments/assets/a49d8193-6c41-429f-90cc-55441c716baf" />


This project is an **educational and testing purpose** website built using **Next.js**, **React**, and **various React tools**. It features a **song player UI** with interactive functionality and smooth animations.

## 🚀 Features

✅ **Built with Next.js & React**  
✅ **Styled using Tailwind CSS**  
✅ **Music Player Functionalities:**  
   - Play/Pause songs  
   - Next/Back navigation  
   - Loop and shuffle playback (Random Mix Mode) 🎛️  
   - Progress bar with current time, duration display & seek functionality  
   - Animated progress bar for song playback (powered by Framer Motion 🎬)  
   - Volume control with slider and mute/unmute toggle 🔊  
   - Progress animation stops when the song is paused  

✅ **3D Model Integration**  
   - **React Three Fiber & @react-three/drei** used for 3D model rendering  
   - **Dancing Model** connected with "GoablePlay" music state using Redux  
   - Controlled size, camera position, and lighting for GLB format  

✅ **Redux Integration**  
   - Implemented favorite songs slice  
   - Optimized `isFavSong` execution using `useEffect`  

✅ **Containerized with Docker**

## 📌 Current Status
- ✅ **UI Completed** using Tailwind CSS
- ✅ **Song player core functionalities implemented**
- ✅ **Framer Motion integrated for smooth animations**
- ✅ **3D model dancing with music playback**
- 🛠 **Further improvements in progress**

## 🛠 Technologies Used
- **Next.js** - For SSR and frontend framework
- **React** - UI component-based development
- **Tailwind CSS** - Fast and responsive styling
- **Framer Motion** - Smooth UI animations
- **Redux** - State management for player & favorites
- **React Three Fiber & @react-three/drei** - 3D model rendering
- **Docker** - To containerize the application
<img width="1440" alt="425652273-935e507c-74af-43db-a793-5c96aabfefcd" src="https://github.com/user-attachments/assets/085460c6-932b-45db-b2a1-2aed38b87f2f" />


## 📦 Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/song-player-ui.git
cd song-player-ui
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
npm run dev
```
Then, open **http://localhost:3000** in your browser.

### 4️⃣ Run with Docker
```bash
# Build the Docker image
docker build -t song-player .

# Run the container
docker run -d -p 3000:3000 song-player
```

Now visit **http://localhost:3000** to see the app in action. 🎶

## 📌 TODOs
- Improve song playlist features 🎼
- Add user playlists and favorites ⭐
- Implement API for fetching songs from a backend 🎧
- Enhance 3D model animations & interactions 🎭

## 🤝 Contributions
Feel free to **fork** this repo, open an **issue**, or submit a **pull request** to improve the project!

---

📌 **Note:** This project is for **educational and testing purposes** only.

🎵 *Enjoy the music! 🎶*

