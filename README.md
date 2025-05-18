Setup manual for MERN full stack web development
1.	Download and install node version manager (nvm). nvm is necessary or not mandatory for the installation of node.js runtime environment. With nvm one can install and manage different versions of node without problems. To confirm if nvm is installed on your machine type “nvm” on cmd to see version installed
2.	Install node by typing nvm install “version”- eg  “nvm install” 8.15.0 or nvm install lts on cmd. After install is complete, type ‘nvm list’ to see the versions of node installed. Type ‘nvm use version’ to use or switch to a different version of node. Note: before node can be used it must first be installed. Node package manager (NPM) is installed along with node installation by default. All node dependencies are installed using either NPM or YARN (yet another resource negotiator). Yarn was used for this set up.
3.	Type “yarn install” on the cmd to install yarn. Type yarn to confirm the version of yarn installed on your machine.
4.	After yarn is installed all node dependencies can be installed via yarn. To install express web server type ‘yarn add express’. To install mongodb type ‘yarn add mongodb’. To install react type ‘yarn add react’ and to install react-dom type ‘yarn add react-dom’. To add react-hot-loader type ‘yarn add react-hot-loader’. Note: to start use react , react and React-Dom must be installed.

Checking your development setup
The basic setup will go through the following file structure:

| mern-simplesetup/
 | -- client/ 
| --- HelloWorld.js
 | --- main.js 
| -- server/ 
| --- devBundle.js
 | --- server.js
 | -- .babelrc 
| -- nodemon.json 
| -- package.json 
| -- template.js
 | -- webpack.config.client.js
 | -- webpack.config.client.production.js 
| -- webpack.config.server.js

Note: to start a new project from scratch a root folder should be created for the project, after which cd “space” drag root folder into the cmd to make the project folder active for work to begin.
To begin a new project type yarn init to generate a package.json file on the active root folder as setup above. Follow through with the initialization questions. Modify the newly created package.json file with package.json file in the package.json setup folder, after modifying the package.json file, run “yarn” command on cmd to fetch and add all these modules to your project.
Next create the .barbelrc file and save in the root folder (copy content from the setup folder). Next create a nodemon file and save in the root folder(copy content from the setup folder). Not just this two but create all the folder or files in the setup folder and save in the root folder to begin rendering.
Note: the setup as written in this manual is a full stack setup which means the setup will connect to the mongodb database.
