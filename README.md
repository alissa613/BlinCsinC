Install:
 - Visual Studio Code
 - Node.js
 - Git Client
 - Neo4j Desktop/Community

In Visual Studio Code:
 * Set git bash as default terminal in VS:
    - Open VS Code and click on the setting gear icon in the lower left corner
    - In settings, search for terminal and click on the terminal settings under Features
    - Under Terminal > External: Windows Exec, change the path to your git bash executable (most likely C:\Program Files\Git\bin\bash.exe)
    - Set bash as your default terminal

 * Install Extensions
   - On the left hand side at the top, click the bottom most icon (it is four squares with one square detached from the others)
   - Install Python, markdownlint, npm, and npm Intellisense 
   
 * Copy code from github
    - git clone *Repository URL from github*

 * Install dependencies
    - npm install -g npm@6.0.1
    - npm install @angular/compiler-cli
    - npm install --save-dev @angular-devkit/build-angular
    - npm install typescript
    - npm install @angular/compiler
    - npm install neo4j-driver
    - npm link

 To run in dev:
  - ng serve

  To view the database:
   - http://localhost:7474
   - If it is not loading, text me and I'll start it up again
