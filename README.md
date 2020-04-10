Install:
 - Visual Studio Code
 - Node.js
 - Git Client
 - Neo4j Desktop

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
    - npm install node-sass
    - npm install --ignore-scripts=true
    - npm install neo4j-driver

 * Set up Database:
    - Open neo4j Desktop
    - Click on add database, connect to remote graph
    - Database name: BlinCsinC
    - ConnectURL: bolt://hobby-jmlindhpafecgbkennlcgpel.dbs.graphenedb.com:24787
    - Click username/password authentication
    - Username: production
    - Password: b.6mWulGd8CK3p.tvpM1u3239zeokrM
    - Connect to database
    - Everytime you run the app, you have to also have the database running!

 To run in dev:
  - ng serve