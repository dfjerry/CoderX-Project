This project is just a demo how use git
//git init
//git status
//git add
//git commit 

//git log
//git show
//git diff

//working directory
//staging area
//git repository

/git checkout
/git reset

//git checkout -b <branch> (branching)
//git check out <branch>
//git merge
A <--- B
git checkout A
git merge B
master <---- feature/dog-class
//git branch -D <brach> (delete a branch)

//git reset --soft <to_commit>
//git reset --mixed <to_commit>
//git reset --hard <to_commit>

//git revert <commit>

//.gitignore

//git config --global credential.helper store
//git config --global credential.helper "cache --timeout = 18000"

//google "gnome-keyring" git ssh -- dung ubuntu

//git clone
//git pull

//Pull request
//1. git checkout -b <feature_branch> (branching)
//2. git push origin <branch>
//3. create a pull request on Github
//4. Review code
 4.1 review code online(github)
 4.2 fetch branch into local to test offline (optional)
 4.3 approve the pull request
//5. merge to master 


//Resolve conflict
When will conflict happen?
	1. Changing the same file + same line
	2. A deleted file X, B modified fileX

Method 1:
	1.using 'git rebase'
	2. Resolve conflict
	3. Push again with -f

Method 2:
	1. Merge updated master to feature branch
	2. Resolve conflict
	3. Commit and push