import React from "react";
import "./Navbar.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import dedicatedtechnical from "../../assets/dedicatedtechnical.jpeg";

import Ace from "../../assets/acecleaning.jpeg";
import Ace1 from "../../assets/acecleaning1.jpeg";
import Ace2 from "../../assets/acecleaning2.jpeg";
import Ace3 from "../../assets/acecleaning3.jpeg";
import Ace4 from "../../assets/acecleaning4.webp";

import Kitchen from "../../assets/Kitchen.jpeg";
import painting from "../../assets/painting.jpeg";

import electrical from "../../assets/electrical.webp";
import plumbing from "../../assets/plumbing.jpeg";
import handy from "../../assets/handy.webp";
import painting2 from "../../assets/painting2.jpeg";

import wallpaper from "../../assets/wallpaper.jpeg";
import office from "../../assets/office.jpg";
import tank from "../../assets/tank.jpg";
import pool from "../../assets/pool.jpeg";

import apartment from "../../assets/apartment.jpg";
import kitchen1 from "../../assets/kitchen1.jpeg";
import villa from "../../assets/villa.jpeg";
import carpentery from "../../assets/carpentery.jpeg";
import CarpenterServices from "../../assets/Carpenter-Services.jpg";

import service2 from "../../assets/service2.jpeg";
import service3 from "../../assets/service3.jpg";
import service4 from "../../assets/Service4.jpeg";

