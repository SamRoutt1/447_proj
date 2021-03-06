# 447 Project

## Before you start

- If you don't have an IDE I would highly recommend VScode

- Install Homebrew [here](https://brew.sh/)

- In your terminal in your home directory install git and node

```bash
brew install git
brew install node
```

## Clone and run the project

- Clone

```bash
git clone https://github.com/SamRoutt1/447_proj.git
```

- Set up git repo in 447_proj folder

```bash
git init
git remote add origin https://github.com/SamRoutt1/447_proj.git
```

- Run the project

```bash
cd ui
npm i
npm run start
```

## Developing and working with github

- You can always check your current local git branch with the command:

```bash
git branch
```

- In your local master branch, pull changes from remote master

```bash
git checkout master
git fetch -p origin
git merge origin/master
```

- Create a new branch and break the code as much as you like

```bash
git checkout -b SamRoutt/BranchName
```

- Commit changes and push to github

```bash
git add -A
#check if all files were added
git status
git commit -m "Relevant commit message - 1"
git push origin SamRoutt/BranchName
```


___________________________________________________________
## Server side setup

first set up mongodb
either in docker container or on your computer or mongodb atlas (cloud)

```bash
cd server
npm i
```

open **app.js**

replace this line with the path of your database
```
mongoose.connect('mongodb://<PATHNAME>');
```

by default it should be set to *localhost/FoodQueue* the name of the database I made you can leave it there by default if you are running from docker or your computer


finally to startup backend
```
npm start
```
