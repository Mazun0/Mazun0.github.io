---
layout: layouts/post.njk
title: todo list website
description: A To-Do List utilizing CRUD functions
stack: HTML, CSS, JS, Node.js, Express.js 
uid: 0xB0DC
issued: 2024
collaboration: false
github: https://github.com/yourname/project-repo
tags: project
type: web
date: 2025-08-26
navType: projectPost
pageType: default
---

# Todo List Website

A todo-list web app where it utilized RESTful APIs in order to Create, update, and delete todo tasks. 

GitHub: TBD

## 📚 Overview

This project is an improvement on the final project for Internet Programming course where it emphesises a full stack aproach on building web applications. A todo list while simnple, is a good start to demostrate the skills of a full stack web development. 

The Todo List Web App utilizes RESTful APIs where the users can create thier own tasks, updating notes, and deleting it. As well users can also make and delete comments on the tasks and deleting it when not needed. One of the improvements is to implement a session login system where each user can post thier own todo list.

## Key Features

Some of the key features are based on the Create, Read, Update, and Delete (also known as **CRUD**) operations where users can
- Create thier profile and tasks based on their sessions
- Can mark off tasks or undo. 
- Edit Notes on the task page
- Create and delete comments (used for making updates on a chronological order)

## Stack

- Language: HTML, CSS, JavaScript, mySQL
- Libraries: Node.js
- Frameworks: Express.js
- Tools: MySQLWorkbench

## Usage

```bash
# Installation instructions

# 1. clone the file 
git clone ....

# Then change to folder
cd todo_list
# 2. Initalized node
node init
#  Install Express.js and the middle ware
npm install express pug express-sessions

# 3. Boot the Server 
node server.js 

# from which it will print 
Server running on http://localhost:3000

```

### Notes

This project uses mySQL with the mySQLWorkbench

Since started, the project was been tested on Zen Web Browser with 
a 1920 by 1080 and 1800 by 1169 resolution.

## 📸 Screenshots
Coming Soon


## Known Issues

Mobile View wasn't yet optimized since it was made in a desktop first prespective.

## Future Impleemtnations 
- Add User Authentation
- Optimized for Mobile
- Add Elements for Expiring Tasks (1 hour before deadline)
- Mark tasks that are is overdue.
- Implement settings for each user 