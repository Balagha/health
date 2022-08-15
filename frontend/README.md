# **Technologies**
<a href="https://reactjs.org/" title="React"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="React.Js" width="21px" height="21px"></a>
<a href="https://tailwindcss.com/" title="tailwindcss"><img src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" alt="tailwindcss" width="21px" height="21px"></a>
<a href="https://mui.com/" title="Material-UI"><img src="https://v4.mui.com/static/logo.png" alt="Material UI" width="21px" height="21px"></a>
<a href="https://www.typescriptlang.org/" title="TypeScript"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" width="21px" height="21px"></a>

# **Prerequisites**
## React Installation
1. Node.js version 14x
2. npm
3. ReactJS


# **To Run the health project**
## <p> Steps to run this project: </p>


 1. ```git clone https://github.com/asifjoardar/health.git```
 2. ```cd frontend```
 3. Run `npm i` command
 4. Run `npm start` command 


# **Deployment**
# **Deploying frontend to AWS S3 using GitHub Actions**
## <p>Deploy Static Website on S3</p>

### **Step 1:** Create S3 Bucket 
<p>
 </p>

### **Step 2:** Build Your App & Upload to S3 Bucket
<p>
 </p>

### **Step 3:** Setup S3 Static Website Hosting
<p> 
</p>

<p> <i>NOTE:</i> If you have separate error HTML files, you can set them up in “Error document”. Since SPA applications normally handle them in index.html.</p>

<p>

</p>

### **Step 4:** Allow Public Access to S3
<p>

</p>

<p>Now If you access the domain name generated, you will see your website hosted.</p>
<p>

</p>

# **Continuous Deployment using GitHub Actions**
<p>
</p>

### **Step 1:** Setup AWS IAM User
<p>
</p>

### **Step 2:** Set GitHub Actions Deployment file
<p>

</p>

<p>Go to your GitHub repository. Under Settings/Secrets, add Secrets as mentioned on the .csv file. Name them as AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.</p>
<p>At the root of your project, create .github/workflow directories. Then, create .yml file. You can name it as you want. we set it as <a href="https://github.com/asifjoardar/health/blob/master/.github/workflows/frontend.yml">frontend.yml</a> .</p>

# **Licensing**
<p>

</p>

Licensed under the [Apache License 2.0](LIENSE)


