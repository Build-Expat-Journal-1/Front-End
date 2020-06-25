# Front-End

Expat Journal is a website template for users to post about there experiences abroad. 

## Installation

Use the package manager [npm] to install foobar.

```bash
npm install 
```

## Usage
Top  level component is App.js which holds the router switch witch renders the login, signUp and Dashboard componets. User logs in and a token is set to local storage and user name is also saved to local storage. The login function then mounts the dashbord componet then fillters through the list of users at the api/users endpoint to match the usersname saved saved in the local storage saved at the end point. It then sets the current logged in user to application state. Then passes down the user object as props to the profile component.

The profile componet does a get request to the /api/stories/:id/my-stories endpoint where :id is user id. Profile saves user stories to application state and passes down to the admin post component as props.The Profile commponet renders the addstories commponent which dispatches a redux async action to post a new story to /api/stories endpoint. 

Admin post displays the story object information and also renders the edit story and delete story commponents. Post commponent is rendered by Home.js and does not include edit/delete functionality.

Profile is mapped the the eddit,delete, and addstory reducer to watch for changes in state. Sign up commponet requires 5 charaters for both username and password and validation is run by Yup and all state is accessible on the sign up commponent. When submitted it is sent to post at /api/auth/register endpoint.


