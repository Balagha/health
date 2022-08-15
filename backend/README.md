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
## Steps to run this project:
1. ```git clone https://github.com/asifjoardar/health.git```
2. ```cd backend```
3. ```cp .env.example .env```
   Configure your .env file as your database
4. Run `npm i` command
5. Run `npm start` command

# **Deployment**
# **Deploying Backend to AWS EC2 using GitHub Actions**
<p>

</p>

### **Step 1:** Create an AWS EC2 Instance
<p>

</p>

### **Step 2:** Configure Security Group
<p>

</p>

<p>After creating the instance click on it then go to the security section and click on security groups and then click edit inbound rules. Now open 80 and 443 ports on your instance for the web server and port for your desired database.</p>

<p>

</p>


### **Step 3:** Configure NGINX 
<p>

</p>

<p>First of all, connect to your instance. Then install and configure Nginx to forward connections from port 80 to 8080. This will be done via our NGINX config in the sites-available file.</p>

<p>

</p>


### **Step 4:** Create and Configure RDS

<p>

</p>

<p>You may follow <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html">the tutorial</a> described by Amazon. Remember your RDS endpoint, port, username, and password.</p>

<p>

</p>

# **Continuous Deployment using GitHub Actions**
<p>

</p>

<p>At the root of your project, create .github/workflow directories. Then, create a .yml file. You can name it as you want. we set it as <a href="https://github.com/asifjoardar/health/blob/master/.github/workflows/backend.yml">backend.yml</a>.
<p> Before deploying anything by GitHub actions, you need to upload your necessary credentials into Github secrets so that we can reference them in our CI pipeline.</p>

<p><i>NOTE:</i> HOST should be your ec2 instance Public IPv4 address, PORT should be 22</p>

# **Licensing**
<p>

</p>

Licensed under the [Apache License 2.0](LIENSE)

