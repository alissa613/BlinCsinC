Hardware:
 - Raspberry Pi 4
 - Camera Module (RPi)
 - iPhone with Berry Cam installed
 - Projector with HDMI 

Install:
 - Visual Studio Code (https://code.visualstudio.com/)
 - Node.js (https://nodejs.org/en/download/)
 - Git Client (https://git-scm.com/downloads)
 - Neo4j Desktop (https://neo4j.com/download/)
 - PuTTY and Plink (https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
 - If using chrome:
   - IntraLaunch Extension and Connector (https://www.particlesoftware.com/download.html)
     * There is an option of buying this and not using it as a demo 

Setup Visual Studio Code:
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
    - npm install javascript

Set up Database:
  - Open neo4j Desktop
  - Click on add database, connect to remote graph
  - Database name: BlinCsinC
  - ConnectURL: bolt://hobby-jmlindhpafecgbkennlcgpel.dbs.graphenedb.com:24787
  - Click username/password authentication
  - Username: production
  - Password: b.6mWulGd8CK3p.tvpM1u3239zeokrM
  - Connect to database
  - Everytime you run the app, you have to also have the database running!

Set up new Raspberry Pi:
  - To set up you will need:
    - Keyboard
    - Mouse 
    - Monitor 
  - Once plugged in, set up and install software using on screen instructions
  - Transfer all pictures in /src/assets/images to /home/pi/Pictures on Raspberry Pi
  - Inside the terminal type:
    - sudo apt-get fbi
    - sudo apt-get feh
  - Transfer image_display_test.py file (located in /src/assets/) into /home/pi on Raspberry Pi

Change in code:
  - Before running anything, change the path in /src/assets/test.js to match your location for displayImage.bat on your machine!

 To run in dev:
  - ng serve
  - turn raspberry pi and projector on
  - Connect raspberry pi to projector via hdmi
  - check if laptop connected to raspberry pi:
    - Open cmd window (search cmd)
    - Type in: ssh pi@192.168.1.15
    - If it asks for password, you are connected
    - If it does nothing and then says connection timed out, you are not connected. Wait five minutes and try again
