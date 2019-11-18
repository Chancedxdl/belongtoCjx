





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-/YEVWs7BzxfKyUd6zVxjEQcXRWsLbcEjv045Rq8DSoipySmQblhVKxlXLva2GtNd5DhwCxHwW1RM0N9I7S2Vew==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-481a47a96965f6706fb41bae0d14b09a.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-RXdXt6Q4qNvuDQUlIk7pw4KmlGww82Vb7+0z5MzpLjpzQ5WiUsOS0h81uZJxTfnORfoabCtEOONW0oUUfpUhEg==" rel="stylesheet" href="https://github.githubassets.com/assets/github-668a54bc74d3ac1d18320f010377642b.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>canvas-special/jquery.js at master · Chancedxdl/canvas-special</title>
    <meta name="description" content=":octocat::alien::star2:超多经典 canvas 实例，动态离子背景、移动炫彩小球、贪吃蛇、坦克大战、是男人就下100层、心形文字等等等 - Chancedxdl/canvas-special">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars2.githubusercontent.com/u/57344253?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="Chancedxdl/canvas-special" /><meta name="twitter:description" content=":octocat::alien::star2:超多经典 canvas 实例，动态离子背景、移动炫彩小球、贪吃蛇、坦克大战、是男人就下100层、心形文字等等等 - Chancedxdl/canvas-special" />
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/57344253?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="Chancedxdl/canvas-special" /><meta property="og:url" content="https://github.com/Chancedxdl/canvas-special" /><meta property="og:description" content=":octocat::alien::star2:超多经典 canvas 实例，动态离子背景、移动炫彩小球、贪吃蛇、坦克大战、是男人就下100层、心形文字等等等 - Chancedxdl/canvas-special" />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDYzODIyMDY4OmI5MjcyMjUxZTJlMDMzNTM3Y2FiZWM3ZGMwZjc3MjI4MmE1YTQyZTZiNTAxYjNiMmRlYzhiMjBkN2IzMTE1ODY=--eb11fac515d5f231b29b7427b5107a04a0e66c00">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="E199:03F8:3059A12:45BA860:5DC2A91D" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="E199:03F8:3059A12:45BA860:5DC2A91D" /><meta name="octolytics-dimension-region_edge" content="ap-southeast-1" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="3298304889402165753" /><meta name="octolytics-actor-id" content="57344253" /><meta name="octolytics-actor-login" content="Chancedxdl" /><meta name="octolytics-actor-hash" content="e0fe70a05d44cd2d05dde524e249ffc1ab23c0be6eb855824cd125c856ecd660" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="0e50e62bfe8bba5ee30924d9e1a5898f">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="Chancedxdl">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MDVkOGVmNjFkNDE2YjFhY2RhYzI4MTJjM2YwYmViYmQ2OGIxYmFiMTBmOWI2NTkwNTQ1NmM5NjJiZjQ0ODYyMnx7InJlbW90ZV9hZGRyZXNzIjoiMjExLjgyLjI0My41IiwicmVxdWVzdF9pZCI6IkUxOTk6MDNGODozMDU5QTEyOjQ1QkE4NjA6NURDMkE5MUQiLCJ0aW1lc3RhbXAiOjE1NzMwMzgzNzEsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="ACTIONS_V2_ON_MARKETPLACE,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES,GHE_CLOUD_TRIAL">

  <meta name="html-safe-nonce" content="4d9ee5e19c4d79d9a6ba1794838e0b1b3f40c81c">

  <meta http-equiv="x-pjax-version" content="f69d3cb88b705156fe02a6cd48e51e8d">
  

      <link href="https://github.com/Chancedxdl/canvas-special/commits/master.atom" rel="alternate" title="Recent Commits to canvas-special:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/Chancedxdl/canvas-special git https://github.com/Chancedxdl/canvas-special.git">

  <meta name="octolytics-dimension-user_id" content="57344253" /><meta name="octolytics-dimension-user_login" content="Chancedxdl" /><meta name="octolytics-dimension-repository_id" content="219656830" /><meta name="octolytics-dimension-repository_nwo" content="Chancedxdl/canvas-special" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="true" /><meta name="octolytics-dimension-repository_parent_id" content="100162381" /><meta name="octolytics-dimension-repository_parent_nwo" content="bxm0927/canvas-special" /><meta name="octolytics-dimension-repository_network_root_id" content="100162381" /><meta name="octolytics-dimension-repository_network_root_nwo" content="bxm0927/canvas-special" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="true" />


    <link rel="canonical" href="https://github.com/Chancedxdl/canvas-special/blob/master/photo-wall/a/jquery.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <meta name="webauthn-auth-enabled" content="true">

  <meta name="webauthn-registration-enabled" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    
    


          <header class="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">

    <div class="Header-item d-none d-lg-flex">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

    </div>

    <div class="Header-item d-lg-none">
      <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
      </button>
    </div>

    <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="219656830" data-scoped-search-url="/Chancedxdl/canvas-special/search" data-unscoped-search-url="/search" action="/Chancedxdl/canvas-special/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=d8HELnXqXNg8aolT83g0lei1rFAtDr+slsvYak9bWNcVdYNMEvHc0GHdQSC7gWewWobtP3etZsLMP3eExl/Zwg=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link d-block d-lg-none py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/Chancedxdl">
      <img class="avatar" height="20" width="20" alt="@Chancedxdl" src="https://avatars1.githubusercontent.com/u/57344253?s=60&amp;v=4" />
      Chancedxdl
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="x+lEO/+Jy5gW7OHvZgPvJHSsR2VlCsNQyIa/iKBiht6fnDWvq4A6lLinjfAAA0OySNu0rZyGUTiRoFqc9ntJPA==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
      <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
              <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
    <a class="Header-link" href="/Chancedxdl">Chancedxdl</a>
    /
    <a class="Header-link" href="/Chancedxdl/canvas-special">canvas-special</a>

</div>
    </div>


    <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
      

    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:57344253" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative d-none d-lg-flex">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <a role="menuitem" class="dropdown-item" href="/new/project" data-ga-click="Header, create new project">
    New project
  </a>

  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-lg-flex">
      
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/Chancedxdl/feature_preview/indicator_check.json">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@Chancedxdl" class="avatar" src="https://avatars2.githubusercontent.com/u/57344253?s=40&amp;v=4" height="20" width="20">
      <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/Chancedxdl" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">Chancedxdl</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:57344253,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:57344253,&quot;client_id&quot;:&quot;767946450.1572866553&quot;,&quot;originating_request_id&quot;:&quot;E199:03F8:3059A12:45BA860:5DC2A91D&quot;,&quot;originating_url&quot;:&quot;https://github.com/Chancedxdl/canvas-special/blob/master/photo-wall/a/jquery.js&quot;,&quot;referrer&quot;:&quot;https://github.com/Chancedxdl/canvas-special/tree/master/photo-wall/a&quot;}}" data-hydro-click-hmac="fa69cb7972c878c05d958092e0014526e15f89ec36078ffd3077562f7a411517">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="OQhW9XS/pt7xoi4YeMyaEfcY2lm/fKlzJHJrCOyoh9cZjOwyOOGjuil190vJ0w+XsRRvyA0hPzmViDSx8KQxtQ==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
            

<div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2019-11-06T19:36:11+08:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2019-11-06T20:06:11+08:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2019-11-06T23:06:11+08:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2019-11-06T23:59:59+08:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2019-11-10T23:59:59+08:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/Chancedxdl" data-ga-click="Header, go to profile, text:your profile">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/Chancedxdl?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/Chancedxdl?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/Chancedxdl?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/Chancedxdl/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;client_id&quot;:&quot;767946450.1572866553&quot;,&quot;originating_request_id&quot;:&quot;E199:03F8:3059A12:45BA860:5DC2A91D&quot;,&quot;originating_url&quot;:&quot;https://github.com/Chancedxdl/canvas-special/blob/master/photo-wall/a/jquery.js&quot;,&quot;referrer&quot;:&quot;https://github.com/Chancedxdl/canvas-special/tree/master/photo-wall/a&quot;,&quot;user_id&quot;:57344253}}"
    data-feature-preview-close-hmac="f5222f694b8ed6bf0e243f76da8c4badf8c2f6fce1b795688b86fcc2344b8831"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;client_id&quot;:&quot;767946450.1572866553&quot;,&quot;originating_request_id&quot;:&quot;E199:03F8:3059A12:45BA860:5DC2A91D&quot;,&quot;originating_url&quot;:&quot;https://github.com/Chancedxdl/canvas-special/blob/master/photo-wall/a/jquery.js&quot;,&quot;referrer&quot;:&quot;https://github.com/Chancedxdl/canvas-special/tree/master/photo-wall/a&quot;,&quot;user_id&quot;:57344253}}"
    data-hydro-click-hmac="90fce85823c9354bb1216ebad89bfa8934a99d9654440bc22461c344131a9938"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="ifZADZlVdWvp/OnB9XbHZGB0iAF/BIPJI1bJ9uPoLH7RgzGZzVyEZ0e3hd6TdmvyXAN7yYaIEaF6cCzitfHjnA==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  











  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">




  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="K0irT3G61m4iQu9U1Qd+4ni4IWCcMlwBUo4ihj3Tr2wLmKCF2Al2k8oCliOGbHM8aBD9ky663tTZz9O4rjfwRw==" />      <input type="hidden" name="repository_id" value="219656830">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:219656830,&quot;client_id&quot;:&quot;767946450.1572866553&quot;,&quot;originating_request_id&quot;:&quot;E199:03F8:3059A12:45BA860:5DC2A91D&quot;,&quot;originating_url&quot;:&quot;https://github.com/Chancedxdl/canvas-special/blob/master/photo-wall/a/jquery.js&quot;,&quot;referrer&quot;:&quot;https://github.com/Chancedxdl/canvas-special/tree/master/photo-wall/a&quot;,&quot;user_id&quot;:57344253}}" data-hydro-click-hmac="97914301aa666458e994f0412902bf45936e26fcda9b5e69ce1fb99d1bd10fc7" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/Chancedxdl/canvas-special/watchers"
          aria-label="0 users are watching this repository">
          0
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/Chancedxdl/canvas-special/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="eCklOFzI6Qu+qnpRvR7iehDYYNvIdMR/3QdkdgF4etjyEqU3dPExksgSNTqU/voW2YoacX2hRT2/b27lIMyAhA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar Chancedxdl/canvas-special" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:219656830,&quot;client_id&quot;:&quot;767946450.1572866553&quot;,&quot;originating_request_id&quot;:&quot;E199:03F8:3059A12:45BA860:5DC2A91D&quot;,&quot;originating_url&quot;:&quot;https://github.com/Chancedxdl/canvas-special/blob/master/photo-wall/a/jquery.js&quot;,&quot;referrer&quot;:&quot;https://github.com/Chancedxdl/canvas-special/tree/master/photo-wall/a&quot;,&quot;user_id&quot;:57344253}}" data-hydro-click-hmac="7312075462fb00b1814cc2e84c8419039a60eb2e0425b024b483b5224ae5afec" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/Chancedxdl/canvas-special/stargazers"
           aria-label="0 users starred this repository">
           0
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/Chancedxdl/canvas-special/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="HN84bacHnZywCdcZfXJ8b/x8A2xG9n+sEmOUKyNQO9BhRiZY5MepzGXPbHBWIgnXw6+PeANJFOdsRZwHjoOe9A==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star Chancedxdl/canvas-special" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:219656830,&quot;client_id&quot;:&quot;767946450.1572866553&quot;,&quot;originating_request_id&quot;:&quot;E199:03F8:3059A12:45BA860:5DC2A91D&quot;,&quot;originating_url&quot;:&quot;https://github.com/Chancedxdl/canvas-special/blob/master/photo-wall/a/jquery.js&quot;,&quot;referrer&quot;:&quot;https://github.com/Chancedxdl/canvas-special/tree/master/photo-wall/a&quot;,&quot;user_id&quot;:57344253}}" data-hydro-click-hmac="0ca8359eabd59c5d208c1d61689b1bab88e86bf48a028ff82695cbe939f200b8" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
</button>        <a class="social-count js-social-count" href="/Chancedxdl/canvas-special/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>  </div>

  </li>

  <li>
        <span class="btn btn-sm btn-with-count disabled tooltipped tooltipped-sw" aria-label="Cannot fork because you own this repository and are not a member of any organizations.">
          <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
          Fork
