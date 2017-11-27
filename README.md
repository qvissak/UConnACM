# UConnACM
Website for UConn's chapter of Association of Computing Machinery showcasing meetings, subgroup projects and member biographies.  

## Prerequistes 
Make sure to have an understanding of the tech-stack and the following programs installed before working on this project:

### Tech-stack
This website is developed using [React.js](https://reactjs.org/).

### Required Software
Install [git](https://git-scm.com/) to work collaborately on this project. 
Install a text-editor, such as [Notepad++](https://notepad-plus-plus.org/download/), [Atom](https://atom.io/) or [Visual Studio Code](https://www.visualstudio.com/downloads/).
Install [Node.js](https://nodejs.org/en/), a lightweight, open source framework for javascript projects. Ensure [npm](https://www.npmjs.com/), the package manager for Node, was also installed. 

## Set Up
```sh
git clone https://github.com/qvissak/UConnACM.git
cd UConnACM/
npm install
```

## To Run
```sh
git checkout master # or desired branch name
npm start
```

## To Contribute
First give an administrator your git username to add as a contributor to the project. If you push without doing this, you'll get a 403 error. Accept repository via email invite.
The master branch is protected so you are discouraged from pushing directly to it.
To contribute, one should make a feature branch i.e `git checkout -b avatar-<your name>`. Do your changes on the new branch. 
Merge your branch with master before pushing `git pull origin/master`. Handle any merge conflicts locally in your text editor. 
Check your code before you push with `npm start` and navigating to `https://localhost:3000`.
Then do `git add <file names>`, `git commit -m "Title" -m "Good commit message."`, and `git push` to publish your changes.
Make a pull request on GitHub through the GUI. Delete your feature branch after a successful merge if not deleted upon merge.

### General tips
Don't forget to `git status` often.
If you make changes first before branching, you'll have to `git stash` to hide your changes, do the above command, then `git stash pop` to put your changes back.
To change branches perform `git checkout <branch name>`.
