# Technologies

<a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="21px" height="21px"></a>
<a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="21px" height="21px"></a>
<a href="https://expressjs.com/" title="Express"><img src="https://s3-us-west-2.amazonaws.com/assets.blog.serverless.com/express_js.png" alt="Express" width="21px" height="21px"></a>
<a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a>
<a href="https://typeorm.io/" title="Typeorm"><img src="https://typeorm.io/image/favicon/favicon-32x32.png" alt="TypeORM" width="21px" height="21px"></a>

# Prerequisites

1. Node.js ^14
2. PostgreSQL 12

# Steps to run locally

1. `git clone https://github.com/asifjoardar/health.git`
2. `cd backend`
3. `cp .env.example .env`
4. *Configure your .env file as your database*
5. `npm i`
6. `npm start`

# Deployment

We use AWS EC2 & GitHub Actions for CI/CD

## Step 1: Create a new AWS EC2 Instance

## Step 2: Configure Security Group
After creating the instance click on it then go to the security section and click on security groups and then click edit inbound rules. Now open 80 and 443 ports on your instance for the web server and port for your desired database.

## Step 3: Configure NGINX 
First of all, connect to your instance. Then install and configure Nginx to forward connections from port 80 to 8080. This will be done via our NGINX config in the sites-available file.

## Step 4: Create and Configure RDS
You may follow <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html">the tutorial</a> described by Amazon. Remember your RDS endpoint, port, username, and password.

## Step 5: Add the Following Credentials to GitHub
Add the following values to your GitHub secrets -
1. **HOST:** Your EC2 instance's Public IPv4 address
2. **USER:** EC2 username
3. **KEY:** AWS Deployment Key
4. **PORT:** EC2 SSH Port
5. **DB_SYNCHRONIZE:** Turn on Database Synchronization? (*true/false*) 
6. **DB_LOGGING:** Turn on Database Logging? (*true/false*) 
7. **DB_TYPE**
8. **DB_HOST**
9. **DB_PORT**
10. **DB_USERNAME**
11. **DB_PASSWORD**
12. **DB_NAME**

## Step 6: Trigger the GitHub Action
You can manually trigger from GitHub or push a new commit to the repository to automatically trigger the pipeline
