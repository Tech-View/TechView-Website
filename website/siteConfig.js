/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  // Used for publishing and more
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  // matches organization username
  organizationName: 'Tech-View',
  // matches project repo
  projectName: 'TechView-Website',
  title: 'TechView', // Title for your website.
  tagline: 'Technical Interview Questions & Answers',
  // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  url: 'https://techview.dev', // Your website URL
  baseUrl: '/', 

  // remove the title from header logo
  disableHeaderTitle : true,

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'react-basics', label: 'React'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
    {href: "https://github.com/Tech-View/TechView-Website", label: "GitHub"},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/techView200_100.png',
  footerIcon: 'img/logo_icon-gold.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#FACD00',
    secondaryColor: '#313538',
    whiteColor: '#fff'
  },

  /* Custom fonts for website */
  fonts: {
    primaryFont: [
      "Raleway",
      "Serif"
    ],
    secondaryFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} TechView`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/og_image.png',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last update time.
  enableUpdateTime: true
};

module.exports = siteConfig;
