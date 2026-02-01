<template>
  <header>
    <RouterLink to="/" class="mr-4 internal_link">
      <img class="news_title" src="Disturbance_LetterLogo.png" alt="disturbance_name">
    </RouterLink>
    <nav>
      <div class="navbox">
        <RouterLink to="/news" class="mr-4 internal_link">News</RouterLink>
        <RouterLink to="/live" class="mr-4 internal_link">Shows</RouterLink>
        <RouterLink to="/shop" class="mr-4 internal_link">Shop</RouterLink>
        <RouterLink to="/about" class="mr-4 internal_link">About Us</RouterLink>
        <RouterLink class="internal_link" to="/contact">Contact</RouterLink>
      </div>
      <div class="socials">
        <a class="fblink" target="_blank" href="https://www.facebook.com/disturbancepunknl">
          <img src="facebook.png" class="w-[30px] mr-4" alt="facebook">
        </a>
        <a class="instalink" target="_blank" href="https://www.instagram.com/disturbance_official/?igshid=YmMyMTA2M2Y%3D">
          <img src="instagram.png" class="w-[30px] mr-4" alt="instagram">
        </a>
        <a class="spotifylink" target="_blank" href="https://tr.ee/E94y_WC0_6">
          <img src="spotify.png" class="w-[30px] mr-4" alt="spotify">
        </a>
        <a class="bclink" target="_blank" href="https://disturbancepunk.bandcamp.com/?external_follow=1">
          <img src="bandcamp.png" class="w-[30px] mr-4" alt="bandcamp">
        </a>
        <a class="ytlink" target="_blank" href="https://www.youtube.com/@disturbancepunk1?sub_conformation=1">
          <img src="youtube.png" class="w-[30px]" alt="youtube">
        </a>
      </div>
    </nav>




  </header>
</template>

  <script setup lang="ts">
  import { RouterLink } from 'vue-router'
  </script>

<style scoped>

header {
    display: flex;
    width: 100vw;
    align-items: center;
}

nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    color: var(--disturbance-white)
}

.navbox {
    margin-top: 3px;
    margin-right: 20px;
}

.socials {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
}

.internal_link {
    font-family: 'Nosifer', cursive;
}

.internal_link:hover {
    color: var(--disturbance-green);
    font-weight: bolder;
    transform: scale(110%);
}

.fblink,
.instalink,
.bclink,
.spotifylink,
.ytlink {
    filter: grayscale(100%);
}

.fblink:hover,
.instalink:hover,
.bclink:hover,
.spotifylink:hover,
.ytlink:hover {
    filter: grayscale(0%);
    transform: scale(110%);
}

.news_title {
    margin-left: 10px;
    padding: 20px;
    z-index: 2;
    width: 300px;
    color: var(--disturbance-white);
}

</style>
