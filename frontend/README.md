# Technologies
<a href="https://reactjs.org/" title="React"><img src="https://reactjs.org/logo-180x180.png" alt="React.Js" width="21px" height="21px"></a>
<a href="https://tailwindcss.com/" title="tailwindcss"><img src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" alt="tailwindcss" width="21px" height="21px"></a>
<a href="https://mui.com/" title="Material-UI"><img src="https://v4.mui.com/static/logo.png" alt="Material UI" width="21px" height="21px"></a>
<a href="https://www.typescriptlang.org/" title="TypeScript"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" width="21px" height="21px"></a>

# Prerequisites

1. Node.js ^14

# Steps to run locally

 1. `git clone https://github.com/asifjoardar/health.git`
 2. `cd frontend`
 3. `npm i`
 4. `npm start`

# Deployment

We use AWS EC2 & GitHub Actions for CI/CD

## Step 1: Create a new S3 Bucket 

## Step 2: Build Your App & Upload to S3 Bucket

## Step 3: Setup S3 Static Website Hosting
<p> <i>NOTE:</i> Make sure your error responses are routed to index.html.</p>

## Step 4: Allow Public Access to S3
<p>Now If you access the domain name generated, you will see your website hosted.</p>

## Step 5: Setup AWS IAM User

## Step 6: Add the Following Credentials to GitHub
Add the following values to your GitHub secrets -
1. **AWS_ACCESS_KEY_ID**
2. **AWS_SECRET_ACCESS_KEY**

## Step 7: Trigger the GitHub Action
You can manually trigger from GitHub or push a new commit to the repository to automatically trigger the pipeline
