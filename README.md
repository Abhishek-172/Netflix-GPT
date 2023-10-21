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
- Delpoyed our Application to Firebase - npm run build / firebase deploy
- Create Signup User Account
- Implement SignIn User API
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile
- BugFix: Redirecting user to the /browse page after signup and signin. & Restricting user to go back to the login screen and also stricting the browse page to be accessed from a unauthorized access. Made the changes in the Header Component. It will check for the user everytime the Header component loads. Entire navigation is done from this Header Component.

One Good Hygiene to be maintained here.

- As we know we have the useEffect in Header Component, and this Header Component useEffect is running once when the component is loaded in that case in every page load the Header component loads it will make this useEffect run and whenever this useEffect will run it will attach a eventListener to our Browser, The function that useEffect is running - onAuthStateChanged().
- So whenever this function runs we get subscribe to this eventListener Function.
  Now what we need is when our component unmounts it should un subscribe to this onAuthStateChanged() function as well.

Question:
Cleaning inside a useEffect?

- Answer: We need to return a function from this useEffect Function.
  Now, this onAuthStateChanged() function returns a unsubscribe function.
  If we call this unsubscribe() function it will remove the onAuthStateChanged() from our browser.

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
  - instead you should use navigate in a child components, it will only work there.