const Navbar = () => {
  return (
    <html key="1" lang="en-US" prefix="og: https://ogp.me/ns#">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>
          Technical Services Company Dubai | Technical Services Dubai
        </title>
        <meta
          content="Dedicated offers the best technical services in Dubai, including electrical work, AC maintenance, marble repair, and kitchen remodeling."
          name="description"
        />
        <meta
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          name="robots"
        />
        <link href="https://dedicatedtechnical.com/" rel="canonical" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta
          content="Technical Services Company Dubai | Technical Services Dubai"
          property="og:title"
        />
        <meta
          content="Dedicated offers the best technical services in Dubai, including electrical work, AC maintenance, marble repair, and kitchen remodeling."
          property="og:description"
        />
        <meta content="https://dedicatedtechnical.com/" property="og:url" />
        <meta content="Dedicated Technical" property="og:site_name" />
        <meta content="2023-08-05T18:08:59+00:00" property="og:updated_time" />
        <meta
          content="https://dedicatedtechnical.com/wp-content/uploads/2023/01/01-930x1024.png"
          property="og:image"
        />
        <meta
          content="https://dedicatedtechnical.com/wp-content/uploads/2023/01/01-930x1024.png"
          property="og:image:secure_url"
        />
        <meta content="580" property="og:image:width" />
        <meta content="639" property="og:image:height" />
        <meta content="Technical Services in dubai" property="og:image:alt" />
        <meta content="image/png" property="og:image:type" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="Technical Services Company Dubai | Technical Services Dubai"
          name="twitter:title"
        />
        <meta
          content="Dedicated offers the best technical services in Dubai, including electrical work, AC maintenance, marble repair, and kitchen remodeling."
          name="twitter:description"
        />
        <meta
          content="https://dedicatedtechnical.com/wp-content/uploads/2023/01/01-930x1024.png"
          name="twitter:image"
        />
        <meta content="Written by" name="twitter:label1" />
        <meta content="wasilatechnicalservices" name="twitter:data1" />
        <meta content="Time to read" name="twitter:label2" />
        <meta content="4 minutes" name="twitter:data2" />
        <script
          className="rank-math-schema"
          dangerouslySetInnerHTML={{
            __html:
              '        {            "@context": "https://schema.org",            "@graph": [{                "@type": ["LocalBusiness", "Organization"],                "@id": "https://dedicatedtechnical.com/#organization",                "name": "Dedicated Technical",                "url": "https://dedicatedtechnical.com",                "sameAs": ["https://www.facebook.com/dedicatedtechnical/", "https://www.instagram.com/dedicatedtechnical/"],                "logo": {                    "@type": "ImageObject",                    "@id": "https://dedicatedtechnical.com/#logo",                    "url": "http://dedicatedtechnical.com/wp-content/uploads/2023/01/Logo-02-1.png",                    "contentUrl": "http://dedicatedtechnical.com/wp-content/uploads/2023/01/Logo-02-1.png",                    "caption": "Dedicated Technical",                    "inLanguage": "en-US",                    "width": "3696",                    "height": "1104"                },                "openingHours": ["Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00"],                "image": {                    "@id": "https://dedicatedtechnical.com/#logo"                }            }, {                "@type": "WebSite",                "@id": "https://dedicatedtechnical.com/#website",                "url": "https://dedicatedtechnical.com",                "name": "Dedicated Technical",                "publisher": {                    "@id": "https://dedicatedtechnical.com/#organization"                },                "inLanguage": "en-US",                "potentialAction": {                    "@type": "SearchAction",                    "target": "https://dedicatedtechnical.com/?s={search_term_string}",                    "query-input": "required name=search_term_string"                }            }, {                "@type": "ImageObject",                "@id": "http://dedicatedtechnical.com/wp-content/uploads/2023/01/1000x600.jpg",                "url": "http://dedicatedtechnical.com/wp-content/uploads/2023/01/1000x600.jpg",                "width": "200",                "height": "200",                "inLanguage": "en-US"            }, {                "@type": "WebPage",                "@id": "https://dedicatedtechnical.com/#webpage",                "url": "https://dedicatedtechnical.com/",                "name": "Technical Services Company Dubai | Technical Services Dubai",                "datePublished": "2022-11-02T07:34:41+00:00",                "dateModified": "2023-08-05T18:08:59+00:00",                "about": {                    "@id": "https://dedicatedtechnical.com/#organization"                },                "isPartOf": {                    "@id": "https://dedicatedtechnical.com/#website"                },                "primaryImageOfPage": {                    "@id": "http://dedicatedtechnical.com/wp-content/uploads/2023/01/1000x600.jpg"                },                "inLanguage": "en-US"            }]        }    ',
          }}
          type="application/ld+json"
        />
        <meta
          content="eNWD9g2VO61vzXIFFqAtGw2S4K7ruBWhp3FQ03mp8BE"
          name="google-site-verification"
        />
        <link
          href="https://dedicatedtechnical.com/feed/"
          rel="alternate"
          title="Dedicated Technical Services » Feed"
          type="application/rss+xml"
        />
        <link
          href="https://dedicatedtechnical.com/comments/feed/"
          rel="alternate"
          title="Dedicated Technical Services » Comments Feed"
          type="application/rss+xml"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "        img.wp-smiley,        img.emoji {            display: inline !important;            border: none !important;            box-shadow: none !important;            height: 1em !important;            width: 1em !important;            margin: 0 0.07em !important;            vertical-align: -0.1em !important;            background: none !important;            padding: 0 !important;        }    ",
          }}
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.16.5"
          id="elementor-frontend-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/uploads/elementor/css/post-358.css?ver=1693390239"
          id="elementor-post-358-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/uploads/elementor/css/post-258.css?ver=1693390239"
          id="elementor-post-258-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-includes/css/dist/block-library/style.min.css?ver=6.3.2"
          id="wp-block-library-css"
          media="all"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "        /*! This file is auto-generated */        .wp-block-button__link {            color: #fff;            background-color: #32373c;            border-radius: 9999px;            box-shadow: none;            text-decoration: none;            padding: calc(.667em + 2px) calc(1.333em + 2px);            font-size: 1.125em        }        .wp-block-file__button {            background: #32373c;            color: #fff;            text-decoration: none        }    ",
          }}
          id="classic-theme-styles-inline-css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "        body {            --wp--preset--color--black: #000000;            --wp--preset--color--cyan-bluish-gray: #abb8c3;            --wp--preset--color--white: #ffffff;            --wp--preset--color--pale-pink: #f78da7;            --wp--preset--color--vivid-red: #cf2e2e;            --wp--preset--color--luminous-vivid-orange: #ff6900;            --wp--preset--color--luminous-vivid-amber: #fcb900;            --wp--preset--color--light-green-cyan: #7bdcb5;            --wp--preset--color--vivid-green-cyan: #00d084;            --wp--preset--color--pale-cyan-blue: #8ed1fc;            --wp--preset--color--vivid-cyan-blue: #0693e3;            --wp--preset--color--vivid-purple: #9b51e0;            --wp--preset--color--accent: #e22658;            --wp--preset--color--primary: #000000;            --wp--preset--color--secondary: #6d6d6d;            --wp--preset--color--subtle-background: #dbdbdb;            --wp--preset--color--background: #ffffff;            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);            --wp--preset--font-size--small: 18px;            --wp--preset--font-size--medium: 20px;            --wp--preset--font-size--large: 26.25px;            --wp--preset--font-size--x-large: 42px;            --wp--preset--font-size--normal: 21px;            --wp--preset--font-size--larger: 32px;            --wp--preset--spacing--20: 0.44rem;            --wp--preset--spacing--30: 0.67rem;            --wp--preset--spacing--40: 1rem;            --wp--preset--spacing--50: 1.5rem;            --wp--preset--spacing--60: 2.25rem;            --wp--preset--spacing--70: 3.38rem;            --wp--preset--spacing--80: 5.06rem;            --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);            --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);            --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);            --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);            --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);        }        :where(.is-layout-flex) {            gap: 0.5em;        }        :where(.is-layout-grid) {            gap: 0.5em;        }        body .is-layout-flow>.alignleft {            float: left;            margin-inline-start: 0;            margin-inline-end: 2em;        }        body .is-layout-flow>.alignright {            float: right;            margin-inline-start: 2em;            margin-inline-end: 0;        }        body .is-layout-flow>.aligncenter {            margin-left: auto !important;            margin-right: auto !important;        }        body .is-layout-constrained>.alignleft {            float: left;            margin-inline-start: 0;            margin-inline-end: 2em;        }        body .is-layout-constrained>.alignright {            float: right;            margin-inline-start: 2em;            margin-inline-end: 0;        }        body .is-layout-constrained>.aligncenter {            margin-left: auto !important;            margin-right: auto !important;        }        body .is-layout-constrained> :where(:not(.alignleft):not(.alignright):not(.alignfull)) {            max-width: var(--wp--style--global--content-size);            margin-left: auto !important;            margin-right: auto !important;        }        body .is-layout-constrained>.alignwide {            max-width: var(--wp--style--global--wide-size);        }        body .is-layout-flex {            display: flex;        }        body .is-layout-flex {            flex-wrap: wrap;            align-items: center;        }        body .is-layout-flex>* {            margin: 0;        }        body .is-layout-grid {            display: grid;        }        body .is-layout-grid>* {            margin: 0;        }        :where(.wp-block-columns.is-layout-flex) {            gap: 2em;        }        :where(.wp-block-columns.is-layout-grid) {            gap: 2em;        }        :where(.wp-block-post-template.is-layout-flex) {            gap: 1.25em;        }        :where(.wp-block-post-template.is-layout-grid) {            gap: 1.25em;        }        .has-black-color {            color: var(--wp--preset--color--black) !important;        }        .has-cyan-bluish-gray-color {            color: var(--wp--preset--color--cyan-bluish-gray) !important;        }        .has-white-color {            color: var(--wp--preset--color--white) !important;        }        .has-pale-pink-color {            color: var(--wp--preset--color--pale-pink) !important;        }        .has-vivid-red-color {            color: var(--wp--preset--color--vivid-red) !important;        }        .has-luminous-vivid-orange-color {            color: var(--wp--preset--color--luminous-vivid-orange) !important;        }        .has-luminous-vivid-amber-color {            color: var(--wp--preset--color--luminous-vivid-amber) !important;        }        .has-light-green-cyan-color {            color: var(--wp--preset--color--light-green-cyan) !important;        }        .has-vivid-green-cyan-color {            color: var(--wp--preset--color--vivid-green-cyan) !important;        }        .has-pale-cyan-blue-color {            color: var(--wp--preset--color--pale-cyan-blue) !important;        }        .has-vivid-cyan-blue-color {            color: var(--wp--preset--color--vivid-cyan-blue) !important;        }        .has-vivid-purple-color {            color: var(--wp--preset--color--vivid-purple) !important;        }        .has-black-background-color {            background-color: var(--wp--preset--color--black) !important;        }        .has-cyan-bluish-gray-background-color {            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;        }        .has-white-background-color {            background-color: var(--wp--preset--color--white) !important;        }        .has-pale-pink-background-color {            background-color: var(--wp--preset--color--pale-pink) !important;        }        .has-vivid-red-background-color {            background-color: var(--wp--preset--color--vivid-red) !important;        }        .has-luminous-vivid-orange-background-color {            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;        }        .has-luminous-vivid-amber-background-color {            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;        }        .has-light-green-cyan-background-color {            background-color: var(--wp--preset--color--light-green-cyan) !important;        }        .has-vivid-green-cyan-background-color {            background-color: var(--wp--preset--color--vivid-green-cyan) !important;        }        .has-pale-cyan-blue-background-color {            background-color: var(--wp--preset--color--pale-cyan-blue) !important;        }        .has-vivid-cyan-blue-background-color {            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;        }        .has-vivid-purple-background-color {            background-color: var(--wp--preset--color--vivid-purple) !important;        }        .has-black-border-color {            border-color: var(--wp--preset--color--black) !important;        }        .has-cyan-bluish-gray-border-color {            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;        }        .has-white-border-color {            border-color: var(--wp--preset--color--white) !important;        }        .has-pale-pink-border-color {            border-color: var(--wp--preset--color--pale-pink) !important;        }        .has-vivid-red-border-color {            border-color: var(--wp--preset--color--vivid-red) !important;        }        .has-luminous-vivid-orange-border-color {            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;        }        .has-luminous-vivid-amber-border-color {            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;        }        .has-light-green-cyan-border-color {            border-color: var(--wp--preset--color--light-green-cyan) !important;        }        .has-vivid-green-cyan-border-color {            border-color: var(--wp--preset--color--vivid-green-cyan) !important;        }        .has-pale-cyan-blue-border-color {            border-color: var(--wp--preset--color--pale-cyan-blue) !important;        }        .has-vivid-cyan-blue-border-color {            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;        }        .has-vivid-purple-border-color {            border-color: var(--wp--preset--color--vivid-purple) !important;        }        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;        }        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;        }        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;        }        .has-luminous-vivid-orange-to-vivid-red-gradient-background {            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;        }        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;        }        .has-cool-to-warm-spectrum-gradient-background {            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;        }        .has-blush-light-purple-gradient-background {            background: var(--wp--preset--gradient--blush-light-purple) !important;        }        .has-blush-bordeaux-gradient-background {            background: var(--wp--preset--gradient--blush-bordeaux) !important;        }        .has-luminous-dusk-gradient-background {            background: var(--wp--preset--gradient--luminous-dusk) !important;        }        .has-pale-ocean-gradient-background {            background: var(--wp--preset--gradient--pale-ocean) !important;        }        .has-electric-grass-gradient-background {            background: var(--wp--preset--gradient--electric-grass) !important;        }        .has-midnight-gradient-background {            background: var(--wp--preset--gradient--midnight) !important;        }        .has-small-font-size {            font-size: var(--wp--preset--font-size--small) !important;        }        .has-medium-font-size {            font-size: var(--wp--preset--font-size--medium) !important;        }        .has-large-font-size {            font-size: var(--wp--preset--font-size--large) !important;        }        .has-x-large-font-size {            font-size: var(--wp--preset--font-size--x-large) !important;        }        .wp-block-navigation a:where(:not(.wp-element-button)) {            color: inherit;        }        :where(.wp-block-post-template.is-layout-flex) {            gap: 1.25em;        }        :where(.wp-block-post-template.is-layout-grid) {            gap: 1.25em;        }        :where(.wp-block-columns.is-layout-flex) {            gap: 2em;        }        :where(.wp-block-columns.is-layout-grid) {            gap: 2em;        }        .wp-block-pullquote {            font-size: 1.5em;            line-height: 1.6;        }    ",
          }}
          id="global-styles-inline-css"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.8.1"
          id="contact-form-7-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/ht-slider-for-elementor/assets/css/ht-slider-widgets.css?ver=1.5.1"
          id="htslider-widgets-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/the-post-grid/assets/vendor/font-awesome/css/font-awesome.min.css?ver=7.2.11"
          id="rt-fontawsome-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/the-post-grid/assets/css/tpg-block.min.css?ver=7.2.11"
          id="rt-tpg-block-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/uploads/useanyfont/uaf.css?ver=1697189520"
          id="uaf_client_css-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/wpcf7-redirect/build/css/wpcf7-redirect-frontend.min.css?ver=1.1"
          id="wpcf7-redirect-script-frontend-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/themes/twentytwenty/style.css?ver=2.1"
          id="twentytwenty-style-css"
          media="all"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '        .color-accent,        .color-accent-hover:hover,        .color-accent-hover:focus,        :root .has-accent-color,        .has-drop-cap:not(:focus):first-letter,        .wp-block-button.is-style-outline,        a {            color: #e22658;        }        blockquote,        .border-color-accent,        .border-color-accent-hover:hover,        .border-color-accent-hover:focus {            border-color: #e22658;        }        button,        .button,        .faux-button,        .wp-block-button__link,        .wp-block-file .wp-block-file__button,        input[type="button"],        input[type="reset"],        input[type="submit"],        .bg-accent,        .bg-accent-hover:hover,        .bg-accent-hover:focus,        :root .has-accent-background-color,        .comment-reply-link {            background-color: #e22658;        }        .fill-children-accent,        .fill-children-accent * {            fill: #e22658;        }        :root .has-background-color,        button,        .button,        .faux-button,        .wp-block-button__link,        .wp-block-file__button,        input[type="button"],        input[type="reset"],        input[type="submit"],        .wp-block-button,        .comment-reply-link,        .has-background.has-primary-background-color:not(.has-text-color),        .has-background.has-primary-background-color *:not(.has-text-color),        .has-background.has-accent-background-color:not(.has-text-color),        .has-background.has-accent-background-color *:not(.has-text-color) {            color: #ffffff;        }        :root .has-background-background-color {            background-color: #ffffff;        }        body,        .entry-title a,        :root .has-primary-color {            color: #000000;        }        :root .has-primary-background-color {            background-color: #000000;        }        cite,        figcaption,        .wp-caption-text,        .post-meta,        .entry-content .wp-block-archives li,        .entry-content .wp-block-categories li,        .entry-content .wp-block-latest-posts li,        .wp-block-latest-comments__comment-date,        .wp-block-latest-posts__post-date,        .wp-block-embed figcaption,        .wp-block-image figcaption,        .wp-block-pullquote cite,        .comment-metadata,        .comment-respond .comment-notes,        .comment-respond .logged-in-as,        .pagination .dots,        .entry-content hr:not(.has-background),        hr.styled-separator,        :root .has-secondary-color {            color: #6d6d6d;        }        :root .has-secondary-background-color {            background-color: #6d6d6d;        }        pre,        fieldset,        input,        textarea,        table,        table *,        hr {            border-color: #dbdbdb;        }        caption,        code,        code,        kbd,        samp,        .wp-block-table.is-style-stripes tbody tr:nth-child(odd),        :root .has-subtle-background-background-color {            background-color: #dbdbdb;        }        .wp-block-table.is-style-stripes {            border-bottom-color: #dbdbdb;        }        .wp-block-latest-posts.is-grid li {            border-top-color: #dbdbdb;        }        :root .has-subtle-background-color {            color: #dbdbdb;        }        body:not(.overlay-header) .primary-menu>li>a,        body:not(.overlay-header) .primary-menu>li>.icon,        .modal-menu a,        .footer-menu a,        .footer-widgets a,        #site-footer .wp-block-button.is-style-outline,        .wp-block-pullquote:before,        .singular:not(.overlay-header) .entry-header a,        .archive-header a,        .header-footer-group .color-accent,        .header-footer-group .color-accent-hover:hover {            color: #e22658;        }        .social-icons a,        #site-footer button:not(.toggle),        #site-footer .button,        #site-footer .faux-button,        #site-footer .wp-block-button__link,        #site-footer .wp-block-file__button,        #site-footer input[type="button"],        #site-footer input[type="reset"],        #site-footer input[type="submit"] {            background-color: #e22658;        }        .social-icons a,        body:not(.overlay-header) .primary-menu ul,        .header-footer-group button,        .header-footer-group .button,        .header-footer-group .faux-button,        .header-footer-group .wp-block-button:not(.is-style-outline) .wp-block-button__link,        .header-footer-group .wp-block-file__button,        .header-footer-group input[type="button"],        .header-footer-group input[type="reset"],        .header-footer-group input[type="submit"] {            color: #ffffff;        }        #site-header,        .footer-nav-widgets-wrapper,        #site-footer,        .menu-modal,        .menu-modal-inner,        .search-modal-inner,        .archive-header,        .singular .entry-header,        .singular .featured-media:before,        .wp-block-pullquote:before {            background-color: #ffffff;        }        .header-footer-group,        body:not(.overlay-header) #site-header .toggle,        .menu-modal .toggle {            color: #000000;        }        body:not(.overlay-header) .primary-menu ul {            background-color: #000000;        }        body:not(.overlay-header) .primary-menu>li>ul:after {            border-bottom-color: #000000;        }        body:not(.overlay-header) .primary-menu ul ul:after {            border-left-color: #000000;        }        .site-description,        body:not(.overlay-header) .toggle-inner .toggle-text,        .widget .post-date,        .widget .rss-date,        .widget_archive li,        .widget_categories li,        .widget cite,        .widget_pages li,        .widget_meta li,        .widget_nav_menu li,        .powered-by-wordpress,        .to-the-top,        .singular .entry-header .post-meta,        .singular:not(.overlay-header) .entry-header .post-meta a {            color: #6d6d6d;        }        .header-footer-group pre,        .header-footer-group fieldset,        .header-footer-group input,        .header-footer-group textarea,        .header-footer-group table,        .header-footer-group table *,        .footer-nav-widgets-wrapper,        #site-footer,        .menu-modal nav *,        .footer-widgets-outer-wrapper,        .footer-top {            border-color: #dbdbdb;        }        .header-footer-group table caption,        body:not(.overlay-header) .header-inner .toggle-wrapper::before {            background-color: #dbdbdb;        }    ',
          }}
          id="twentytwenty-style-inline-css"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/themes/twentytwenty/print.css?ver=2.1"
          id="twentytwenty-print-style-css"
          media="print"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css?ver=3.0.0"
          id="elementor-icons-ekiticons-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.23.0"
          id="elementor-icons-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/lib/swiper/css/swiper.min.css?ver=5.3.6"
          id="swiper-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/uploads/elementor/css/post-10.css?ver=1693390239"
          id="elementor-post-10-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementor-pro/assets/css/frontend-lite.min.css?ver=3.14.1"
          id="elementor-pro-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/sticky-header-effects-for-elementor/assets/css/she-header-style.css?ver=1.6.9"
          id="she-header-style-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/uploads/elementor/css/post-8.css?ver=1693391862"
          id="elementor-post-8-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/font-awesome.min.css?ver=4.7.0"
          id="font-awesome-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/popup-anything-on-click/assets/css/popupaoc-public.css?ver=2.7"
          id="popupaoc-public-style-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css?ver=3.0.0"
          id="ekit-widget-styles-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementskit-lite/widgets/init/assets/css/responsive.css?ver=3.0.0"
          id="ekit-responsive-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap&ver=6.3.2"
          id="google-fonts-1-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3"
          id="elementor-icons-shared-0-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3"
          id="elementor-icons-fa-solid-css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3"
          id="elementor-icons-fa-brands-css"
          media="all"
          rel="stylesheet"
        />
        <link
          crossOrigin=""
          href="https://fonts.gstatic.com/"
          rel="preconnect"
        />
        <script
          id="jquery-core-js"
          src="https://dedicatedtechnical.com/wp-includes/js/jquery/jquery.min.js"
        />
        <script
          id="jquery-migrate-js"
          src="https://dedicatedtechnical.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"
        />
        <script
          async
          id="twentytwenty-js-js"
          src="https://dedicatedtechnical.com/wp-content/themes/twentytwenty/assets/js/index.js?ver=2.1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        window.addEventListener("load", function() {            if (typeof jQuery === "undefined") {                return;            }            jQuery(document).on("wpformsPageChange wpformsShowConditionalsField", function() {                if (typeof twentytwenty === "undefined" || typeof twentytwenty.intrinsicRatioVideos === "undefined" || typeof twentytwenty.intrinsicRatioVideos.makeFit === "undefined") {                    return;                }                twentytwenty.intrinsicRatioVideos.makeFit();            });            jQuery(document).on("wpformsRichTextEditorInit", function(e, editor) {                jQuery(editor.container).find("iframe").addClass("intrinsic-ignore");            });        });    ',
          }}
          id="twentytwenty-js-js-after"
        />
        <script
          id="she-header-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/sticky-header-effects-for-elementor/assets/js/she-header.js?ver=1.6.9"
        />
        <link
          href="https://dedicatedtechnical.com/wp-json/"
          rel="https://api.w.org/"
        />
        <link
          href="https://dedicatedtechnical.com/wp-json/wp/v2/pages/8"
          rel="alternate"
          type="application/json"
        />
        <link
          href="https://dedicatedtechnical.com/xmlrpc.php?rsd"
          rel="EditURI"
          title="RSD"
          type="application/rsd+xml"
        />
        <meta content="WordPress 6.3.2" name="generator" />
        <link href="https://dedicatedtechnical.com/" rel="shortlink" />
        <link
          href="https://dedicatedtechnical.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdedicatedtechnical.com%2F"
          rel="alternate"
          type="application/json+oembed"
        />
        <link
          href="https://dedicatedtechnical.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdedicatedtechnical.com%2F&format=xml"
          rel="alternate"
          type="text/xml+oembed"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "        (function(w, d, s, l, i) {            w[l] = w[l] || [];            w[l].push({                'gtm.start': new Date().getTime(),                event: 'gtm.js'            });            var f = d.getElementsByTagName(s)[0],                j = d.createElement(s),                dl = l != 'dataLayer' ? '&l=' + l : '';            j.async = true;            j.src =                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;            f.parentNode.insertBefore(j, f);        })(window, document, 'script', 'dataLayer', 'GTM-PNM754PX');    ",
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-614523726"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "        window.dataLayer = window.dataLayer || [];        function gtag() {            dataLayer.push(arguments);        }        gtag('js', new Date());        gtag('config', 'AW-614523726');    ",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        jQuery(window).on(\'elementor/frontend/init\', function() {            var previewIframe = jQuery(\'#elementor-preview-iframe\').get(0);            // Attach a load event listener to the preview iframe            jQuery(previewIframe).on(\'load\', function() {                var tpg_selector = tpg_str_rev("nottub-tropmi-gpttr nottub-aera-noitces-dda-rotnemele");                var logo = "https://dedicatedtechnical.com/wp-content/plugins/the-post-grid";                var log_path = tpg_str_rev("gvs.04x04-noci/segami/stessa/");                jQuery(\'<div class="\' + tpg_selector + \'" style="vertical-align: bottom;margin-left: 5px;"><img src="\' + logo + log_path + \'" alt="TPG"/></div>\').insertBefore(".elementor-add-section-drag-title");            });        });    ',
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "        :root {            --tpg-primary-color: #0d6efd;            --tpg-secondary-color: #0654c4;            --tpg-primary-light: #c4d0ff        }    ",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "        document.documentElement.className = document.documentElement.className.replace('no-js', 'js');    ",
          }}
        />
        <meta
          content="Elementor 3.16.5; features: e_dom_optimization, e_optimized_assets_loading, e_optimized_css_loading, additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-swap"
          name="generator"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "        body.custom-background {            background-color: #ffffff;        }    ",
          }}
          id="custom-background-css"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/uploads/2022/11/Favicon-100x100.jpg"
          rel="icon"
          sizes="32x32"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/uploads/2022/11/Favicon-300x300.jpg"
          rel="icon"
          sizes="192x192"
        />
        <link
          href="https://dedicatedtechnical.com/wp-content/uploads/2022/11/Favicon-300x300.jpg"
          rel="apple-touch-icon"
        />
        <meta
          content="https://dedicatedtechnical.com/wp-content/uploads/2022/11/Favicon-300x300.jpg"
          name="msapplication-TileImage"
        />
      </head>
      <body className="home page-template page-template-elementor_header_footer page page-id-8 custom-background wp-embed-responsive rttpg rttpg-7.2.11 radius-frontend rttpg-body-wrap rttpg-flaticon singular enable-search-modal missing-post-thumbnail has-no-pagination not-showing-comments show-avatars elementor_header_footer footer-top-visible reduced-spacing elementor-default elementor-template-full-width elementor-kit-10 elementor-page elementor-page-8">
        {"    "}
        <a className="skip-link screen-reader-text" href="#site-content">
          Skip to the content
        </a>
        {"    "}
        <div className="ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support">
          {"        "}
          <div
            className="elementor elementor-358"
            data-elementor-id="358"
            data-elementor-post-type="elementskit_template"
            data-elementor-type="wp-post"
          >
            {"            "}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-fa85a15 elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-element_type="section"
              data-id="fa85a15"
              data-settings='{"background_background":"classic"}'
            >
              {"                "}
              <div className="elementor-container elementor-column-gap-default">
                {"                    "}
                <div
                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-72211a8"
                  data-element_type="column"
                  data-id="72211a8"
                >
                  {"                        "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {"                            "}
                    <section
                      className="elementor-section elementor-inner-section elementor-element elementor-element-d6349ab elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-element_type="section"
                      data-id="d6349ab"
                    >
                      {"                                "}
                      <div className="elementor-container elementor-column-gap-default">
                        {"                                    "}
                        <div
                          className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-dc6590f"
                          data-element_type="column"
                          data-id="dc6590f"
                        >
                          {"                                        "}
                          <div className="elementor-widget-wrap elementor-element-populated">
                            {"                                            "}
                            <div
                              className="elementor-element elementor-element-09614e0 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-element_type="widget"
                              data-id="09614e0"
                              data-widget_type="icon-list.default"
                            >
                              {
                                "                                                "
                              }
                              <div className="elementor-widget-container">
                                {
                                  "                                                    "
                                }
                                <link
                                  href="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css"
                                  rel="stylesheet"
                                />
                                {
                                  "                                                    "
                                }
                                <ul className="elementor-icon-list-items">
                                  {
                                    "                                                        "
                                  }
                                  <li className="elementor-icon-list-item">
                                    {
                                      "                                                            "
                                    }
                                    <a href="tel:00971524297581">
                                      <span className="elementor-icon-list-icon">
                                        <i
                                          aria-hidden="true"
                                          className="fas fa-phone-alt"
                                        />
                                      </span>

                                      <span className="elementor-icon-list-text">
                                        +971 56 207 0822
                                      </span>
                                    </a>
                                    {
                                      "                                                        "
                                    }
                                  </li>
                                  {
                                    "                                                    "
                                  }
                                </ul>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                    "}
                        {"                                    "}
                        <div
                          className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-80d1b02"
                          data-element_type="column"
                          data-id="80d1b02"
                        >
                          {"                                        "}
                          <div className="elementor-widget-wrap elementor-element-populated">
                            {"                                            "}
                            <div
                              className="elementor-element elementor-element-ec3941e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-element_type="widget"
                              data-id="ec3941e"
                              data-widget_type="icon-list.default"
                            >
                              {
                                "                                                "
                              }
                              <div className="elementor-widget-container">
                                {
                                  "                                                    "
                                }
                                <ul className="elementor-icon-list-items">
                                  {
                                    "                                                        "
                                  }
                                  <li className="elementor-icon-list-item">
                                    {
                                      "                                                            "
                                    }
                                    <span className="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-map-marker-alt"
                                      />
                                    </span>
                                    {
                                      "                                                            "
                                    }
                                    <span className="elementor-icon-list-text">
                                      Dubai, UAE
                                    </span>
                                    {
                                      "                                                        "
                                    }
                                  </li>
                                  {
                                    "                                                    "
                                  }
                                </ul>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </section>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                    "}
                <div
                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4995084"
                  data-element_type="column"
                  data-id="4995084"
                >
                  {"                        "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-c66558c elementor-shape-circle e-grid-align-right e-grid-align-mobile-left elementor-grid-0 elementor-widget elementor-widget-social-icons"
                      data-element_type="widget"
                      data-id="c66558c"
                      data-widget_type="social-icons.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "                                        /*! elementor - v3.16.0 - 09-10-2023 */                                        .elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,                                        .elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,                                        .elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container {                                            line-height: 1;                                            font-size: 0                                        }                                        .elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid {                                            display: inline-grid                                        }                                        .elementor-widget-social-icons .elementor-grid {                                            grid-column-gap: var(--grid-column-gap, 5px);                                            grid-row-gap: var(--grid-row-gap, 5px);                                            grid-template-columns: var(--grid-template-columns);                                            justify-content: var(--justify-content, center);                                            justify-items: var(--justify-content, center)                                        }                                        .elementor-icon.elementor-social-icon {                                            font-size: var(--icon-size, 25px);                                            line-height: var(--icon-size, 25px);                                            width: calc(var(--icon-size, 25px) + (2 * var(--icon-padding, .5em)));                                            height: calc(var(--icon-size, 25px) + (2 * var(--icon-padding, .5em)))                                        }                                        .elementor-social-icon {                                            --e-social-icon-icon-color: #fff;                                            display: inline-flex;                                            background-color: #69727d;                                            align-items: center;                                            justify-content: center;                                            text-align: center;                                            cursor: pointer                                        }                                        .elementor-social-icon i {                                            color: var(--e-social-icon-icon-color)                                        }                                        .elementor-social-icon svg {                                            fill: var(--e-social-icon-icon-color)                                        }                                        .elementor-social-icon:last-child {                                            margin: 0                                        }                                        .elementor-social-icon:hover {                                            opacity: .9;                                            color: #fff                                        }                                        .elementor-social-icon-android {                                            background-color: #a4c639                                        }                                        .elementor-social-icon-apple {                                            background-color: #999                                        }                                        .elementor-social-icon-behance {                                            background-color: #1769ff                                        }                                        .elementor-social-icon-bitbucket {                                            background-color: #205081                                        }                                        .elementor-social-icon-codepen {                                            background-color: #000                                        }                                        .elementor-social-icon-delicious {                                            background-color: #39f                                        }                                        .elementor-social-icon-deviantart {                                            background-color: #05cc47                                        }                                        .elementor-social-icon-digg {                                            background-color: #005be2                                        }                                        .elementor-social-icon-dribbble {                                            background-color: #ea4c89                                        }                                        .elementor-social-icon-elementor {                                            background-color: #d30c5c                                        }                                        .elementor-social-icon-envelope {                                            background-color: #ea4335                                        }                                        .elementor-social-icon-facebook,                                        .elementor-social-icon-facebook-f {                                            background-color: #3b5998                                        }                                        .elementor-social-icon-flickr {                                            background-color: #0063dc                                        }                                        .elementor-social-icon-foursquare {                                            background-color: #2d5be3                                        }                                        .elementor-social-icon-free-code-camp,                                        .elementor-social-icon-freecodecamp {                                            background-color: #006400                                        }                                        .elementor-social-icon-github {                                            background-color: #333                                        }                                        .elementor-social-icon-gitlab {                                            background-color: #e24329                                        }                                        .elementor-social-icon-globe {                                            background-color: #69727d                                        }                                        .elementor-social-icon-google-plus,                                        .elementor-social-icon-google-plus-g {                                            background-color: #dd4b39                                        }                                        .elementor-social-icon-houzz {                                            background-color: #7ac142                                        }                                        .elementor-social-icon-instagram {                                            background-color: #262626                                        }                                        .elementor-social-icon-jsfiddle {                                            background-color: #487aa2                                        }                                        .elementor-social-icon-link {                                            background-color: #818a91                                        }                                        .elementor-social-icon-linkedin,                                        .elementor-social-icon-linkedin-in {                                            background-color: #0077b5                                        }                                        .elementor-social-icon-medium {                                            background-color: #00ab6b                                        }                                        .elementor-social-icon-meetup {                                            background-color: #ec1c40                                        }                                        .elementor-social-icon-mixcloud {                                            background-color: #273a4b                                        }                                        .elementor-social-icon-odnoklassniki {                                            background-color: #f4731c                                        }                                        .elementor-social-icon-pinterest {                                            background-color: #bd081c                                        }                                        .elementor-social-icon-product-hunt {                                            background-color: #da552f                                        }                                        .elementor-social-icon-reddit {                                            background-color: #ff4500                                        }                                        .elementor-social-icon-rss {                                            background-color: #f26522                                        }                                        .elementor-social-icon-shopping-cart {                                            background-color: #4caf50                                        }                                        .elementor-social-icon-skype {                                            background-color: #00aff0                                        }                                        .elementor-social-icon-slideshare {                                            background-color: #0077b5                                        }                                        .elementor-social-icon-snapchat {                                            background-color: #fffc00                                        }                                        .elementor-social-icon-soundcloud {                                            background-color: #f80                                        }                                        .elementor-social-icon-spotify {                                            background-color: #2ebd59                                        }                                        .elementor-social-icon-stack-overflow {                                            background-color: #fe7a15                                        }                                        .elementor-social-icon-steam {                                            background-color: #00adee                                        }                                        .elementor-social-icon-stumbleupon {                                            background-color: #eb4924                                        }                                        .elementor-social-icon-telegram {                                            background-color: #2ca5e0                                        }                                        .elementor-social-icon-thumb-tack {                                            background-color: #1aa1d8                                        }                                        .elementor-social-icon-tripadvisor {                                            background-color: #589442                                        }                                        .elementor-social-icon-tumblr {                                            background-color: #35465c                                        }                                        .elementor-social-icon-twitch {                                            background-color: #6441a5                                        }                                        .elementor-social-icon-twitter {                                            background-color: #1da1f2                                        }                                        .elementor-social-icon-viber {                                            background-color: #665cac                                        }                                        .elementor-social-icon-vimeo {                                            background-color: #1ab7ea                                        }                                        .elementor-social-icon-vk {                                            background-color: #45668e                                        }                                        .elementor-social-icon-weibo {                                            background-color: #dd2430                                        }                                        .elementor-social-icon-weixin {                                            background-color: #31a918                                        }                                        .elementor-social-icon-whatsapp {                                            background-color: #25d366                                        }                                        .elementor-social-icon-wordpress {                                            background-color: #21759b                                        }                                        .elementor-social-icon-xing {                                            background-color: #026466                                        }                                        .elementor-social-icon-yelp {                                            background-color: #af0606                                        }                                        .elementor-social-icon-youtube {                                            background-color: #cd201f                                        }                                        .elementor-social-icon-500px {                                            background-color: #0099e5                                        }                                        .elementor-shape-rounded .elementor-icon.elementor-social-icon {                                            border-radius: 10%                                        }                                        .elementor-shape-circle .elementor-icon.elementor-social-icon {                                            border-radius: 50%                                        }                                    ",
                          }}
                        />
                        {"                                    "}
                        <div className="elementor-social-icons-wrapper elementor-grid">
                          {"                                        "}
                          <span className="elementor-grid-item">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-7a54271"
                              href="https://www.facebook.com/dedicatedtechnical/"
                              target="_blank"
                            >
                              <span className="elementor-screen-only">
                                Facebook-f
                              </span>
                              {"                                        "}
                              <i className="fab fa-facebook-f" />{" "}
                            </a>
                            {"                                        "}
                          </span>
                          {"                                        "}
                          <span className="elementor-grid-item">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-3398202"
                              href="https://www.instagram.com/dedicatedtechnical/"
                              target="_blank"
                            >
                              <span className="elementor-screen-only">
                                Instagram
                              </span>
                              {"                                        "}
                              <i className="fab fa-instagram" />{" "}
                            </a>
                            {"                                        "}
                          </span>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </section>
            {"            "}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-227c099 elementor-section-content-middle she-header-yes elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-element_type="section"
              data-id="227c099"
              data-settings='{"transparent":"yes","background_show":"yes","background":"#F8F8F8","transparent_on":["desktop","tablet","mobile"],"scroll_distance":{"unit":"px","size":60,"sizes":[]},"scroll_distance_tablet":{"unit":"px","size":"","sizes":[]},"scroll_distance_mobile":{"unit":"px","size":"","sizes":[]}}'
            >
              {"                "}
              <div className="elementor-container elementor-column-gap-default">
                {"                    "}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-fe68df6"
                  data-element_type="column"
                  data-id="fe68df6"
                >
                  {"                        "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-d162821 elementor-widget elementor-widget-image"
                      data-element_type="widget"
                      data-id="d162821"
                      data-widget_type="image.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              '                                        /*! elementor - v3.16.0 - 09-10-2023 */                                        .elementor-widget-image {                                            text-align: center                                        }                                        .elementor-widget-image a {                                            display: inline-block                                        }                                        .elementor-widget-image a img[src$=".svg"] {                                            width: 48px                                        }                                        .elementor-widget-image img {                                            vertical-align: middle;                                            display: inline-block                                        }                                    ',
                          }}
                        />{" "}
                        <a href="https://dedicatedtechnical.com/">
                          <img
                            alt="Dedicated technical Services logo"
                            className="attachment-full size-full wp-image-5341"
                            height="264"
                            src={dedicatedtechnical}
                            width="882"
                          />
                        </a>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                    "}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-63c6dc9"
                  data-element_type="column"
                  data-id="63c6dc9"
                >
                  {"                        "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-ed5e42b elementor-widget elementor-widget-ekit-nav-menu"
                      data-element_type="widget"
                      data-id="ed5e42b"
                      data-widget_type="ekit-nav-menu.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <div
                          className="ekit-wid-con ekit_menu_responsive_tablet"
                          data-hamburger-icon=""
                          data-hamburger-icon-type="icon"
                          data-responsive-breakpoint="1024"
                        >
                          {" "}
                          <button
                            aria-label="hamburger-icon"
                            className="elementskit-menu-hamburger elementskit-menu-toggler"
                            type="button"
                          >
                            {"                                    "}
                            <span className="elementskit-menu-hamburger-icon" />
                            <span className="elementskit-menu-hamburger-icon" />
                            <span className="elementskit-menu-hamburger-icon" />
                            {"                            "}
                          </button>
                          {"                                        "}
                          <div
                            className="elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page- ekit-nav-dropdown-hover"
                            id="ekit-megamenu-main-menu"
                          >
                            {"                                            "}
                            <ul
                              className="elementskit-navbar-nav elementskit-menu-po-right submenu-click-on-icon"
                              id="menu-main-menu"
                            >
                              {
                                "                                                "
                              }
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item menu-item-30 nav-item elementskit-mobile-builder-content active"
                                data-vertical-menu="750px"
                                id="menu-item-30"
                              >
                                <a
                                  className="ekit-menu-nav-link active"
                                  href="https://dedicatedtechnical.com/"
                                >
                                  Home
                                </a>
                              </li>
                              {
                                "                                                "
                              }
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-37 nav-item elementskit-mobile-builder-content"
                                data-vertical-menu="750px"
                                id="menu-item-37"
                              >
                                <a
                                  className="ekit-menu-nav-link"
                                  href="https://dedicatedtechnical.com/about-us/"
                                >
                                  About Us
                                </a>
                              </li>
                              {
                                "                                                "
                              }
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-36 nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content"
                                data-vertical-menu="750px"
                                id="menu-item-36"
                              >
                                <a
                                  className="ekit-menu-nav-link ekit-menu-dropdown-toggle"
                                  href="https://dedicatedtechnical.com/our-services/"
                                >
                                  Our Services
                                  <i
                                    aria-hidden="true"
                                    className="icon icon-down-arrow1 elementskit-submenu-indicator"
                                  />
                                </a>
                                {
                                  "                                                    "
                                }
                                <ul className="elementskit-dropdown elementskit-submenu-panel">
                                  {
                                    "                                                        "
                                  }
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5660 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-5660"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/fit-out-contractors-in-dubai/"
                                    >
                                      OFFICE FIT OUT
                                    </a>
                                    {
                                      "                                                            "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6142 nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-6142"
                                  >
                                    <a className=" dropdown-item">
                                      RENOVATION SERVICES
                                      <i
                                        aria-hidden="true"
                                        className="icon icon-down-arrow1 elementskit-submenu-indicator"
                                      />
                                    </a>
                                    {
                                      "                                                                "
                                    }
                                    <ul className="elementskit-dropdown elementskit-submenu-panel">
                                      {
                                        "                                                                    "
                                      }
                                      <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5744 nav-item elementskit-mobile-builder-content"
                                        data-vertical-menu="750px"
                                        id="menu-item-5744"
                                      >
                                        <a
                                          className=" dropdown-item"
                                          href="https://dedicatedtechnical.com/kitchen-renovation-dubai/"
                                        >
                                          KITCHEN RENOVATION
                                        </a>
                                        {
                                          "                                                                        "
                                        }
                                      </li>
                                      <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6141 nav-item elementskit-mobile-builder-content"
                                        data-vertical-menu="750px"
                                        id="menu-item-6141"
                                      >
                                        <a
                                          className=" dropdown-item"
                                          href="https://dedicatedtechnical.com/villa-renovation-dubai/"
                                        >
                                          VILLA RENOVATION
                                        </a>
                                        {
                                          "                                                                            "
                                        }
                                      </li>
                                      <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6140 nav-item elementskit-mobile-builder-content"
                                        data-vertical-menu="750px"
                                        id="menu-item-6140"
                                      >
                                        <a
                                          className=" dropdown-item"
                                          href="https://dedicatedtechnical.com/apartment-renovation-dubai/"
                                        >
                                          APARTMENT RENOVATION
                                        </a>{" "}
                                      </li>
                                    </ul>
                                    {
                                      "                                                                "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-926 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-926"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/electrical-services-dubai/"
                                    >
                                      ELECTRICAL
                                    </a>
                                    {
                                      "                                                                    "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-927 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-927"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/plumbing-services-dubai/"
                                    >
                                      PLUMBING
                                    </a>
                                    {
                                      "                                                                        "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1061 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-1061"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/painting-services-in-dubai/"
                                    >
                                      PAINTING
                                    </a>
                                    {
                                      "                                                                            "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1127 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-1127"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/handyman-dubai/"
                                    >
                                      HANDYMAN
                                    </a>
                                    {
                                      "                                                                                "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1451 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-1451"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/water-tank-cleaning-services/"
                                    >
                                      WATER TANK CLEANING
                                    </a>
                                    {
                                      "                                                                                    "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5851 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-5851"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/wallpaper-fixing-dubai/"
                                    >
                                      WALLPAPER FIXING
                                    </a>
                                    {
                                      "                                                                                        "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5852 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-5852"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/swimming-pool-maintenance/"
                                    >
                                      POOL MAINTENANCE
                                    </a>
                                    {
                                      "                                                                                            "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5904 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-5904"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/carpentry-services-dubai/"
                                    >
                                      CARPENTRY SERVICES
                                    </a>
                                  </li>
                                </ul>
                                {
                                  "                                                    "
                                }
                              </li>
                              {
                                "                                                    "
                              }
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5661 nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content"
                                data-vertical-menu="750px"
                                id="menu-item-5661"
                              >
                                <a className="ekit-menu-nav-link ekit-menu-dropdown-toggle">
                                  Ac Services
                                  <i
                                    aria-hidden="true"
                                    className="icon icon-down-arrow1 elementskit-submenu-indicator"
                                  />
                                </a>
                                {
                                  "                                                        "
                                }
                                <ul className="elementskit-dropdown elementskit-submenu-panel">
                                  {
                                    "                                                            "
                                  }
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5659 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-5659"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/ac-installation-dubai/"
                                    >
                                      AC INSTALLATION
                                    </a>
                                    {
                                      "                                                                "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1197 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-1197"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/ac-maintenance-dubai/"
                                    >
                                      AC MAINTENANCE
                                    </a>
                                    {
                                      "                                                                    "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1450 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-1450"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/ac-duct-cleaning-dubai/"
                                    >
                                      AC DUCT CLEANING
                                    </a>
                                    {
                                      "                                                                        "
                                    }
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1449 nav-item elementskit-mobile-builder-content"
                                    data-vertical-menu="750px"
                                    id="menu-item-1449"
                                  >
                                    <a
                                      className=" dropdown-item"
                                      href="https://dedicatedtechnical.com/ac-coil-cleaning-dubai/"
                                    >
                                      AC COIL CLEANING
                                    </a>
                                  </li>
                                </ul>
                                {
                                  "                                                        "
                                }
                              </li>
                              {"                                            "}
                            </ul>
                            {"                                            "}
                            <div className="elementskit-nav-identity-panel">
                              {
                                "                                                "
                              }
                              <div className="elementskit-site-title">
                                {
                                  "                                                    "
                                }
                                <a
                                  className="elementskit-nav-logo"
                                  href="https://dedicatedtechnical.com"
                                  rel=""
                                  target="_self"
                                ></a>
                                {
                                  "                                                "
                                }
                              </div>
                              <button
                                className="elementskit-menu-close elementskit-menu-toggler"
                                type="button"
                              >
                                X
                              </button>
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div className="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay" />
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                    "}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b147967"
                  data-element_type="column"
                  data-id="b147967"
                >
                  {"                        "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-f65a85b elementor-widget__width-auto elementor-widget elementor-widget-button"
                      data-element_type="widget"
                      data-id="f65a85b"
                      data-widget_type="button.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <div className="elementor-button-wrapper">
                          {"                                        "}
                          <a
                            className="elementor-button elementor-button-link elementor-size-sm"
                            href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjczNDIiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
                          >
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">
                                Get a Free Quote
                              </span>
                            </span>
                          </a>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-75b4937 elementor-align-right displayflex elementor-widget__width-auto elementor-fixed elementor-widget elementor-widget-button"
                      data-element_type="widget"
                      data-id="75b4937"
                      data-settings='{"_position":"fixed"}'
                      data-widget_type="button.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <div className="elementor-button-wrapper">
                          {"                                        "}
                          <a
                            className="elementor-button elementor-button-link elementor-size-sm"
                            href="https://api.whatsapp.com/send/?phone=971524297581&text&type=phone_number&app_absent=0"
                          >
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text" />
                            </span>
                          </a>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-79157ae elementor-align-right displayflex elementor-widget__width-auto elementor-fixed elementor-widget elementor-widget-button"
                      data-element_type="widget"
                      data-id="79157ae"
                      data-settings='{"_position":"fixed"}'
                      data-widget_type="button.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <div className="elementor-button-wrapper">
                          {"                                        "}
                          <a
                            className="elementor-button elementor-button-link elementor-size-sm"
                            href="tel:+971524297581"
                          >
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text" />
                            </span>
                          </a>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-fad6f9e elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button"
                      data-element_type="widget"
                      data-id="fad6f9e"
                      data-widget_type="button.default"
                    >
                      {"                                "}

                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </section>
            {"        "}
          </div>
          {"    "}
        </div>
        {"    "}
        <div
          className="elementor elementor-8"
          data-elementor-id="8"
          data-elementor-post-type="page"
          data-elementor-type="wp-page"
        >
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-bc85179 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="bc85179"
            data-settings='{"background_background":"classic"}'
          >
            {"            "}
            <div className="elementor-container elementor-column-gap-default">
              {"                "}
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8ce0a75   "
                data-element_type="column"
                data-id="8ce0a75"
                data-settings='{"animation":"fadeInLeft"}'
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-e2fee5a elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-id="e2fee5a"
                    data-widget_type="heading.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "                                    /*! elementor - v3.16.0 - 09-10-2023 */                                    .elementor-heading-title {                                        padding: 0;                                        margin: 0;                                        line-height: 1                                    }                                    .elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {                                        color: inherit;                                        font-size: inherit;                                        line-height: inherit                                    }                                    .elementor-widget-heading .elementor-heading-title.elementor-size-small {                                        font-size: 15px                                    }                                    .elementor-widget-heading .elementor-heading-title.elementor-size-medium {                                        font-size: 19px                                    }                                    .elementor-widget-heading .elementor-heading-title.elementor-size-large {                                        font-size: 29px                                    }                                    .elementor-widget-heading .elementor-heading-title.elementor-size-xl {                                        font-size: 39px                                    }                                    .elementor-widget-heading .elementor-heading-title.elementor-size-xxl {                                        font-size: 59px                                    }                                ",
                        }}
                      />
                      <span className="elementor-heading-title elementor-size-default">
                        Great Technicians
                      </span>{" "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-a57a032 elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-id="a57a032"
                    data-widget_type="heading.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <h5 className="elementor-heading-title elementor-size-default">
                        Top-notch technical services
                      </h5>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-b595d4c elementor-widget elementor-widget-text-editor"
                    data-element_type="widget"
                    data-id="b595d4c"
                    data-widget_type="text-editor.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "                                    /*! elementor - v3.16.0 - 09-10-2023 */                                    .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {                                        background-color: #69727d;                                        color: #fff                                    }                                    .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {                                        color: #69727d;                                        border: 3px solid;                                        background-color: transparent                                    }                                    .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {                                        margin-top: 8px                                    }                                    .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {                                        width: 1em;                                        height: 1em                                    }                                    .elementor-widget-text-editor .elementor-drop-cap {                                        float: left;                                        text-align: center;                                        line-height: 1;                                        font-size: 50px                                    }                                    .elementor-widget-text-editor .elementor-drop-cap-letter {                                        display: inline-block                                    }                                ",
                        }}
                      />
                      {"                                "}
                      <p>
                        As a proficient firm based in Dubai, Dedicated Technical
                        Services consistently endeavors to meet its clients'
                        needs with expertise and capability."{" "}
                      </p>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-5b626ac elementor-widget elementor-widget-shortcode"
                    data-element_type="widget"
                    data-id="5b626ac"
                    data-widget_type="shortcode.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <div className="elementor-shortcode">
                        {"                                    "}
                        <div
                          className="wpcf7 no-js"
                          dir="ltr"
                          id="wpcf7-f5982-p8-o1"
                          lang="en-US"
                        >
                          {"                                        "}
                          <div className="screen-reader-response">
                            {"                                            "}
                            <p
                              aria-atomic="true"
                              aria-live="polite"
                              role="status"
                            />
                            {"                                            "}
                            <ul />
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <form
                            action="/#wpcf7-f5982-p8-o1"
                            aria-label="Contact form"
                            className="wpcf7-form init"
                            data-status="init"
                            method="post"
                            noValidate
                          >
                            {"                                            "}
                            <div
                              style={{
                                display: "none",
                              }}
                            >
                              {
                                "                                                "
                              }
                              <input
                                defaultValue="5982"
                                name="_wpcf7"
                                type="hidden"
                              />
                              {
                                "                                                "
                              }
                              <input
                                defaultValue="5.8.1"
                                name="_wpcf7_version"
                                type="hidden"
                              />
                              {
                                "                                                "
                              }
                              <input
                                defaultValue="en_US"
                                name="_wpcf7_locale"
                                type="hidden"
                              />
                              {
                                "                                                "
                              }
                              <input
                                defaultValue="wpcf7-f5982-p8-o1"
                                name="_wpcf7_unit_tag"
                                type="hidden"
                              />
                              {
                                "                                                "
                              }
                              <input
                                defaultValue="8"
                                name="_wpcf7_container_post"
                                type="hidden"
                              />
                              {
                                "                                                "
                              }
                              <input
                                defaultValue=""
                                name="_wpcf7_posted_data_hash"
                                type="hidden"
                              />
                              {"                                            "}
                            </div>
                            {"                                            "}
                            <div className="box">
                              {
                                "                                                "
                              }
                              <div
                                style={{
                                  width: "60%",
                                }}
                              >
                                {
                                  "                                                    "
                                }
                                <p>
                                  <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="tel"
                                  >
                                    <input
                                      aria-invalid="false"
                                      className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number"
                                      defaultValue=""
                                      max="99999999999999"
                                      min="0"
                                      name="tel"
                                      placeholder="Input Your Number"
                                      type="number"
                                    />
                                  </span>
                                  {
                                    "                                                    "
                                  }
                                </p>
                                {
                                  "                                                "
                                }
                              </div>
                              {
                                "                                                "
                              }
                              <div>
                                {
                                  "                                                    "
                                }
                                <p>
                                  <a href="https://dedicatedtechnical.com/thank-you/">
                                    <input
                                      className="wpcf7-form-control wpcf7-submit has-spinner"
                                      type="submit"
                                      value="Request call back"
                                    />
                                  </a>
                                  {
                                    "                                                    "
                                  }
                                </p>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                            "}
                            <div
                              aria-hidden="true"
                              className="wpcf7-response-output"
                            />
                            {"                                        "}
                          </form>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"                "}
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8ec71c4"
                data-element_type="column"
                data-id="8ec71c4"
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-8c2dfa9    elementor-widget elementor-widget-image"
                    data-element_type="widget"
                    data-id="8c2dfa9"
                    data-settings='{"_animation":"fadeInRight"}'
                    data-widget_type="image.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <img
                        alt="Best Technical Services dubai"
                        className="attachment-full size-full wp-image-4125"
                        decoding="async"
                        height="600"
                        style={{
                          borderRadius: 25,
                        }}
                        src={CarpenterServices}
                        width="1000"
                      />{" "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-7ec0a81 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="7ec0a81"
            data-settings='{"background_background":"classic"}'
          >
            {"            "}
            <div className="elementor-container elementor-column-gap-no">
              {"                "}
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7effa79"
                data-element_type="column"
                data-id="7effa79"
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-d095ada elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-id="d095ada"
                    data-widget_type="heading.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <h3 className="elementor-heading-title elementor-size-default">
                        Exclusive Deals
                      </h3>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-771256f elementor-widget__width-initial elementor-widget elementor-widget-progress"
                    data-element_type="widget"
                    data-id="771256f"
                    data-widget_type="progress.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "                                    /*! elementor - v3.16.0 - 09-10-2023 */                                    .elementor-widget-progress {                                        text-align: left                                    }                                    .elementor-progress-wrapper {                                        position: relative;                                        background-color: #eee;                                        color: #fff;                                        height: 100%;                                        border-radius: 2px                                    }                                    .elementor-progress-bar {                                        display: flex;                                        background-color: #69727d;                                        width: 0;                                        font-size: 11px;                                        height: 30px;                                        line-height: 30px;                                        border-radius: 2px;                                        transition: width 1s ease-in-out                                    }                                    .elementor-progress-text {                                        flex-grow: 1;                                        white-space: nowrap;                                        text-overflow: ellipsis;                                        overflow: hidden;                                        padding-left: 15px                                    }                                    .elementor-progress-percentage {                                        padding-right: 15px                                    }                                    .elementor-widget-progress .elementor-progress-wrapper.progress-info .elementor-progress-bar {                                        background-color: #5bc0de                                    }                                    .elementor-widget-progress .elementor-progress-wrapper.progress-success .elementor-progress-bar {                                        background-color: #5cb85c                                    }                                    .elementor-widget-progress .elementor-progress-wrapper.progress-warning .elementor-progress-bar {                                        background-color: #f0ad4e                                    }                                    .elementor-widget-progress .elementor-progress-wrapper.progress-danger .elementor-progress-bar {                                        background-color: #d9534f                                    }                                    .elementor-progress .elementor-title {                                        display: block                                    }                                    @media (max-width:767px) {                                        .elementor-progress-text {                                            padding-left: 10px                                        }                                    }                                    .e-con-inner .elementor-progress-wrapper,                                    .e-con .elementor-progress-wrapper {                                        height: auto                                    }                                ",
                        }}
                      />
                      {"                                "}
                      <div
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="100"
                        className="elementor-progress-wrapper"
                        role="progressbar"
                      >
                        {"                                    "}
                        <div className="elementor-progress-bar" data-max="100">
                          {"                                        "}
                          <span className="elementor-progress-text" />
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-daf98fc elementor-section-boxed elementor-section-height-default elementor-section-height-default   "
                    data-element_type="section"
                    data-id="daf98fc"
                    data-settings='{"animation":"fadeInUp"}'
                  >
                    {"                            "}
                    <div className="elementor-container elementor-column-gap-default">
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-bcaa43b"
                        data-element_type="column"
                        data-id="bcaa43b"
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-f786bfd elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="f786bfd"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <a
                                href="https://api.whatsapp.com/send/?phone=971524297581&text&type=phone_number&app_absent=0"
                                rel="noopener"
                                target="_blank"
                              >
                                <img
                                  alt=""
                                  className="attachment-full size-full wp-image-7172"
                                  decoding="async"
                                  style={{
                                    height: 235,
                                  }}
                                  height={"235px !important"}
                                  src={Ace}
                                  width="640"
                                />
                              </a>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8c5da3d"
                        data-element_type="column"
                        data-id="8c5da3d"
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-0883fe7 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="0883fe7"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <a
                                href="https://api.whatsapp.com/send/?phone=971524297581&text&type=phone_number&app_absent=0"
                                rel="noopener"
                                target="_blank"
                              >
                                <img
                                  alt=""
                                  className="attachment-full size-full wp-image-7173"
                                  decoding="async"
                                  height="600"
                                  loading="lazy"
                                  src={Kitchen}
                                  width="640"
                                />
                              </a>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b2e0af6"
                        data-element_type="column"
                        data-id="b2e0af6"
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-540d157 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="540d157"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <a
                                href="https://api.whatsapp.com/send/?phone=971524297581&text&type=phone_number&app_absent=0"
                                rel="noopener"
                                target="_blank"
                              >
                                <img
                                  alt=""
                                  className="attachment-full size-full wp-image-7174"
                                  decoding="async"
                                  height="600"
                                  loading="lazy"
                                  src={painting}
                                  width="640"
                                />
                              </a>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </section>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-98068aa elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="98068aa"
          >
            {"            "}
            <div className="elementor-container elementor-column-gap-default">
              {"                "}
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0ef966a"
                data-element_type="column"
                data-id="0ef966a"
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-80b70c2 elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-id="80b70c2"
                    data-widget_type="heading.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <h2 className="elementor-heading-title elementor-size-default">
                        Committed Technical Solutions
                      </h2>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-0c26cd0 elementor-widget__width-initial elementor-widget elementor-widget-progress"
                    data-element_type="widget"
                    data-id="0c26cd0"
                    data-widget_type="progress.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <div
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="100"
                        className="elementor-progress-wrapper"
                        role="progressbar"
                      >
                        {"                                    "}
                        <div className="elementor-progress-bar" data-max="100">
                          {"                                        "}
                          <span className="elementor-progress-text" />
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-bbf6af3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-element_type="section"
                    data-id="bbf6af3"
                  >
                    {"                            "}
                    <div className="elementor-container elementor-column-gap-default">
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-de6ac25 typing   "
                        data-element_type="column"
                        data-id="de6ac25"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-6823052 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="6823052"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt="AC maintenance"
                                className="attachment-full size-full wp-image-5111"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={Ace1}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-869a523 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="869a523"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/ac-maintenance-dubai/">
                                  Ac Maintenance
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-cedd28e typing   "
                        data-element_type="column"
                        data-id="cedd28e"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-affb077 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="affb077"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt="AC Duct Cleaning"
                                className="attachment-full size-full wp-image-4978"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={Ace2}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-7f19323 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="7f19323"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/ac-duct-cleaning-dubai/">
                                  Ac Duct Cleaning
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-1dcc336 typing   "
                        data-element_type="column"
                        data-id="1dcc336"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-0a8beb8 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="0a8beb8"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt="AC Coil Cleaning"
                                className="attachment-full size-full wp-image-4979"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={Ace3}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-3183d44 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="3183d44"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/ac-coil-cleaning-dubai/">
                                  Ac Coil Cleaning
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6a3d45d typing   "
                        data-element_type="column"
                        data-id="6a3d45d"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-0c52f4b elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="0c52f4b"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt="AC Duct Cleaning services"
                                className="attachment-full size-full wp-image-5259"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={Ace4}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-4214204 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="4214204"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/ac-installation-dubai/">
                                  Ac Installation
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </section>
                  {"                        "}
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-4b9b5d6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-element_type="section"
                    data-id="4b9b5d6"
                  >
                    {"                            "}
                    <div className="elementor-container elementor-column-gap-default">
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d59fab8 typing   "
                        data-element_type="column"
                        data-id="d59fab8"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-3d80c74 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="3d80c74"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt="Electrical Services"
                                className="attachment-full size-full wp-image-4981"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={electrical}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-69c3270 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="69c3270"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/electrical-services-dubai/">
                                  Electrical
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-56d7300 typing   "
                        data-element_type="column"
                        data-id="56d7300"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-8bb24d6 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="8bb24d6"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt="Plumbing Services"
                                className="attachment-full size-full wp-image-4982"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={plumbing}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-b0c39ad elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="b0c39ad"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/plumbing-services-dubai/">
                                  Plumbing
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-34b27c1 typing   "
                        data-element_type="column"
                        data-id="34b27c1"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-948fa82 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="948fa82"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt="Handyman Services"
                                className="attachment-full size-full wp-image-4983"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={handy}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-e7714a8 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="e7714a8"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/handyman-dubai/">
                                  Handyman
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7894ea1 typing   "
                        data-element_type="column"
                        data-id="7894ea1"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-ed2950e elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="ed2950e"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt="Painting Services"
                                className="attachment-full size-full wp-image-4985"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={painting2}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-3870915 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="3870915"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/painting-services-in-dubai/">
                                  Painting
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </section>
                  {"                        "}
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-6c1cff2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-element_type="section"
                    data-id="6c1cff2"
                  >
                    {"                            "}
                    <div className="elementor-container elementor-column-gap-default">
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-11f7032 typing   "
                        data-element_type="column"
                        data-id="11f7032"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-10d9ccd elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="10d9ccd"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt=""
                                className="attachment-full size-full wp-image-6044"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={wallpaper}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-4658a88 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="4658a88"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/wallpaper-fixing-dubai/">
                                  Wallpaper Fixing
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-0d7c561 typing   "
                        data-element_type="column"
                        data-id="0d7c561"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-edfa588 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="edfa588"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt=""
                                className="attachment-full size-full wp-image-5664"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={office}
                                width="400"
                              />{" "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-7d11fb3 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="7d11fb3"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/fit-out-contractors-in-dubai/">
                                  Office Fit Out{" "}
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-1d7a173 typing   "
                        data-element_type="column"
                        data-id="1d7a173"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-5c43f9f elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="5c43f9f"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt=""
                                className="attachment-full size-full wp-image-6046"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={tank}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-40ca6c0 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="40ca6c0"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/water-tank-cleaning-services/">
                                  Water Tank Cleaning
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-aaa2fc2 typing   "
                        data-element_type="column"
                        data-id="aaa2fc2"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-b99179e elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="b99179e"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt=""
                                className="attachment-full size-full wp-image-6048"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={pool}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-2df7247 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="2df7247"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/swimming-pool-maintenance/">
                                  Pool Maintenance
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </section>
                  {"                        "}
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-ba812f8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-element_type="section"
                    data-id="ba812f8"
                  >
                    {"                            "}
                    <div className="elementor-container elementor-column-gap-default">
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-42ab809 typing   "
                        data-element_type="column"
                        data-id="42ab809"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-31b71ba elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="31b71ba"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt=""
                                className="attachment-full size-full wp-image-6155"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={apartment}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-b28ce58 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="b28ce58"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/apartment-renovation-dubai/">
                                  Apartment Renovation
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-79c0948 typing   "
                        data-element_type="column"
                        data-id="79c0948"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-7e7c5c2 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="7e7c5c2"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt=""
                                className="attachment-full size-full wp-image-6047"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={kitchen1}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-85f5cb0 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="85f5cb0"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/kitchen-renovation-dubai/">
                                  Kitchen Renovation
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-bc64b33 typing   "
                        data-element_type="column"
                        data-id="bc64b33"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-b77cd62 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="b77cd62"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt="Villa Renovation Dubai services"
                                className="attachment-full size-full wp-image-6154"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={villa}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-7495dcf elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="7495dcf"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/villa-renovation-dubai/">
                                  Villa Renovation
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-ce818a6 typing   "
                        data-element_type="column"
                        data-id="ce818a6"
                        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-0ecb717 elementor-widget elementor-widget-image"
                            data-element_type="widget"
                            data-id="0ecb717"
                            data-widget_type="image.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <img
                                alt=""
                                className="attachment-full size-full wp-image-6049"
                                decoding="async"
                                height="267"
                                loading="lazy"
                                style={{
                                  height: 150,
                                }}
                                src={carpentery}
                                width="400"
                              />
                              {
                                "                                                "
                              }
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-afc926d elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="afc926d"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h3 className="elementor-heading-title elementor-size-default">
                                <a href="https://dedicatedtechnical.com/carpentry-services-dubai/">
                                  Carpentry Services
                                </a>
                              </h3>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </section>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-9685515 elementor-align-center elementor-widget elementor-widget-button"
                    data-element_type="widget"
                    data-id="9685515"
                    data-widget_type="button.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <div className="elementor-button-wrapper">
                        {"                                    "}
                        <a
                          className="elementor-button elementor-button-link elementor-size-sm"
                          href="https://dedicatedtechnical.com/our-services/"
                        >
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">
                              ALL SERVICES
                            </span>
                          </span>
                        </a>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-f0b897c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="f0b897c"
            data-settings='{"background_background":"classic"}'
          >
            {"            "}
            <div className="elementor-container elementor-column-gap-default">
              {"                "}
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-68f175e"
                data-element_type="column"
                data-id="68f175e"
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-51f3666 elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-id="51f3666"
                    data-widget_type="heading.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <h1 className="elementor-heading-title elementor-size-default">
                        Dedicated Technical Solutions in Dubai
                      </h1>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-7d3c6b6 elementor-widget__width-initial elementor-widget elementor-widget-progress"
                    data-element_type="widget"
                    data-id="7d3c6b6"
                    data-widget_type="progress.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <div
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="100"
                        className="elementor-progress-wrapper"
                        role="progressbar"
                      >
                        {"                                    "}
                        <div className="elementor-progress-bar" data-max="100">
                          {"                                        "}
                          <span className="elementor-progress-text" />
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-3e98ef1    elementor-widget elementor-widget-text-editor"
                    data-element_type="widget"
                    data-id="3e98ef1"
                    data-settings='{"_animation":"fadeInUp"}'
                    data-widget_type="text-editor.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <p>
                        At Dedicated Technical Services in Dubai, our primary
                        goal is to provide exceptional and distinctive services
                        to our clients. Our success is built upon
                        high-performance and proficient services tailored to
                        meet the specific needs of our customers. Our management
                        team possesses extensive experience in the technical
                        services field, and we offer a wide range of services to
                        our highly satisfied clientele in Dubai. The sole
                        mission of Dedicated Technical Services is to deliver
                        excellence and quality in this industry.{" "}
                      </p>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-c186f40 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="c186f40"
          >
            {"            "}
            <div className="elementor-container elementor-column-gap-default">
              {"                "}
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9d43abf"
                data-element_type="column"
                data-id="9d43abf"
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-c6508f3 elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-id="c6508f3"
                    data-widget_type="heading.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <h2 className="elementor-heading-title elementor-size-default">
                        Prominent Characteristics of Dedicated Technical
                        Services in Dubai{" "}
                      </h2>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-20e3d2f elementor-widget__width-initial elementor-widget elementor-widget-progress"
                    data-element_type="widget"
                    data-id="20e3d2f"
                    data-widget_type="progress.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <div
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="100"
                        className="elementor-progress-wrapper"
                        role="progressbar"
                      >
                        {"                                    "}
                        <div className="elementor-progress-bar" data-max="100">
                          {"                                        "}
                          <span className="elementor-progress-text" />
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-eb3592f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-element_type="section"
                    data-id="eb3592f"
                    data-settings='{"background_background":"classic"}'
                  >
                    {"                            "}
                    <div className="elementor-container elementor-column-gap-default">
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ed28ab3   "
                        data-element_type="column"
                        data-id="ed28ab3"
                        data-settings='{"animation":"fadeInLeft"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-c3b9bfc ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box"
                            data-element_type="widget"
                            data-id="c3b9bfc"
                            data-widget_type="elementskit-icon-box.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <div className="ekit-wid-con">
                                {
                                  "                                                                                                                                                            "
                                }
                                <div className="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media  ">
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementskit-box-header elementor-animation-">
                                    {
                                      "                                                            "
                                    }
                                    <div className="elementskit-info-box-icon  text-center">
                                      {
                                        "                                                                "
                                      }
                                      <svg
                                        fill="none"
                                        height="120"
                                        viewBox="0 0 120 120"
                                        width="120"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <rect
                                          fill="url(#pattern0)"
                                          height="100"
                                          width="100"
                                          x="10"
                                          y="10"
                                        />
                                        <defs>
                                          <pattern
                                            height="1"
                                            id="pattern0"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                          >
                                            <use
                                              transform="scale(0.01)"
                                              xlinkHref="#image0_8_30"
                                            />
                                          </pattern>
                                          <image
                                            height="100"
                                            id="image0_8_30"
                                            width="100"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJ4ElEQVR4nO1dfawdRRUfLIlCBdO35+yloUqi/iEqVXnQPXNbeU39IiQoianRaKKIRm1F00SjiYZEURS//tAYMKAiPKwSEsJ3gtFIEUURP1M/kIB9vDtzG7Bi7bMF23fN2V0Nlp2dvXdnZve+7i+Z5KWvb2d2zsz5PmeF6NChQ4cOHTp06NChQ4cORgw2rnnBkOLXKonbFMElSsLlmvAbSuL1PLKf4fLsd7iN/+/iWWueb35ih8rQ63urFeG56QZL/LmScEBLHE0y+G+VhPv4WQOJb+Bnd6SogMc3zJysJbxbEf5ISXxqUgLYCYRPKcIfaokX8pwdcY6CIphThN/VEv7liwjmAUsZy4NzjnnCDBLclJ/UwERAE3F+oik6fyTEccfcjdASH2ieAFg8CO8f9OHVYqVjmMQ9TXCtkrhcc9Me1YR3K8LblMTvs3aVa1v88+38Oy1xsc4c2RrhGi17sViJYGGtCf8+9sYQDjTBdfz3A4Iz987hc6vO+Vg/OkklMKsJLtIS59NnjX9b9inCd4qVAt7AbEPHOZ3wsCb8tEpmTne9Hr2x9zJNeKkm+OuY8uU7U68uDyk+QxP+qTKLILiJtZ0QQpXn0Em0WUm8eQwW+gcmqJhGaBltUYT7KxDiCLOTJl90SPEZinBnvhbbep9gQoppwkDGF2iCgxX486+GG2MSLYFKYJa9AvZ1wyFN8BYxDRgSvEcRHrbICHaDbB9tFatEyzDaKlZpwovZYLQoG4dZ0RBtvxk2YjAfZhYhWo6BjF6iJPyuArvdKtoqM9KrXK6pXLNA604QU4LB7NoT2W6ysK+DrZMpqVCU+A+LvLhUTCFGQhynJFxmFfRt0b4yO8Os2qbXmvCDYsoxlPBhixa2uxV2Sqqylt+MYMRQMjpbETyUa3gPsNAdCfEsl0SxsWTRuDukJWxqNCeO14R7CrShnS61OSv7asrNkjkKzb4pJeHbIdejKTq/ZKM+5tTCL3cF/U1tOgVFaJRpH4rg96yhBF7P10tO7X52NDqba31vdSozWnIYswifwf+Txq89OAVtUBIftNg/FwqH0LL3cpPxyHvDwTcRAumVLQ8ubReBMdwUv9BCDL4l33Q+b4mQZxeMCAHVh/NKhPj9TbhDtMTtVoJ42KDMzQK/Ns056OPrhW9oCfcYXviITnqJ9wUUII0SWgkCfxG+VG2TfUJ4t485j46Fm156XjSABVp3gs0RmLOsga81pKFj4y3xGJvPUnWKhVhTroMBRW+3ESMfu32tYe9GfEVJkGveZxJbcd4UwU2iAeybXfO8qnFyJeEHPteiJN5i0jpdqtyVrPKmksy0xCsr3g4eX/G6liTabJw7wXc5n5DTOw3EeLiJxDIl4Zxx0ol8uzTYZ2ZKnHB+O3PL9EnDy35KBMaD57742WnCQfXbMQqRBa8kftYw/5NOPcGchW48eQ1Y5ZrTeMYgBrtygqwrtd6L1zBM4tc5myitwwisSpamFplva/Eg/JIIBJOSwV5id5OYMjEIrhMBMdoqVnGdx1jECGUx20wDgp+5DGEWF8sQXCQCQkv40LjEYFU9ZBx/0If3GrjJfifKDwtD48kjOFMEgpKnnKYI/jkJQbTEXxYNRXirlvhxju04W2c/Osu0lgWaObX2BFynV8wTcXmcxGcHHuY7xidGRaEv8YmhhLe5M6BNc0Vbak/AxZOGCRZFIAytsWwnRFl2lWOlCFUx24rf7+DhcEmx/MBdIgAGCW4aW6uadBDuY3dM3TWnlViFRIdP1t4QTfDFYmrjbbUfbps7iTZPJjdq3ZRtvsIBSsIX6m+KhCsMBNkpPGHEmh1F72uiCNTFeymJ3yt+PlzhLe9KSbxKeIDaMPNSnwLcPuDO2u8g8SpvrvgQBMluBMxpghur1Gj4vSHwrZYTxC/LYlumLC6tQxPEgQzxy7I8CvVhEq+vUmWlQxLEgbPUq1A3qr0S7nHw7HubJoD+/0OmXLg3vKq9vgzDvX18UdME0M/YMLy+9YZhmeukTqyYPbBNE0AfNbgcr/WukzLnIhdJTvrcYT+WTRNAHzX41rrI0/LqXPTlfueT5KDFxsjZINwzFe53RklQaN5zgvQo3HBTbMPmQDFB4Kcunm8L4So/+joGHy6yUnJuor2HcNO2eKaXqZGxyIU0TRNC54P7OTqK9/tPcrCkAX3GU67wKNztgIe8lrsRHHJewGTq/KYkPDKpsEqTFgw6uw5JEAd+uSxR7pk1jvke3SVcgyuQjC9Vo3Ceq3SbJoiW8Nb6+xNtCZo1mSdbm0q4bq7n6S1OndFhiLHkIjcgT5gouh0HvOUepM2KiwmyXKd/SVbZih/lCtbw7Aq+VndfFiW8ymhT+cxd4wTnkmtZ2x3/yNxpz+G2R7nLf7d3YhDsdVHCzHEc0xzeiz/LStpc977SsherPr5ZSfiqkvBbp8ErbpTjoGlM2urW7HH4sfCNssRrbkjms+hzgU6eGSbRG7XEL3OBaYVWUCV5WPFrXHSP4IMSxPYoA29GCVEuDrIIkfvD+nCeIvg8uyZs7cnzG3bDoxtm1rmYXxHsKJFN94lQ4EJG8zWFpabqDfX63uo0XMAdTbmHIsG9nOScNdfEj7jw5j492mnKikmzOiX2RUhkTYaNp/HPXurqWoLcc2EsGFISrw6/KNmLOdOvRGheuxJ7qI+sdhM8PphdC40sji3Qcp7t0MPZEpg83/975378jkYXaGFdrOvvECsE2tLCoxFWNQE/PcLZ62LKoQh2lEU4m2hJZQRrVWkjSAv7mkaZMsqCTqVsihu5NVH8ai+ct3Wz5k5sbWgUWRHsFLQ6PgkOtvbrPGxFK8J/W07TH1mHFy2HSmZOZzZULh/xMLt2RJuRf9TL4tKAJZYrrWw1PieOzyzw8lKI9B19tMzwgWE/flOV2g5F8JvgFq3VUWj2TT2NTR1qbYtxE/Jvc5QK+lwLW+Z+U9ziSDSExT6+Mi+FsOeJsQBvq8yo9DWbinGNnDC3MCFdNj8ujYFn3zi5tWrCHsuU1mlTk9kp5cZjwSncw9ks3DvE9XrSEogsO2RhnDVxE83W2BkO3Sxjh2iVBM2hY07R5KL8cb7MmaWrRmenf5t+QQeG487PvqnG3SG+wOFSbjJcN6dXceoQ4a68FvGG/342L/2Z/41wlymDsPpBSFno1Y05CkMirT0n/EWdDdMeBweX2qT9hf70amH6jG7w06viWAdHILNqX1hq4DYcYJdOsNbg04TH+tFJbP1yj0L755NqDIJDnN7JikaoBjpTj8Hs2hM5a0MRfI7j4nWqdflv02dIuIyfuaLU1yaxQDOnpsZcgh/gilbONsm1q/l8XJlmoCTwCS6w5P/rpIysQ4cOHTp06NChQ4cOHcTKxX8AiX0vCvFeVUkAAAAASUVORK5CYII="
                                          />
                                        </defs>
                                      </svg>
                                      {
                                        "                                                            "
                                      }
                                    </div>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="box-body">
                                    {
                                      "                                                            "
                                    }
                                    <h3 className="elementskit-info-box-title">
                                      {
                                        "                                                                "
                                      }
                                      High-Quality Materials{" "}
                                    </h3>
                                    {
                                      "                                                            "
                                    }
                                    <p>
                                      We exclusively employ the finest materials
                                      across all our services and management to
                                      attain optimal results and ensure customer
                                      satisfaction.{" "}
                                    </p>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                    "
                                  }
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-4b244be ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box"
                            data-element_type="widget"
                            data-id="4b244be"
                            data-widget_type="elementskit-icon-box.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <div className="ekit-wid-con">
                                {
                                  "                                                                                                                                                            "
                                }
                                <div className="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media  ">
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementskit-box-header elementor-animation-">
                                    {
                                      "                                                            "
                                    }
                                    <div className="elementskit-info-box-icon  text-center">
                                      {
                                        "                                                                "
                                      }
                                      <svg
                                        fill="none"
                                        height="116"
                                        viewBox="0 0 116 116"
                                        width="116"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <rect
                                          fill="url(#pattern0)"
                                          height="96"
                                          width="96"
                                          x="10"
                                          y="10"
                                        />
                                        <defs>
                                          <pattern
                                            height="1"
                                            id="pattern0"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                          >
                                            <use
                                              transform="scale(0.0104167)"
                                              xlinkHref="#image0_8_33"
                                            />
                                          </pattern>
                                          <image
                                            height="96"
                                            id="image0_8_33"
                                            width="96"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAH3ElEQVR4nO1de4hUVRg/WT7K0pz5vhk1yUp7WVgx7d5z7qpbUmFQVJrYH0HRH/0Z0UMyoyykJITQXvaml5lZSREYhagQmiUlmNharbvOnDOzq2YStmbtxHfnFqb33NmZua+de39wYNiZveec7zvnO9/rfJexBAkSJEiQIEGCBAkSJIgQynPZyUUzI6QBC5WAj5TAnYrjAcnxKDX6rAT+oAR8qDguKLZleJmxIWGPe9Bjb2tqguSwRAnMK4HlGtteKeDJbp46K+x5DDrkW8anlYAXlMAjdRD+/41DnxTwbDcflQp7XoMCyoB5SkBvw4Q/kRE9UuCtYc8vsii3s1PsVV/2s0kBy+lMCXu+kUI3n3Cq5Pip38T/jwkc1na2TxwR9rwjs/LlAIgvBfZLgV+TliMFzOgx4PxCbtxpamp2ZL4FLqC/WVoSx6302wGIpI+TnUAyX8CLVQj/txL4TnFa5ryBMrVk4iTJcWU1RkiOy1icUTlw3VYp7soLuKLe50sDclJghysTDJzN4ghSC0kzcRERn3e2jz6z0X66po0eIwV84XIelOg3LG5w1Xg4rKOzwdNzxpUJMRNFZOFqjSyOu7xY+c47QSOOOPT1munxLC6w3QuOB26+AZlftV+RbnE5mBezOICcZOSn0azEt/zuXwpcpel7TywceOTV1On5xRpUzXpB9oNuF0gzfSVrdkgBjzgzALYENQYlcJvm/JnPmh1kgWomvyCoMUgOj2rOgdWs2VEJnDjugBnBjSE9UzOG7azZYUevTph8ycRJQY0hb6Yv1BzEPazZIQX+6Tj5qdmRQY1hX2tqlIYBf7C4MqDUjqcHNYYDuTGjY8sArQjiODmoMUgjdXFsRVByCIcMO63EwS0MC4MbAy7SGIPvs2ZHkcPDGjtga1BjUBy+04zhQdbsoKQpnSuiFIAqSiqo1hVhQI7FxBnX7UgAjiv97l9x+MDFGXcSiwMoY023C6SPq1AZWUPrjub4BIsLeqbDONK5Ne6AXwq5ceBHCFQK2K3T/2MVkCFQuqDGIVam8KGnIckcGyo5rtf1pwQ+w+IGK0TIoaQlCseNctpY9GTlc/jShdlFP0KggwKUq+myKssUw6UwYiMal+Twk8vz+4tm5iYWZ1CupqqeEbeKIlk1ejtXV82Q47iUxR2UHig5rHUllM0IJfBbK5hipq8uiPRFvWb6DGoV3056puTwmDbadeLBuyZJTbTR2T5xhDZS5kfjsKZj1uTh4S69SO4EXOYn4a1dxHFpsvJdIA2c7aod1U18ULE/cGtTUXGZzlirrcFh0vMpCOPFTo0VeshiFrhYceyqY8V3knuh1IJjvRhLQWRuthPK9tJnFieUGRtCSVOUt1NRL2G7ErCPcjqtJqBXcvieviOXMvmTvHSsUcbGcbmsRwomTPfq+QlcQMxUAvc72BC/knPP7X8TeHCBRHI85KJV/aYEzm20nwQOdonk8FwN583y5NKfd8GiueQSr/Nm/t2JjVEHqJyBffvSOV5QW/tRCXwoKZHgANKMikYmW2rDy5SA28gqJt+RfRPTa6ubnrnN6sOAedQn9R2bsOfxkCbO0SWFBdz2F3jmFhY3SAEqAsSv7A6OBd8mSlvNDjfulAJ+D2uS7DiETfRq4/PIpYwv+yFPVcKAARF/U9hEV3HdAVLgK2FPSMWVAXkTL4+K2FFxZEAtJnvCAPSeAVRawImwFGgnfz6LCFTT7gCNqulVIMQrNCUDyKx2XP0C+1nEoCJA9IQBInzCJztANJEIsra2JnOBCuqxCEE1KwPIseTYiZE9h0UIygreh094q3Ho825imlzMqFWpVW716QJulHjm3cQErtAw4FUWIUiXNPXAGSCww8OJ4R3OHcFhP64a1Qur6Gt0dsBm5mUaoTaFkMPzLCKQAt6IDgPwNW8nx/E9zVbrL5h4HYsApAH3hU34f1uBw72eTo4qHeo8olLgwaKRmcpChtIUaQqlGemrPJ+g5PC6tkPrdSPQzkJEx6zJw92y3AITPwIP7pjChnk+QSWyGa1NYDEB+kgMhJmWoXS35INlwCrfJkgZw9ZLddwGwXGjn8VZGyoWHgQDTJzD/IQy8M5qETL6Xgp8lzIoWIAo59hQbdHYIBrHLi8voGuhBNw1kDClfWdrEzEtqBss9h2DsMTPAywoSAOuryUTTXL8y76GuqTIM9f4clCRmKS3bnDYEwIDuoMsTGiB6sApjt/Ut1qAIm3bbBtjEeVylgSapNJSiWMqQUBMIrFiGYOt2XOVyF5Kv5Fm5nYl8HESc5LDV1StPeyzwHfZrwOlaysB94SqAnJ4e6Cl03xq4VfkpQC9dzcfscbdRGdNqvXY8VCBDsnhZ//7ht1Up5RFBVSXh24vutoMwhdCbKfXZR07FtWWvcTx/pdnDXpla2oKi/CL225QAt60LrwFwQiOLzlW0fJBPJLF20ill0BRzrGhZMTZ5SQ3+HJekEbGYZ3TzZWKL8u79HXJUQZt43h+VytPL2erXKqYTytXcfyMSltal7Yrr7I9dOxqqxAYu+g9BFLgJxQokiJ9v+LpGwdSlVeKsROt5zcu6rYU2sacHQylmgw7prBhUsDTVd0pzqv+qOTwFO3msOfRLJezN9RA/PVh+beaGkUjcy2JFD3hYTNZ7WGPs+mheKqVziHKZrBL6awYNBpOggQJEiRgUcc/5iv8JHSnnGoAAAAASUVORK5CYII="
                                          />
                                        </defs>
                                      </svg>
                                      {
                                        "                                                            "
                                      }
                                    </div>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="box-body">
                                    {
                                      "                                                            "
                                    }
                                    <h3 className="elementskit-info-box-title">
                                      {
                                        "                                                                "
                                      }
                                      Proficient Staff{" "}
                                    </h3>
                                    {
                                      "                                                            "
                                    }
                                    <p>
                                      Our seasoned team, from the foundation to
                                      the field, enhances the elegance and
                                      aesthetics of our work.{" "}
                                    </p>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                    "
                                  }
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-89eef44"
                        data-element_type="column"
                        data-id="89eef44"
                      >
                        {"                                    "}
                        {/* <div className="elementor-widget-wrap"> */}
                        <img src={service3} />
                        {"                                    "}
                        {/* </div> */}
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0a5f3e5   "
                        data-element_type="column"
                        data-id="0a5f3e5"
                        data-settings='{"animation":"fadeInRight"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-a7c3598 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box"
                            data-element_type="widget"
                            data-id="a7c3598"
                            data-widget_type="elementskit-icon-box.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <div className="ekit-wid-con">
                                {
                                  "                                                                                                                                                            "
                                }
                                <div className="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media  ">
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementskit-box-header elementor-animation-">
                                    {
                                      "                                                            "
                                    }
                                    <div className="elementskit-info-box-icon  text-center">
                                      {
                                        "                                                                "
                                      }
                                      <svg
                                        fill="none"
                                        height="116"
                                        viewBox="0 0 116 116"
                                        width="116"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <rect
                                          fill="url(#pattern0)"
                                          height="96"
                                          width="96"
                                          x="10"
                                          y="10"
                                        />
                                        <defs>
                                          <pattern
                                            height="1"
                                            id="pattern0"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                          >
                                            <use
                                              transform="scale(0.0104167)"
                                              xlinkHref="#image0_8_32"
                                            />
                                          </pattern>
                                          <image
                                            height="96"
                                            id="image0_8_32"
                                            width="96"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKPklEQVR4nO1de4ycVRW/NfgApbU758xusVpFNIYE1KzdOXd2YaOJsWjjAwjGR8QAGgT9z6BVAVv9zwdGEfzHxz/4aCmC1UDUBElQtijxVV8YunS7c+8sfaCSXWoXO+bcb4bOTu/5Zmbnft/MlPtLvmSzuft9577OPfec3zmrVERERERERERERERERERERERERERERI5YIDzPlIsftBq/aAl2GYI/GILHLOFRq/G/RuNx/tlo2G807jUa77CEO/jhn5Pfwf6kDR7nv3E/EzzG77Iad/K7K1T4wEIZX/2cn9xHt5z3QlPGy6yG71mNc1ZjLdeH8AB/25TwUpblOTMh8xreaDXcVl/ZtQF5jrBM82V8gzpdUSGcNIR7jMYTAzDgNekxGn5RLRe1Ol3A+tYS/qzfA2u7nQjCPXZi9FVqWLHvfPUCQ3CT1bDU78G0q35gyWj4HPdFDRN45VjCh7tcccuG4CFL8KUqwTWVMlzE7zkwtW59bVw9nx/+2e2ocuHNlTJ8xGr8Cv8N/222agn32tLoK9UwoELF91jCJzvqHMExS3BnRRfffahcOHu131yYxpewNcPmazc7zmj8V8eTR3i0Wi6+Sw0yLOEnjMb/tV/tsGAJt83R2pHQMvA7qwSfMYSmg133DKtJQ3BzYgm1nTDu2/VqEGEJv9BBh/9jNH6yMr7hrKzlmaONZ7qJ0PjvNoN6gvU878BkImCxg92wQw0S3O21vbrZNUcjL8tbtoXNOGYI7u5AzXye2xs9tskQ/nRoJoHVTrqwsGgJru63nIbwynarmw9/bltTao2h4rWW4Ok2E3F93w/cVJ1PeKBKxQvUIN3CCR5PUZHLpgxvb7Q3urDZapxPOxOqpcI7+2lqitaOIdh3cGJkoxowHCoXzrEa/5qyaJ6sTK5/RaP9/JvWv9wS/j3NOsrdROWLSZqdz4M/v/mcghpQmKkxNAR/ThnUB2pKPa/RvloqjqZNmtEww/eU/Drgbriy2gm58mtNAxESLGMbL+ynm9vzrrAaD4qTUILPqjzgbqLiZQcWQ+n8Odp4piG41V2W3APf4N+pgKiWiheKBzMfwC2qpX6GCAczLOXiO0p1rAW0dgzh1zzf+KoKDKvhqpRD+QentCe4OuVQ/onK2qWcMvi7Qn7LaKh6dK1VGcBq2C0M6AlbGi2dKhveI41DdbJIWciYuvr5hhv6kmWFDqoMwLKLN2aC+3yWFPdZGIs9Wcjo9J8UTGH3Ql47rZrRCuNDV9oF85vhta3t+dAV22cRWbMabvfPOCyE8u1UqXiB1fBgimXSUEX/rFLh/Sog7IWjL/apvfpzS2t77rPYnuCbwQPooreQcFuIbxh2J3fiCFu52u4JGVCXdgFfznwWmLQLrIbDQYM4CXvBO9PHQriUjYaLHY2ki8FvkuHHoe4KfEFzMQr/oL6jtT1fNqX27KZRoVCnjvg6f2ev756d3vQix+dZzeA3nhJ+OExPnYXzQ2ECbvO1T4JA3sP42yrg1vTeGDmS1eu7qwTX9DT4iYr4bZieugG9QvjGgW60g9EwG4yxJszwci9hxAYswX3C+w2fC4cnRtZyu9npdS/leLG/LTwVpLOJiXm2pA6fKMFrWtuzfHUm3intq1PFc3sWqE4X9HX6oUB+pQVhAra0tnV+eg1/9MjymxCyPCuThhmvTGW8zNdestyCWGpitIvwyz2/XLn3e1ebtLscwav50sQucRqZCCFLk0y3CIvu5m7aB4maSYdMKL+PIax4V0+p+Fbpb9xNVON1HLViV7EKDD7Uu3G3GMIP+c8B/FHvwhD83nsAl3Aq0Hb/uXC4HmTTL48AvmAW+1b0w772jsPk78MjIYSZ9c/u2KaeX6549RSvFYT3rcCnEwo67GL9WptWZ4SQ4RSZ9NgmQYZ/+Nqz29o/RrC/Z2H4Vud7eaiIV2V8w1lpgY60x2h8lFlyKjCYgScMaNXX3lloXhnhUGaHZMirttWwtRNCl/9gxOXQrAsXchV2oK89hyOF9seGYgIaqoiZaquchGcqGt+mTs8JyFYFNYMtH5eWtIpJYLpJqJDlQKkg6RDOioqxz9Ha8co6m21eumX6HmZMh5BBOlT7cwhLZmgZLlI54/DEyFr2P8nEW7g3xHcMwXQ3ZqhotoYwQ6WLWIPGF84Sgq1M/2aqebv2pgSXCB2ez/QipnGnTHvM7CImsJ4DuSIquvC6FvrfnJkYOb8Dh1k2h166K+KmLhgc/GzPzhmnYSbQdv+l5/2/Sv8b3OIfIKxk6owr4aVCH36dmTMuIWJ5O7vccBX3AiOwC5gu3vp+Vk+spiT/UYgzgL/ZjTv66Pj6daKhEIqolSQ1ZxN2Mxr+JExA10+Ic8mW4L2CenvcLz9enpkFdPIj8F1hxe3u9d2W8OMhBp87HCJAzwdnN0wHkdQVMiSZMBayCcrXptUZnBzd2+DjcTYde+2n1aNFKcjenDfQQGV8A0jqKkS4Njdaik04OaubBCbLElwRop+cU9YVLUXDjbnQUhiuvkOGxKyaUmscUVY4bwS1M8OMvRD9c6muQnhUJGZJ7UMTsxhMtxPrPBDeEOo7NaXWpAQ4XPw3oa3Dxdw21Hd5Jwvq7YTP+pFWP7dfmMTXh5Jr5UeF7EFmJYROR7LCBKgMwLKL5rCHnOvIvARP5U5R5yoiKbq4Z5JWM7z5Z4RHVQZgdp20mn0Bf1fIQxoHD509KNI+HtI/ZAhu9ej8r6vASE24IPx+N0Qy9uCGls+fHSmnKC2FTFGyGr+VEHbdc3tGKUpLnaYomRKMp6QoLeaWLcmp/Tkm6a0JediuSD9Nj0V/yhOoF3OG2YRVecEFTQSH1TCkqVo9WmQZRfk13t/MuOZyB2m5wswSzDVN9dkoUHrdt78MYqL2QU5PJfxbp4narnYEsy/kfh4JRdHpGs4zmc5mmGM9qwYEhnV4Sm6wK1VQgksa7dmiSSt7k5AIYGtfO8UFK1ImoH4wh7OOerJ2UopvJJdMuOokCRiva1esw5TwY2oQ4Aqopk6Cm4jd/VBJh5KMRtlub4l2JQF2uLd9fwJEu/KeBHd7JLwhD76nTRx8N0o31hUrn3BbPRCzvcOSZ4M1+M3qqCOGG8ETbLbNZVCyjF3E9TJkkmNthQ6v173Y3kkhWdd+UNSOBK6f03FVXGLfO9zFiQ8c2lvtN93qdalFcJecZNdj0b6kum5/D9xOwXo07Z4gri6Ne7kUJROsOMDCKT68S/jewQ8z1tgzaXXhLUbDR13ZSg0zmZet5NKY/TI1Vwu+mCR5tENduHWRVWXul6zQviN20fZ/MLHbVX/30BRr7bxqOu4ciuLdkxlWPOk3OLLGIbtOCqXa/FTNYXZ/ZxbJGkTwoVpxRFv4jsjAznalzzJ1hN0pQ1ecOwtUp4rnMpWv/i9JmJvzSD1X4Eid+nHyX5Kw5cP/wiSx3+v/woStoZP/8qT+HKm/43funYQ7qhreN9Rl6SMiIiIiIiIiIiIiIiIiIiIiIiIi1DDi/3CJ586wmGzvAAAAAElFTkSuQmCC"
                                          />
                                        </defs>
                                      </svg>
                                      {
                                        "                                                            "
                                      }
                                    </div>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="box-body">
                                    {
                                      "                                                            "
                                    }
                                    <h3 className="elementskit-info-box-title">
                                      {
                                        "                                                                "
                                      }
                                      Affordable Pricing{" "}
                                    </h3>
                                    {
                                      "                                                            "
                                    }
                                    <p>
                                      We provide cost-saving and
                                      energy-efficient solutions while keeping
                                      our technical service prices reasonable
                                      for our clients in Dubai.{" "}
                                    </p>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                    "
                                  }
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-2c69872 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box"
                            data-element_type="widget"
                            data-id="2c69872"
                            data-widget_type="elementskit-icon-box.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <div className="ekit-wid-con">
                                {
                                  "                                                                                                                                                            "
                                }
                                <div className="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media  ">
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementskit-box-header elementor-animation-">
                                    {
                                      "                                                            "
                                    }
                                    <div className="elementskit-info-box-icon  text-center">
                                      {
                                        "                                                                "
                                      }
                                      <svg
                                        fill="none"
                                        height="116"
                                        viewBox="0 0 116 116"
                                        width="116"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <rect
                                          fill="url(#pattern0)"
                                          height="96"
                                          width="96"
                                          x="10"
                                          y="10"
                                        />
                                        <defs>
                                          <pattern
                                            height="1"
                                            id="pattern0"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                          >
                                            <use
                                              transform="scale(0.0104167)"
                                              xlinkHref="#image0_8_33"
                                            />
                                          </pattern>
                                          <image
                                            height="96"
                                            id="image0_8_33"
                                            width="96"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAH3ElEQVR4nO1de4hUVRg/WT7K0pz5vhk1yUp7WVgx7d5z7qpbUmFQVJrYH0HRH/0Z0UMyoyykJITQXvaml5lZSREYhagQmiUlmNharbvOnDOzq2YStmbtxHfnFqb33NmZua+de39wYNiZveec7zvnO9/rfJexBAkSJEiQIEGCBAkSJIgQynPZyUUzI6QBC5WAj5TAnYrjAcnxKDX6rAT+oAR8qDguKLZleJmxIWGPe9Bjb2tqguSwRAnMK4HlGtteKeDJbp46K+x5DDrkW8anlYAXlMAjdRD+/41DnxTwbDcflQp7XoMCyoB5SkBvw4Q/kRE9UuCtYc8vsii3s1PsVV/2s0kBy+lMCXu+kUI3n3Cq5Pip38T/jwkc1na2TxwR9rwjs/LlAIgvBfZLgV+TliMFzOgx4PxCbtxpamp2ZL4FLqC/WVoSx6302wGIpI+TnUAyX8CLVQj/txL4TnFa5ryBMrVk4iTJcWU1RkiOy1icUTlw3VYp7soLuKLe50sDclJghysTDJzN4ghSC0kzcRERn3e2jz6z0X66po0eIwV84XIelOg3LG5w1Xg4rKOzwdNzxpUJMRNFZOFqjSyOu7xY+c47QSOOOPT1munxLC6w3QuOB26+AZlftV+RbnE5mBezOICcZOSn0azEt/zuXwpcpel7TywceOTV1On5xRpUzXpB9oNuF0gzfSVrdkgBjzgzALYENQYlcJvm/JnPmh1kgWomvyCoMUgOj2rOgdWs2VEJnDjugBnBjSE9UzOG7azZYUevTph8ycRJQY0hb6Yv1BzEPazZIQX+6Tj5qdmRQY1hX2tqlIYBf7C4MqDUjqcHNYYDuTGjY8sArQjiODmoMUgjdXFsRVByCIcMO63EwS0MC4MbAy7SGIPvs2ZHkcPDGjtga1BjUBy+04zhQdbsoKQpnSuiFIAqSiqo1hVhQI7FxBnX7UgAjiv97l9x+MDFGXcSiwMoY023C6SPq1AZWUPrjub4BIsLeqbDONK5Ne6AXwq5ceBHCFQK2K3T/2MVkCFQuqDGIVam8KGnIckcGyo5rtf1pwQ+w+IGK0TIoaQlCseNctpY9GTlc/jShdlFP0KggwKUq+myKssUw6UwYiMal+Twk8vz+4tm5iYWZ1CupqqeEbeKIlk1ejtXV82Q47iUxR2UHig5rHUllM0IJfBbK5hipq8uiPRFvWb6DGoV3056puTwmDbadeLBuyZJTbTR2T5xhDZS5kfjsKZj1uTh4S69SO4EXOYn4a1dxHFpsvJdIA2c7aod1U18ULE/cGtTUXGZzlirrcFh0vMpCOPFTo0VeshiFrhYceyqY8V3knuh1IJjvRhLQWRuthPK9tJnFieUGRtCSVOUt1NRL2G7ErCPcjqtJqBXcvieviOXMvmTvHSsUcbGcbmsRwomTPfq+QlcQMxUAvc72BC/knPP7X8TeHCBRHI85KJV/aYEzm20nwQOdonk8FwN583y5NKfd8GiueQSr/Nm/t2JjVEHqJyBffvSOV5QW/tRCXwoKZHgANKMikYmW2rDy5SA28gqJt+RfRPTa6ubnrnN6sOAedQn9R2bsOfxkCbO0SWFBdz2F3jmFhY3SAEqAsSv7A6OBd8mSlvNDjfulAJ+D2uS7DiETfRq4/PIpYwv+yFPVcKAARF/U9hEV3HdAVLgK2FPSMWVAXkTL4+K2FFxZEAtJnvCAPSeAVRawImwFGgnfz6LCFTT7gCNqulVIMQrNCUDyKx2XP0C+1nEoCJA9IQBInzCJztANJEIsra2JnOBCuqxCEE1KwPIseTYiZE9h0UIygreh094q3Ho825imlzMqFWpVW716QJulHjm3cQErtAw4FUWIUiXNPXAGSCww8OJ4R3OHcFhP64a1Qur6Gt0dsBm5mUaoTaFkMPzLCKQAt6IDgPwNW8nx/E9zVbrL5h4HYsApAH3hU34f1uBw72eTo4qHeo8olLgwaKRmcpChtIUaQqlGemrPJ+g5PC6tkPrdSPQzkJEx6zJw92y3AITPwIP7pjChnk+QSWyGa1NYDEB+kgMhJmWoXS35INlwCrfJkgZw9ZLddwGwXGjn8VZGyoWHgQDTJzD/IQy8M5qETL6Xgp8lzIoWIAo59hQbdHYIBrHLi8voGuhBNw1kDClfWdrEzEtqBss9h2DsMTPAywoSAOuryUTTXL8y76GuqTIM9f4clCRmKS3bnDYEwIDuoMsTGiB6sApjt/Ut1qAIm3bbBtjEeVylgSapNJSiWMqQUBMIrFiGYOt2XOVyF5Kv5Fm5nYl8HESc5LDV1StPeyzwHfZrwOlaysB94SqAnJ4e6Cl03xq4VfkpQC9dzcfscbdRGdNqvXY8VCBDsnhZ//7ht1Up5RFBVSXh24vutoMwhdCbKfXZR07FtWWvcTx/pdnDXpla2oKi/CL225QAt60LrwFwQiOLzlW0fJBPJLF20ill0BRzrGhZMTZ5SQ3+HJekEbGYZ3TzZWKL8u79HXJUQZt43h+VytPL2erXKqYTytXcfyMSltal7Yrr7I9dOxqqxAYu+g9BFLgJxQokiJ9v+LpGwdSlVeKsROt5zcu6rYU2sacHQylmgw7prBhUsDTVd0pzqv+qOTwFO3msOfRLJezN9RA/PVh+beaGkUjcy2JFD3hYTNZ7WGPs+mheKqVziHKZrBL6awYNBpOggQJEiRgUcc/5iv8JHSnnGoAAAAASUVORK5CYII="
                                          />
                                        </defs>
                                      </svg>
                                      {
                                        "                                                            "
                                      }
                                    </div>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="box-body">
                                    {
                                      "                                                            "
                                    }
                                    <h3 className="elementskit-info-box-title">
                                      {
                                        "                                                                "
                                      }
                                      Safe and Protected{" "}
                                    </h3>
                                    {
                                      "                                                            "
                                    }
                                    <p>
                                      We ensure that the work and quality we
                                      deliver are in the capable and secure
                                      hands of our team.
                                    </p>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                    "
                                  }
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </section>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-aa2bbdc elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="aa2bbdc"
            data-settings='{"background_background":"classic"}'
          >
            {"            "}
            <div className="elementor-container elementor-column-gap-default">
              {"                "}
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8057602   "
                data-element_type="column"
                data-id="8057602"
                data-settings='{"animation":"fadeInLeft"}'
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-d4e0cc3 elementor-widget elementor-widget-image"
                    data-element_type="widget"
                    data-id="d4e0cc3"
                    data-widget_type="image.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <img
                        alt="Technical Services in dubai"
                        className="attachment-full size-full wp-image-4222"
                        decoding="async"
                        height="3930"
                        loading="lazy"
                        src={service4}
                        width="3571"
                      />
                      {"                                "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"                "}
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8613dac   "
                data-element_type="column"
                data-id="8613dac"
                data-settings='{"animation":"fadeInRight"}'
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-934fc53 elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-id="934fc53"
                    data-widget_type="heading.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <h3 className="elementor-heading-title elementor-size-default">
                        BEST TECHNICAL SERVICES IN DUBAI
                      </h3>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-777fe46 elementor-widget elementor-widget-text-editor"
                    data-element_type="widget"
                    data-id="777fe46"
                    data-widget_type="text-editor.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <p>
                        We provide a diverse array of technical services in
                        Dubai, including AC maintenance, coil cleaning, duct
                        cleaning, plumbing, handyman services, electrical work,
                        water tank cleaning, and painting. At Dedicated
                        Technical Services, our objective is to support both
                        small businesses and large corporations with multiple
                        locations by delivering efficient, top-quality services.{" "}
                      </p>
                      {"                                "}
                      <p>
                        Customer satisfaction stands as our utmost priority, and
                        we are dedicated to going the extra mile to guarantee
                        the contentment of our clients. Our team of skilled
                        technicians offers prompt, dependable services to create
                        safe and comfortable environments.{" "}
                      </p>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-9cdae1a elementor-widget elementor-widget-text-editor"
                    data-element_type="widget"
                    data-id="9cdae1a"
                    data-widget_type="text-editor.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <blockquote>
                        {"                                    "}
                        <p>
                          Dedicated Technical Services is renowned for its
                          unwavering commitment to reliable and trustworthy
                          service. We have earned a reputation for delivering
                          excellent, efficient, high-quality, and cost-effective
                          technical services in Dubai. Our name has become
                          synonymous with trust, and our customers consistently
                          rely on us for their needs and requirements. We are
                          dedicated to maintaining our standards and values to
                          continue serving our customers with excellence.{" "}
                        </p>
                        {"                                "}
                      </blockquote>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-96ea69a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="96ea69a"
            data-settings='{"background_background":"classic"}'
          >
            {"            "}
            <div className="elementor-background-overlay" />
            {"            "}
            <div className="elementor-container elementor-column-gap-default">
              {"                "}
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-844189f   "
                data-element_type="column"
                data-id="844189f"
                data-settings='{"animation":"zoomIn"}'
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-5b69bca elementor-align-center elementor-mobile-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-element_type="widget"
                    data-id="5b69bca"
                    data-widget_type="icon-list.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <ul className="elementor-icon-list-items">
                        {"                                    "}
                        <li className="elementor-icon-list-item">
                          {"                                        "}
                          <a href="tel:00971524297581">
                            <span className="elementor-icon-list-icon">
                              <i
                                aria-hidden="true"
                                className="fas fa-phone-alt"
                              />
                            </span>

                            <span className="elementor-icon-list-text">
                              One Call Can Address All Your Household Issues.{" "}
                            </span>
                          </a>
                          {"                                    "}
                        </li>
                        {"                                "}
                      </ul>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-9112584 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="9112584"
            data-settings='{"background_background":"classic"}'
          >
            {"            "}
            <div className="elementor-container elementor-column-gap-default">
              {"                "}
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f621005"
                data-element_type="column"
                data-id="f621005"
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-09b705d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-element_type="section"
                    data-id="09b705d"
                  >
                    {"                            "}
                    <div
                      style={{
                        justifyContent: "center",
                      }}
                      className="elementor-container elementor-column-gap-default"
                    >
                      {"                                "}

                      {"                                "}
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c494e95   "
                        data-element_type="column"
                        data-id="c494e95"
                        data-settings='{"animation":"fadeInRight"}'
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-8618fa6 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="8618fa6"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h6 className="elementor-heading-title elementor-size-default">
                                CONTACT US
                              </h6>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-bf921df elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="bf921df"
                            data-widget_type="heading.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <h2 className="elementor-heading-title elementor-size-default">
                                Feel free to reach out to us if you
                                <br />
                                have any questions.
                              </h2>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-f18867f elementor-button-align-start elementor-widget elementor-widget-form"
                            data-element_type="widget"
                            data-id="f18867f"
                            data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                            data-widget_type="form.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    '                                                    /*! elementor-pro - v3.14.0 - 26-06-2023 */                                                    .elementor-button.elementor-hidden,                                                    .elementor-hidden {                                                        display: none                                                    }                                                    .e-form__step {                                                        width: 100%                                                    }                                                    .e-form__step:not(.elementor-hidden) {                                                        display: flex;                                                        flex-wrap: wrap                                                    }                                                    .e-form__buttons {                                                        flex-wrap: wrap                                                    }                                                    .e-form__buttons,                                                    .e-form__buttons__wrapper {                                                        display: flex                                                    }                                                    .e-form__indicators {                                                        display: flex;                                                        justify-content: space-between;                                                        align-items: center;                                                        flex-wrap: nowrap;                                                        font-size: 13px;                                                        margin-bottom: var(--e-form-steps-indicators-spacing)                                                    }                                                    .e-form__indicators__indicator {                                                        display: flex;                                                        flex-direction: column;                                                        align-items: center;                                                        justify-content: center;                                                        flex-basis: 0;                                                        padding: 0 var(--e-form-steps-divider-gap)                                                    }                                                    .e-form__indicators__indicator__progress {                                                        width: 100%;                                                        position: relative;                                                        background-color: var(--e-form-steps-indicator-progress-background-color);                                                        border-radius: var(--e-form-steps-indicator-progress-border-radius);                                                        overflow: hidden                                                    }                                                    .e-form__indicators__indicator__progress__meter {                                                        width: var(--e-form-steps-indicator-progress-meter-width, 0);                                                        height: var(--e-form-steps-indicator-progress-height);                                                        line-height: var(--e-form-steps-indicator-progress-height);                                                        padding-right: 15px;                                                        border-radius: var(--e-form-steps-indicator-progress-border-radius);                                                        background-color: var(--e-form-steps-indicator-progress-color);                                                        color: var(--e-form-steps-indicator-progress-meter-color);                                                        text-align: right;                                                        transition: width .1s linear                                                    }                                                    .e-form__indicators__indicator:first-child {                                                        padding-left: 0                                                    }                                                    .e-form__indicators__indicator:last-child {                                                        padding-right: 0                                                    }                                                    .e-form__indicators__indicator--state-inactive {                                                        color: var(--e-form-steps-indicator-inactive-primary-color, #c2cbd2)                                                    }                                                    .e-form__indicators__indicator--state-inactive [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {                                                        background-color: var(--e-form-steps-indicator-inactive-secondary-color, #fff)                                                    }                                                    .e-form__indicators__indicator--state-inactive object,                                                    .e-form__indicators__indicator--state-inactive svg {                                                        fill: var(--e-form-steps-indicator-inactive-primary-color, #c2cbd2)                                                    }                                                    .e-form__indicators__indicator--state-active {                                                        color: var(--e-form-steps-indicator-active-primary-color, #39b54a);                                                        border-color: var(--e-form-steps-indicator-active-secondary-color, #fff)                                                    }                                                    .e-form__indicators__indicator--state-active [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {                                                        background-color: var(--e-form-steps-indicator-active-secondary-color, #fff)                                                    }                                                    .e-form__indicators__indicator--state-active object,                                                    .e-form__indicators__indicator--state-active svg {                                                        fill: var(--e-form-steps-indicator-active-primary-color, #39b54a)                                                    }                                                    .e-form__indicators__indicator--state-completed {                                                        color: var(--e-form-steps-indicator-completed-secondary-color, #fff)                                                    }                                                    .e-form__indicators__indicator--state-completed [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {                                                        background-color: var(--e-form-steps-indicator-completed-primary-color, #39b54a)                                                    }                                                    .e-form__indicators__indicator--state-completed .e-form__indicators__indicator__label {                                                        color: var(--e-form-steps-indicator-completed-primary-color, #39b54a)                                                    }                                                    .e-form__indicators__indicator--state-completed .e-form__indicators__indicator--shape-none {                                                        color: var(--e-form-steps-indicator-completed-primary-color, #39b54a);                                                        background-color: initial                                                    }                                                    .e-form__indicators__indicator--state-completed object,                                                    .e-form__indicators__indicator--state-completed svg {                                                        fill: var(--e-form-steps-indicator-completed-secondary-color, #fff)                                                    }                                                    .e-form__indicators__indicator__icon {                                                        width: var(--e-form-steps-indicator-padding, 30px);                                                        height: var(--e-form-steps-indicator-padding, 30px);                                                        font-size: var(--e-form-steps-indicator-icon-size);                                                        border-width: 1px;                                                        border-style: solid;                                                        display: flex;                                                        justify-content: center;                                                        align-items: center;                                                        overflow: hidden;                                                        margin-bottom: 10px                                                    }                                                    .e-form__indicators__indicator__icon img,                                                    .e-form__indicators__indicator__icon object,                                                    .e-form__indicators__indicator__icon svg {                                                        width: var(--e-form-steps-indicator-icon-size);                                                        height: auto                                                    }                                                    .e-form__indicators__indicator__icon .e-font-icon-svg {                                                        height: 1em                                                    }                                                    .e-form__indicators__indicator__number {                                                        width: var(--e-form-steps-indicator-padding, 30px);                                                        height: var(--e-form-steps-indicator-padding, 30px);                                                        border-width: 1px;                                                        border-style: solid;                                                        display: flex;                                                        justify-content: center;                                                        align-items: center;                                                        margin-bottom: 10px                                                    }                                                    .e-form__indicators__indicator--shape-circle {                                                        border-radius: 50%                                                    }                                                    .e-form__indicators__indicator--shape-square {                                                        border-radius: 0                                                    }                                                    .e-form__indicators__indicator--shape-rounded {                                                        border-radius: 5px                                                    }                                                    .e-form__indicators__indicator--shape-none {                                                        border: 0                                                    }                                                    .e-form__indicators__indicator__label {                                                        text-align: center                                                    }                                                    .e-form__indicators__indicator__separator {                                                        width: 100%;                                                        height: var(--e-form-steps-divider-width);                                                        background-color: #babfc5                                                    }                                                    .e-form__indicators--type-icon,                                                    .e-form__indicators--type-icon_text,                                                    .e-form__indicators--type-number,                                                    .e-form__indicators--type-number_text {                                                        align-items: flex-start                                                    }                                                    .e-form__indicators--type-icon .e-form__indicators__indicator__separator,                                                    .e-form__indicators--type-icon_text .e-form__indicators__indicator__separator,                                                    .e-form__indicators--type-number .e-form__indicators__indicator__separator,                                                    .e-form__indicators--type-number_text .e-form__indicators__indicator__separator {                                                        margin-top: calc(var(--e-form-steps-indicator-padding, 30px) / 2 - var(--e-form-steps-divider-width, 1px) / 2)                                                    }                                                    .elementor-field-type-hidden {                                                        display: none                                                    }                                                    .elementor-field-type-html {                                                        display: inline-block                                                    }                                                    .elementor-login .elementor-lost-password,                                                    .elementor-login .elementor-remember-me {                                                        font-size: .85em                                                    }                                                    .elementor-field-type-recaptcha_v3 .elementor-field-label {                                                        display: none                                                    }                                                    .elementor-field-type-recaptcha_v3 .grecaptcha-badge {                                                        z-index: 1                                                    }                                                    .elementor-button .elementor-form-spinner {                                                        order: 3                                                    }                                                    .elementor-form .elementor-button>span {                                                        display: flex;                                                        justify-content: center;                                                        align-items: center                                                    }                                                    .elementor-form .elementor-button .elementor-button-text {                                                        white-space: normal;                                                        flex-grow: 0                                                    }                                                    .elementor-form .elementor-button svg {                                                        height: auto                                                    }                                                    .elementor-form .elementor-button .e-font-icon-svg {                                                        height: 1em                                                    }                                                    .elementor-select-wrapper .select-caret-down-wrapper {                                                        position: absolute;                                                        top: 50%;                                                        transform: translateY(-50%);                                                        inset-inline-end: 10px;                                                        pointer-events: none;                                                        font-size: 11px                                                    }                                                    .elementor-select-wrapper .select-caret-down-wrapper svg {                                                        display: unset;                                                        width: 1em;                                                        aspect-ratio: unset;                                                        fill: currentColor                                                    }                                                    .elementor-select-wrapper .select-caret-down-wrapper i {                                                        font-size: 19px;                                                        line-height: 2                                                    }                                                    .elementor-select-wrapper.remove-before:before {                                                        content: "" !important                                                    }                                                ',
                                }}
                              />
                              {
                                "                                                "
                              }
                              <form
                                className="elementor-form"
                                method="post"
                                name="New Form"
                              >
                                {
                                  "                                                    "
                                }
                                <input
                                  defaultValue="8"
                                  name="post_id"
                                  type="hidden"
                                />
                                {
                                  "                                                    "
                                }
                                <input
                                  defaultValue="f18867f"
                                  name="form_id"
                                  type="hidden"
                                />
                                {
                                  "                                                    "
                                }
                                <input
                                  defaultValue="Technical Services Company Dubai | Technical Services Dubai"
                                  name="referer_title"
                                  type="hidden"
                                />
                                {
                                  "                                                    "
                                }
                                <input
                                  defaultValue="8"
                                  name="queried_id"
                                  type="hidden"
                                />
                                {
                                  "                                                    "
                                }
                                <div className="elementor-form-fields-wrapper elementor-labels-">
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50">
                                    {
                                      "                                                            "
                                    }
                                    <label
                                      className="elementor-field-label elementor-screen-only"
                                      htmlFor="form-field-name"
                                    >
                                      Name
                                    </label>
                                    {
                                      "                                                            "
                                    }
                                    <input
                                      className="elementor-field elementor-size-sm  elementor-field-textual"
                                      id="form-field-name"
                                      name="form_fields[name]"
                                      placeholder="Name"
                                      size="1"
                                      type="text"
                                    />
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-field_6fddde1 elementor-col-50">
                                    {
                                      "                                                            "
                                    }
                                    <label
                                      className="elementor-field-label elementor-screen-only"
                                      htmlFor="form-field-field_6fddde1"
                                    >
                                      Email
                                    </label>
                                    {
                                      "                                                            "
                                    }
                                    <input
                                      className="elementor-field elementor-size-sm  elementor-field-textual"
                                      id="form-field-field_6fddde1"
                                      name="form_fields[field_6fddde1]"
                                      placeholder="Email "
                                      size="1"
                                      type="email"
                                    />
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementor-field-type-number elementor-field-group elementor-column elementor-field-group-field_e5a573a elementor-col-50">
                                    {
                                      "                                                            "
                                    }
                                    <label
                                      className="elementor-field-label elementor-screen-only"
                                      htmlFor="form-field-field_e5a573a"
                                    >
                                      Phone No
                                    </label>
                                    {
                                      "                                                            "
                                    }
                                    <input
                                      className="elementor-field elementor-size-sm  elementor-field-textual"
                                      id="form-field-field_e5a573a"
                                      max=""
                                      min=""
                                      name="form_fields[field_e5a573a]"
                                      placeholder="Phone No"
                                      type="number"
                                    />
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_41b4277 elementor-col-50">
                                    {
                                      "                                                            "
                                    }
                                    <label
                                      className="elementor-field-label elementor-screen-only"
                                      htmlFor="form-field-field_41b4277"
                                    >
                                      Services
                                    </label>
                                    {
                                      "                                                            "
                                    }
                                    <div className="elementor-field elementor-select-wrapper remove-before ">
                                      {
                                        "                                                                "
                                      }
                                      <div className="select-caret-down-wrapper">
                                        {
                                          "                                                                    "
                                        }
                                        <i
                                          aria-hidden="true"
                                          className="eicon-caret-down"
                                        />{" "}
                                      </div>
                                      {
                                        "                                                                "
                                      }
                                      <select
                                        className="elementor-field-textual elementor-size-sm"
                                        id="form-field-field_41b4277"
                                        name="form_fields[field_41b4277]"
                                      >
                                        <option value="">Services </option>

                                        <option value="AC INSTALLATION">
                                          AC INSTALLATION
                                        </option>

                                        <option value="AC MAINTENANCE">
                                          AC MAINTENANCE
                                        </option>

                                        <option value="AC DUCT CLEANING">
                                          AC DUCT CLEANING
                                        </option>

                                        <option value="AC COIL CLEANING">
                                          AC COIL CLEANING
                                        </option>

                                        <option value="OFFICE FIT OUT">
                                          OFFICE FIT OUT
                                        </option>

                                        <option value="KITCHEN RENOVATION">
                                          KITCHEN RENOVATION
                                        </option>

                                        <option value="VILLA RENOVATION">
                                          VILLA RENOVATION
                                        </option>

                                        <option value="APARTMENT RENOVATION">
                                          APARTMENT RENOVATION
                                        </option>

                                        <option value="ELECTRICAL">
                                          ELECTRICAL
                                        </option>

                                        <option value="PLUMBING">
                                          PLUMBING
                                        </option>

                                        <option value="PAINTING">
                                          PAINTING
                                        </option>

                                        <option value="HANDYMAN">
                                          HANDYMAN
                                        </option>

                                        <option value="WATER TANK CLEANING">
                                          WATER TANK CLEANING
                                        </option>

                                        <option value="WALLPAPER FIXING">
                                          WALLPAPER FIXING
                                        </option>

                                        <option value="POOL MAINTENANCE">
                                          POOL MAINTENANCE
                                        </option>

                                        <option value="CARPENTRY SERVICES">
                                          CARPENTRY SERVICES
                                        </option>
                                      </select>
                                      {
                                        "                                                            "
                                      }
                                    </div>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                                    {
                                      "                                                            "
                                    }
                                    <label
                                      className="elementor-field-label elementor-screen-only"
                                      htmlFor="form-field-message"
                                    >
                                      Comments
                                    </label>
                                    {
                                      "                                                            "
                                    }
                                    <textarea
                                      className="elementor-field-textual elementor-field  elementor-size-sm"
                                      id="form-field-message"
                                      name="form_fields[message]"
                                      placeholder="Comments"
                                      rows="4"
                                    />{" "}
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                    {
                                      "                                                            "
                                    }
                                    <button
                                      className="elementor-button elementor-size-sm"
                                      type="submit"
                                    >
                                      <span>
                                        <span className=" elementor-button-icon"></span>

                                        <span className="elementor-button-text">
                                          Submit
                                        </span>
                                      </span>
                                    </button>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                    "
                                  }
                                </div>
                                {
                                  "                                                "
                                }
                              </form>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </section>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-f8e30cd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="f8e30cd"
          >
            {"            "}
            <div className="elementor-container elementor-column-gap-default">
              {"                "}
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f54759b"
                data-element_type="column"
                data-id="f54759b"
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-6d4061a elementor-widget elementor-widget-elementskit-heading"
                    data-element_type="widget"
                    data-id="6d4061a"
                    data-widget_type="elementskit-heading.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <div className="ekit-wid-con">
                        {"                                    "}
                        <div className="ekit-heading elementskit-section-title-wraper center   ekit_heading_tablet-   ekit_heading_mobile-">
                          {"                                        "}
                          <h3 className="ekit-heading--title elementskit-section-title ">
                            Reviews
                          </h3>
                          {"                                        "}
                          <div className="ekit_heading_separetor_wraper ekit_heading_elementskit-border-divider elementskit-style-long">
                            {"                                            "}
                            <div className="elementskit-border-divider elementskit-style-long" />
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-59b1cea    elementor-widget elementor-widget-owl-carousel-elementor"
                    data-element_type="widget"
                    data-id="59b1cea"
                    data-settings='{"_animation":"fadeInUp"}'
                    data-widget_type="owl-carousel-elementor.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <div className="js-owce-carousel-container owce-carousel-container  owce-carousel-no-nav-tablet owce-carousel-no-nav-mobile">
                        {"                                    "}
                        <div
                          className="owl-carousel owl-theme js-owce-carousel owce-carousel owce-carousel-testimonial owce-carousel-testimonial-four"
                          data-options='{"field_prefix":"carousel_","layout":"testimonial","items_count":3,"items_count_tablet":null,"items_count_mobile":null,"margin":10,"margin_tablet":0,"margin_mobile":0,"nav":"yes","nav_tablet":null,"nav_mobile":null,"dots":"yes","dots_tablet":null,"dots_mobile":null,"autoplay":"yes","autoplay_timeout":5000,"autoplay_hover_pause":"yes","animate_in":"","animate_out":"","rewind":"","loop":"yes","loop_tablet":null,"loop_mobile":null,"smart_speed":500,"lazyLoad":"","auto_height":"","mouse_drag":"yes","touch_drag":"yes"}'
                          id="owce-carousel-59b1cea"
                        >
                          {"                                        "}
                          <div className="item carousel-item-ab4b12a elementor-animation-float">
                            {"                                            "}
                            <div className="owl-testimonial-header">
                              {
                                "                                                "
                              }
                              <div className="owl-testimonial-header-left">
                                {
                                  "                                                    "
                                }
                                <h3
                                  className="owl-title"
                                  data-setting="item_title"
                                >
                                  Hussain
                                </h3>
                                {
                                  "                                                    "
                                }
                                <h5
                                  className="owl-subtitle"
                                  data-setting="item_subtitle"
                                >
                                  Ajman{" "}
                                </h5>
                                {
                                  "                                                    "
                                }
                                <div className="owl-rating-icon">
                                  {
                                    "                                                        "
                                  }
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />{" "}
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {
                                "                                                "
                              }
                              <div className="owl-testimonial-header-right">
                                {
                                  "                                                    "
                                }
                                <div className="owl-thumb">
                                  {
                                    "                                                        "
                                  }
                                  <img
                                    alt=""
                                    className="attachment-full size-full wp-image-3630"
                                    decoding="async"
                                    height="2000"
                                    loading="lazy"
                                    src="https://dedicatedtechnical.com/wp-content/uploads/2023/01/Google-Logo.wine_.png"
                                    width="3000"
                                  />
                                  {
                                    "                                                        "
                                  }
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                            "}
                            <p
                              className="owl-content"
                              data-setting="item_content"
                            >
                              Recommended for all technical services in Dubai.
                              Had a wonderful experience with extremely fine
                              services
                            </p>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div className="item carousel-item-9ec58cf elementor-animation-float">
                            {"                                            "}
                            <div className="owl-testimonial-header">
                              {
                                "                                                "
                              }
                              <div className="owl-testimonial-header-left">
                                {
                                  "                                                    "
                                }
                                <h3
                                  className="owl-title"
                                  data-setting="item_title"
                                >
                                  Saeed-Al-Saffar
                                </h3>
                                {
                                  "                                                    "
                                }
                                <h5
                                  className="owl-subtitle"
                                  data-setting="item_subtitle"
                                >
                                  Al Manama
                                </h5>
                                {
                                  "                                                    "
                                }
                                <div className="owl-rating-icon">
                                  {
                                    "                                                        "
                                  }
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />{" "}
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {
                                "                                                "
                              }
                              <div className="owl-testimonial-header-right">
                                {
                                  "                                                    "
                                }
                                <div className="owl-thumb">
                                  {
                                    "                                                        "
                                  }
                                  <img
                                    alt=""
                                    className="attachment-full size-full wp-image-3630"
                                    decoding="async"
                                    height="2000"
                                    loading="lazy"
                                    src="https://dedicatedtechnical.com/wp-content/uploads/2023/01/Google-Logo.wine_.png"
                                    width="3000"
                                  />
                                  {
                                    "                                                        "
                                  }
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                            "}
                            <p
                              className="owl-content"
                              data-setting="item_content"
                            >
                              Dedicated Technical services LLC are the most
                              efficient services I have experienced so far.
                              Hired the team on several occasions and they never
                              disappointed me.
                            </p>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div className="item carousel-item-771f508 elementor-animation-float">
                            {"                                            "}
                            <div className="owl-testimonial-header">
                              {
                                "                                                "
                              }
                              <div className="owl-testimonial-header-left">
                                {
                                  "                                                    "
                                }
                                <h3
                                  className="owl-title"
                                  data-setting="item_title"
                                >
                                  Talat
                                </h3>
                                {
                                  "                                                    "
                                }
                                <h5
                                  className="owl-subtitle"
                                  data-setting="item_subtitle"
                                >
                                  Sharjah
                                </h5>
                                {
                                  "                                                    "
                                }
                                <div className="owl-rating-icon">
                                  {
                                    "                                                        "
                                  }
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-star"
                                  />{" "}
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {
                                "                                                "
                              }
                              <div className="owl-testimonial-header-right">
                                {
                                  "                                                    "
                                }
                                <div className="owl-thumb">
                                  {
                                    "                                                        "
                                  }
                                  <img
                                    alt=""
                                    className="attachment-full size-full wp-image-3630"
                                    decoding="async"
                                    height="2000"
                                    loading="lazy"
                                    src="https://dedicatedtechnical.com/wp-content/uploads/2023/01/Google-Logo.wine_.png"
                                    width="3000"
                                  />
                                  {
                                    "                                                        "
                                  }
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                            "}
                            <p
                              className="owl-content"
                              data-setting="item_content"
                            >
                              Highly recommended services. The team was amazing,
                              highly professional and punctual.
                            </p>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-5031065 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="5031065"
            data-settings='{"background_background":"classic"}'
          >
            {"            "}
            <div className="elementor-container elementor-column-gap-default">
              {"                "}
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cfc7edd"
                data-element_type="column"
                data-id="cfc7edd"
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-57cd899 elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-id="57cd899"
                    data-widget_type="heading.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <h2 className="elementor-heading-title elementor-size-default">
                        {"                                    "}
                        <p>
                          Any Questions?
                          <br />
                          Check out FAQs
                          <span
                            style={{
                              textAlign: "inherit",
                            }}
                          />
                        </p>
                        {"                                "}
                      </h2>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-2ebb337    elementor-widget elementor-widget-text-editor"
                    data-element_type="widget"
                    data-id="2ebb337"
                    data-settings='{"_animation":"fadeInLeft"}'
                    data-widget_type="text-editor.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <p>
                        Do you still have lingering questions and wish to
                        contact us?{" "}
                      </p>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                        "}
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-18d4f3e elementor-section-full_width elementor-section-height-default elementor-section-height-default   "
                    data-element_type="section"
                    data-id="18d4f3e"
                    data-settings='{"animation":"zoomIn"}'
                  >
                    {"                            "}
                    <div className="elementor-container elementor-column-gap-default">
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5853a8d"
                        data-element_type="column"
                        data-id="5853a8d"
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-dbc1733 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-icon-box"
                            data-element_type="widget"
                            data-id="dbc1733"
                            data-widget_type="elementskit-icon-box.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <div className="ekit-wid-con">
                                {
                                  "                                                                                                                                                            "
                                }
                                <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-   ">
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementskit-box-header elementor-animation-">
                                    {
                                      "                                                            "
                                    }
                                    <div className="elementskit-info-box-icon  ">
                                      {
                                        "                                                                "
                                      }
                                      <i
                                        aria-hidden="true"
                                        className="elementkit-infobox-icon icon icon-phone1"
                                      />
                                      {
                                        "                                                            "
                                      }
                                    </div>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="box-body">
                                    {
                                      "                                                            "
                                    }
                                    <h2 className="elementskit-info-box-title">
                                      {
                                        "                                                                "
                                      }
                                      Still have Questions?{" "}
                                    </h2>
                                    {
                                      "                                                            "
                                    }
                                    <div className="box-footer disable_hover_button">
                                      {
                                        "                                                                "
                                      }
                                      <div className="btn-wraper">
                                        {
                                          "                                                                    "
                                        }
                                        <a
                                          className="elementskit-btn whitespace--normal elementor-animation-"
                                          href="tel:00971562070822"
                                          rel=""
                                          target="_self"
                                        >
                                          {
                                            "                                        "
                                          }
                                          Call Us
                                          {
                                            "                                        "
                                          }
                                          <i
                                            aria-hidden="true"
                                            className="fas fa-arrow-right"
                                          />
                                          {
                                            "                                    "
                                          }
                                        </a>
                                        {
                                          "                                                                "
                                        }
                                      </div>
                                      {
                                        "                                                            "
                                      }
                                    </div>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                    "
                                  }
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                                "}
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-87088a0"
                        data-element_type="column"
                        data-id="87088a0"
                      >
                        {"                                    "}
                        <div className="elementor-widget-wrap elementor-element-populated">
                          {"                                        "}
                          <div
                            className="elementor-element elementor-element-30b200d ekit-equal-height-enable elementor-widget elementor-widget-elementskit-icon-box"
                            data-element_type="widget"
                            data-id="30b200d"
                            data-widget_type="elementskit-icon-box.default"
                          >
                            {"                                            "}
                            <div className="elementor-widget-container">
                              {
                                "                                                "
                              }
                              <div className="ekit-wid-con">
                                {
                                  "                                                                                                                                                            "
                                }
                                <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-   ">
                                  {
                                    "                                                        "
                                  }
                                  <div className="elementskit-box-header elementor-animation-">
                                    {
                                      "                                                            "
                                    }
                                    <div className="elementskit-info-box-icon  ">
                                      {
                                        "                                                                "
                                      }
                                      <i
                                        aria-hidden="true"
                                        className="elementkit-infobox-icon fab fa-whatsapp"
                                      />
                                      {
                                        "                                                            "
                                      }
                                    </div>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                        "
                                  }
                                  <div className="box-body">
                                    {
                                      "                                                            "
                                    }
                                    <h2 className="elementskit-info-box-title">
                                      {
                                        "                                                                "
                                      }
                                      Still have Questions?{" "}
                                    </h2>
                                    {
                                      "                                                            "
                                    }
                                    <div className="box-footer disable_hover_button">
                                      {
                                        "                                                                "
                                      }
                                      <div className="btn-wraper">
                                        {
                                          "                                                                    "
                                        }
                                        <a
                                          className="elementskit-btn whitespace--normal elementor-animation-"
                                          href="https://wa.link/mnbdfy"
                                          rel="noopener"
                                          target="_self"
                                        >
                                          {
                                            "                                        "
                                          }
                                          Chat with us
                                          {
                                            "                                        "
                                          }
                                          <i
                                            aria-hidden="true"
                                            className="fas fa-arrow-right"
                                          />
                                          {
                                            "                                    "
                                          }
                                        </a>
                                        {
                                          "                                                                "
                                        }
                                      </div>
                                      {
                                        "                                                            "
                                      }
                                    </div>
                                    {
                                      "                                                        "
                                    }
                                  </div>
                                  {
                                    "                                                    "
                                  }
                                </div>
                                {
                                  "                                                "
                                }
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </section>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"                "}
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f58a568   "
                data-element_type="column"
                data-id="f58a568"
                data-settings='{"animation":"fadeInRight"}'
                style={{
                  flexDirection: "column",
                  alignSelf: "center",
                  padding:30
                }}
              >
                <Accordion>
                  <AccordionSummary
                    expandIcon={
                      <div className="ekit_accordion_icon_group">
                        {"                                    "}
                        <div className="ekit_accordion_normal_icon">
                          {
                            "                                                                                "
                          }
                          <ExpandMoreIcon />
                          {"                                    "}
                        </div>
                        {"                                    "}

                        {"                                "}
                      </div>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {"                                                "}
                      <a
                        aria-controls="Collapse-b153d5865388fb21bc2f"
                        aria-expanded="true"
                        className="ekit-accordion--toggler elementskit-btn-link collapsed"
                        data-ekit-toggle="collapse"
                        data-target="#Collapse-b153d5865388fb21bc2f"
                        href="#collapse-b153d5865388fb21bc2f"
                        style={{
                          color: "black",
                        }}
                      >
                        {
                          "                                                        "
                        }
                        <span className="ekit-accordion-title">
                          What does the term 'Annual Maintenance Contract (AMC)'
                        </span>
                        {
                          "                                                            "
                        }

                        {
                          "                                                                                "
                        }
                      </a>
                      {"                                            "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div
                        aria-labelledby="primaryHeading-0-7d00117"
                        className=" show collapse"
                        data-parent="#accordion-65388fb21bc2f"
                        id="Collapse-b153d5865388fb21bc2f"
                      >
                        {"                                                "}
                        <div className="elementskit-card-body ekit-accordion--content">
                          {
                            "                                                    "
                          }
                          <p>
                            <strong>A:</strong> An Annual Maintenance Contract
                            (AMC) is a year-long agreement between a technical
                            service provider and a client. Under this agreement,
                            the service provider takes responsibility for
                            maintaining and caring for the client's property
                            throughout the year. The specified services in the
                            contract are made available to the customer at their
                            convenience, making it a cost-effective way to
                            receive support.
                          </p>
                          {"                                                "}
                        </div>
                        {"                                            "}
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {"                                                "}
                      <a
                        aria-controls="Collapse-b153d5865388fb21bc2f"
                        aria-expanded="true"
                        className="ekit-accordion--toggler elementskit-btn-link collapsed"
                        data-ekit-toggle="collapse"
                        data-target="#Collapse-b153d5865388fb21bc2f"
                        href="#collapse-b153d5865388fb21bc2f"
                        style={{
                          color: "black",
                        }}
                      >
                        {
                          "                                                        "
                        }
                        <span className="ekit-accordion-title">
                          Is securing an AMC contract with Dedicated Technical
                          Services a worthwhile decision?
                        </span>
                        {
                          "                                                            "
                        }

                        {
                          "                                                                                "
                        }
                      </a>
                      {"                                            "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div
                        aria-labelledby="primaryHeading-0-7d00117"
                        className=" show collapse"
                        data-parent="#accordion-65388fb21bc2f"
                        id="Collapse-b153d5865388fb21bc2f"
                      >
                        {"                                                "}
                        <div className="elementskit-card-body ekit-accordion--content">
                          {
                            "                                                    "
                          }
                          <p>
                            <strong>A:</strong> Definitely! Our AMC offers a
                            wide range of customizable technical services at
                            budget-friendly rates. With our AMC in place, you
                            can put your worries to rest as it covers all your
                            technical requirements for an entire year. It
                            simplifies maintenance, making it a hassle-free and
                            high-quality experience.{" "}
                          </p>
                          {"                                                "}
                        </div>
                        {"                                            "}
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {"                                                "}
                      <a
                        aria-controls="Collapse-b153d5865388fb21bc2f"
                        aria-expanded="true"
                        className="ekit-accordion--toggler elementskit-btn-link collapsed"
                        data-ekit-toggle="collapse"
                        data-target="#Collapse-b153d5865388fb21bc2f"
                        href="#collapse-b153d5865388fb21bc2f"
                        style={{
                          color: "black",
                        }}
                      >
                        {
                          "                                                        "
                        }
                        <span className="ekit-accordion-title">
                          Q: Can we expect high-quality outcomes from your
                          technical services?
                        </span>
                        {
                          "                                                            "
                        }

                        {
                          "                                                                                "
                        }
                      </a>
                      {"                                            "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div
                        aria-labelledby="primaryHeading-0-7d00117"
                        className=" show collapse"
                        data-parent="#accordion-65388fb21bc2f"
                        id="Collapse-b153d5865388fb21bc2f"
                      >
                        {"                                                "}
                        <div className="elementskit-card-body ekit-accordion--content">
                          {
                            "                                                    "
                          }
                          <p>
                            <strong>A:</strong> Yes, without a doubt. Our
                            professional team, equipped with modern machinery,
                            ensures the delivery of top-notch services. Quality
                            is our hallmark, as we meticulously plan and execute
                            our work, which is why we are recognized as the
                            premier technical services company in Dubai.{" "}
                          </p>
                          {"                                                "}
                        </div>
                        {"                                            "}
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {"                                                "}
                      <a
                        aria-controls="Collapse-b153d5865388fb21bc2f"
                        aria-expanded="true"
                        className="ekit-accordion--toggler elementskit-btn-link collapsed"
                        data-ekit-toggle="collapse"
                        data-target="#Collapse-b153d5865388fb21bc2f"
                        href="#collapse-b153d5865388fb21bc2f"
                        style={{
                          color: "black",
                        }}
                      >
                        {
                          "                                                        "
                        }
                        <span className="ekit-accordion-title">
                          What sets Dedicated Technical Services apart as the
                          leading technical services company in Dubai?
                        </span>
                        {
                          "                                                            "
                        }

                        {
                          "                                                                                "
                        }
                      </a>
                      {"                                            "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div
                        aria-labelledby="primaryHeading-0-7d00117"
                        className=" show collapse"
                        data-parent="#accordion-65388fb21bc2f"
                        id="Collapse-b153d5865388fb21bc2f"
                      >
                        {"                                                "}
                        <div className="elementskit-card-body ekit-accordion--content">
                          {
                            "                                                    "
                          }
                          <p>
                            <strong>A:</strong> Dedicated Technical Services
                            earns its reputation as the foremost technical
                            services company in Dubai for various compelling
                            reasons. We provide a comprehensive suite of
                            services to our customers, boast state-of-the-art
                            machinery for efficient maintenance, employ a
                            professional and exceedingly dependable workforce,
                            offer fair and transparent pricing, and extend our
                            services to customers of all scales, including
                            villas.{" "}
                          </p>
                          {"                                                "}
                        </div>
                        {"                                            "}
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {"                                                "}
                      <a
                        aria-controls="Collapse-b153d5865388fb21bc2f"
                        aria-expanded="true"
                        className="ekit-accordion--toggler elementskit-btn-link collapsed"
                        data-ekit-toggle="collapse"
                        data-target="#Collapse-b153d5865388fb21bc2f"
                        href="#collapse-b153d5865388fb21bc2f"
                        style={{
                          color: "black",
                        }}
                      >
                        {
                          "                                                        "
                        }
                        <span className="ekit-accordion-title">
                          Which services are included in your Annual Maintenance
                          Contract (AMC) package?{" "}
                        </span>
                        {
                          "                                                            "
                        }

                        {
                          "                                                                                "
                        }
                      </a>
                      {"                                            "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div
                        aria-labelledby="primaryHeading-0-7d00117"
                        className=" show collapse"
                        data-parent="#accordion-65388fb21bc2f"
                        id="Collapse-b153d5865388fb21bc2f"
                      >
                        {"                                                "}
                        <div className="elementskit-card-body ekit-accordion--content">
                          {
                            "                                                    "
                          }
                          <p>
                            <strong>A:</strong>
                            Our AMC package encompasses a wide range of
                            services, including appliance cleaning, AC
                            maintenance, property upkeep, extra-low voltage
                            services, commercial cleaning, and various other
                            offerings.{" "}
                          </p>
                          {"                                                "}
                        </div>
                        {"                                            "}
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {"                                                "}
                      <a
                        aria-controls="Collapse-b153d5865388fb21bc2f"
                        aria-expanded="true"
                        className="ekit-accordion--toggler elementskit-btn-link collapsed"
                        data-ekit-toggle="collapse"
                        data-target="#Collapse-b153d5865388fb21bc2f"
                        href="#collapse-b153d5865388fb21bc2f"
                        style={{
                          color: "black",
                        }}
                      >
                        {
                          "                                                        "
                        }
                        <span className="ekit-accordion-title">
                          Is villa maintenance included in your AMC service
                          offerings?{" "}
                        </span>
                        {
                          "                                                            "
                        }

                        {
                          "                                                                                "
                        }
                      </a>
                      {"                                            "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div
                        aria-labelledby="primaryHeading-0-7d00117"
                        className=" show collapse"
                        data-parent="#accordion-65388fb21bc2f"
                        id="Collapse-b153d5865388fb21bc2f"
                      >
                        {"                                                "}
                        <div className="elementskit-card-body ekit-accordion--content">
                          {
                            "                                                    "
                          }
                          <p>
                            <strong>A:</strong> Yes, indeed! We take pride in
                            being one of the premier villa maintenance companies
                            in Dubai. Our company extends Annual Maintenance
                            Contracts to villa owners, providing comprehensive
                            maintenance solutions for these sizable properties
                            to meet and exceed their needs. Our wide array of
                            services includes cleaning, painting, water tank
                            cleaning, and various others, aimed at simplifying
                            your villa maintenance requirements.{" "}
                          </p>
                          {"                                                "}
                        </div>
                        {"                                            "}
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {"                    "}

                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"    "}
        </div>
        {"    "}
        <div className="ekit-template-content-markup ekit-template-content-footer ekit-template-content-theme-support">
          {"        "}
          <div
            className="elementor elementor-258"
            data-elementor-id="258"
            data-elementor-post-type="elementskit_template"
            data-elementor-type="wp-post"
          >
            {"            "}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-ee26353 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-element_type="section"
              data-id="ee26353"
              data-settings='{"background_background":"classic"}'
            >
              {"                "}
              <div className="elementor-container elementor-column-gap-default">
                {"                    "}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-75c3261"
                  data-element_type="column"
                  data-id="75c3261"
                >
                  {"                        "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-5238b17 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="5238b17"
                      data-widget_type="icon-list.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <ul className="elementor-icon-list-items">
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <span className="elementor-icon-list-text">
                              WHO WE ARE
                            </span>
                            {"                                        "}
                          </li>
                          {"                                    "}
                        </ul>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-ca44834 elementor-widget elementor-widget-text-editor"
                      data-element_type="widget"
                      data-id="ca44834"
                      data-widget_type="text-editor.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <p>
                          Dedicated Technical Services upholds the principles of
                          quality, innovation, and precision, which are evident
                          in our work. Our proficient professionals are
                          dedicated to achieving the utmost excellence in all
                          our endeavors.{" "}
                        </p>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-e768307 elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons"
                      data-element_type="widget"
                      data-id="e768307"
                      data-widget_type="social-icons.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <div className="elementor-social-icons-wrapper elementor-grid">
                          {"                                        "}
                          <span className="elementor-grid-item">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-7a54271"
                              href="https://www.facebook.com/dedicatedtechnical/"
                              target="_blank"
                            >
                              <span className="elementor-screen-only">
                                Facebook-f
                              </span>
                              {"                                        "}
                              <i className="fab fa-facebook-f" />{" "}
                            </a>
                            {"                                        "}
                          </span>
                          {"                                        "}
                          <span className="elementor-grid-item">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-3398202"
                              href="https://www.instagram.com/dedicatedtechnical/"
                              target="_blank"
                            >
                              <span className="elementor-screen-only">
                                Instagram
                              </span>
                              {"                                        "}
                              <i className="fab fa-instagram" />{" "}
                            </a>
                            {"                                        "}
                          </span>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-e52917c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="e52917c"
                      data-widget_type="icon-list.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <ul className="elementor-icon-list-items">
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <span className="elementor-icon-list-text">
                              Payment & Security
                            </span>
                            {"                                        "}
                          </li>
                          {"                                    "}
                        </ul>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                            "}
                    <section
                      className="elementor-section elementor-inner-section elementor-element elementor-element-8c7df6e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-element_type="section"
                      data-id="8c7df6e"
                    >
                      {"                                "}
                      <div className="elementor-container elementor-column-gap-default">
                        {"                                    "}
                        <div
                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-52152b1"
                          data-element_type="column"
                          data-id="52152b1"
                        >
                          {"                                        "}
                          <div className="elementor-widget-wrap elementor-element-populated">
                            {"                                            "}
                            <div
                              className="elementor-element elementor-element-3adbbfc elementor-widget elementor-widget-image"
                              data-element_type="widget"
                              data-id="3adbbfc"
                              data-widget_type="image.default"
                            >
                              {
                                "                                                "
                              }
                              <div className="elementor-widget-container">
                                {
                                  "                                                    "
                                }
                                <img
                                  alt=""
                                  className="attachment-full size-full wp-image-3441"
                                  height="681"
                                  loading="lazy"
                                  src="https://dedicatedtechnical.com/wp-content/uploads/2023/01/PayPal.svg.png"
                                  width="2560"
                                />{" "}
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                    "}
                        <div
                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-94c417f"
                          data-element_type="column"
                          data-id="94c417f"
                        >
                          {"                                        "}
                          <div className="elementor-widget-wrap elementor-element-populated">
                            {"                                            "}
                            <div
                              className="elementor-element elementor-element-021f415 elementor-widget elementor-widget-image"
                              data-element_type="widget"
                              data-id="021f415"
                              data-widget_type="image.default"
                            >
                              {
                                "                                                "
                              }
                              <div className="elementor-widget-container">
                                {
                                  "                                                    "
                                }
                                <img
                                  alt=""
                                  className="attachment-full size-full wp-image-3442"
                                  height="450"
                                  loading="lazy"
                                  src="https://dedicatedtechnical.com/wp-content/uploads/2023/01/Visa-Card.png"
                                  width="800"
                                />{" "}
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                    "}
                        <div
                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-464f8fa"
                          data-element_type="column"
                          data-id="464f8fa"
                        >
                          {"                                        "}
                          <div className="elementor-widget-wrap elementor-element-populated">
                            {"                                            "}
                            <div
                              className="elementor-element elementor-element-d05b812 elementor-widget elementor-widget-image"
                              data-element_type="widget"
                              data-id="d05b812"
                              data-widget_type="image.default"
                            >
                              {
                                "                                                "
                              }
                              <div className="elementor-widget-container">
                                {
                                  "                                                    "
                                }
                                <img
                                  alt=""
                                  className="attachment-full size-full wp-image-3443"
                                  height="1536"
                                  loading="lazy"
                                  src="https://dedicatedtechnical.com/wp-content/uploads/2023/01/MasterCard_Logo.svg.png"
                                  width="2560"
                                />{" "}
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                    "}
                        <div
                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7c1fe7d"
                          data-element_type="column"
                          data-id="7c1fe7d"
                        >
                          {"                                        "}
                          <div className="elementor-widget-wrap elementor-element-populated">
                            {"                                            "}
                            <div
                              className="elementor-element elementor-element-57a973f elementor-widget elementor-widget-image"
                              data-element_type="widget"
                              data-id="57a973f"
                              data-widget_type="image.default"
                            >
                              {
                                "                                                "
                              }
                              <div className="elementor-widget-container">
                                {
                                  "                                                    "
                                }
                                <img
                                  alt=""
                                  className="attachment-full size-full wp-image-3479"
                                  height="1481"
                                  loading="lazy"
                                  src="https://dedicatedtechnical.com/wp-content/uploads/2023/01/american-express.png"
                                  width="2331"
                                />{" "}
                              </div>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </div>
                      {"                            "}
                    </section>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                    "}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3d527a7"
                  data-element_type="column"
                  data-id="3d527a7"
                >
                  {"                        "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-bee6f03 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="bee6f03"
                      data-widget_type="icon-list.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <ul className="elementor-icon-list-items">
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <span className="elementor-icon-list-text">
                              QUICK LINKS
                            </span>
                            {"                                        "}
                          </li>
                          {"                                    "}
                        </ul>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-74ebca3 elementor-widget__width-auto elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="74ebca3"
                      data-widget_type="icon-list.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <ul className="elementor-icon-list-items">
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/">
                              <span className="elementor-icon-list-text">
                                HOME
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/blog/">
                              <span className="elementor-icon-list-text">
                                BLOG
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/about-us/">
                              <span className="elementor-icon-list-text">
                                ABOUT US
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/our-services/">
                              <span className="elementor-icon-list-text">
                                OUR SERVICES
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/contact-us/">
                              <span className="elementor-icon-list-text">
                                CONTACT US
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                    "}
                        </ul>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                    "}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a3c7d55"
                  data-element_type="column"
                  data-id="a3c7d55"
                >
                  {"                        "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-6b83ab9 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="6b83ab9"
                      data-widget_type="icon-list.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <ul className="elementor-icon-list-items">
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <span className="elementor-icon-list-text">
                              OUR SERVICES
                            </span>
                            {"                                        "}
                          </li>
                          {"                                    "}
                        </ul>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-12fa22b elementor-widget__width-auto elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="12fa22b"
                      data-widget_type="icon-list.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <ul className="elementor-icon-list-items">
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/ac-maintenance-dubai/">
                              <span className="elementor-icon-list-text">
                                AC Maintenance
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/ac-duct-cleaning/">
                              <span className="elementor-icon-list-text">
                                Duct Cleaning
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/ac-coil-cleaning/">
                              <span className="elementor-icon-list-text">
                                Coil Cleaning
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/electrical-services-dubai/">
                              <span className="elementor-icon-list-text">
                                Electrical
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/plumbing-services-dubai/">
                              <span className="elementor-icon-list-text">
                                Plumbing
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/painting-services-in-dubai/">
                              <span className="elementor-icon-list-text">
                                Painting
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/handyman-dubai/">
                              <span className="elementor-icon-list-text">
                                Handyman
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/water-tank-cleaning/">
                              <span className="elementor-icon-list-text">
                                Water Tank Cleaning
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                    "}
                        </ul>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </section>
            {"            "}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-422c0fc elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-element_type="section"
              data-id="422c0fc"
              data-settings='{"background_background":"classic"}'
            >
              {"                "}
              <div className="elementor-container elementor-column-gap-default">
                {"                    "}
                <div
                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9a8fb69"
                  data-element_type="column"
                  data-id="9a8fb69"
                >
                  {"                        "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-5d95564 elementor-widget elementor-widget-text-editor"
                      data-element_type="widget"
                      data-id="5d95564"
                      data-widget_type="text-editor.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <p>
                          © Copyright 2023{"  "}
                          <a
                            href="https://dedicatedtechnical.com/"
                            style={{
                              color: "#031b4d",
                            }}
                          >
                            Povered By Eastman Enovations.
                          </a>
                            All rights reserved.
                        </p>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                    "}
                <div
                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-78ed95f"
                  data-element_type="column"
                  data-id="78ed95f"
                >
                  {"                        "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {"                            "}
                    <div
                      className="elementor-element elementor-element-58b824d elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="58b824d"
                      data-widget_type="icon-list.default"
                    >
                      {"                                "}
                      <div className="elementor-widget-container">
                        {"                                    "}
                        <ul className="elementor-icon-list-items elementor-inline-items">
                          {"                                        "}
                          <li className="elementor-icon-list-item elementor-inline-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/payment-refund-cancellation-policy/">
                              <span className="elementor-icon-list-text">
                                Payment Refund Cancellation Policy
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item elementor-inline-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/privacy-policy/">
                              <span className="elementor-icon-list-text">
                                Privacy Policy
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                        "}
                          <li className="elementor-icon-list-item elementor-inline-item">
                            {"                                            "}
                            <a href="https://dedicatedtechnical.com/terms-and-conditions/">
                              <span className="elementor-icon-list-text">
                                Terms And Conditions
                              </span>
                            </a>
                            {"                                        "}
                          </li>
                          {"                                    "}
                        </ul>
                        {"                                "}
                      </div>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </section>
            {"        "}
          </div>
          {"    "}
        </div>
        {"            "}
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-PNM754PX"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            width="0"
          />
        </noscript>
        {"            "}
        <div
          className="elementor elementor-7342 elementor-location-popup"
          data-elementor-id="7342"
          data-elementor-post-type="elementor_library"
          data-elementor-settings='{"entrance_animation":"zoomIn","exit_animation":"zoomOut","entrance_animation_duration":{"unit":"px","size":0.5,"sizes":[]},"a11y_navigation":"yes","timing":[]}'
          data-elementor-type="popup"
        >
          {"        "}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-daefa67 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section"
            data-id="daefa67"
          >
            {"            "}
            <div className="elementor-container elementor-column-gap-default">
              {"                "}
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a9745b7"
                data-element_type="column"
                data-id="a9745b7"
              >
                {"                    "}
                <div className="elementor-widget-wrap elementor-element-populated">
                  {"                        "}
                  <div
                    className="elementor-element elementor-element-801b6ba elementor-button-align-start elementor-widget elementor-widget-form"
                    data-element_type="widget"
                    data-id="801b6ba"
                    data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                    data-widget_type="form.default"
                  >
                    {"                            "}
                    <div className="elementor-widget-container">
                      {"                                "}
                      <form
                        className="elementor-form"
                        method="post"
                        name="New Form"
                      >
                        {"                                    "}
                        <input
                          defaultValue="7342"
                          name="post_id"
                          type="hidden"
                        />
                        {"                                    "}
                        <input
                          defaultValue="801b6ba"
                          name="form_id"
                          type="hidden"
                        />
                        {"                                    "}
                        <input
                          defaultValue="Technical Services Company Dubai | Technical Services Dubai"
                          name="referer_title"
                          type="hidden"
                        />
                        {"                                    "}
                        <input
                          defaultValue="8"
                          name="queried_id"
                          type="hidden"
                        />
                        {"                                    "}
                        <div className="elementor-form-fields-wrapper elementor-labels-above">
                          {"                                        "}
                          <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required">
                            {"                                            "}
                            <label
                              className="elementor-field-label"
                              htmlFor="form-field-name"
                            >
                              Name *
                            </label>
                            {"                                            "}
                            <input
                              aria-required="true"
                              className="elementor-field elementor-size-sm  elementor-field-textual"
                              id="form-field-name"
                              name="form_fields[name]"
                              required
                              size="1"
                              type="text"
                            />
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-field_66fc61a elementor-col-100">
                            {"                                            "}
                            <label
                              className="elementor-field-label"
                              htmlFor="form-field-field_66fc61a"
                            >
                              Email *
                            </label>
                            {"                                            "}
                            <input
                              className="elementor-field elementor-size-sm  elementor-field-textual"
                              id="form-field-field_66fc61a"
                              name="form_fields[field_66fc61a]"
                              size="1"
                              type="email"
                            />
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div className="elementor-field-type-number elementor-field-group elementor-column elementor-field-group-field_e5a573a elementor-col-100">
                            {"                                            "}
                            <label
                              className="elementor-field-label"
                              htmlFor="form-field-field_e5a573a"
                            >
                              Phone *
                            </label>
                            {"                                            "}
                            <input
                              className="elementor-field elementor-size-sm  elementor-field-textual"
                              id="form-field-field_e5a573a"
                              max=""
                              min=""
                              name="form_fields[field_e5a573a]"
                              type="number"
                            />
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_41b4277 elementor-col-100">
                            {"                                            "}
                            <label
                              className="elementor-field-label"
                              htmlFor="form-field-field_41b4277"
                            >
                              Services
                            </label>
                            {"                                            "}
                            <div className="elementor-field elementor-select-wrapper remove-before ">
                              {
                                "                                                "
                              }
                              <div className="select-caret-down-wrapper">
                                {
                                  "                                                    "
                                }
                                <i
                                  aria-hidden="true"
                                  className="eicon-caret-down"
                                />{" "}
                              </div>
                              {
                                "                                                "
                              }
                              <select
                                className="elementor-field-textual elementor-size-sm"
                                id="form-field-field_41b4277"
                                name="form_fields[field_41b4277]"
                              >
                                <option value="AC INSTALLATION">
                                  AC INSTALLATION
                                </option>

                                <option value="AC MAINTENANCE">
                                  AC MAINTENANCE
                                </option>

                                <option value="AC DUCT CLEANING">
                                  AC DUCT CLEANING
                                </option>

                                <option value="AC COIL CLEANING">
                                  AC COIL CLEANING
                                </option>

                                <option value="OFFICE FIT OUT">
                                  OFFICE FIT OUT
                                </option>

                                <option value="KITCHEN RENOVATION">
                                  KITCHEN RENOVATION
                                </option>

                                <option value="VILLA RENOVATION">
                                  VILLA RENOVATION
                                </option>

                                <option value="APARTMENT RENOVATION">
                                  APARTMENT RENOVATION
                                </option>

                                <option value="ELECTRICAL">ELECTRICAL</option>

                                <option value="PLUMBING">PLUMBING</option>

                                <option value="PAINTING">PAINTING</option>

                                <option value="HANDYMAN">HANDYMAN</option>

                                <option value="WATER TANK CLEANING">
                                  WATER TANK CLEANING
                                </option>

                                <option value="WALLPAPER FIXING">
                                  WALLPAPER FIXING
                                </option>

                                <option value="POOL MAINTENANCE">
                                  POOL MAINTENANCE
                                </option>

                                <option value="CARPENTRY SERVICES">
                                  CARPENTRY SERVICES
                                </option>
                              </select>
                              {"                                            "}
                            </div>
                            {"                                        "}
                          </div>
                          {"                                        "}
                          <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                            {"                                            "}
                            <button
                              className="elementor-button elementor-size-sm"
                              type="submit"
                            >
                              <span>
                                <span className=" elementor-button-icon"></span>

                                <span className="elementor-button-text">
                                  Get Free Quote
                                </span>
                              </span>
                            </button>
                            {"                                        "}
                          </div>
                          {"                                    "}
                        </div>
                        {"                                "}
                      </form>
                      {"                            "}
                    </div>
                    {"                        "}
                  </div>
                  {"                    "}
                </div>
                {"                "}
              </div>
              {"            "}
            </div>
            {"        "}
          </section>
          {"    "}
        </div>
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "        jQuery(function() {            jQuery('.wpf-num-limit input').attr({                'min': 0,                'max': 15            }); // Define number limits            jQuery('.wpf-phone-number input').on('blur', function() { // Add phone number validation                const phoneNumber = jQuery(this).val();                const phoneRegex = /^d{10}$/;                if (!phoneRegex.test(phoneNumber)) {                    alert(\"Please enter a valid phone number with 10 digits.\");                    jQuery(this).val('');                }            });        });    ",
          }}
          type="text/javascript"
        />
        {"    "}
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/responsive-owl-carousel-elementor/assets/css/owl.carousel.min.css?ver=2.3.4"
          id="owce-carousel-css"
          media="all"
          rel="stylesheet"
        />
        {"    "}
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/responsive-owl-carousel-elementor/assets/css/animate.min.css?ver=3.7.0"
          id="animate-css"
          media="all"
          rel="stylesheet"
        />
        {"    "}
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/responsive-owl-carousel-elementor/assets/css/custom.css?ver=1.0.1"
          id="owce-custom-css"
          media="all"
          rel="stylesheet"
        />
        {"    "}
        <link
          href="https://dedicatedtechnical.com/wp-content/uploads/elementor/css/post-7342.css?ver=1693390239"
          id="elementor-post-7342-css"
          media="all"
          rel="stylesheet"
        />
        {"    "}
        <link
          href="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.16.5"
          id="e-animations-css"
          media="all"
          rel="stylesheet"
        />
        {"    "}
        <script
          id="swv-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.8.1"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        var wpcf7 = {            "api": {                "root": "https://dedicatedtechnical.com/wp-json/",                "namespace": "contact-form-7/v1"            },            "cached": "1"        };    ',
          }}
          id="contact-form-7-js-extra"
        />
        {"    "}
        <script
          id="contact-form-7-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.8.1"
        />
        {"    "}
        <script
          id="popupaoc-public-js-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/popup-anything-on-click/assets/js/popupaoc-public.js?ver=2.7"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        var wpcf7r = {            "ajax_url": "https://dedicatedtechnical.com/wp-admin/admin-ajax.php"        };    ',
          }}
          id="wpcf7-redirect-script-js-extra"
        />
        {"    "}
        <script
          id="wpcf7-redirect-script-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7r-fe.js?ver=1.1"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        "use strict";        var _createClass = function() {            function defineProperties(target, props) {                for (var i = 0; i < props.length; i++) {                    var descriptor = props[i];                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)                }            }            return function(Constructor, protoProps, staticProps) {                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor            }        }();        function _classCallCheck(instance, Constructor) {            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")        }        var RocketBrowserCompatibilityChecker = function() {            function RocketBrowserCompatibilityChecker(options) {                _classCallCheck(this, RocketBrowserCompatibilityChecker), this.passiveSupported = !1, this._checkPassiveOption(this), this.options = !!this.passiveSupported && options            }            return _createClass(RocketBrowserCompatibilityChecker, [{                key: "_checkPassiveOption",                value: function(self) {                    try {                        var options = {                            get passive() {                                return !(self.passiveSupported = !0)                            }                        };                        window.addEventListener("test", null, options), window.removeEventListener("test", null, options)                    } catch (err) {                        self.passiveSupported = !1                    }                }            }, {                key: "initRequestIdleCallback",                value: function() {                    !1 in window && (window.requestIdleCallback = function(cb) {                        var start = Date.now();                        return setTimeout(function() {                            cb({                                didTimeout: !1,                                timeRemaining: function() {                                    return Math.max(0, 50 - (Date.now() - start))                                }                            })                        }, 1)                    }), !1 in window && (window.cancelIdleCallback = function(id) {                        return clearTimeout(id)                    })                }            }, {                key: "isDataSaverModeOn",                value: function() {                    return "connection" in navigator && !0 === navigator.connection.saveData                }            }, {                key: "supportsLinkPrefetch",                value: function() {                    var elem = document.createElement("link");                    return elem.relList && elem.relList.supports && elem.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting" in IntersectionObserverEntry.prototype                }            }, {                key: "isSlowConnection",                value: function() {                    return "connection" in navigator && "effectiveType" in navigator.connection && ("2g" === navigator.connection.effectiveType || "slow-2g" === navigator.connection.effectiveType)                }            }]), RocketBrowserCompatibilityChecker        }();    ',
          }}
          id="rocket-browser-checker-js-after"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        var RocketPreloadLinksConfig = {            "excludeUris": "/(?:.+/)?feed(?:/(?:.+/?)?)?$|/(?:.+/)?embed/|/(index\\.php/)?(.*)wp\\-json(/.*|$)|/refer/|/go/|/recommend/|/recommends/",            "usesTrailingSlash": "1",            "imageExt": "jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php",            "fileExt": "jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm",            "siteUrl": "https://dedicatedtechnical.com",            "onHoverDelay": "100",            "rateThrottle": "3"        };    ',
          }}
          id="rocket-preload-links-js-extra"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        (function() {            "use strict";            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {                    return typeof e                } : function(e) {                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e                },                e = function() {                    function i(e, t) {                        for (var n = 0; n < t.length; n++) {                            var i = t[n];                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)                        }                    }                    return function(e, t, n) {                        return t && i(e.prototype, t), n && i(e, n), e                    }                }();            function i(e, t) {                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")            }            var t = function() {                function n(e, t) {                    i(this, n), this.browser = e, this.config = t, this.options = this.browser.options, this.prefetched = new Set, this.eventTime = null, this.threshold = 1111, this.numOnHover = 0                }                return e(n, [{                    key: "init",                    value: function() {                        !this.browser.supportsLinkPrefetch() || this.browser.isDataSaverModeOn() || this.browser.isSlowConnection() || (this.regex = {                            excludeUris: RegExp(this.config.excludeUris, "i"),                            images: RegExp(".(" + this.config.imageExt + ")$", "i"),                            fileExt: RegExp(".(" + this.config.fileExt + ")$", "i")                        }, this._initListeners(this))                    }                }, {                    key: "_initListeners",                    value: function(e) {                        -1 < this.config.onHoverDelay && document.addEventListener("mouseover", e.listener.bind(e), e.listenerOptions), document.addEventListener("mousedown", e.listener.bind(e), e.listenerOptions), document.addEventListener("touchstart", e.listener.bind(e), e.listenerOptions)                    }                }, {                    key: "listener",                    value: function(e) {                        var t = e.target.closest("a"),                            n = this._prepareUrl(t);                        if (null !== n) switch (e.type) {                            case "mousedown":                            case "touchstart":                                this._addPrefetchLink(n);                                break;                            case "mouseover":                                this._earlyPrefetch(t, n, "mouseout")                        }                    }                }, {                    key: "_earlyPrefetch",                    value: function(t, e, n) {                        var i = this,                            r = setTimeout(function() {                                if (r = null, 0 === i.numOnHover) setTimeout(function() {                                    return i.numOnHover = 0                                }, 1e3);                                else if (i.numOnHover > i.config.rateThrottle) return;                                i.numOnHover++, i._addPrefetchLink(e)                            }, this.config.onHoverDelay);                        t.addEventListener(n, function e() {                            t.removeEventListener(n, e, {                                passive: !0                            }), null !== r && (clearTimeout(r), r = null)                        }, {                            passive: !0                        })                    }                }, {                    key: "_addPrefetchLink",                    value: function(i) {                        return this.prefetched.add(i.href), new Promise(function(e, t) {                            var n = document.createElement("link");                            n.rel = "prefetch", n.href = i.href, n.onload = e, n.onerror = t, document.head.appendChild(n)                        }).catch(function() {})                    }                }, {                    key: "_prepareUrl",                    value: function(e) {                        if (null === e || "object" !== (void 0 === e ? "undefined" : r(e)) || !1 in e || -1 === ["http:", "https:"].indexOf(e.protocol)) return null;                        var t = e.href.substring(0, this.config.siteUrl.length),                            n = this._getPathname(e.href, t),                            i = {                                original: e.href,                                protocol: e.protocol,                                origin: t,                                pathname: n,                                href: t + n                            };                        return this._isLinkOk(i) ? i : null                    }                }, {                    key: "_getPathname",                    value: function(e, t) {                        var n = t ? e.substring(this.config.siteUrl.length) : e;                        return n.startsWith("/") || (n = "/" + n), this._shouldAddTrailingSlash(n) ? n + "/" : n                    }                }, {                    key: "_shouldAddTrailingSlash",                    value: function(e) {                        return this.config.usesTrailingSlash && !e.endsWith("/") && !this.regex.fileExt.test(e)                    }                }, {                    key: "_isLinkOk",                    value: function(e) {                        return null !== e && "object" === (void 0 === e ? "undefined" : r(e)) && (!this.prefetched.has(e.href) && e.origin === this.config.siteUrl && -1 === e.href.indexOf("?") && -1 === e.href.indexOf("#") && !this.regex.excludeUris.test(e.href) && !this.regex.images.test(e.href))                    }                }], [{                    key: "run",                    value: function() {                        "undefined" != typeof RocketPreloadLinksConfig && new n(new RocketBrowserCompatibilityChecker({                            capture: !0,                            passive: !0                        }), RocketPreloadLinksConfig).init()                    }                }]), n            }();            t.run();        }());    ',
          }}
          id="rocket-preload-links-js-after"
        />
        {"    "}
        <script
          id="elementskit-framework-js-frontend-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementskit-lite/libs/framework/assets/js/frontend-script.js?ver=3.0.0"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "        var elementskit = {            resturl: 'https://dedicatedtechnical.com/wp-json/elementskit/v1/',        }    ",
          }}
          id="elementskit-framework-js-frontend-js-after"
        />
        {"    "}
        <script
          id="ekit-widget-scripts-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widget-scripts.js?ver=3.0.0"
        />
        {"    "}
        <script
          id="owce-carousel-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/responsive-owl-carousel-elementor/assets/js/owl.carousel.min.js?ver=2.3.4"
        />
        {"    "}
        <script
          id="owce-custom-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/responsive-owl-carousel-elementor/assets/js/custom.js?ver=1.0.1"
        />
        {"    "}
        <script
          id="elementor-pro-webpack-runtime-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.14.1"
        />
        {"    "}
        <script
          id="elementor-webpack-runtime-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.16.5"
        />
        {"    "}
        <script
          id="elementor-frontend-modules-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.16.5"
        />
        {"    "}
        <script
          id="wp-polyfill-inert-js"
          src="https://dedicatedtechnical.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2"
        />
        {"    "}
        <script
          id="regenerator-runtime-js"
          src="https://dedicatedtechnical.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.11"
        />
        {"    "}
        <script
          id="wp-polyfill-js"
          src="https://dedicatedtechnical.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0"
        />
        {"    "}
        <script
          id="wp-hooks-js"
          src="https://dedicatedtechnical.com/wp-includes/js/dist/hooks.min.js?ver=c6aec9a8d4e5a5d543a1"
        />
        {"    "}
        <script
          id="wp-i18n-js"
          src="https://dedicatedtechnical.com/wp-includes/js/dist/i18n.min.js?ver=7701b0c3857f914212ef"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "        wp.i18n.setLocaleData({            'text direction\u0004ltr': ['ltr']        });    ",
          }}
          id="wp-i18n-js-after"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        var ElementorProFrontendConfig = {            "ajaxurl": "https://dedicatedtechnical.com/wp-admin/admin-ajax.php",            "nonce": "d45a6f8447",            "urls": {                "assets": "https://dedicatedtechnical.com/wp-content/plugins/elementor-pro/assets/",                "rest": "https://dedicatedtechnical.com/wp-json/"            },            "shareButtonsNetworks": {                "facebook": {                    "title": "Facebook",                    "has_counter": true                },                "twitter": {                    "title": "Twitter"                },                "linkedin": {                    "title": "LinkedIn",                    "has_counter": true                },                "pinterest": {                    "title": "Pinterest",                    "has_counter": true                },                "reddit": {                    "title": "Reddit",                    "has_counter": true                },                "vk": {                    "title": "VK",                    "has_counter": true                },                "odnoklassniki": {                    "title": "OK",                    "has_counter": true                },                "tumblr": {                    "title": "Tumblr"                },                "digg": {                    "title": "Digg"                },                "skype": {                    "title": "Skype"                },                "stumbleupon": {                    "title": "StumbleUpon",                    "has_counter": true                },                "mix": {                    "title": "Mix"                },                "telegram": {                    "title": "Telegram"                },                "pocket": {                    "title": "Pocket",                    "has_counter": true                },                "xing": {                    "title": "XING",                    "has_counter": true                },                "whatsapp": {                    "title": "WhatsApp"                },                "email": {                    "title": "Email"                },                "print": {                    "title": "Print"                }            },            "facebook_sdk": {                "lang": "en_US",                "app_id": ""            },            "lottie": {                "defaultAnimationUrl": "https://dedicatedtechnical.com/wp-content/plugins/elementor-pro/modules/lottie/assets/animations/default.json"            }        };    ',
          }}
          id="elementor-pro-frontend-js-before"
        />
        {"    "}
        <script
          id="elementor-pro-frontend-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.14.1"
        />
        {"    "}
        <script
          id="elementor-waypoints-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2"
        />
        {"    "}
        <script
          id="jquery-ui-core-js"
          src="https://dedicatedtechnical.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        var elementorFrontendConfig = {            "environmentMode": {                "edit": false,                "wpPreview": false,                "isScriptDebug": false            },            "i18n": {                "shareOnFacebook": "Share on Facebook",                "shareOnTwitter": "Share on Twitter",                "pinIt": "Pin it",                "download": "Download",                "downloadImage": "Download image",                "fullscreen": "Fullscreen",                "zoom": "Zoom",                "share": "Share",                "playVideo": "Play Video",                "previous": "Previous",                "next": "Next",                "close": "Close",                "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",                "a11yCarouselPrevSlideMessage": "Previous slide",                "a11yCarouselNextSlideMessage": "Next slide",                "a11yCarouselFirstSlideMessage": "This is the first slide",                "a11yCarouselLastSlideMessage": "This is the last slide",                "a11yCarouselPaginationBulletMessage": "Go to slide"            },            "is_rtl": false,            "breakpoints": {                "xs": 0,                "sm": 480,                "md": 768,                "lg": 1025,                "xl": 1440,                "xxl": 1600            },            "responsive": {                "breakpoints": {                    "mobile": {                        "label": "Mobile Portrait",                        "value": 767,                        "default_value": 767,                        "direction": "max",                        "is_enabled": true                    },                    "mobile_extra": {                        "label": "Mobile Landscape",                        "value": 880,                        "default_value": 880,                        "direction": "max",                        "is_enabled": false                    },                    "tablet": {                        "label": "Tablet Portrait",                        "value": 1024,                        "default_value": 1024,                        "direction": "max",                        "is_enabled": true                    },                    "tablet_extra": {                        "label": "Tablet Landscape",                        "value": 1200,                        "default_value": 1200,                        "direction": "max",                        "is_enabled": false                    },                    "laptop": {                        "label": "Laptop",                        "value": 1366,                        "default_value": 1366,                        "direction": "max",                        "is_enabled": false                    },                    "widescreen": {                        "label": "Widescreen",                        "value": 2400,                        "default_value": 2400,                        "direction": "min",                        "is_enabled": false                    }                }            },            "version": "3.16.5",            "is_static": false,            "experimentalFeatures": {                "e_dom_optimization": true,                "e_optimized_assets_loading": true,                "e_optimized_css_loading": true,                "additional_custom_breakpoints": true,                "theme_builder_v2": true,                "landing-pages": true,                "page-transitions": true,                "notes": true,                "loop": true,                "form-submissions": true,                "e_scroll_snap": true            },            "urls": {                "assets": "https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/"            },            "swiperClass": "swiper-container",            "settings": {                "page": [],                "editorPreferences": []            },            "kit": {                "active_breakpoints": ["viewport_mobile", "viewport_tablet"],                "global_image_lightbox": "yes",                "lightbox_enable_counter": "yes",                "lightbox_enable_fullscreen": "yes",                "lightbox_enable_zoom": "yes",                "lightbox_enable_share": "yes",                "lightbox_title_src": "title",                "lightbox_description_src": "description"            },            "post": {                "id": 8,                "title": "Technical%20Services%20Company%20Dubai%20%7C%20Technical%20Services%20Dubai",                "excerpt": "",                "featuredImage": false            }        };    ',
          }}
          id="elementor-frontend-js-before"
        />
        {"    "}
        <script
          id="elementor-frontend-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.16.5"
        />
        {"    "}
        <script
          id="pro-elements-handlers-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.14.1"
        />
        {"    "}
        <script
          id="animate-circle-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementskit-lite/widgets/init/assets/js/animate-circle.min.js?ver=3.0.0"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        var ekit_config = {            "ajaxurl": "https://dedicatedtechnical.com/wp-admin/admin-ajax.php",            "nonce": "3de31d3616"        };    ',
          }}
          id="elementskit-elementor-js-extra"
        />
        {"    "}
        <script
          id="elementskit-elementor-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/elementskit-lite/widgets/init/assets/js/elementor.js?ver=3.0.0"
        />
        {"    "}
        <script
          id="underscore-js"
          src="https://dedicatedtechnical.com/wp-includes/js/underscore.min.js?ver=1.13.4"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        var _wpUtilSettings = {            "ajax": {                "url": "/wp-admin/admin-ajax.php"            }        };    ',
          }}
          id="wp-util-js-extra"
        />
        {"    "}
        <script
          id="wp-util-js"
          src="https://dedicatedtechnical.com/wp-includes/js/wp-util.min.js?ver=6.3.2"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        var wpformsElementorVars = {            "captcha_provider": "recaptcha",            "recaptcha_type": "v2"        };    ',
          }}
          id="wpforms-elementor-js-extra"
        />
        {"    "}
        <script
          id="wpforms-elementor-js"
          src="https://dedicatedtechnical.com/wp-content/plugins/wpforms-lite/assets/js/integrations/elementor/frontend.min.js?ver=1.8.4"
        />
        {"    "}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '        /(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function() {            var t, e = location.hash.substring(1);            /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())        }, !1);    ',
          }}
        />
      </body>
    </html>
  );
};

export default Navbar;
