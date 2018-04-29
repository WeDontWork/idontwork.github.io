<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  text-align: center;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
}
.navbar {
  min-height: 70px;
}
.navbar-brand {
  padding: 40px 15px;
}
.nav-image {
  height: 5em;
}
.reason_container {
  margin-top: 9%;
  padding: 30px;
  border: 1.5px dashed rgba(0, 0, 0, 0.2);
}
.reason {
  font-size: 25px;
  overflow: hidden;
}
.social_container {
  list-style: none;
  padding: 0px;
}
li {
  display: inline;
}
.click_to_copy {
  margin: 10px 0;
  cursor: pointer;
}
.main-reason__btn {
  width: inherit;
  height: 55px;
  background: #fff;
  font-size: 25px;
  margin: 30px 0;
  border-radius: 5px;
  outline: none;
}
footer {
  position: absolute;
  bottom: 15px;
  right: 40%;
}
.dark_font {
  color: rgba(0, 0, 0, 0.3);
}
#sharereason {
  margin-top: -20px;
  margin-right: 20px;
  cursor: pointer;
}
.app_download_container {
  display: inline;
}
.app_download {
  height: 3.5em;
  opacity: 0.4;
  margin-right: 10px;
}
.coming_soon {
  margin-top: 30px;
}
.coming_soon p {
  display: inline;
  margin-right: 20px;
}
span {
  font-family: fontawesome !important;
  margin: 10px 5px;
  border-radius: 50%;
  /* border: 1px solid #fff; */
  padding: 10px;
  cursor: pointer;
}
.main-social__container {
  text-align: center;
}
.main-social__container ul li a {
  color: #fff;
}
@media (max-width: 1000px) {
  .main-reason__btn {
    font-size: 18px;
  }
  footer {
    position: absolute;
    margin: 0px auto;
    bottom: 20px;
    left: 0;
    right: 0;
  }
}
@media (max-width: 767px) {
  .main-reason__btn {
    font-size: 18px;
  }
  footer {
    position: relative;
    margin: 30px auto;
    bottom: auto;
    left: auto;
    right: auto;
  }
}
@media (max-width: 520px) {
  .navbar-brand {
    text-align: center;
    width: 100%;
    padding: 15px 0px;
  }
  .navbar-brand img {
    margin: 0px auto;
  }
  #sharereason {
    display: none;
  }
}
</style>
