<h1 align="center">
  RPG-2015-188: Video-summarisation
</h1>

The video-summarisation webpages for project RPG-2015-188 have been developed using [Gatsby](https://www.gatsbyjs.org/docs/).

## Getting started

1.  **Install node.js**

    Visit the [Node.js site](https://nodejs.org/en/) and install the recommended version for your operating system. To check the installation run:

    ```sh
    node --version
    ```

    Installing node should also install the package manager npm. Check by running:

    ```sh
    npm --version
    ```

2.  **Install the Gatsby CLI**

    The Gatsby CLI allows you to run commands to develop Gatsby sites.

    ```sh
    npm install --global gatsby-cli
    ```

    Check the installation with:

    ```sh
    gatsby --version
    ```

3.  **Clone repository**

    Clone this repository to a local directory.

    ```sh
    git clone git@github.com:clarematthews/PROJECT-RPG-2015-188.git
    ```

## Running locally

Navigate to the cloned project folder.

1.  **Using npm**

Using npm and the Gatsby CLI, run:

```sh
gatsby develop
```

2.  **Using yarn**

Yarn can be used as an alternative to npm. Run:

```sh
yarn develop
```

3.  **View the site**

Once the project has compiled, navigate to [http://localhost:8000](http://localhost:8000) to view the site locally.

## Deploying the site

A deployment of the site is automatically triggered when pushing to the master branch of this repository, or can be manually triggered from the [Netlify project page](https://app.netlify.com/sites/project-rpg-2015-188/overview).

## Developing

The top-level structure of the `src` directory is as follows:

    .
    ├── components
    ├── images
    ├── pages

4.  **`components`**: This directory contains `layout.css`, which is the main css file for the project. To add images to the site, add the details to the `query` object in the `image.js`. For more information on adding images, see the [Gatsby documentation](https://gatsby.app/gatsby-image).

5.  **`images`**: All the images that appear on the site are in the `images` directory, organised by page.

6.  **`pages`**: A separate javascript file exists for each page of the website. To link between pages, see the [Gatsby documentation](https://www.gatsbyjs.org/docs/gatsby-link/).

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
