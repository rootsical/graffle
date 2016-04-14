GIT
===

configuration
-------------
###user configuration
`git config --global`

###project configuration
`git config`

###global
`core.editor "sublime_text -wl1"`  
(-w flag is for terminal to wait for edit to be made and -l1 flag to start on line 1)

`color.ui true`  
(to get coloured output in terminal)

`core.excludesfile ~/.gitignore_global`  
(if you want to have user specific gitignore)

`push.default simple`  
(not sure what it does but avoids annoying message on doing `git push`)

###user
`user.name "rootsical"`  
`user.email "rootsical@gmail.com"`

###list configuration
`git config --list`

create .gitignore file in project root
```
node_modules/
# for comments
ignore:
compiled source code
packages (node_modules/)
logs
databases (db/)
```

now you can initialise git in project root:  
`git init`

now set username and email  
`git config user.name "rootsical"`  
`git config user.email "rootsical@gmail.com"``

if you use the wrong username and email for the last commit, you can reset the git config and then do:  
`git commit --amend --reset-author`

##GITHUB SETUP
create new repository on github

locally in project root edit  
`.git/config`

add the following:  
```
[remote "origin"]
	url = rootsical-github:rootsical/noted.git
```

rootsical-github is the name of the relevant host in the .ssh configuration  
the rest after the colon is the github repository name ending in .git, in this case:  
`rootsical/noted.git`

instead of editing local .git/config file you can do:  
`git remote add origin rootsical-github:rootsical/noted.git`

GENERAL
-------
- remove file from staging index  
`git reset HEAD -- <path/to/file>`
- remove directory  
```
git rm -r <path/of/directory>
git commit -m "<commit message>"
```
(if directory is untracked, just remove directory manually)

if git is not ignoring a file you would like to ignore, first make sure it's in .gitignore.  
then:  
`git rm --cached <filename>`  
`git commit -m "ignore file"`

- add to the previous commit without changing the commit message  
`git commit --amend --no-edit`
you shouldn't amend commits that have been pushed to a public repository

- squash some commits together  
`git rebase -i <commit-to-rebase-from>`
this will open an editor where you can interactively pick where to squash from.  
example:  
`git rebase -i HEAD~2`  
which will rebase from 2 commits prior to where you currently are.

BRANCHES and REMOTES
--------------------
- origins/master is local branch that references remote branch called master
- you still have a local branch called master
- push will send local branch info to remote and origin
- fetch will get from remote and put in origin but not local
- merge will get from origin and put into local

to create a new branch:  
`git branch <name_of_branch>`

to checkout a branch:  
`git checkout <name_of_branch>`

to create branch and then check it out:  
`git checkout -b <name_of_branch>`

to put project onto remote repository now you can do:  
`git push -u origin master`  
(`-u` is equivalent to `--set-upstream`)

or if you are on another branch:  
`git push -u origin <name_of_branch>`

to move a branch:  
`git branch -m <name_of_branch_to_move> <name_of_branch_after_move>`

to delete a local branch:  
`git branch --d <name_of_branch>`  
(the branch has to have been merged already, use `-D` flag otherwise)

to delete a remote branch:  
`git push --delete origin <name_of_branch>`

to prune remote tracking branches:  
`git remote prune origin`


MERGING
-------
info source:  
http://stackoverflow.com/questions/6127328/how-can-i-delete-all-git-branches-which-have-been-merged

- checkout the receiving branch  
`git checkout <name_of_branch>`
- merge  
`git merge <name_of_branch>`