# **Technologies**
<a href="https://reactjs.org/" title="React"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="React.Js" width="21px" height="21px"></a>
<a href="https://tailwindcss.com/" title="tailwindcss"><img src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" alt="tailwindcss" width="21px" height="21px"></a>
<a href="https://mui.com/" title="Material-UI"><img src="https://v4.mui.com/static/logo.png" alt="Material UI" width="21px" height="21px"></a>
<a href="https://www.typescriptlang.org/" title="TypeScript"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" width="21px" height="21px"></a>

# **Prerequisites**
 **React Installation**
1. Node.js version 14x
2. npm
3. ReactJS


# **To Run the health project**
<p> Steps to run this project: </p>


 1. ```git clone https://github.com/asifjoardar/health.git```
 2. ```cd frontend```
 3. Run `npm i` command
 4. Run `npm start` command 


# **Deployment**
## **Deploying frontend to AWS S3 using GitHub Actions**

### **Deploy Static Website on S3**

**Step 1:** **Create S3 Bucket**
<p>Go to the S3 in the AWS Management Console. Click on the “Create bucket” button. The name of the bucket must be unique. Set the Bucket name and AWS region.</p>

**Step 2:** **Build Your App & Upload to S3 Bucket**
<p>Build your frontend code with the “build” command. After building your project, look for the directory made by the build command and make sure whether there exists an index.html file.</p>
<p>Upload contents inside the build directory into the AWS S3 bucket.</p>

**Step 3:** **Setup S3 Static Website Hosting**
<p>Under the “Properties” in the S3 Bucket console, There is a “Static website hosting” setting at the very bottom. S3 Bucket disables static website hosting by default. </p>
<p>Therefore, we must allow them. If you have separate error HTML files, you can set them up in “Error document”. Since SPA applications normally handle them in index.html.</p>

**Step 4:** **Allow Public Access to S3**
<p>First, Go to the “Permissions” tab in the Bucket console and edit the “Block public access” settings. Uncheck all the block settings. A warning will come up saying that it is dangerous to allow public access. Ignore it since our purpose is to hosting a publically accessible website. You will see the section full of warnings.</p>
<p>Second, we will include Bucket Policy to allow “GetObject” Actions to the Bucket Objects. Include the following policy in the “Bucket Policy” setting by replacing YOUR-BUCKET-NAME with the name of your Bucket.</p>

```jeson
 {
 "Version": "2012-10-17",
 "Statement": [
   {
     "Effect": "Allow",
     "Principal": "*",
     "Action": "s3:GetObject",
     "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
   }
 ]
}
```
<p>Now If you access the domain name generated, you will see your website hosted.</p>

## **Continuous Deployment using GitHub Actions**

**Step 1:** **Setup AWS IAM User**
<p>Go to IAM in AWS Management Console. Click on the Users and add User. Set the Access type to Programmatic access since we will access AWS through GitHub Actions.</p>
<p>On the next step, Check AmazonS3FullAccess permission. This permission would allow us to handle AWS S3 resources only, which means, we cannot access EC2 or other resources with this IAM User.</p>
<p>Skip tags. On the last step, there will be AWS Keys that you need when you access AWS resources. Download .csv file.</p>
<p>Go to your GitHub repository. Under Settings/Secrets, add Secrets as mentioned on the .csv file. Name them as AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.</p>

**Step 2:** **Set GitHub Actions Deployment file**
<p>Go to IAM in AWS Management Console. Click on the Users and add User. Set the Access type to Programmatic access since we will access AWS through GitHub Actions.</p>
<p>At the root of your project, create .github/workflow directories. Then, create .yml file. You can name it as you want. we set it as frontend.yml . Here is the example of our deployment file for the frontend. GitHub will automatically trigger the Actions whenever you push to the master branch.</p>

```yml

name: frontend

on:
  push:
    branches:
      - master
    paths:
      - frontend/**

  workflow_dispatch:

defaults:
      run:
        working-directory: frontend

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v1
        with:
          node-version: 16.x
      - run: npm i
      - run: npm run build
      - uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-south-1
      - run: aws s3 sync ./build s3://frontend-health
 ```     

# **Licensing**
Licensed under the [Apache License 2.0](LIENSE)
