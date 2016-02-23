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
- This assignment has no tests (although, it should.)
- This repo used the NPM Run scripts repo as a starting point.
    - This means that there is an automatic build process being used.
    - Check out the package.json file to see all the npm run commands.
- ````npm start```` will spin up a static webserver with auto reload. If you have chrome instaled it will open a browser window for you as well. Whenever you save a file, it will compile a build and auto reload the broweser.
- [Browserify](http://browserify.org/) is being used. This allows you to write node.js style code in the browser. This is already set up for you. See src/js/main.js
- [Stylus](http://stylus-lang.com/) is used for the css. You shouldn't need to do anything with the css, unless you want to make things look more awesome. This is already built into the run scritps.


#Approach

Start with the React.js [docs](https://facebook.github.io/react/docs/getting-started.html). There are a number of tricky things with React. But don't worry it isn't too bad.

The first thing I would do is work though the getting started page linked above. This will get you comphy with the [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) syntax. JSX is a Javascript syntax extension. It is **NOT** required to use React. However, JSX makes React MUCH simpler once you can wrap your head around writing HTML inside javascript. JSX gets compiled to regular Javascript. Like so:

```JSX
var Nav;
// Input (JSX):
var app = <Nav color="blue" />;
// Output (JS):
var app = React.createElement(Nav, {color:"blue"});
```

Next, I would work though the [Tutorial](https://facebook.github.io/react/docs/tutorial.html). This will start to give you a better idea how to use React. You will learn how to make a simple comment form, much like facebook comments.

Lastly I would work though the [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) tutorial. This will guide you though the steps nessassary to think in the react way. Full disclosure: this is what I referenced it quite often while writing this assinment. Once you have done this, here is a [picure that will help.](http://imgur.com/uCCe6J9). :smirk:



