echo "Jump to app folder"
cd /home/ubuntu/health/backend

echo "Update app from Git"
git pull

echo "Install app dependencies"
sudo rm -rf node_modules package-lock.json
sudo npm install

echo "Build your app"
sudo npm run build

echo "Restart PM2 action"
sudo pm2 restart health-backend
