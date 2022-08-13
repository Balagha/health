# **Technologies**

<a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="21px" height="21px"></a>
<a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="21px" height="21px"></a>
<a href="https://expressjs.com/" title="Express"><img src="https://s3-us-west-2.amazonaws.com/assets.blog.serverless.com/express_js.png" alt="Express" width="21px" height="21px"></a>
<a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a>
<a href="https://typeorm.io/" title="Typeorm"><img src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png" alt="typeorm" width="21px" height="21px"></a>

# **Prerequisites**
 1. Node.js version -> 14x
 2. PostgreSQL -> PostgreSQL 12.11

# **To Run the health project**
Steps to run this project:
1. ```git clone https://github.com/asifjoardar/health.git```
2. ```cd backend```
3. ```cp .env.example .env```
   Configure your .env file as your database
4. Run `npm i` command
5. Run `npm start` command

# **Deployment**
## **Deploying Backend to AWS EC2 using GitHub Actions**

**Step 1:** **Login to AWS Management Console and Open EC2**

<p>Login to AWS Management Console and open the EC2 service.</p>

**Step 2:** **Click on Launch Instance**
<p> Once you are in the EC2 dashboard, you can see a summary of all the EC2 resources in your selected region. To Create EC2 Instance in AWS, Click Launch Instance.</p>

**Step 3:** **Choose an Amazon Machine Image (AMI)**
<p>There are lots of AMI configurations but we will only go through the necessary ones. An AMI is a template that contains the software configuration (operating system, application server, and applications) required to launch your instance</p>

<p>Note: we must specify an AMI when you create your EC2 instance in AWS.
we are going with ubuntu. It is also eligible for free tier. You can select as per your requirement. </p>

**Step 4:**  **Choose an Instance Type**
<p>After selecting AMI, you will be taken to the instance type selection screen.</p>
<p>Instance Type is basically selection of hardware configurations for your instance for example CPU, memory, storage, and networking capacity. </p>

**Step 5:** **Create/Select a Key Pair**
<p>Now let's create a new key pair. A key pair consists of a private key(you store) and a public key(AWS store). Together they let you connect to your instance securely without any password.</p>

**Step 6:** **Security Group**
<p>Security Group let’s you control traffic to and from your EC2 instance. It’s basically an additional firewall provided by AWS to let you block unwanted ports or to open required ports.</p>
<p>For now, we have left the default security group config with only 22 port open for SSH so that I can connect to my instance.</p>
<p>But , feel free to open 80 or 443 on your instance if you are planing to use your instance like web server.</p>

**Step 7:** **Configure Instance Details**
<p>In the instance details, you can configure a lot of details about your instance for example- </p>

* How many instances you want

* VPC and subnet in which you want to launch an instance

* Assign Public Ip to instance

* Attach an IAM role to an instance etc.

* Adding storage

<p>The list is really long !!!</p>

<p>We are going with default only but please feel free to tweak this as per your requirement.</p>

<p>If everything seems to be good, you can click on Launch.</p>

**Step 8:** **Configure Security Group**
<p> After creating the instance click on it then go to the security section and click on security groups and then click edit inbound rules. Now open 80 and 443 ports on your instance for the web server and port for your desired database.</p>

**Step 9:** **Configure NGINX**

<p>First of all, we need to connect our instance. To do that, click on connect then chose your preferred option. Then install Nginx in your system.</p>
<p>We now know our web server is accepting connections on port 80. Our Node app is going to be running on port 8080 so we need to forward connections from port 80 to 8080. This will be done via our NGINX config in the sites-available file.</p>

**Step 10:** **Create and Configure RDS**

<p>Follow <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html">the tutorial</a> described by Amazon. Remember your RDS endpoint, port, username, and password.</p>

## **Continuous Deployment using GitHub Actions**
<p>At the root of your project, create .github/workflow directories. Then, create a .yml file. You can name it as you want. we set it as backend.yml . Here is the example of our deployment file for the backend. GitHub will automatically trigger the Actions whenever you push to the master branch.</p>

<p>Note: Before we deploy anything, we are going to upload our necessary credentials into Github secrets so that we can reference them in our CI pipeline.</p>

```yml
name: backend

on:
  push:
    branches:
      - master
    paths:
      - backend/**

defaults:
      run:
        working-directory: backend

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x]

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - name: npm install and build
      run: |
        npm install
        npm run build
      env: 
        CI: true
        
  depoly:
    needs: [build]
    runs-on: ubuntu-latest
    steps:
     - name: SSH deploy
       uses: appleboy/ssh-action@master
       with:
          host: ${{ secrets.HOST }}
          username:  ${{ secrets.USER }}
          key:  ${{ secrets.KEY }}
          port:  ${{ secrets.PORT }}
          script: |
            pm2 kill
            sudo npm remove pm2 -g
            sudo apt-get remove nodejs
            sudo apt-get remove npm
            cd /home/ubuntu
            sudo rm -rf health
            curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
            sudo apt install -y nodejs
            sudo npm install -g pm2
            git clone https://github.com/asifjoardar/health.git
            cd /home/ubuntu/health/backend
            export DB_TYPE=${{ secrets.DB_TYPE }} DB_HOST=${{ secrets.DB_HOST }} DB_PORT=${{ secrets.DB_PORT }}
            export DB_USERNAME=${{ secrets.DB_USERNAME }} DB_PASSWORD=${{ secrets.DB_PASSWORD }} DB_NAME=${{ secrets.DB_NAME }}
            export DB_SYNCHRONIZE=${{ secrets.DB_SYNCHRONIZE }} DB_LOGGING=${{ secrets.DB_LOGGING }}
            npm install
            npm run build
            pm2 start npm --name health-backend -- run prod
            pm2 restart health-backend
 ```           

<p>Note: HOST should be your Public IPv4 address, PORT should be 22</p>




# **Licensing**
Licensed under the [Apache License 2.0](LIENSE)
