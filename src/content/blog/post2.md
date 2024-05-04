---
title: "Astro in the Cloud"
description: "Cloud architecture and future plans."
pubDate: "May 03 2024"
heroImage: "/post_img.webp"
---

## Welcome Everyone!!
Good day, readers! I hope you're all doing well, I'm doing fine myself. Today, I decided to discuss the cloud and how I hosted this website using a cloud service provider, while covering some other CSPs for the spirit of multi-cloud. This marks the first cloud architecture discussion and I am glad you're here for it! 

### Deploying to the cloud
For this first step, I really could have used *several* platforms like Github (or even GitLab) Pages for this, since, at the point of typing this, the deployment form of the website is *static*. However, considering the topic of **Cloud Architecture**, I am opt-ing for using a **CSP for deployment** and hosting purposes. 

#### AWS
Right now, the website you're looking at is sitting on the *AWS* servers within the North Americas region. If you are not familiar with the process of deploying to AWS, the pattern often suggested is to deploy it on AWS's *S3* service that offers blob storage solutions in collections called *"buckets"*. S3 supports a variety of *Auditing, Authorization and Authentication* (AAA) options, with the additional option to use that collection *bucket* as the source container for the hosting of a static website.

Regardless my certification, it really isn't too difficult to utilize AWS for such purposes. To prove it, I'll walk you through the process, from my perspective:

1) Use an Astro template or put a static website together and utilize the *Astro* framework to generate build files. (The default location for Astro build files is `project-folder\dist`)
2) Log into AWS.

    2.1) If you do not have an AWS account, you can create one. It is not only free, but AWS offers a free-tier for many services like 5GB in S3, for a whole year. 
3) Once you are logged in, you are within the *AWS Console*. Locate the search bar, and type in `S3`.
4) Locate the button that says `Create Bucket`. Click it to get started.
5) The *Create Bucket* page allows you to set the configurations for you new bucket. The only things you'll need to set is the bucket name, which has to be unique throughout the region. 
6) 



#### Azure

#### GCP

### Future Developments
