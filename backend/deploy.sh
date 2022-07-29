echo "Kill all the running PM2 actions"
pm2 kill

echo "Jump to app folder"
cd /home/ubuntu/health/backend

echo "Update app from Git"
git pull

echo "Install app dependencies"
sudo rm -rf node_modules package-lock.json
npm install

echo "Build app"
npm run build

echo "Restart PM2 action"
pm2 restart health-backend
