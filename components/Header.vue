<template>
<header>
  <div class="profile-page sidebar-collapse">
    <nav class="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll="400">
      <div class="container">
        <div class="navbar-translate"><a class="navbar-brand" href="#" rel="tooltip">AriesPirnando</a>
          <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-bar bar1"></span><span class="navbar-toggler-bar bar2"></span><span class="navbar-toggler-bar bar3"></span></button>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navigation">
          <ul class="navbar-nav">
            <li class="nav-item"><nuxt-link class="nav-link smooth-scroll" :to="{ path: '/',hash:'#about'}">About</nuxt-link></li>
            <li class="nav-item"><nuxt-link class="nav-link smooth-scroll" :to="{ path: '/',hash:'#skill'}">Skills</nuxt-link></li>
            <li class="nav-item"><nuxt-link class="nav-link smooth-scroll" :to="{ path: '/',hash:'#portfolio'}">Portfolio</nuxt-link></li>
            <li class="nav-item"><nuxt-link class="nav-link smooth-scroll" :to="{ path: '/',hash:'#experience'}">Experience</nuxt-link></li>
            <li class="nav-item"><nuxt-link class="nav-link smooth-scroll" :to="{ path: '/',hash:'#contact'}">Contact</nuxt-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</header>
</template>