</span>
    <a href="/Chancedxdl/canvas-special/network/members" class="social-count"
       aria-label="390 users forked this repository">
      390
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=57344253" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Chancedxdl">Chancedxdl</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/Chancedxdl/canvas-special">canvas-special</a></strong>
  

    <span class="fork-flag" data-repository-hovercards-enabled>
      <span class="text">forked from <a data-hovercard-type="repository" data-hovercard-url="/bxm0927/canvas-special/hovercard" href="/bxm0927/canvas-special">bxm0927/canvas-special</a></span>
    </span>
</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /Chancedxdl/canvas-special" href="/Chancedxdl/canvas-special">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /Chancedxdl/canvas-special/pulls" href="/Chancedxdl/canvas-special/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /Chancedxdl/canvas-special/projects" href="/Chancedxdl/canvas-special/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /Chancedxdl/canvas-special/wiki" href="/Chancedxdl/canvas-special/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /Chancedxdl/canvas-special/network/alerts" href="/Chancedxdl/canvas-special/network/alerts">
      <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /Chancedxdl/canvas-special/pulse" href="/Chancedxdl/canvas-special/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_settings repo_branch_settings hooks integration_installations repo_keys_settings issue_template_editor secrets_settings key_links_settings /Chancedxdl/canvas-special/settings" href="/Chancedxdl/canvas-special/settings">
      <svg class="octicon octicon-gear" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
      Settings
</a>
</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /Chancedxdl/canvas-special" href="/Chancedxdl/canvas-special">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /Chancedxdl/canvas-special/pulls" href="/Chancedxdl/canvas-special/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /Chancedxdl/canvas-special/projects" href="/Chancedxdl/canvas-special/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /Chancedxdl/canvas-special/wiki" href="/Chancedxdl/canvas-special/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /Chancedxdl/canvas-special/network/alerts" href="/Chancedxdl/canvas-special/network/alerts">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /Chancedxdl/canvas-special/pulse" href="/Chancedxdl/canvas-special/pulse">
        Pulse
