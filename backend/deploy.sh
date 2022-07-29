echo "Jump to app folder"
cd /home/ubuntu/health/backend

echo "Update app from Git"
git pull

echo "Install app dependencies"
sudo rm -rf node_modules package-lock.json
npm install

echo "Build app"
npm run build
