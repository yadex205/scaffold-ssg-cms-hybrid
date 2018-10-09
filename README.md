@yadex205/scaffold-ssg-cms-hybrid
=================================

Features
--------

* Static site generation by Gatsby.js v2
* Sass with glob importing
* ESNext + TypeScript
* React v16 + Redux


Browser Support
---------------

Depends on Gatsby.js (see https://www.gatsbyjs.org/docs/browser-support/).


Requirements
------------

* Node.js `>= 6.11.5`
* npm or yarn


How to use
----------

```bash
# Download this scaffold and install dependencies automatically
PROJECT_NAME=my-awesome-site curl https://raw.githubusercontent.com/yadex205/scaffold-ssg-cms-hybrid/master/tsconfig.json | node

# If PROJECT_NAME was not given, scaffold will be placed on `$PWD/my-project`

# Move into your project
cd my-awesome-site

# Let's make pages with your favorite editor!
emacs src/pages/index.tsx
```


Notes
-----

* `gatsby develop` DOESN'T support **IE11** https://github.com/gatsbyjs/gatsby/issues/8522
  But generated site by `gatsby build` works correctly on IE11.
