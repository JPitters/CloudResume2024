# CloudResume2024
Just a little project to play with cloud solutions


## Installation

~ Disclaimer ~
This Astro.js (v4.5.16) project requires a node.js version of 18 or higher, so it is recommended that you have this version or higher to avoid technical difficulties. For reference, I used node v20 & v21.7, while developing this project. 


Run the following command in your terminal, if using bash:
```bash
pnpm install
```
or if using powershell:
```bash
npm install
```

Once the packages are installed you are ready to run astro. Astro comes with a built-in development server that has everything you need for project development. The astro dev command will start the local development server so that you can this website in action on very own device.

bash:
```bash
pnpm run dev
```

powershell:
```bash
npm run dev
```

## Tech Stack

- [Astro](https://astro.build)
  - [mdx] (https://docs.astro.build/en/guides/integrations-guide/mdx/)
  - [tailwindcss] (https://tailwindcss.com/)
  - [sitemap] (https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [DaisyUI] (https://daisyui.com/)
- [typescript] (strict)

### The Big Question: "Why?"
I whimsically decided to take on this project, some more about it can be found the website blog >>link?<<, but initially I intended to
just throw together an SPA using React, TypeScript, and other dependencies as I seen fit. However, as everything can be an opptortunity,
I found that this project idea is one that allows me to step out of my React-shaped comfort zone and try something different. So, I thought 
to myself: "Hm... Vue? Angular?? Hard to choose, well I just want something fast." After a hop, a skip, and a quick google search on new 
frameworks, I stumbled upon Angular! wait, no er- I mean, ASTRO.

#### Astro
Astro as a type of UI-agnostic, open web framework, has been peer reviewed as the newest framework to challenge the quality and speed of 
the more popular web frameworks I previously name dropped. Astro spits on competition by also offering collaboration: they offer developers 
the ability to integrate & utilize their favorite UI-focused web framework. So, if I still wanted React in my tech, I could have it, and 
that was highly attractive. Not to mention, Astro as a "content-driven"-focused framework, supports webpage speed by offering a new 
frontend architecture that reduces JavaScript overhead & complexity where possible.

#### TypeScript
TypeScript as a scripting language is very versatile and encompasses the various functionalities of JavaScript, but is also the recommended 
scripting language of choice by the Astro team.

#### DaisyUI
UX is very important for any good website. Dynamic themes add a lot to the UX for a web page, and DaisyUI offers a lot of support for 
implementing just that. Even in the case that you'd like to develop your own themes, they encourage that on their website, showing how one can
integrate it into their webpage.


## Project Structure

```php
├── src/
│   ├── components/
│   │   ├── cv/
│   │   │   └── TimeLine.astro
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HorizontalCard.astro
│   │   ├── SideBar.astro
│   │   ├── SideBarMenu.astro
│   │   ├── SideBarFooter.astro
│   │   ├── Themes.astro
│   │   ├── ThemeSelector.astro
│   │   └── ToolBar.astro
│   ├── content/
│   │   ├── blog/
│   │   │   ├── post1.md
│   │   │   ├── post2.md
│   │   │   └── post3.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── lib/
│   │   ├── animateGif.ts
│   │   └── createSlug.ts
│   └── pages/
│   │   ├── blog/
│   │   │   ├── tag/
│   │   │   │   ├── [tag]/
│   │   │   │   │   └── [...page].astro
│   │   │   ├── [...page].astro
│   │   │   ├── [...page].astro
│   │   │   └── [slug].astro
│   │   ├── cv.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── rss.xml.js
│   ├── styles/
│   │   └── global.css
│   └── config.ts
├── public/
│   ├── favicon.svg
│   ├── profile.webp
│   └── + several other images
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── tsconfig.json
```


### Components usage

#### Layout Components

The `BaseHead`, `Footer`, `Header`, and `SideBar` components are set up in the layout system. To change the website content you can edit the content of these components.

##### SideBar

In the Sidebar you'll find my profilePicture, links to all this website's pages, and social icons.

The avatar is shaped using [mask classes](https://daisyui.com/components/mask/).

The used social-icons are SVG from [BoxIcons](https://boxicons.com/) pack. You can replace the icons in the `SideBarFooter` component.

To add a new page in the sidebar go to the `SideBarMenu` component.

```
<li><a class="py-3 text-base" id="home" href="/">Home</a></li>

```

**Note**: The sidebar menu's "active item" status is set the by prop `sideBarActiveItemID` in the `BaseLayout` component of each page. If you're adding a custom page, make your edits and add that tag id to the link in the `SideBarMenu`

#### TimeLine

The timeline components are used to confirm the CV.

```html
<div class="time-line-container">
  <TimeLineElement title="Element Title" subtitle="Subtitle">
    Content that can contain
    <div>divs</div>
    and <span>anything else you want</span>.
  </TimeLineElement>
  ...
</div>
```

#### Card & HorizontalCard

The cards are primarly used for the Project and the Blog components. They include a picture, a title, and a description. 

```html
<HorizontalCard title="Card Title" img="imge_url" desc="Description" url="Link
URL" target="Optional link target (_blank default)" badge="Optional badge"
tags={['Array','of','tags']} />
```


### Layouts

Just in case you add custom pages, you'll want to include `BaseLayout` in each page you add and `PostLayout` to your post pages.

The BaseLayout defines a general template for each new webpage you want to add. It imports constants SITE_TITLE and SITE_DESCRIPTION which can be modified in the ```../config``` folder. Data placed there can be imported anywhere using import. 

### Theming

To change the template theme change the `data-theme` attribute of the `<html>` tag in `BaseLayout.astro` file. There are two buttons available on the site: one in the Navbar (only visible on smaller screens), and another in the tool bar (only visible on mid to larger screens) that hovers above the navbar.

### Tool Bar
The `JordansToolBar` object is essentially a rip from Astro's dev tool bar, and is redesigned and re-purposed for the uses of this webpage. For the time being, it supports simple functions like icons or apps that the user can rely on for easy access.

#### ThemeSelector
The `ThemeSelector` is an object designed to reflect the theming functionalities of this website. It sits as an icon within the tool bar.

### Library
Found within the `src/lib` folder are files that support client-side scripting functionalities of the website. 


### Content

You can add a [content collection](https://docs.astro.build/en/guides/content-collections/) in `/content/' folder, you will need add it at config.ts.

#### config.ts

Where you need to define your content collections, my content schemas are defined here too.

#### Blog

Add your `md` blog post in the `/content/blog/` folder.

##### Post format

Add code with this format in the top of each post file.

```
---
title: "Post Title"
description: "Description"
pubDate: "Post date format (e.g. April 20 2024)"
heroImage: "Post Hero Image URL"
---
```

## Deploy

This is a staic website, so you can deploy it on your favourite static hosting service such as Vercel, Netlify, GitHub Pages, etc. However, I personally made this website so I could play with cloud hosting through various CSPs. More on that will be posted as individual pages within the website.

The configuration for the deployment varies depending on the platform where you are going to do it. See the [official Astro information](https://docs.astro.build/en/guides/deploy/) to deploy your website.

> **⚠️ CAUTION** </br>
> The Blog pagination of this template is implemented using dynamic route parameters in its filename and for now this format is incompatible with SSR deploy configs, so please use the default static deploy options for your deployments.

## Contributing

Suggestions and pull requests are welcomed! Feel free to ask for edits, open a discussion, or an issue, for a new feature request or bug.

I already have some more plans for future features, so any and all suggestions are welcome!

## License

This project is licensed under the MIT license — see the [LICENSE](https://github.com/JPitters/CloudResume2024/blob/main/LICENSE) file for details.


Thanks for reading! Have fun! :)