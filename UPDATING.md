# How to submit a change or a pull request

1. Before creating a branch, `git checkout` base branch ( usually a release/master ). Run `git fetch` and `git pull` to get the latest changes in the branch.[step1]

2. On your terminal, create a branch out of the base branch checked out in (1)[step1] and work out of that. Run `git checkout -b <branch-name>`
    Branches should always be linked to a New Feature or a Bug Fix Implementation
    
    Description                                          | Guideline                               | Example                              
    ---------------------------------------------------- | --------------------------------------- | -------------------------------------
    For new features, branch name must follow the format | `feature/<title-task>-short-description`| `feature/main-page-ui`
    For bug fixes, branch name must follow the format    | `bugfix/<title-fix>-short-description`  | `bugfix/fix-css-format-in-background`    
    
3. Commit your changes to the newly created branch and push to your remote branch from your fork.
   Run Commands (or use VS code for better process to stage and push changes):
   - Stage the changes, add all changed files `git add -A`
   - Commit changes `git commit -m "Useful message content"`
   - Push to remote `push -u origin <branch-name>`. Assuming `origin` is the remote name of your forked repository.
   
4. Create a pull request in GitHub from your fork and branch to the main target repository and branch.
   As the merge strategy used when merging a Pull Request to the release branch is the 'merge by commit', 
   make sure to squash all your commits before opening the PR or before merging it, not to pollute the log history with all your commits if you had more than one.
   
   If you had more than one commit, you can squash them using the command `git rebase -i HEAD~N` where N is the number of commits you want to squash 
   or `git rebase -i 6394dc` where 6394dc is the commit-hash just BEFORE the first one you want to rewrite from.
   After entering the command, you need to press the `i` key to go in insert mode and:
      - pick the first commit on the list of commits
      - squash all the others
      - press the `esc` key to quit the insert mode and then :wq to save and quit
  Right after, git will ask you to edit the commit messages for each commit, you can either keep it, update it or even delete it.
  
  In case you use VS Code, you can do `git commit --amend` each time when you need to add a new commit for the same PR.
  
5. Once everything is clarified and reviewed, changes approved, you can merge. Select `delete branch after merge` checkbox if the branch is not needed in the future.
