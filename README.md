# NetFlix GPT Project

- Create a New Project using create-react-app
- Install the TailwindCSS and configure the same
- Create Basic Components
- Add Routing using the command : npm install react-router-dom, use createBrowserRouter and create a AppRouter.
- After creating a AppRouter we need to provide this approuter setup to the RouterProvider and pass the AppRouter to it. This way we can setup a Routing in our React Application.
- After this we will have two routes 1. / -> login, 2. /browse -> browse page
- Creation of Login and Sign up Form
- Form Validation
- useRef Hooks Used
- Did Firebase Setup
- Delpoyed our Application to Firebase
- Create Signup User Account

# Features:

- Login/Signup Page
  - Sign In/ Sign Up Form
  - Redirect to Browse Page
- Browse Page (Authenticated)
  - Header
  - Main Movie
    - Trailer in Background
    - Movie Title and Description and buttons
    - Movies Suggestion
      - Movie Lists \* N which is vertically scrollable
- NetflixGPT Page

  - SearchBar
  - Movies Suggestions

- Important:
  - U can't use useNavigate hook inside the parent component, where you have written a routing logic.
  - instead you should use navigate in a child components.
