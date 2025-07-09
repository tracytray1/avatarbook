Avatarbook - React User Directory
=================================

**Avatarbook** is a modern React application that displays a directory of users with their avatar images, names, emails, and university information. Users can search through the directory in real-time to find specific people.

✨ Features
----------

-   👥 **User Directory** displaying profiles with avatar images
-   🔍 **Real-time Search** filter users by first name
-   🤖 **Dynamic Avatars** generated using RoboHash API
-   📱 **Responsive Design** works on all screen sizes
-   ⚡ **Fast Performance** with React functional components and hooks

📸 Preview
----------

<!-- Add a screenshot of your application here -->

🚀 Getting Started
------------------

### Installation

1.  Clone the repository:

bash

```
git clone https://github.com/your-username/avatarbook.git
cd avatarbook
```

1.  Install dependencies:

bash

```
npm install
# or
yarn install
```

1.  Start the development server:

bash

```
npm start
# or
yarn start
```

The app should now be running at <http://localhost:3000>

🛠️ Technologies Used
---------------------

-   **React** (with Hooks - useState, useEffect)
-   **CSS** (custom styling)
-   **JavaScript** (ES6+)
-   **DummyJSON API** (for user data)
-   **RoboHash API** (for avatar generation)

📁 Project Structure
--------------------

```
src/
├── components/
│   ├── Card/
│   │   ├── Card.js
│   │   └── Card.css
│   ├── CardList/
│   │   ├── CardList.js
│   │   └── CardList.css
│   └── SearchBox/
│       ├── SearchBox.js
│       └── SearchBox.css
├── App.js
├── App.css
└── index.js
```

🔧 Component Overview
---------------------

### App Component

-   Main component that manages state for users and filtered results
-   Handles API calls to fetch user data
-   Manages search functionality

### SearchBox Component

-   Provides real-time search input
-   Triggers filtering based on user's first name

### CardList Component

-   Renders a grid of user cards
-   Maps through filtered user data

### Card Component

-   Individual user card displaying:
    -   Avatar image (generated from user ID)
    -   First name
    -   Email address
    -   University information

🌐 API Integration
------------------

The application uses two APIs:

1.  **DummyJSON Users API** - `https://dummyjson.com/users`
    -   Provides user data including names, emails, and universities
2.  **RoboHash API** - `https://robohash.org/{id}.png?set=set5&size=150x150`
    -   Generates unique avatar images based on user ID

✅ Future Improvements
---------------------

-   Add user detail modal/page
-   Implement additional search filters (email, university)
-   Add sorting options (alphabetical, university)
-   Implement pagination for large datasets
-   Add loading states and error handling
-   Include user's additional information (phone, address, etc.)
-   Add dark mode toggle
-   Implement favorites/bookmarks functionality

📄 License
----------

This project is open-source and available under the MIT License.

🙌 Acknowledgements
-------------------

-   [DummyJSON](https://dummyjson.com/) for providing the user data API
-   [RoboHash](https://robohash.org/) for generating unique avatar images
