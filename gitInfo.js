/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = 'Git is a version control system, allows individuals and teams to track changes to code projects, prevents bugs'
console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = 'Github is a distributed version-control platform where users can collaborate on or adopt open source code projects'
console.log(gitHubDefinition)

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = 'Initialize a local repository right here in this folder'
let initCode = 'git init'
console.log(init)
console.log(initCode)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = 'used to point to an existing repo and make a clone or copy of that repo at in a new diectory at another location'
let cloneCode = 'git clone <URL>'
console.log(clone)
console.log(cloneCode)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let statusDefinition = 'tells me about this repo'
let statusCode = 'git status'
console.log(statusDefinition)
console.log(statusCode)


//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = 'adds some files to be tracked'
let addCode = 'git add .'
console.log(add)
console.log(addCode)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = 'create a snapshot of the files im tracking'
let commitCode = 'git commit -m'
console.log(commit)
console.log(commitCode)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = 'uploads all local branch commits to the corresponding remote branch'
let pushCode = 'git push'
console.log(push)
console.log(pushCode)