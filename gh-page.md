Website url:
https://alexkkm.github.io/web-ui

Installation guildline:
Must forcefully install the node package

npm install -f
gh-page user guideline:
Set up of gh-pages:
Create a blank github repo or you upload your current project into a github repo You can't deploy on Github pages without a repository that contains all your files so make sure you have the repo ready.

Install gh-pages Next, you have to install the package gh-pages in your repository.
npm:

npm install -g gh-pages --save-dev
Add this script in package.json In the package.json file add below field in line 3.

"homepage": "https://[github-username].github.io/[github-repository-name]"
Create a deploy script Inside the scripts object in package.json file add the following script.

"deploy": "gh-pages -d src"
This script will deploy to Github pages anything in the src directory. You can change src to the name of the directory containing the files you want to deploy.

Run the script Next, run the publish script in your command line to deploy to gh-pages.
npm:

npm run deploy
OR yarn:

yarn run deploy
It may take a bit of time but when it's done you'll see a line that says published.

Change the source branch in the repo settings

For your website to be deployed successfully, you'll have to go into the settings of your repository. In the Github pages section change the source branch from master to gh-pages. This branch was created when the publish script was run succesfully.

Once done, go to the url provided and you'll see your live website.

gh-pages deploy with message
npm run deploy -- -m "Deploy React app to GitHub Pages"

gh-pages deploy without message
npm run deploy