</a>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/Chancedxdl/canvas-special/blob/0e3413b177b8439fa90cf584c461afc6eeeea237/photo-wall/a/jquery.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:0a99adbdbdaf019c2f6c61f6091fe722 -->
      

    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/Chancedxdl/canvas-special/ref-list/master/photo-wall/a/jquery.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/Chancedxdl/canvas-special/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="photo-wall/a/jquery.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/Chancedxdl/canvas-special"><span>canvas-special</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/Chancedxdl/canvas-special/tree/master/photo-wall"><span>photo-wall</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/Chancedxdl/canvas-special/tree/master/photo-wall/a"><span>a</span></a></span><span class="separator">/</span><strong class="final-path">jquery.js</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/Chancedxdl/canvas-special/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="photo-wall/a/jquery.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    <include-fragment src="/Chancedxdl/canvas-special/contributors/master/photo-wall/a/jquery.js" class="Box Box--condensed commit-loader">
      <div class="Box-body bg-blue-light f6">
        Fetching contributors&hellip;
      </div>

      <div class="Box-body d-flex flex-items-center" >
          <img alt="" class="loader-loading mr-2" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="text-red h6 loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>




    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      2 lines (2 sloc)
      <span class="file-info-divider"></span>
    91.4 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/Chancedxdl/canvas-special/raw/master/photo-wall/a/jquery.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/Chancedxdl/canvas-special/blame/master/photo-wall/a/jquery.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/Chancedxdl/canvas-special/commits/master/photo-wall/a/jquery.js">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw hide-sm"
               href="x-github-client://openRepo/https://github.com/Chancedxdl/canvas-special?branch=master&amp;filepath=photo-wall%2Fa%2Fjquery.js"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:windows">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/Chancedxdl/canvas-special/edit/master/photo-wall/a/jquery.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="avgFXCSBGXYGmI9Fn3repBiBQV0AC/JD5E+FdPI+CkHrWoqUvTnHWcJzH0Aaf56Wpe2qQVXwD9XPz0W0EVvtgA==" />
              <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
                aria-label="Edit this file" data-hotkey="e" data-disable-with>
                <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
              </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/Chancedxdl/canvas-special/delete/master/photo-wall/a/jquery.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="ghbXrxm77Jh0kdX+OI7WUQP4B6Qt4Tf4JxUBUFIeoj1dJNjRo2RfVoj4QvDwQYgyMipLeXZiHWfAuyeppEwE/Q==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Delete this file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>



        <div class="f6 v-align-middle text-gray px-3 py-2 border-bottom bg-gray-light d-flex flex-justify-between">
            <p class="text-mono mb-0">
              <svg style="color: #d3ac3b;" class="octicon octicon-primitive-dot" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/></svg>
              Code navigation is still being calculated for this commit. Check back in a bit.
                <span class="lh-condensed px-1 rounded-1 border border-green text-normal text-small">Beta</span>
            </p>
            <div>
              <a href="https://help.github.com/en/articles/navigating-code-on-github">Learn more</a>
              or
              <a href="mailto:code-nav@github.com">give us feedback</a>
            </div>
        </div>

      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*! jQuery v1.8.3 jquery.com | jquery.org/license */</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&amp;&amp;e.nodeType===1){var i=&quot;data-&quot;+n.replace(P,&quot;-$1&quot;).toLowerCase();r=e.getAttribute(i);if(typeof r==&quot;string&quot;){try{r=r===&quot;true&quot;?!0:r===&quot;false&quot;?!1:r===&quot;null&quot;?null:+r+&quot;&quot;===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t===&quot;data&quot;&amp;&amp;v.isEmptyObject(e[t]))continue;if(t!==&quot;toJSON&quot;)return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&amp;&amp;e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t==&quot;string&quot;){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)&gt;=0===n})}function lt(e){var t=ct.split(&quot;|&quot;),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r&lt;i;r++)v.event.add(t,n,u[n][r])}o.data&amp;&amp;(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&amp;&amp;t.clearAttributes(),t.mergeAttributes&amp;&amp;t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n===&quot;object&quot;?(t.parentNode&amp;&amp;(t.outerHTML=e.outerHTML),v.support.html5Clone&amp;&amp;e.innerHTML&amp;&amp;!v.trim(t.innerHTML)&amp;&amp;(t.innerHTML=e.innerHTML)):n===&quot;input&quot;&amp;&amp;Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&amp;&amp;(t.value=e.value)):n===&quot;option&quot;?t.selected=e.defaultSelected:n===&quot;input&quot;||n===&quot;textarea&quot;?t.defaultValue=e.defaultValue:n===&quot;script&quot;&amp;&amp;t.text!==e.text&amp;&amp;(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!=&quot;undefined&quot;?e.getElementsByTagName(&quot;*&quot;):typeof e.querySelectorAll!=&quot;undefined&quot;?e.querySelectorAll(&quot;*&quot;):[]}function _t(e){Et.test(e.type)&amp;&amp;(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,&quot;display&quot;)===&quot;none&quot;||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s&lt;o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,&quot;olddisplay&quot;),t?(!i[s]&amp;&amp;n.style.display===&quot;none&quot;&amp;&amp;(n.style.display=&quot;&quot;),n.style.display===&quot;&quot;&amp;&amp;Gt(n)&amp;&amp;(i[s]=v._data(n,&quot;olddisplay&quot;,nn(n.nodeName)))):(r=Dt(n,&quot;display&quot;),!i[s]&amp;&amp;r!==&quot;none&quot;&amp;&amp;v._data(n,&quot;olddisplay&quot;,r))}for(s=0;s&lt;o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display===&quot;none&quot;||n.style.display===&quot;&quot;)n.style.display=t?i[s]||&quot;&quot;:&quot;none&quot;}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||&quot;px&quot;):t}function en(e,t,n,r){var i=n===(r?&quot;border&quot;:&quot;content&quot;)?4:t===&quot;width&quot;?1:0,s=0;for(;i&lt;4;i+=2)n===&quot;margin&quot;&amp;&amp;(s+=v.css(e,n+$t[i],!0)),r?(n===&quot;content&quot;&amp;&amp;(s-=parseFloat(Dt(e,&quot;padding&quot;+$t[i]))||0),n!==&quot;margin&quot;&amp;&amp;(s-=parseFloat(Dt(e,&quot;border&quot;+$t[i]+&quot;Width&quot;))||0)):(s+=parseFloat(Dt(e,&quot;padding&quot;+$t[i]))||0,n!==&quot;padding&quot;&amp;&amp;(s+=parseFloat(Dt(e,&quot;border&quot;+$t[i]+&quot;Width&quot;))||0));return s}function tn(e,t,n){var r=t===&quot;width&quot;?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&amp;&amp;v.css(e,&quot;boxSizing&quot;)===&quot;border-box&quot;;if(r&lt;=0||r==null){r=Dt(e,t);if(r&lt;0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&amp;&amp;(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?&quot;border&quot;:&quot;content&quot;),i)+&quot;px&quot;}function nn(e){if(Wt[e])return Wt[e];var t=v(&quot;&lt;&quot;+e+&quot;&gt;&quot;).appendTo(i.body),n=t.css(&quot;display&quot;);t.remove();if(n===&quot;none&quot;||n===&quot;&quot;){Pt=i.body.appendChild(Pt||v.extend(i.createElement(&quot;iframe&quot;),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write(&quot;&lt;!doctype html&gt;&lt;html&gt;&lt;body&gt;&quot;),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,&quot;display&quot;),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+&quot;[&quot;+(typeof i==&quot;object&quot;?t:&quot;&quot;)+&quot;]&quot;,i,n,r)});else if(!n&amp;&amp;v.type(t)===&quot;object&quot;)for(i in t)fn(e+&quot;[&quot;+i+&quot;]&quot;,t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!=&quot;string&quot;&amp;&amp;(n=t,t=&quot;*&quot;);var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u&lt;a;u++)r=o[u],s=/^\+/.test(r),s&amp;&amp;(r=r.substr(1)||&quot;*&quot;),i=e[r]=e[r]||[],i[s?&quot;unshift&quot;:&quot;push&quot;](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f&lt;l&amp;&amp;(c||!u);f++)u=a[f](n,r,i),typeof u==&quot;string&quot;&amp;&amp;(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&amp;&amp;!o[&quot;*&quot;]&amp;&amp;(u=kn(e,n,r,i,&quot;*&quot;,o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&amp;&amp;((s[r]?e:i||(i={}))[r]=n[r]);i&amp;&amp;v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&amp;&amp;(n[l[s]]=r[s]);while(f[0]===&quot;*&quot;)f.shift(),i===t&amp;&amp;(i=e.mimeType||n.getResponseHeader(&quot;content-type&quot;));if(i)for(s in a)if(a[s]&amp;&amp;a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+&quot; &quot;+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&amp;&amp;f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&amp;&amp;(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!==&quot;*&quot;){if(u!==&quot;*&quot;&amp;&amp;u!==i){n=a[u+&quot; &quot;+i]||a[&quot;* &quot;+i];if(!n)for(r in a){s=r.split(&quot; &quot;);if(s[1]===i){n=a[u+&quot; &quot;+s[0]]||a[&quot;* &quot;+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&amp;&amp;(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&amp;&amp;e[&quot;throws&quot;])t=n(t);else try{t=n(t)}catch(l){return{state:&quot;parsererror&quot;,error:n?l:&quot;No conversion from &quot;+u+&quot; to &quot;+i}}}u=i}return{state:&quot;success&quot;,data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn[&quot;*&quot;]),i=0,s=r.length;for(;i&lt;s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s&lt;o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i&lt;1&amp;&amp;o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n&lt;r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i&lt;o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&amp;&amp;f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&amp;&amp;(i=s[1],s=e[n]=s[0]),n!==r&amp;&amp;(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&amp;&amp;&quot;expand&quot;in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&amp;&amp;Gt(e);n.queue||(l=v._queueHooks(e,&quot;fx&quot;),l.unqueued==null&amp;&amp;(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,&quot;fx&quot;).length||l.empty.fire()})})),e.nodeType===1&amp;&amp;(&quot;height&quot;in t||&quot;width&quot;in t)&amp;&amp;(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,&quot;display&quot;)===&quot;inline&quot;&amp;&amp;v.css(e,&quot;float&quot;)===&quot;none&quot;&amp;&amp;(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)===&quot;inline&quot;?p.display=&quot;inline-block&quot;:p.zoom=1)),n.overflow&amp;&amp;(p.overflow=&quot;hidden&quot;,v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s===&quot;toggle&quot;;if(s===(g?&quot;hide&quot;:&quot;show&quot;))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,&quot;fxshow&quot;)||v._data(e,&quot;fxshow&quot;,{}),&quot;hidden&quot;in u&amp;&amp;(g=u.hidden),a&amp;&amp;(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,&quot;fxshow&quot;,!0);for(t in d)v.style(e,t,d[t])});for(r=0;r&lt;o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&amp;&amp;(f.end=f.start,f.start=i===&quot;width&quot;||i===&quot;height&quot;?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i&lt;4;i+=2-t)n=$t[i],r[&quot;margin&quot;+n]=r[&quot;padding&quot;+n]=e;return t&amp;&amp;(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#&lt;]*(&lt;[\w\W]+&gt;)[^&gt;]*$|#([\w\-]*)$)/,E=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:[&quot;\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/&quot;[^&quot;\\\r\n]*&quot;|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+&quot;&quot;).toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener(&quot;DOMContentLoaded&quot;,A,!1),v.ready()):i.readyState===&quot;complete&quot;&amp;&amp;(i.detachEvent(&quot;onreadystatechange&quot;,A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e==&quot;string&quot;){e.charAt(0)===&quot;&lt;&quot;&amp;&amp;e.charAt(e.length-1)===&quot;&gt;&quot;&amp;&amp;e.length&gt;=3?s=[null,e,null]:s=w.exec(e);if(s&amp;&amp;(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&amp;&amp;n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&amp;&amp;v.isPlainObject(n)&amp;&amp;this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&amp;&amp;o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&amp;&amp;(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:&quot;&quot;,jquery:&quot;1.8.3&quot;,length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e&lt;0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t===&quot;find&quot;?r.selector=this.selector+(this.selector?&quot; &quot;:&quot;&quot;)+n:t&amp;&amp;(r.selector=this.selector+&quot;.&quot;+t+&quot;(&quot;+n+&quot;)&quot;),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),&quot;slice&quot;,l.call(arguments).join(&quot;,&quot;))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u==&quot;boolean&quot;&amp;&amp;(l=u,u=arguments[1]||{},a=2),typeof u!=&quot;object&quot;&amp;&amp;!v.isFunction(u)&amp;&amp;(u={}),f===a&amp;&amp;(u=this,--a);for(;a&lt;f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&amp;&amp;i&amp;&amp;(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&amp;&amp;v.isArray(r)?r:[]):o=r&amp;&amp;v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&amp;&amp;(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&amp;&amp;(e.$=a),t&amp;&amp;e.jQuery===v&amp;&amp;(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&amp;&amp;--v.readyWait&gt;0)return;r.resolveWith(i,[v]),v.fn.trigger&amp;&amp;v(i).trigger(&quot;ready&quot;).off(&quot;ready&quot;)},isFunction:function(e){return v.type(e)===&quot;function&quot;},isArray:Array.isArray||function(e){return v.type(e)===&quot;array&quot;},isWindow:function(e){return e!=null&amp;&amp;e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&amp;&amp;isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||&quot;object&quot;},isPlainObject:function(e){if(!e||v.type(e)!==&quot;object&quot;||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&amp;&amp;!p.call(e,&quot;constructor&quot;)&amp;&amp;!p.call(e.constructor.prototype,&quot;isPrototypeOf&quot;))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!=&quot;string&quot;?null:(typeof t==&quot;boolean&quot;&amp;&amp;(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!=&quot;string&quot;)return null;t=v.trim(t);if(e.JSON&amp;&amp;e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,&quot;@&quot;).replace(N,&quot;]&quot;).replace(x,&quot;&quot;)))return(new Function(&quot;return &quot;+t))();v.error(&quot;Invalid JSON: &quot;+t)},parseXML:function(n){var r,i;if(!n||typeof n!=&quot;string&quot;)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,&quot;text/xml&quot;)):(r=new ActiveXObject(&quot;Microsoft.XMLDOM&quot;),r.async=&quot;false&quot;,r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName(&quot;parsererror&quot;).length)&amp;&amp;v.error(&quot;Invalid XML: &quot;+n),r},noop:function(){},globalEval:function(t){t&amp;&amp;g.test(t)&amp;&amp;(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,&quot;ms-&quot;).replace(k,L)},nodeName:function(e,t){return e.nodeName&amp;&amp;e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s&lt;o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s&lt;o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&amp;&amp;!d.call(&quot;\ufeff\u00a0&quot;)?function(e){return e==null?&quot;&quot;:d.call(e)}:function(e){return e==null?&quot;&quot;:(e+&quot;&quot;).replace(b,&quot;&quot;)},makeArray:function(e,t){var n,r=t||[];return e!=null&amp;&amp;(n=v.type(e),e.length==null||n===&quot;string&quot;||n===&quot;function&quot;||n===&quot;regexp&quot;||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n&lt;0?Math.max(0,r+n):n:0;for(;n&lt;r;n++)if(n in t&amp;&amp;t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r==&quot;number&quot;)for(;s&lt;r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s&lt;o;s++)r=!!t(e[s],s),n!==r&amp;&amp;i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&amp;&amp;typeof a==&quot;number&quot;&amp;&amp;(a&gt;0&amp;&amp;e[0]&amp;&amp;e[a-1]||a===0||v.isArray(e));if(f)for(;u&lt;a;u++)i=n(e[u],u,r),i!=null&amp;&amp;(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&amp;&amp;(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n==&quot;string&quot;&amp;&amp;(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&amp;&amp;typeof r==&quot;object&quot;){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&amp;&amp;v.isFunction(i),f&amp;&amp;(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l&lt;c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState===&quot;complete&quot;)setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener(&quot;DOMContentLoaded&quot;,A,!1),e.addEventListener(&quot;load&quot;,v.ready,!1);else{i.attachEvent(&quot;onreadystatechange&quot;,A),e.attachEvent(&quot;onload&quot;,v.ready);var n=!1;try{n=e.frameElement==null&amp;&amp;i.documentElement}catch(s){}n&amp;&amp;n.doScroll&amp;&amp;function o(){if(!v.isReady){try{n.doScroll(&quot;left&quot;)}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each(&quot;Boolean Number String Function Array Date RegExp Object&quot;.split(&quot; &quot;),function(e,t){O[&quot;[object &quot;+t+&quot;]&quot;]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e==&quot;string&quot;?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&amp;&amp;[],l=function(t){n=e.memory&amp;&amp;t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&amp;&amp;u&lt;o;u++)if(a[u].apply(t[0],t[1])===!1&amp;&amp;e.stopOnFalse){n=!1;break}i=!1,a&amp;&amp;(f?f.length&amp;&amp;l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i===&quot;function&quot;?(!e.unique||!c.has(n))&amp;&amp;a.push(n):n&amp;&amp;n.length&amp;&amp;i!==&quot;string&quot;&amp;&amp;r(n)})})(arguments),i?o=a.length:n&amp;&amp;(s=t,l(n))}return this},remove:function(){return a&amp;&amp;v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))&gt;-1)a.splice(n,1),i&amp;&amp;(n&lt;=o&amp;&amp;o--,n&lt;=u&amp;&amp;u--)}),this},has:function(e){return v.inArray(e,a)&gt;-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&amp;&amp;(!r||f)&amp;&amp;(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[[&quot;resolve&quot;,&quot;done&quot;,v.Callbacks(&quot;once memory&quot;),&quot;resolved&quot;],[&quot;reject&quot;,&quot;fail&quot;,v.Callbacks(&quot;once memory&quot;),&quot;rejected&quot;],[&quot;notify&quot;,&quot;progress&quot;,v.Callbacks(&quot;memory&quot;)]],n=&quot;pending&quot;,r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&amp;&amp;v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+&quot;With&quot;](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&amp;&amp;o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+&quot;With&quot;]=o.fireWith}),r.promise(i),e&amp;&amp;e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&amp;&amp;v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length&gt;1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r&gt;1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t&lt;r;t++)n[t]&amp;&amp;v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement(&quot;div&quot;);p.setAttribute(&quot;className&quot;,&quot;t&quot;),p.innerHTML=&quot;  &lt;link/&gt;&lt;table&gt;&lt;/table&gt;&lt;a href=&#39;/a&#39;&gt;a&lt;/a&gt;&lt;input type=&#39;checkbox&#39;/&gt;&quot;,n=p.getElementsByTagName(&quot;*&quot;),r=p.getElementsByTagName(&quot;a&quot;)[0];if(!n||!r||!n.length)return{};s=i.createElement(&quot;select&quot;),o=s.appendChild(i.createElement(&quot;option&quot;)),u=p.getElementsByTagName(&quot;input&quot;)[0],r.style.cssText=&quot;top:1px;float:left;opacity:.5&quot;,t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName(&quot;tbody&quot;).length,htmlSerialize:!!p.getElementsByTagName(&quot;link&quot;).length,style:/top/.test(r.getAttribute(&quot;style&quot;)),hrefNormalized:r.getAttribute(&quot;href&quot;)===&quot;/a&quot;,opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value===&quot;on&quot;,optSelected:o.selected,getSetAttribute:p.className!==&quot;t&quot;,enctype:!!i.createElement(&quot;form&quot;).enctype,html5Clone:i.createElement(&quot;nav&quot;).cloneNode(!0).outerHTML!==&quot;&lt;:nav&gt;&lt;/:nav&gt;&quot;,boxModel:i.compatMode===&quot;CSS1Compat&quot;,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&amp;&amp;p.attachEvent&amp;&amp;p.fireEvent&amp;&amp;(p.attachEvent(&quot;onclick&quot;,h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent(&quot;onclick&quot;),p.detachEvent(&quot;onclick&quot;,h)),u=i.createElement(&quot;input&quot;),u.value=&quot;t&quot;,u.setAttribute(&quot;type&quot;,&quot;radio&quot;),t.radioValue=u.value===&quot;t&quot;,u.setAttribute(&quot;checked&quot;,&quot;checked&quot;),u.setAttribute(&quot;name&quot;,&quot;t&quot;),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f=&quot;on&quot;+l,c=f in p,c||(p.setAttribute(f,&quot;return;&quot;),c=typeof p[f]==&quot;function&quot;),t[l+&quot;Bubbles&quot;]=c;return v(function(){var n,r,s,o,u=&quot;padding:0;margin:0;border:0;display:block;overflow:hidden;&quot;,a=i.getElementsByTagName(&quot;body&quot;)[0];if(!a)return;n=i.createElement(&quot;div&quot;),n.style.cssText=&quot;visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px&quot;,a.insertBefore(n,a.firstChild),r=i.createElement(&quot;div&quot;),n.appendChild(r),r.innerHTML=&quot;&lt;table&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;t&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;,s=r.getElementsByTagName(&quot;td&quot;),s[0].style.cssText=&quot;padding:0;margin:0;border:0;display:none&quot;,c=s[0].offsetHeight===0,s[0].style.display=&quot;&quot;,s[1].style.display=&quot;none&quot;,t.reliableHiddenOffsets=c&amp;&amp;s[0].offsetHeight===0,r.innerHTML=&quot;&quot;,r.style.cssText=&quot;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;&quot;,t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&amp;&amp;(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!==&quot;1%&quot;,t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:&quot;4px&quot;}).width===&quot;4px&quot;,o=i.createElement(&quot;div&quot;),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width=&quot;0&quot;,r.style.width=&quot;1px&quot;,r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!=&quot;undefined&quot;&amp;&amp;(r.innerHTML=&quot;&quot;,r.style.cssText=u+&quot;width:1px;padding:1px;display:inline;zoom:1&quot;,t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display=&quot;block&quot;,r.style.overflow=&quot;visible&quot;,r.innerHTML=&quot;&lt;div&gt;&lt;/div&gt;&quot;,r.firstChild.style.width=&quot;5px&quot;,t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:&quot;jQuery&quot;+(v.fn.jquery+Math.random()).replace(/\D/g,&quot;&quot;),noData:{embed:!0,object:&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot;,applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&amp;&amp;!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n==&quot;string&quot;,f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&amp;&amp;u;if((!c||!l[c]||!i&amp;&amp;!l[c].data)&amp;&amp;a&amp;&amp;r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n==&quot;object&quot;||typeof n==&quot;function&quot;)i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&amp;&amp;(s[v.camelCase(n)]=r),a?(o=s[n],o==null&amp;&amp;(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(&quot; &quot;)));for(i=0,s=t.length;i&lt;s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&amp;&amp;v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&amp;&amp;e.getAttribute(&quot;classid&quot;)===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&amp;&amp;!v._data(a,&quot;parsedAttrs&quot;)){s=a.attributes;for(u=s.length;f&lt;u;f++)o=s[f].name,o.indexOf(&quot;data-&quot;)||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,&quot;parsedAttrs&quot;,!0)}}return l}return typeof e==&quot;object&quot;?this.each(function(){v.data(this,e)}):(r=e.split(&quot;.&quot;,2),r[1]=r[1]?&quot;.&quot;+r[1]:&quot;&quot;,i=r[1]+&quot;!&quot;,v.access(this,function(n){if(n===t)return l=this.triggerHandler(&quot;getData&quot;+i,[r[0]]),l===t&amp;&amp;a&amp;&amp;(l=v.data(a,e),l=H(a,e,l)),l===t&amp;&amp;r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler(&quot;setData&quot;+i,r),v.data(this,e,n),t.triggerHandler(&quot;changeData&quot;+i,r)})},null,n,arguments.length&gt;1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||&quot;fx&quot;)+&quot;queue&quot;,r=v._data(e,t),n&amp;&amp;(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||&quot;fx&quot;;var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i===&quot;inprogress&quot;&amp;&amp;(i=n.shift(),r--),i&amp;&amp;(t===&quot;fx&quot;&amp;&amp;n.unshift(&quot;inprogress&quot;),delete s.stop,i.call(e,o,s)),!r&amp;&amp;s&amp;&amp;s.empty.fire()},_queueHooks:function(e,t){var n=t+&quot;queueHooks&quot;;return v._data(e,n)||v._data(e,n,{empty:v.Callbacks(&quot;once memory&quot;).add(function(){v.removeData(e,t+&quot;queue&quot;,!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!=&quot;string&quot;&amp;&amp;(n=e,e=&quot;fx&quot;,r--),arguments.length&lt;r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e===&quot;fx&quot;&amp;&amp;t[0]!==&quot;inprogress&quot;&amp;&amp;v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||&quot;fx&quot;,this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||&quot;fx&quot;,[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!=&quot;string&quot;&amp;&amp;(n=e,e=t),e=e||&quot;fx&quot;;while(u--)r=v._data(o[u],e+&quot;queueHooks&quot;),r&amp;&amp;r.empty&amp;&amp;(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length&gt;1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length&gt;1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&amp;&amp;typeof e==&quot;string&quot;){t=e.split(y);for(n=0,r=this.length;n&lt;r;n++){i=this[n];if(i.nodeType===1)if(!i.className&amp;&amp;t.length===1)i.className=e;else{s=&quot; &quot;+i.className+&quot; &quot;;for(o=0,u=t.length;o&lt;u;o++)s.indexOf(&quot; &quot;+t[o]+&quot; &quot;)&lt;0&amp;&amp;(s+=t[o]+&quot; &quot;);i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&amp;&amp;typeof e==&quot;string&quot;||e===t){n=(e||&quot;&quot;).split(y);for(u=0,a=this.length;u&lt;a;u++){i=this[u];if(i.nodeType===1&amp;&amp;i.className){r=(&quot; &quot;+i.className+&quot; &quot;).replace(q,&quot; &quot;);for(s=0,o=n.length;s&lt;o;s++)while(r.indexOf(&quot; &quot;+n[s]+&quot; &quot;)&gt;=0)r=r.replace(&quot; &quot;+n[s]+&quot; &quot;,&quot; &quot;);i.className=e?v.trim(r):&quot;&quot;}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t==&quot;boolean&quot;;return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n===&quot;string&quot;){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?&quot;addClass&quot;:&quot;removeClass&quot;](i)}else if(n===&quot;undefined&quot;||n===&quot;boolean&quot;)this.className&amp;&amp;v._data(this,&quot;__className__&quot;,this.className),this.className=this.className||e===!1?&quot;&quot;:v._data(this,&quot;__className__&quot;)||&quot;&quot;})},hasClass:function(e){var t=&quot; &quot;+e+&quot; &quot;,n=0,r=this.length;for(;n&lt;r;n++)if(this[n].nodeType===1&amp;&amp;(&quot; &quot;+this[n].className+&quot; &quot;).replace(q,&quot; &quot;).indexOf(t)&gt;=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&amp;&amp;&quot;get&quot;in n&amp;&amp;(r=n.get(s,&quot;value&quot;))!==t?r:(r=s.value,typeof r==&quot;string&quot;?r.replace(R,&quot;&quot;):r==null?&quot;&quot;:r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s=&quot;&quot;:typeof s==&quot;number&quot;?s+=&quot;&quot;:v.isArray(s)&amp;&amp;(s=v.map(s,function(e){return e==null?&quot;&quot;:e+&quot;&quot;})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!(&quot;set&quot;in n)||n.set(this,s,&quot;value&quot;)===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type===&quot;select-one&quot;||i&lt;0,o=s?null:[],u=s?i+1:r.length,a=i&lt;0?u:s?i:0;for(;a&lt;u;a++){n=r[a];if((n.selected||a===i)&amp;&amp;(v.support.optDisabled?!n.disabled:n.getAttribute(&quot;disabled&quot;)===null)&amp;&amp;(!n.parentNode.disabled||!v.nodeName(n.parentNode,&quot;optgroup&quot;))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find(&quot;option&quot;).each(function(){this.selected=v.inArray(v(this).val(),n)&gt;=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&amp;&amp;v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute==&quot;undefined&quot;)return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&amp;&amp;(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&amp;&amp;&quot;set&quot;in o&amp;&amp;u&amp;&amp;(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+&quot;&quot;),r)}return o&amp;&amp;&quot;get&quot;in o&amp;&amp;u&amp;&amp;(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&amp;&amp;e.nodeType===1){r=t.split(y);for(;o&lt;r.length;o++)i=r[o],i&amp;&amp;(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,&quot;&quot;),e.removeAttribute(V?i:n),s&amp;&amp;n in e&amp;&amp;(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&amp;&amp;e.parentNode)v.error(&quot;type property can&#39;t be changed&quot;);else if(!v.support.radioValue&amp;&amp;t===&quot;radio&quot;&amp;&amp;v.nodeName(e,&quot;input&quot;)){var n=e.value;return e.setAttribute(&quot;type&quot;,t),n&amp;&amp;(e.value=n),t}}},value:{get:function(e,t){return j&amp;&amp;v.nodeName(e,&quot;button&quot;)?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&amp;&amp;v.nodeName(e,&quot;button&quot;))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:&quot;tabIndex&quot;,readonly:&quot;readOnly&quot;,&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;,maxlength:&quot;maxLength&quot;,cellspacing:&quot;cellSpacing&quot;,cellpadding:&quot;cellPadding&quot;,rowspan:&quot;rowSpan&quot;,colspan:&quot;colSpan&quot;,usemap:&quot;useMap&quot;,frameborder:&quot;frameBorder&quot;,contenteditable:&quot;contentEditable&quot;},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&amp;&amp;(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&amp;&amp;&quot;set&quot;in s&amp;&amp;(i=s.set(e,r,n))!==t?i:e[n]=r:s&amp;&amp;&quot;get&quot;in s&amp;&amp;(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode(&quot;tabindex&quot;);return n&amp;&amp;n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&amp;&amp;e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!=&quot;boolean&quot;&amp;&amp;(r=e.getAttributeNode(n))&amp;&amp;r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&amp;&amp;(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&amp;&amp;(I[n]?r.value!==&quot;&quot;:r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+&quot;&quot;}},v.each([&quot;width&quot;,&quot;height&quot;],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n===&quot;&quot;)return e.setAttribute(t,&quot;auto&quot;),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===&quot;&quot;&amp;&amp;(t=&quot;false&quot;),j.set(e,t,n)}}),v.support.hrefNormalized||v.each([&quot;href&quot;,&quot;src&quot;,&quot;width&quot;,&quot;height&quot;],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+&quot;&quot;}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&amp;&amp;(t.selectedIndex,t.parentNode&amp;&amp;t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype=&quot;encoding&quot;),v.support.checkOn||v.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){v.valHooks[this]={get:function(e){return e.getAttribute(&quot;value&quot;)===null?&quot;on&quot;:e.value}}}),v.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)&gt;=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,&quot;mouseenter$1 mouseleave$1&quot;)};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&amp;&amp;(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v==&quot;undefined&quot;||!!e&amp;&amp;v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(&quot; &quot;);for(f=0;f&lt;n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||&quot;&quot;).split(&quot;.&quot;).sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&amp;&amp;v.expr.match.needsContext.test(s),namespace:h.join(&quot;.&quot;)},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&amp;&amp;e.attachEvent(&quot;on&quot;+c,u)}g.add&amp;&amp;(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&amp;&amp;v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||&quot;&quot;)).split(&quot; &quot;);for(s=0;s&lt;t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp(&quot;(^|\\.)&quot;+f.split(&quot;.&quot;).sort().join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;):null;for(c=0;c&lt;d.length;c++)m=d[c],(i||a===m.origType)&amp;&amp;(!n||n.guid===m.guid)&amp;&amp;(!f||f.test(m.namespace))&amp;&amp;(!r||r===m.selector||r===&quot;**&quot;&amp;&amp;m.selector)&amp;&amp;(d.splice(c--,1),m.selector&amp;&amp;d.delegateCount--,p.remove&amp;&amp;p.remove.call(e,m));d.length===0&amp;&amp;l!==d.length&amp;&amp;((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&amp;&amp;v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&amp;&amp;(delete g.handle,v.removeData(e,&quot;events&quot;,!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&amp;&amp;s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf(&quot;!&quot;)&gt;=0&amp;&amp;(y=y.slice(0,-1),a=!0),y.indexOf(&quot;.&quot;)&gt;=0&amp;&amp;(b=y.split(&quot;.&quot;),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&amp;&amp;!v.event.global[y])return;n=typeof n==&quot;object&quot;?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join(&quot;.&quot;),n.namespace_re=n.namespace?new RegExp(&quot;(^|\\.)&quot;+b.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;):null,h=y.indexOf(&quot;:&quot;)&lt;0?&quot;on&quot;+y:&quot;&quot;;if(!s){u=v.cache;for(f in u)u[f].events&amp;&amp;u[f].events[y]&amp;&amp;v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&amp;&amp;p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&amp;&amp;!p.noBubble&amp;&amp;!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&amp;&amp;m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f&lt;m.length&amp;&amp;!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,&quot;events&quot;)||{})[n.type]&amp;&amp;v._data(l,&quot;handle&quot;),d&amp;&amp;d.apply(l,r),d=h&amp;&amp;l[h],d&amp;&amp;v.acceptData(l)&amp;&amp;d.apply&amp;&amp;d.apply(l,r)===!1&amp;&amp;n.preventDefault();return n.type=y,!o&amp;&amp;!n.isDefaultPrevented()&amp;&amp;(!p._default||p._default.apply(s.ownerDocument,r)===!1)&amp;&amp;(y!==&quot;click&quot;||!v.nodeName(s,&quot;a&quot;))&amp;&amp;v.acceptData(s)&amp;&amp;h&amp;&amp;s[y]&amp;&amp;(y!==&quot;focus&quot;&amp;&amp;y!==&quot;blur&quot;||n.target.offsetWidth!==0)&amp;&amp;!v.isWindow(s)&amp;&amp;(c=s[h],c&amp;&amp;(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&amp;&amp;(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,&quot;events&quot;)||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&amp;&amp;!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&amp;&amp;b.preDispatch.call(this,n)===!1)return;if(m&amp;&amp;(!n.button||n.type!==&quot;click&quot;))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!==&quot;click&quot;){u={},f=[];for(r=0;r&lt;m;r++)c=d[r],h=c.selector,u[h]===t&amp;&amp;(u[h]=c.needsContext?v(h,this).index(s)&gt;=0:v.find(h,this,null,[s]).length),u[h]&amp;&amp;f.push(c);f.length&amp;&amp;w.push({elem:s,matches:f})}d.length&gt;m&amp;&amp;w.push({elem:this,matches:d.slice(m)});for(r=0;r&lt;w.length&amp;&amp;!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i&lt;a.matches.length&amp;&amp;!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&amp;&amp;!c.namespace||n.namespace_re&amp;&amp;n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&amp;&amp;(n.result=o,o===!1&amp;&amp;(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&amp;&amp;b.postDispatch.call(this,n),n.result},props:&quot;attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which&quot;.split(&quot; &quot;),fixHooks:{},keyHooks:{props:&quot;char charCode key keyCode&quot;.split(&quot; &quot;),filter:function(e,t){return e.which==null&amp;&amp;(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:&quot;button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement&quot;.split(&quot; &quot;),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&amp;&amp;n.clientX!=null&amp;&amp;(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&amp;&amp;s.scrollLeft||o&amp;&amp;o.scrollLeft||0)-(s&amp;&amp;s.clientLeft||o&amp;&amp;o.clientLeft||0),e.pageY=n.clientY+(s&amp;&amp;s.scrollTop||o&amp;&amp;o.scrollTop||0)-(s&amp;&amp;s.clientTop||o&amp;&amp;o.clientTop||0)),!e.relatedTarget&amp;&amp;a&amp;&amp;(e.relatedTarget=a===e.target?n.toElement:a),!e.which&amp;&amp;u!==t&amp;&amp;(e.which=u&amp;1?1:u&amp;2?3:u&amp;4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&amp;&amp;(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:&quot;focusin&quot;},blur:{delegateType:&quot;focusout&quot;},beforeunload:{setup:function(e,t,n){v.isWindow(this)&amp;&amp;(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&amp;&amp;(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&amp;&amp;n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&amp;&amp;e.removeEventListener(t,n,!1)}:function(e,t,n){var r=&quot;on&quot;+t;e.detachEvent&amp;&amp;(typeof e[r]==&quot;undefined&quot;&amp;&amp;(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&amp;&amp;e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&amp;&amp;e.getPreventDefault()?tt:et):this.type=e,t&amp;&amp;v.extend(this,t),this.timeStamp=e&amp;&amp;e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&amp;&amp;e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&amp;&amp;!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,&quot;form&quot;))return!1;v.event.add(this,&quot;click._submit keypress._submit&quot;,function(e){var n=e.target,r=v.nodeName(n,&quot;input&quot;)||v.nodeName(n,&quot;button&quot;)?n.form:t;r&amp;&amp;!v._data(r,&quot;_submit_attached&quot;)&amp;&amp;(v.event.add(r,&quot;submit._submit&quot;,function(e){e._submit_bubble=!0}),v._data(r,&quot;_submit_attached&quot;,!0))})},postDispatch:function(e){e._submit_bubble&amp;&amp;(delete e._submit_bubble,this.parentNode&amp;&amp;!e.isTrigger&amp;&amp;v.event.simulate(&quot;submit&quot;,this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,&quot;form&quot;))return!1;v.event.remove(this,&quot;._submit&quot;)}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type===&quot;checkbox&quot;||this.type===&quot;radio&quot;)v.event.add(this,&quot;propertychange._change&quot;,function(e){e.originalEvent.propertyName===&quot;checked&quot;&amp;&amp;(this._just_changed=!0)}),v.event.add(this,&quot;click._change&quot;,function(e){this._just_changed&amp;&amp;!e.isTrigger&amp;&amp;(this._just_changed=!1),v.event.simulate(&quot;change&quot;,this,e,!0)});return!1}v.event.add(this,&quot;beforeactivate._change&quot;,function(e){var t=e.target;$.test(t.nodeName)&amp;&amp;!v._data(t,&quot;_change_attached&quot;)&amp;&amp;(v.event.add(t,&quot;change._change&quot;,function(e){this.parentNode&amp;&amp;!e.isSimulated&amp;&amp;!e.isTrigger&amp;&amp;v.event.simulate(&quot;change&quot;,this.parentNode,e,!0)}),v._data(t,&quot;_change_attached&quot;,!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!==&quot;radio&quot;&amp;&amp;t.type!==&quot;checkbox&quot;)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,&quot;._change&quot;),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&amp;&amp;i.addEventListener(e,r,!0)},teardown:function(){--n===0&amp;&amp;i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e==&quot;object&quot;){typeof n!=&quot;string&quot;&amp;&amp;(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&amp;&amp;i==null?(i=n,r=n=t):i==null&amp;&amp;(typeof n==&quot;string&quot;?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&amp;&amp;(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&amp;&amp;e.preventDefault&amp;&amp;e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+&quot;.&quot;+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e==&quot;object&quot;){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n==&quot;function&quot;)r=n,n=t;return r===!1&amp;&amp;(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||&quot;**&quot;,t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,&quot;**&quot;):this.off(t,e||&quot;**&quot;,n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,&quot;lastToggle&quot;+e.guid)||0)%r;return v._data(this,&quot;lastToggle&quot;+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r&lt;t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each(&quot;blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu&quot;.split(&quot; &quot;),function(e,t){v.fn[t]=function(e,n){return n==null&amp;&amp;(n=e,e=null),arguments.length&gt;0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&amp;&amp;(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&amp;&amp;(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!=&quot;string&quot;)return n;if(l!==1&amp;&amp;l!==9)return[];a=o(t);if(!a&amp;&amp;!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&amp;&amp;(s=t.ownerDocument.getElementById(f))&amp;&amp;u(t,s)&amp;&amp;s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&amp;&amp;Z&amp;&amp;t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,&quot;$1&quot;),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n===&quot;input&quot;&amp;&amp;t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n===&quot;input&quot;||n===&quot;button&quot;)&amp;&amp;t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&amp;&amp;(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+&quot; &quot;];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&amp;&amp;(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j,&quot; &quot;);for(o in i.filter)(r=J[o].exec(u))&amp;&amp;(!f[o]||(r=f[o](r)))&amp;&amp;(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&amp;&amp;t.dir===&quot;parentNode&quot;,o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+&quot; &quot;+o+&quot; &quot;,l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a==&quot;string&quot;&amp;&amp;a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length&gt;1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u&lt;a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&amp;&amp;t.push(u);return o}function ct(e,t,n,r,i,s){return r&amp;&amp;!r[d]&amp;&amp;(r=ct(r)),i&amp;&amp;!i[d]&amp;&amp;(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||&quot;*&quot;,u.nodeType?[u]:u,[]),m=e&amp;&amp;(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&amp;&amp;n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&amp;&amp;f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&amp;&amp;(f=i?T.call(s,c):h[l])&gt;-1&amp;&amp;(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[&quot; &quot;],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)&gt;-1},u,!0),h=[function(e,n,r){return!o&amp;&amp;(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a&lt;s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r&lt;s;r++)if(i.relative[e[r].type])break;return ct(a&gt;1&amp;&amp;ft(h),a&gt;1&amp;&amp;e.slice(0,a-1).join(&quot;&quot;).replace(j,&quot;$1&quot;),n,a&lt;r&amp;&amp;ht(e.slice(a,r)),r&lt;s&amp;&amp;ht(e=e.slice(r)),r&lt;s&amp;&amp;e.join(&quot;&quot;))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length&gt;0,s=e.length&gt;0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w=&quot;0&quot;,x=u&amp;&amp;[],T=h!=null,N=c,C=u||s&amp;&amp;i.find.TAG(&quot;*&quot;,h&amp;&amp;a.parentNode||a),k=b+=N==null?1:Math.E;T&amp;&amp;(c=a!==g&amp;&amp;a,n=o.el);for(;(p=C[w])!=null;w++){if(s&amp;&amp;p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&amp;&amp;(b=k,n=++o.el)}r&amp;&amp;((p=!v&amp;&amp;p)&amp;&amp;y--,u&amp;&amp;x.push(p))}y+=w;if(r&amp;&amp;w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y&gt;0)while(w--)!x[w]&amp;&amp;!m[w]&amp;&amp;(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&amp;&amp;!u&amp;&amp;m.length&gt;0&amp;&amp;y+t.length&gt;1&amp;&amp;nt.uniqueSort(l)}return T&amp;&amp;(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r&lt;i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&amp;&amp;h.length===1){u=h[0]=h[0].slice(0);if(u.length&gt;2&amp;&amp;(f=u[0]).type===&quot;ID&quot;&amp;&amp;t.nodeType===9&amp;&amp;!s&amp;&amp;i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,&quot;&quot;),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o&gt;=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,&quot;&quot;),z.test(u[0].type)&amp;&amp;t.parentNode||t,s)){u.splice(o,1),e=r.length&amp;&amp;u.join(&quot;&quot;);if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p=&quot;undefined&quot;,d=(&quot;sizcache&quot;+Math.random()).replace(&quot;.&quot;,&quot;&quot;),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t&lt;n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)&gt;i.cacheLength&amp;&amp;delete e[t.shift()],e[n+&quot; &quot;]=r},e)},k=C(),L=C(),A=C(),O=&quot;[\\x20\\t\\r\\n\\f]&quot;,M=&quot;(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+&quot;,_=M.replace(&quot;w&quot;,&quot;w#&quot;),D=&quot;([*^$|!~]?=)&quot;,P=&quot;\\[&quot;+O+&quot;*(&quot;+M+&quot;)&quot;+O+&quot;*(?:&quot;+D+O+&quot;*(?:([&#39;\&quot;])((?:\\\\.|[^\\\\])*?)\\3|(&quot;+_+&quot;)|)|)&quot;+O+&quot;*\\]&quot;,H=&quot;:(&quot;+M+&quot;)(?:\\((?:([&#39;\&quot;])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:&quot;+P+&quot;)|[^:]|\\\\.)*|.*))\\)|)&quot;,B=&quot;:(even|odd|eq|gt|lt|nth|first|last)(?:\\(&quot;+O+&quot;*((?:-\\d)?\\d*)&quot;+O+&quot;*\\)|)(?=[^-]|$)&quot;,j=new RegExp(&quot;^&quot;+O+&quot;+|((?:^|[^\\\\])(?:\\\\.)*)&quot;+O+&quot;+$&quot;,&quot;g&quot;),F=new RegExp(&quot;^&quot;+O+&quot;*,&quot;+O+&quot;*&quot;),I=new RegExp(&quot;^&quot;+O+&quot;*([\\x20\\t\\r\\n\\f&gt;+~])&quot;+O+&quot;*&quot;),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp(&quot;^#(&quot;+M+&quot;)&quot;),CLASS:new RegExp(&quot;^\\.(&quot;+M+&quot;)&quot;),NAME:new RegExp(&quot;^\\[name=[&#39;\&quot;]?(&quot;+M+&quot;)[&#39;\&quot;]?\\]&quot;),TAG:new RegExp(&quot;^(&quot;+M.replace(&quot;w&quot;,&quot;w*&quot;)+&quot;)&quot;),ATTR:new RegExp(&quot;^&quot;+P),PSEUDO:new RegExp(&quot;^&quot;+H),POS:new RegExp(B,&quot;i&quot;),CHILD:new RegExp(&quot;^:(only|nth|first|last)-child(?:\\(&quot;+O+&quot;*(even|odd|(([+-]|)(\\d*)n|)&quot;+O+&quot;*(?:([+-]|)&quot;+O+&quot;*(\\d+)|))&quot;+O+&quot;*\\)|)&quot;,&quot;i&quot;),needsContext:new RegExp(&quot;^&quot;+O+&quot;*[&gt;+~]|&quot;+B,&quot;i&quot;)},K=function(e){var t=g.createElement(&quot;div&quot;);try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment(&quot;&quot;)),!e.getElementsByTagName(&quot;*&quot;).length}),G=K(function(e){return e.innerHTML=&quot;&lt;a href=&#39;#&#39;&gt;&lt;/a&gt;&quot;,e.firstChild&amp;&amp;typeof e.firstChild.getAttribute!==p&amp;&amp;e.firstChild.getAttribute(&quot;href&quot;)===&quot;#&quot;}),Y=K(function(e){e.innerHTML=&quot;&lt;select&gt;&lt;/select&gt;&quot;;var t=typeof e.lastChild.getAttribute(&quot;multiple&quot;);return t!==&quot;boolean&quot;&amp;&amp;t!==&quot;string&quot;}),Z=K(function(e){return e.innerHTML=&quot;&lt;div class=&#39;hidden e&#39;&gt;&lt;/div&gt;&lt;div class=&#39;hidden&#39;&gt;&lt;/div&gt;&quot;,!e.getElementsByClassName||!e.getElementsByClassName(&quot;e&quot;).length?!1:(e.lastChild.className=&quot;e&quot;,e.getElementsByClassName(&quot;e&quot;).length===2)}),et=K(function(e){e.id=d+0,e.innerHTML=&quot;&lt;a name=&#39;&quot;+d+&quot;&#39;&gt;&lt;/a&gt;&lt;div name=&#39;&quot;+d+&quot;&#39;&gt;&lt;/div&gt;&quot;,y.insertBefore(e,y.firstChild);var t=g.getElementsByName&amp;&amp;g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length&gt;0},s=nt.getText=function(e){var t,n=&quot;&quot;,r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent==&quot;string&quot;)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&amp;&amp;(e.ownerDocument||e).documentElement;return t?t.nodeName!==&quot;HTML&quot;:!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&amp;&amp;t.parentNode;return e===r||!!(r&amp;&amp;r.nodeType===1&amp;&amp;n.contains&amp;&amp;n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&amp;&amp;!!(e.compareDocumentPosition(t)&amp;16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]==&quot;boolean&quot;?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute(&quot;href&quot;,2)},type:function(e){return e.getAttribute(&quot;type&quot;)}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&amp;&amp;!n){var r=t.getElementById(e);return r&amp;&amp;r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&amp;&amp;!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&amp;&amp;i.getAttributeNode(&quot;id&quot;).value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e===&quot;*&quot;){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&amp;&amp;i.push(r);return i}return n},NAME:et&amp;&amp;function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&amp;&amp;function(e,t,n){if(typeof t.getElementsByClassName!==p&amp;&amp;!n)return t.getElementsByClassName(e)}},relative:{&quot;&gt;&quot;:{dir:&quot;parentNode&quot;,first:!0},&quot; &quot;:{dir:&quot;parentNode&quot;},&quot;+&quot;:{dir:&quot;previousSibling&quot;,first:!0},&quot;~&quot;:{dir:&quot;previousSibling&quot;}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,&quot;&quot;),e[3]=(e[4]||e[5]||&quot;&quot;).replace($,&quot;&quot;),e[2]===&quot;~=&quot;&amp;&amp;(e[3]=&quot; &quot;+e[3]+&quot; &quot;),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]===&quot;nth&quot;?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]===&quot;even&quot;||e[2]===&quot;odd&quot;)),e[4]=+(e[6]+e[7]||e[2]===&quot;odd&quot;)):e[2]&amp;&amp;nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&amp;&amp;(n=ut(t,!0))&amp;&amp;(n=t.indexOf(&quot;)&quot;,t.length-n)-t.length)&amp;&amp;(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,&quot;&quot;),function(t){return t.getAttribute(&quot;id&quot;)===e}}:function(e){return e=e.replace($,&quot;&quot;),function(t){var n=typeof t.getAttributeNode!==p&amp;&amp;t.getAttributeNode(&quot;id&quot;);return n&amp;&amp;n.value===e}},TAG:function(e){return e===&quot;*&quot;?function(){return!0}:(e=e.replace($,&quot;&quot;).toLowerCase(),function(t){return t.nodeName&amp;&amp;t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+&quot; &quot;];return t||(t=new RegExp(&quot;(^|&quot;+O+&quot;)&quot;+e+&quot;(&quot;+O+&quot;|$)&quot;))&amp;&amp;k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&amp;&amp;e.getAttribute(&quot;class&quot;)||&quot;&quot;)})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t===&quot;!=&quot;:t?(s+=&quot;&quot;,t===&quot;=&quot;?s===n:t===&quot;!=&quot;?s!==n:t===&quot;^=&quot;?n&amp;&amp;s.indexOf(n)===0:t===&quot;*=&quot;?n&amp;&amp;s.indexOf(n)&gt;-1:t===&quot;$=&quot;?n&amp;&amp;s.substr(s.length-n.length)===n:t===&quot;~=&quot;?(&quot; &quot;+s+&quot; &quot;).indexOf(n)&gt;-1:t===&quot;|=&quot;?s===n||s.substr(0,n.length+1)===n+&quot;-&quot;:!1):!0}},CHILD:function(e,t,n,r){return e===&quot;nth&quot;?function(e){var t,i,s=e.parentNode;if(n===1&amp;&amp;r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&amp;&amp;i/n&gt;=0}:function(t){var n=t;switch(e){case&quot;only&quot;:case&quot;first&quot;:while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e===&quot;first&quot;)return!0;n=t;case&quot;last&quot;:while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error(&quot;unsupported pseudo: &quot;+e);return r[d]?r(t):r.length&gt;1?(n=[e,e,&quot;&quot;,t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,&quot;$1&quot;));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length&gt;0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)&gt;-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t===&quot;input&quot;&amp;&amp;!!e.checked||t===&quot;option&quot;&amp;&amp;!!e.selected},selected:function(e){return e.parentNode&amp;&amp;e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName&gt;&quot;@&quot;||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()===&quot;input&quot;&amp;&amp;(t=e.type)===&quot;text&quot;&amp;&amp;((n=e.getAttribute(&quot;type&quot;))==null||n.toLowerCase()===t)},radio:rt(&quot;radio&quot;),checkbox:rt(&quot;checkbox&quot;),file:rt(&quot;file&quot;),password:rt(&quot;password&quot;),image:rt(&quot;image&quot;),submit:it(&quot;submit&quot;),reset:it(&quot;reset&quot;),button:function(e){var t=e.nodeName.toLowerCase();return t===&quot;input&quot;&amp;&amp;e.type===&quot;button&quot;||t===&quot;button&quot;},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&amp;&amp;(!t.hasFocus||t.hasFocus())&amp;&amp;!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n&lt;0?n+t:n]}),even:st(function(e,t){for(var n=0;n&lt;t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n&lt;t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n&lt;0?n+t:n;--r&gt;=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n&lt;0?n+t:n;++r&lt;t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&amp;4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&amp;&amp;t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f&lt;n&amp;&amp;f&lt;r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&amp;&amp;(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error(&quot;Syntax error, unrecognized expression: &quot;+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+&quot; &quot;];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&amp;&amp;function(){var e,t=vt,n=/&#39;|\\/g,r=/\=[\x20\t\r\n\f]*([^&#39;&quot;\]]*)[\x20\t\r\n\f]*\]/g,i=[&quot;:focus&quot;],s=[&quot;:active&quot;],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML=&quot;&lt;select&gt;&lt;option selected=&#39;&#39;&gt;&lt;/option&gt;&lt;/select&gt;&quot;,e.querySelectorAll(&quot;[selected]&quot;).length||i.push(&quot;\\[&quot;+O+&quot;*(?:checked|disabled|ismap|multiple|readonly|selected|value)&quot;),e.querySelectorAll(&quot;:checked&quot;).length||i.push(&quot;:checked&quot;)}),K(function(e){e.innerHTML=&quot;&lt;p test=&#39;&#39;&gt;&lt;/p&gt;&quot;,e.querySelectorAll(&quot;[test^=&#39;&#39;]&quot;).length&amp;&amp;i.push(&quot;[*^$]=&quot;+O+&quot;*(?:\&quot;\&quot;|&#39;&#39;)&quot;),e.innerHTML=&quot;&lt;input type=&#39;hidden&#39;/&gt;&quot;,e.querySelectorAll(&quot;:enabled&quot;).length||i.push(&quot;:enabled&quot;,&quot;:disabled&quot;)}),i=new RegExp(i.join(&quot;|&quot;)),vt=function(e,r,s,o,u){if(!o&amp;&amp;!u&amp;&amp;!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&amp;&amp;e;if(r.nodeType===1&amp;&amp;r.nodeName.toLowerCase()!==&quot;object&quot;){a=ut(e),(l=r.getAttribute(&quot;id&quot;))?c=l.replace(n,&quot;\\$&amp;&quot;):r.setAttribute(&quot;id&quot;,c),c=&quot;[id=&#39;&quot;+c+&quot;&#39;] &quot;,f=a.length;while(f--)a[f]=c+a[f].join(&quot;&quot;);h=z.test(e)&amp;&amp;r.parentNode||r,p=a.join(&quot;,&quot;)}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute(&quot;id&quot;)}}return t(e,r,s,o,u)},u&amp;&amp;(K(function(t){e=u.call(t,&quot;div&quot;);try{u.call(t,&quot;[test!=&#39;&#39;]:sizzle&quot;),s.push(&quot;!=&quot;,H)}catch(n){}}),s=new RegExp(s.join(&quot;|&quot;)),nt.matchesSelector=function(t,n){n=n.replace(r,&quot;=&#39;$1&#39;]&quot;);if(!o(t)&amp;&amp;!s.test(n)&amp;&amp;!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&amp;&amp;t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length&gt;0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[&quot;:&quot;]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!=&quot;string&quot;)return v(e).filter(function(){for(t=0,n=u.length;t&lt;n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack(&quot;&quot;,&quot;find&quot;,e);for(t=0,n=this.length;t&lt;n;t++){r=o.length,v.find(e,this[t],o);if(t&gt;0)for(i=r;i&lt;o.length;i++)for(s=0;s&lt;r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t&lt;r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),&quot;not&quot;,e)},filter:function(e){return this.pushStack(ft(this,e,!0),&quot;filter&quot;,e)},is:function(e){return!!e&amp;&amp;(typeof e==&quot;string&quot;?st.test(e)?v(e,this.context).index(this[0])&gt;=0:v.filter(e,this).length&gt;0:this.filter(e).length&gt;0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!=&quot;string&quot;?v(e,t||this.context):0;for(;r&lt;i;r++){n=this[r];while(n&amp;&amp;n.ownerDocument&amp;&amp;n!==t&amp;&amp;n.nodeType!==11){if(o?o.index(n)&gt;-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length&gt;1?v.unique(s):s,this.pushStack(s,&quot;closest&quot;,e)},index:function(e){return e?typeof e==&quot;string&quot;?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&amp;&amp;this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e==&quot;string&quot;?v(e,t):v.makeArray(e&amp;&amp;e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&amp;&amp;t.nodeType!==11?t:null},parents:function(e){return v.dir(e,&quot;parentNode&quot;)},parentsUntil:function(e,t,n){return v.dir(e,&quot;parentNode&quot;,n)},next:function(e){return at(e,&quot;nextSibling&quot;)},prev:function(e){return at(e,&quot;previousSibling&quot;)},nextAll:function(e){return v.dir(e,&quot;nextSibling&quot;)},prevAll:function(e){return v.dir(e,&quot;previousSibling&quot;)},nextUntil:function(e,t,n){return v.dir(e,&quot;nextSibling&quot;,n)},prevUntil:function(e,t,n){return v.dir(e,&quot;previousSibling&quot;,n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,&quot;iframe&quot;)?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&amp;&amp;typeof r==&quot;string&quot;&amp;&amp;(i=v.filter(r,i)),i=this.length&gt;1&amp;&amp;!ot[e]?v.unique(i):i,this.length&gt;1&amp;&amp;rt.test(e)&amp;&amp;(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(&quot;,&quot;))}}),v.extend({filter:function(e,t,n){return n&amp;&amp;(e=&quot;:not(&quot;+e+&quot;)&quot;),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&amp;&amp;s.nodeType!==9&amp;&amp;(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&amp;&amp;i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&amp;&amp;e!==t&amp;&amp;n.push(e);return n}});var ct=&quot;abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video&quot;,ht=/ jQuery\d+=&quot;(?:null|\d+)&quot;/g,pt=/^\s+/,dt=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/gi,vt=/&lt;([\w:]+)/,mt=/&lt;tbody/i,gt=/&lt;|&amp;#?\w+;/,yt=/&lt;(?:script|style|link)/i,bt=/&lt;(?:script|object|embed|option|style)/i,wt=new RegExp(&quot;&lt;(?:&quot;+ct+&quot;)[\\s/&gt;]&quot;,&quot;i&quot;),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*&lt;!(?:\[CDATA\[|\-\-)|[\]\-]{2}&gt;\s*$/g,Nt={option:[1,&quot;&lt;select multiple=&#39;multiple&#39;&gt;&quot;,&quot;&lt;/select&gt;&quot;],legend:[1,&quot;&lt;fieldset&gt;&quot;,&quot;&lt;/fieldset&gt;&quot;],thead:[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;],tr:[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;],td:[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;],col:[2,&quot;&lt;table&gt;&lt;tbody&gt;&lt;/tbody&gt;&lt;colgroup&gt;&quot;,&quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;],area:[1,&quot;&lt;map&gt;&quot;,&quot;&lt;/map&gt;&quot;],_default:[0,&quot;&quot;,&quot;&quot;]},Ct=lt(i),kt=Ct.appendChild(i.createElement(&quot;div&quot;));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,&quot;X&lt;div&gt;&quot;,&quot;&lt;/div&gt;&quot;]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&amp;&amp;this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&amp;&amp;t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&amp;&amp;e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,&quot;body&quot;)||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&amp;&amp;this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&amp;&amp;this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),&quot;before&quot;,this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),&quot;after&quot;,this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&amp;&amp;n.nodeType===1&amp;&amp;(v.cleanData(n.getElementsByTagName(&quot;*&quot;)),v.cleanData([n])),n.parentNode&amp;&amp;n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&amp;&amp;v.cleanData(e.getElementsByTagName(&quot;*&quot;));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,&quot;&quot;):t;if(typeof e==&quot;string&quot;&amp;&amp;!yt.test(e)&amp;&amp;(v.support.htmlSerialize||!wt.test(e))&amp;&amp;(v.support.leadingWhitespace||!pt.test(e))&amp;&amp;!Nt[(vt.exec(e)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase()]){e=e.replace(dt,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);try{for(;r&lt;i;r++)n=this[r]||{},n.nodeType===1&amp;&amp;(v.cleanData(n.getElementsByTagName(&quot;*&quot;)),n.innerHTML=e);n=0}catch(s){}}n&amp;&amp;this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),&quot;replaceWith&quot;,e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!=&quot;string&quot;&amp;&amp;(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&amp;&amp;c&gt;1&amp;&amp;typeof f==&quot;string&quot;&amp;&amp;St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&amp;&amp;(o=s);if(s){n=n&amp;&amp;v.nodeName(s,&quot;tr&quot;);for(u=i.cacheable||c-1;a&lt;c;a++)r.call(n&amp;&amp;v.nodeName(this[a],&quot;table&quot;)?Lt(this[a],&quot;tbody&quot;):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&amp;&amp;v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:&quot;GET&quot;,dataType:&quot;script&quot;,async:!1,global:!1,&quot;throws&quot;:!0}):v.error(&quot;no ajax&quot;):v.globalEval((t.text||t.textContent||t.innerHTML||&quot;&quot;).replace(Tt,&quot;&quot;)),t.parentNode&amp;&amp;t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&amp;&amp;n[0]||n,n=n.ownerDocument||n,e.length===1&amp;&amp;typeof a==&quot;string&quot;&amp;&amp;a.length&lt;512&amp;&amp;n===i&amp;&amp;a.charAt(0)===&quot;&lt;&quot;&amp;&amp;!bt.test(a)&amp;&amp;(v.support.checkClone||!St.test(a))&amp;&amp;(v.support.html5Clone||!wt.test(a))&amp;&amp;(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&amp;&amp;(v.fragments[a]=u&amp;&amp;s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:&quot;append&quot;,prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&amp;&amp;this[0].parentNode;if((a==null||a&amp;&amp;a.nodeType===11&amp;&amp;a.childNodes.length===1)&amp;&amp;u===1)return o[t](this[0]),this;for(;i&lt;u;i++)r=(i&gt;0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test(&quot;&lt;&quot;+e.nodeName+&quot;&gt;&quot;)?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&amp;&amp;(e.nodeType===1||e.nodeType===11)&amp;&amp;!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&amp;&amp;Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&amp;&amp;Ct,b=[];if(!t||typeof t.createDocumentFragment==&quot;undefined&quot;)t=i;for(s=0;(u=e[s])!=null;s++){typeof u==&quot;number&quot;&amp;&amp;(u+=&quot;&quot;);if(!u)continue;if(typeof u==&quot;string&quot;)if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement(&quot;div&quot;),y.appendChild(c),u=u.replace(dt,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;),a=(vt.exec(u)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a===&quot;table&quot;&amp;&amp;!h?c.firstChild&amp;&amp;c.firstChild.childNodes:f[1]===&quot;&lt;table&gt;&quot;&amp;&amp;!h?c.childNodes:[];for(o=p.length-1;o&gt;=0;--o)v.nodeName(p[o],&quot;tbody&quot;)&amp;&amp;!p[o].childNodes.length&amp;&amp;p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&amp;&amp;pt.test(u)&amp;&amp;c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&amp;&amp;(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,&quot;input&quot;)?_t(u):typeof u.getElementsByTagName!=&quot;undefined&quot;&amp;&amp;v.grep(u.getElementsByTagName(&quot;input&quot;),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,&quot;script&quot;)||!m(u))n.appendChild(u),typeof u.getElementsByTagName!=&quot;undefined&quot;&amp;&amp;(g=v.grep(v.merge([],u.getElementsByTagName(&quot;script&quot;)),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&amp;&amp;a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&amp;&amp;(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf(&quot;compatible&quot;)&lt;0&amp;&amp;/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||&quot;&quot;,version:t[2]||&quot;0&quot;}},e=v.uaMatch(o.userAgent),t={},e.browser&amp;&amp;(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&amp;&amp;(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&amp;&amp;i instanceof v&amp;&amp;!(i instanceof e)&amp;&amp;(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp(&quot;^(&quot;+m+&quot;)(.*)$&quot;,&quot;i&quot;),Ut=new RegExp(&quot;^(&quot;+m+&quot;)(?!px)[a-z%]+$&quot;,&quot;i&quot;),zt=new RegExp(&quot;^([-+])=(&quot;+m+&quot;)&quot;,&quot;i&quot;),Wt={BODY:&quot;block&quot;},Xt={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},Vt={letterSpacing:0,fontWeight:400},$t=[&quot;Top&quot;,&quot;Right&quot;,&quot;Bottom&quot;,&quot;Left&quot;],Jt=[&quot;Webkit&quot;,&quot;O&quot;,&quot;Moz&quot;,&quot;ms&quot;],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length&gt;1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e==&quot;boolean&quot;;return v.isFunction(e)&amp;&amp;v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,&quot;opacity&quot;);return n===&quot;&quot;?&quot;1&quot;:n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{&quot;float&quot;:v.support.cssFloat?&quot;cssFloat&quot;:&quot;styleFloat&quot;},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&amp;&amp;&quot;get&quot;in u&amp;&amp;(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o===&quot;string&quot;&amp;&amp;(s=zt.exec(r))&amp;&amp;(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o=&quot;number&quot;);if(r==null||o===&quot;number&quot;&amp;&amp;isNaN(r))return;o===&quot;number&quot;&amp;&amp;!v.cssNumber[a]&amp;&amp;(r+=&quot;px&quot;);if(!u||!(&quot;set&quot;in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&amp;&amp;&quot;get&quot;in u&amp;&amp;(s=u.get(e,!0,i)),s===t&amp;&amp;(s=Dt(e,n)),s===&quot;normal&quot;&amp;&amp;n in Vt&amp;&amp;(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&amp;&amp;(r=u.getPropertyValue(n)||u[n],r===&quot;&quot;&amp;&amp;!v.contains(t.ownerDocument,t)&amp;&amp;(r=v.style(t,n)),Ut.test(r)&amp;&amp;qt.test(n)&amp;&amp;(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&amp;&amp;(Dt=function(e,t){var n,r,i=e.currentStyle&amp;&amp;e.currentStyle[t],s=e.style;return i==null&amp;&amp;s&amp;&amp;s[t]&amp;&amp;(i=s[t]),Ut.test(i)&amp;&amp;!Ft.test(t)&amp;&amp;(n=s.left,r=e.runtimeStyle&amp;&amp;e.runtimeStyle.left,r&amp;&amp;(e.runtimeStyle.left=e.currentStyle.left),s.left=t===&quot;fontSize&quot;?&quot;1em&quot;:i,i=s.pixelLeft+&quot;px&quot;,s.left=n,r&amp;&amp;(e.runtimeStyle.left=r)),i===&quot;&quot;?&quot;auto&quot;:i}),v.each([&quot;height&quot;,&quot;width&quot;],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&amp;&amp;It.test(Dt(e,&quot;display&quot;))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&amp;&amp;v.css(e,&quot;boxSizing&quot;)===&quot;border-box&quot;):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&amp;&amp;e.currentStyle?e.currentStyle.filter:e.style.filter)||&quot;&quot;)?.01*parseFloat(RegExp.$1)+&quot;&quot;:t?&quot;1&quot;:&quot;&quot;},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?&quot;alpha(opacity=&quot;+t*100+&quot;)&quot;:&quot;&quot;,s=r&amp;&amp;r.filter||n.filter||&quot;&quot;;n.zoom=1;if(t&gt;=1&amp;&amp;v.trim(s.replace(Bt,&quot;&quot;))===&quot;&quot;&amp;&amp;n.removeAttribute){n.removeAttribute(&quot;filter&quot;);if(r&amp;&amp;!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+&quot; &quot;+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:&quot;inline-block&quot;},function(){if(t)return Dt(e,&quot;marginRight&quot;)})}}),!v.support.pixelPosition&amp;&amp;v.fn.position&amp;&amp;v.each([&quot;top&quot;,&quot;left&quot;],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+&quot;px&quot;:r}}}})}),v.expr&amp;&amp;v.expr.filters&amp;&amp;(v.expr.filters.hidden=function(e){return e.offsetWidth===0&amp;&amp;e.offsetHeight===0||!v.support.reliableHiddenOffsets&amp;&amp;(e.style&amp;&amp;e.style.display||Dt(e,&quot;display&quot;))===&quot;none&quot;},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:&quot;&quot;,padding:&quot;&quot;,border:&quot;Width&quot;},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n==&quot;string&quot;?n.split(&quot; &quot;):[n],s={};for(r=0;r&lt;4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&amp;&amp;!this.disabled&amp;&amp;(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,&quot;\r\n&quot;)}}):{name:t.name,value:n.replace(on,&quot;\r\n&quot;)}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?&quot;&quot;:t,i[i.length]=encodeURIComponent(e)+&quot;=&quot;+encodeURIComponent(t)};n===t&amp;&amp;(n=v.ajaxSettings&amp;&amp;v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&amp;&amp;!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join(&quot;&amp;&quot;).replace(rn,&quot;+&quot;)};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/&lt;script\b[^&lt;]*(?:(?!&lt;\/script&gt;)&lt;[^&lt;]*)*&lt;\/script&gt;/gi,bn=/([?&amp;])_=[^&amp;]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=[&quot;*/&quot;]+[&quot;*&quot;];try{cn=s.href}catch(Nn){cn=i.createElement(&quot;a&quot;),cn.href=&quot;&quot;,cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!=&quot;string&quot;&amp;&amp;En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(&quot; &quot;);return a&gt;=0&amp;&amp;(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&amp;&amp;typeof n==&quot;object&quot;&amp;&amp;(s=&quot;POST&quot;),v.ajax({url:e,type:s,dataType:&quot;html&quot;,data:n,complete:function(e,t){r&amp;&amp;u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v(&quot;&lt;div&gt;&quot;).append(e.replace(yn,&quot;&quot;)).find(i):e)}),this},v.each(&quot;ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend&quot;.split(&quot; &quot;),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each([&quot;get&quot;,&quot;post&quot;],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&amp;&amp;(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,&quot;script&quot;)},getJSON:function(e,t,n){return v.get(e,t,n,&quot;json&quot;)},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:&quot;GET&quot;,contentType:&quot;application/x-www-form-urlencoded; charset=UTF-8&quot;,processData:!0,async:!0,accepts:{xml:&quot;application/xml, text/xml&quot;,html:&quot;text/html&quot;,text:&quot;text/plain&quot;,json:&quot;application/json, text/javascript&quot;,&quot;*&quot;:Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:&quot;responseXML&quot;,text:&quot;responseText&quot;},converters:{&quot;* text&quot;:e.String,&quot;text html&quot;:!0,&quot;text json&quot;:v.parseJSON,&quot;text xml&quot;:v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&amp;&amp;clearTimeout(u),o=t,i=a||&quot;&quot;,x.readyState=e&gt;0?4:0,s&amp;&amp;(w=An(c,x,s));if(e&gt;=200&amp;&amp;e&lt;300||e===304)c.ifModified&amp;&amp;(S=x.getResponseHeader(&quot;Last-Modified&quot;),S&amp;&amp;(v.lastModified[r]=S),S=x.getResponseHeader(&quot;Etag&quot;),S&amp;&amp;(v.etag[r]=S)),e===304?(T=&quot;notmodified&quot;,l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T=&quot;error&quot;,e&lt;0&amp;&amp;(e=0)}x.status=e,x.statusText=(n||T)+&quot;&quot;,l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&amp;&amp;p.trigger(&quot;ajax&quot;+(l?&quot;Success&quot;:&quot;Error&quot;),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&amp;&amp;(p.trigger(&quot;ajaxComplete&quot;,[x,c]),--v.active||v.event.trigger(&quot;ajaxStop&quot;))}typeof e==&quot;object&quot;&amp;&amp;(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&amp;&amp;(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks(&quot;once memory&quot;),g=c.statusCode||{},b={},w={},E=0,S=&quot;canceled&quot;,x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&amp;&amp;o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E&lt;2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+&quot;&quot;).replace(hn,&quot;&quot;).replace(mn,ln[1]+&quot;//&quot;),c.dataTypes=v.trim(c.dataType||&quot;*&quot;).toLowerCase().split(y),c.crossDomain==null&amp;&amp;(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&amp;&amp;a[2]===ln[2]&amp;&amp;(a[3]||(a[1]===&quot;http:&quot;?80:443))==(ln[3]||(ln[1]===&quot;http:&quot;?80:443)))),c.data&amp;&amp;c.processData&amp;&amp;typeof c.data!=&quot;string&quot;&amp;&amp;(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&amp;&amp;v.active++===0&amp;&amp;v.event.trigger(&quot;ajaxStart&quot;);if(!c.hasContent){c.data&amp;&amp;(c.url+=(gn.test(c.url)?&quot;&amp;&quot;:&quot;?&quot;)+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,&quot;$1_=&quot;+N);c.url=C+(C===c.url?(gn.test(c.url)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+N:&quot;&quot;)}}(c.data&amp;&amp;c.hasContent&amp;&amp;c.contentType!==!1||n.contentType)&amp;&amp;x.setRequestHeader(&quot;Content-Type&quot;,c.contentType),c.ifModified&amp;&amp;(r=r||c.url,v.lastModified[r]&amp;&amp;x.setRequestHeader(&quot;If-Modified-Since&quot;,v.lastModified[r]),v.etag[r]&amp;&amp;x.setRequestHeader(&quot;If-None-Match&quot;,v.etag[r])),x.setRequestHeader(&quot;Accept&quot;,c.dataTypes[0]&amp;&amp;c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!==&quot;*&quot;?&quot;, &quot;+Tn+&quot;; q=0.01&quot;:&quot;&quot;):c.accepts[&quot;*&quot;]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&amp;&amp;E!==2){S=&quot;abort&quot;;for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,&quot;No Transport&quot;);else{x.readyState=1,f&amp;&amp;p.trigger(&quot;ajaxSend&quot;,[x,c]),c.async&amp;&amp;c.timeout&gt;0&amp;&amp;(u=setTimeout(function(){x.abort(&quot;timeout&quot;)},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E&lt;2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&amp;|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:&quot;callback&quot;,jsonpCallback:function(){var e=Mn.pop()||v.expando+&quot;_&quot;+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter(&quot;json jsonp&quot;,function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&amp;&amp;Dn.test(f),h=l&amp;&amp;!c&amp;&amp;typeof a==&quot;string&quot;&amp;&amp;!(n.contentType||&quot;&quot;).indexOf(&quot;application/x-www-form-urlencoded&quot;)&amp;&amp;Dn.test(a);if(n.dataTypes[0]===&quot;jsonp&quot;||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,&quot;$1&quot;+s):h?n.data=a.replace(Dn,&quot;$1&quot;+s):l&amp;&amp;(n.url+=(_n.test(f)?&quot;&amp;&quot;:&quot;?&quot;)+n.jsonp+&quot;=&quot;+s),n.converters[&quot;script json&quot;]=function(){return u||v.error(s+&quot; was not called&quot;),u[0]},n.dataTypes[0]=&quot;json&quot;,e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&amp;&amp;(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&amp;&amp;v.isFunction(o)&amp;&amp;o(u[0]),u=o=t}),&quot;script&quot;}),v.ajaxSetup({accepts:{script:&quot;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&quot;},contents:{script:/javascript|ecmascript/},converters:{&quot;text script&quot;:function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter(&quot;script&quot;,function(e){e.cache===t&amp;&amp;(e.cache=!1),e.crossDomain&amp;&amp;(e.type=&quot;GET&quot;,e.global=!1)}),v.ajaxTransport(&quot;script&quot;,function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName(&quot;head&quot;)[0]||i.documentElement;return{send:function(s,o){n=i.createElement(&quot;script&quot;),n.async=&quot;async&quot;,e.scriptCharset&amp;&amp;(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&amp;&amp;n.parentNode&amp;&amp;r.removeChild(n),n=t,i||o(200,&quot;success&quot;)},r.insertBefore(n,r.firstChild)},abort:function(){n&amp;&amp;n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&amp;&amp;Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&amp;&amp;&quot;withCredentials&quot;in e})}(v.ajaxSettings.xhr()),v.support.ajax&amp;&amp;v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&amp;&amp;a.overrideMimeType&amp;&amp;a.overrideMimeType(n.mimeType),!n.crossDomain&amp;&amp;!i[&quot;X-Requested-With&quot;]&amp;&amp;(i[&quot;X-Requested-With&quot;]=&quot;XMLHttpRequest&quot;);try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&amp;&amp;n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&amp;&amp;(i||a.readyState===4)){r=t,o&amp;&amp;(a.onreadystatechange=v.noop,Bn&amp;&amp;delete Hn[o]);if(i)a.readyState!==4&amp;&amp;a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&amp;&amp;h.documentElement&amp;&amp;(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=&quot;&quot;}!u&amp;&amp;n.isLocal&amp;&amp;!n.crossDomain?u=c.text?200:404:u===1223&amp;&amp;(u=204)}}}catch(d){i||s(-1,d)}c&amp;&amp;s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&amp;&amp;(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&amp;&amp;r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp(&quot;^(?:([-+])=|)(&quot;+m+&quot;)([a-z%]*)$&quot;,&quot;i&quot;),Wn=/queueHooks$/,Xn=[Gn],Vn={&quot;*&quot;:[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?&quot;&quot;:&quot;px&quot;);if(r!==&quot;px&quot;&amp;&amp;u){u=v.css(i.elem,e,!0)||n||1;do a=a||&quot;.5&quot;,u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&amp;&amp;a!==1&amp;&amp;--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=[&quot;*&quot;]):e=e.split(&quot; &quot;);var n,r=0,i=e.length;for(;r&lt;i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||&quot;swing&quot;,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?&quot;&quot;:&quot;px&quot;)},cur:function(){var e=Yn.propHooks[this.prop];return e&amp;&amp;e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this),n&amp;&amp;n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&amp;&amp;e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,&quot;&quot;),!t||t===&quot;auto&quot;?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&amp;&amp;(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&amp;&amp;e.elem.parentNode&amp;&amp;(e.elem[e.prop]=e.now)}},v.each([&quot;toggle&quot;,&quot;show&quot;,&quot;hide&quot;],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r==&quot;boolean&quot;||!e&amp;&amp;v.isFunction(r)&amp;&amp;v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css(&quot;opacity&quot;,0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&amp;&amp;t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!=&quot;string&quot;&amp;&amp;(r=n,n=e,e=t),n&amp;&amp;e!==!1&amp;&amp;this.queue(e||&quot;fx&quot;,[]),this.each(function(){var t=!0,n=e!=null&amp;&amp;e+&quot;queueHooks&quot;,s=v.timers,o=v._data(this);if(n)o[n]&amp;&amp;o[n].stop&amp;&amp;i(o[n]);else for(n in o)o[n]&amp;&amp;o[n].stop&amp;&amp;Wn.test(n)&amp;&amp;i(o[n]);for(n=s.length;n--;)s[n].elem===this&amp;&amp;(e==null||s[n].queue===e)&amp;&amp;(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&amp;&amp;v.dequeue(this,e)})}}),v.each({slideDown:Zn(&quot;show&quot;),slideUp:Zn(&quot;hide&quot;),slideToggle:Zn(&quot;toggle&quot;),fadeIn:{opacity:&quot;show&quot;},fadeOut:{opacity:&quot;hide&quot;},fadeToggle:{opacity:&quot;toggle&quot;}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&amp;&amp;typeof e==&quot;object&quot;?v.extend({},e):{complete:n||!n&amp;&amp;t||v.isFunction(e)&amp;&amp;e,duration:e,easing:n&amp;&amp;t||t&amp;&amp;!v.isFunction(t)&amp;&amp;t};r.duration=v.fx.off?0:typeof r.duration==&quot;number&quot;?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue=&quot;fx&quot;;return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&amp;&amp;r.old.call(this),r.queue&amp;&amp;v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r&lt;n.length;r++)e=n[r],!e()&amp;&amp;n[r]===e&amp;&amp;n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&amp;&amp;v.timers.push(e)&amp;&amp;!Rn&amp;&amp;(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&amp;&amp;v.expr.filters&amp;&amp;(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&amp;&amp;l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!=&quot;undefined&quot;&amp;&amp;(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&amp;&amp;(t+=parseFloat(v.css(e,&quot;marginTop&quot;))||0,n+=parseFloat(v.css(e,&quot;marginLeft&quot;))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,&quot;position&quot;);r===&quot;static&quot;&amp;&amp;(e.style.position=&quot;relative&quot;);var i=v(e),s=i.offset(),o=v.css(e,&quot;top&quot;),u=v.css(e,&quot;left&quot;),a=(r===&quot;absolute&quot;||r===&quot;fixed&quot;)&amp;&amp;v.inArray(&quot;auto&quot;,[o,u])&gt;-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&amp;&amp;(t=t.call(e,n,s)),t.top!=null&amp;&amp;(f.top=t.top-s.top+c),t.left!=null&amp;&amp;(f.left=t.left-s.left+h),&quot;using&quot;in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,&quot;marginTop&quot;))||0,n.left-=parseFloat(v.css(e,&quot;marginLeft&quot;))||0,r.top+=parseFloat(v.css(t[0],&quot;borderTopWidth&quot;))||0,r.left+=parseFloat(v.css(t[0],&quot;borderLeftWidth&quot;))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&amp;&amp;!er.test(e.nodeName)&amp;&amp;v.css(e,&quot;position&quot;)===&quot;static&quot;)e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:&quot;pageXOffset&quot;,scrollTop:&quot;pageYOffset&quot;},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:&quot;height&quot;,Width:&quot;width&quot;},function(e,n){v.each({padding:&quot;inner&quot;+e,content:n,&quot;&quot;:&quot;outer&quot;+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&amp;&amp;(r||typeof i!=&quot;boolean&quot;),u=r||(i===!0||s===!0?&quot;margin&quot;:&quot;border&quot;);return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement[&quot;client&quot;+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body[&quot;scroll&quot;+e],s[&quot;scroll&quot;+e],n.body[&quot;offset&quot;+e],s[&quot;offset&quot;+e],s[&quot;client&quot;+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define==&quot;function&quot;&amp;&amp;define.amd&amp;&amp;define.amd.jQuery&amp;&amp;define(&quot;jquery&quot;,[],function(){return v})})(window);</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/Chancedxdl/canvas-special/blame/0e3413b177b8439fa90cf584c461afc6eeeea237/photo-wall/a/jquery.js">View git blame</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/Chancedxdl/canvas-special/find-symbols"
     data-tagsearch-ref="master"
     data-tagsearch-path="photo-wall/a/jquery.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:219656830,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;client_id&quot;:&quot;767946450.1572866553&quot;,&quot;originating_request_id&quot;:&quot;E199:03F8:3059A12:45BA860:5DC2A91D&quot;,&quot;originating_url&quot;:&quot;https://github.com/Chancedxdl/canvas-special/blob/master/photo-wall/a/jquery.js&quot;,&quot;referrer&quot;:&quot;https://github.com/Chancedxdl/canvas-special/tree/master/photo-wall/a&quot;,&quot;user_id&quot;:57344253}}"
     data-hydro-click-hmac="77bb4d1502a80f514b12247a25425b6fda4a41b1e1bfbeeefa2ac7a49c6417f2">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 <span title="0.48042s from unicorn-848446b99d-49h95">GitHub</span>, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-QJs7TczeGaaEUanUmvXVDiB09phHrUdhmbH7f/SIFZXXNeVU+7jAnT9EhalwkkiCEZROpS8KzHDC5VUrMZNccQ==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-ad2f0a51.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-JnVyZxpFDC/4ng5Q/s2OWwcE9ApvzIrwYtpzOLaY0GTpbj0UhzDrBhl7cvC07JBcD94/d1z1qDREctxukeGovg==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-c32a65e2.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

