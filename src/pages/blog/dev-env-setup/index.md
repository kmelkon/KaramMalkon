---
title: 'React Development Environment Setup'
description: This post is related to the gatsbyjs
date: '2018-12-09'
---

<!-- ## Table of Contents

- [homebrew](#homebrew)
- [Git](#git)
- [VSCode](#vscode)
- [Hyper](#hyper)
- [Node and NPM](#node-and-npm)
- [create-react-app](#create-react-app) -->

## [Homebrew](https://brew.sh/)

Ubuntu users have apt-get, Windows users have _chocolatey?_ and Mac OS users have Homebrew.
It’s easy to install and and can even be used to install non-opensource packages - like Firefox or chrome - using `cask`
Install Homebrew by pasting this into your terminal:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

## [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

If we wanna maintain our sanity and our codebase then git is a must.
Git will help us easily version our code and by using services like [Github](https://github.com/) it’ll help us easily share our code with the world.

To install git; run `git —version` which will check the current version of git if you have it installed already, otherwise it’ll prompt you to install it.

## [VSCode](https://code.visualstudio.com/)

We also want an editor of some kind to help us write and edit code.
There are a lot of options out there like Vim, Sublime Text or Atom to name a few. Feel free to try them if you like (I did) but I personally use Visual Studio Code.

VSCode comes with many helpful features out of the box and is updated regularly.

To install it we can either run
`brew cask install visual-studio-code`
Or head to the link and download the installer from the official website.

## [Hyper](https://hyper.is/)

A terminal can do many different things for us, we’ve already used it to install homebrew by `curl`ing.

It’s useful for running git commands, NPM commands or even text editing (if you’re using VIM)
I like to use Hyper because it looks nice and is built on web technologies.

We can install it by running:
`brew cask install hyper`
Or hitting that link above this paragraph.

## [Node](https://nodejs.org/en/) and NPM

NPM is a package manager which means it’s like homebrew but for Javascript packages. It’s included with Node.js so once that is installed, NPM will become available for us.

Run this to install node:
`brew install node`
Check if it installed correctly by running:
`node -v`
And
`npm -v`

All done!

## [create-react-app](https://github.com/facebook/create-react-app)

We’re now ready to get our hands and editor dirty.

Create-react-app is boilerplate provided by Facebook, it comes with a bunch of technologies and is ready to use out of the box to help us focus on coding instead of fiddling with Javascript tooling.
Some of the included technologies is obviously React and JSX.

We can create a new app by running:

```javascript{numberLines: true}
npx create-react-app my-app
cd my-app
npm start
```

Cheers 🍻
