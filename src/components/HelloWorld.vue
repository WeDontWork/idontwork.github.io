<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
            <img class="nav-image" src="../assets/combined-shape.png" alt="">
          </a>
        </div>
      </div>
      <!-- /.container -->
      <p class="pull-right" id="sharereason" @click="shareReason">Got a creative reason ? Share with us !</p>
    </nav>

    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-2 col-sm-2 col-xs-12"></div>
          <div class="col-md-8 col-sm-8 col-xs-12">
            <div class="reason_container">
              <p id="reason" class="reason">
                {{ reason }}
              </p>
            </div>
            <p class="click_to_copy dark_font" @click="clickToCopy">Click to copy it to the clipboard.</p>
            <button class="main-reason__btn" :style="{color: currentColor}" @click="generateNext">Show me another reason</button>
          </div>
          <div class="col-md-2 col-sm-2 col-xs-12"></div>
        </div>
      </section>
      <!-- Reason End-->
      <div class="row coming_soon">
        <p class="dark_font">Coming Soon On</p>
        <div class="app_download_container">
          <img class="app_download" src="../assets/play-store.svg" alt="">
          <img class="app_download" src="../assets/app-store.svg" alt="">
        </div>
      </div>
      <footer>
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="main-social__container">
              <p class="visible-xs">Got a creative reason ? Share with us !</p>
              <p>Ssssh !! Share it only with your close friends.</p>
              <ul class="social_container">
                <li>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://idontlike.work/">
                    <span class="fab fa fa-facebook fa-2x"></span>
                  </a>
                </li>
                <li>
                  <a href="http://www.twitter.com/share?url=google.com&text=Work+From+Home+Reason+Generator">
                    <span class="fab fa fa-twitter fa-2x"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { shuffle } from '../utils';
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
    return {
      reason: "Got some pain in leg. Won't be able to walk to the office.",
      msg: 'Welcome to Your Vue.js App',
      colorList: [
        '#ffab40',
        '#db504a',
        '#40A379',
        '#F4555D',
        '#3A7290',
        '#795548',
        '#607D8B',
        '#9CCC65',
        '#78586F'
      ],
      currentReasonIndex: 0,
      currentColorIndex: 0,
      reasons: [],
      currentColor: '#209DA3'
    };
  },
  methods: {
    shareReason: function() {
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSdhkzp_cKi2lL_jSFrQ1TlTK_6LlE8APTdRbYt9yZrljkHsqA/viewform',
        '_blank'
      );
    },
    clickToCopy: function() {
      var text = $('.reason')[0].innerText;
      var $temp = $('<input>');
      $('body').append($temp);
      $temp.val(text).select();
      document.execCommand('copy');
      $temp.remove();
    },

    generateNext: function() {
      const randomText = this.reasons[this.currentReasonIndex].text;
      this.currentReasonIndex += 1;
      if (this.currentReasonIndex === this.reasons.length) {
        // displayed all messages done screen.
        currentReasonIndex = 0;
      }
      this.currentColorIndex += 1;
      if (this.currentColorIndex === this.colorList.length) {
        this.currentColorIndex = 0;
      }
      this.reason = randomText;
      this.currentColor = this.colorList[this.currentColorIndex];
      document.getElementsByTagName(
        'body'
      )[0].style.backgroundColor = this.currentColor;
    },

    init: async function init() {
      this.colorList = shuffle(this.colorList);
      const axiosResp = await axios.get(
        'https://s3.ap-south-1.amazonaws.com/idontlikework/wfh-reasons.json'
      );
      this.reasons = shuffle(axiosResp.data);
      this.generateNext();
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
