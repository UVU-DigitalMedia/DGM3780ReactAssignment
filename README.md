# React Assignment
Next on the list of frontend frameworks and libraries, React.js.

>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES

See the [React.js Website](https://facebook.github.io/react/) for more info.

#Steps
1. Fork and clone the repo. See [the first assignment](https://github.com/UVU-DigitalMedia/DGM3780-Assign1) for detailed steps.
2.  Create a branch on your local machine.
3. Checkout the branch
4. Complete the assigned coding tasks on the new branch
5. Push Branch to YOUR Github account
6. Submit Pull Request from your new branch

The steps reflect a typical real world workflow.

# Assignment

In this assignment you will be making a VERY basic todo app. The only thing you can do is add items. The items you add will have a category.

Also, to track your progress on this assignment, you will be adding multiple commits for each step of the assinment. When you submit your pull request Thor will be able to see the commits and what was add/changed for each commit. :smile:

Here is the assigned tasks:

* Commit 1: Build a static version of the supplied mock up in React.js using JSX.
    * This will include a static data model. A plain JS array of object will be great.
    * The data will be passed down the component hierarchy and reflected.
    * This commit should look just like the supplied mock up, with the exception of changed items that you set in your data model.
* Commit 2: Data Binding. The user should be able to add a todo to the list with the correct class applied (for catagory).
    * When you submit a new todo item, it should just push a new item to the local static data model. No backend is required.
* Commit 3: BONUS COMMIT :sunglasses:  - **This commit is not required** Add a backend.
    * For serious street cred (and perhaps some extra credit. Ask Thor), connect this app to Firebase so that there is a persistent data model.



#Tips
- As always, ````npm install````
- This assignment has no tests
- This repo used the NPM Run scripts repo as a starting point.
    - This means that there is an automatic build process being used.
    - Check out the package.json file to see all the npm run commands.
- ````npm start```` will spin up a static webserver with auto reload. Whenever you save a file, it will compile a build and auto reload the broweser.
- [Browserify](http://browserify.org/) is being used. This allows you to write node.js style code in the browser. This is already set up for you. See src/js/main.js

##More to come
If you are reading this on Monday Night. I will add more to this readme on tuesday. :smile:
