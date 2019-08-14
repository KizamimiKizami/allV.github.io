<template>
  <section>
  	<div>
  		<form>
  			<span class="btn-real-dent">
  				<button @click="addVideo()"  class="fa fa-home">😎</button>
  			</span>
  			<span class="cp_iptxt">
  				<p>YOUTUBE-VIDEO-ID-INPUT: <input class="ef" type="text" v-model="newVideo" 
  					placeholder="~?v=RAegWcDgdRA ←this"><span class="focus_line"></span></p>
  			</span>
  		</form>
  	</div>
	<div class="youtube">
	   <div v-for="video in videos">
      	<youtube
        	ref="youtube" 
        	:video-id="video.videoId"
        	@playing="playing"
        	@paused="paused"
        	@ended="ended"
      	></youtube>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
	name: 'VueYoutube',
	data () {
    	return {
      	videos : [
      		],
      		newVideo: ""
    	}
  	},
  	methods: {
   　　playVideo() {
      	this.player.playVideo()
    },
    //再生スタートした際に発火
    playing() {
      console.log('\o/ we are watching!!!')
    },
    //一時停止した際に発火
    paused() {
      console.log('paused')
    },
    //再生終了した際に発火
    ended() {
      console.log('ended')
    },
    addVideo: function(event){
    	let videoId = this.newVideo && this.newVideo.trim()
    	console.log(videoId)
    	if(!videoId){
    		return
    	}
    	this.videos.push({
    		videoId : videoId,
    		done : 'left',
    	})
    	this.newVideo = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrap{
	margin-bottom: 1.5rem;
}
.youtube{
    background-color: #eee;     /* 背景色指定 */
    display: flex;              /* フレックスボックスにする */
    justify-content: center; /* 子要素をflexboxにより中央に配置する */
    flex-wrap: wrap; 
}
youtube{
  text-align: center;
}

.btn-real-dent {
  /*周りの凹み*/
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: rgba(3, 169, 244, 0.54);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  background: #f7f7f7;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.08);
}
.btn-real-dent button {
  /*ボタン自体*/
  position: absolute;
  content: '';
  width: 80px;
  height: 80px;
  line-height: 80px;
  left: 10px;
  top: 9px;
  border-radius: 50%;
  font-size: 40px;
  background-image: linear-gradient(#e8e8e8 0%, #d6d6d6 100%);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
  border-bottom: solid 2px #b5b5b5;
}
  
.btn-real-dent .fa:active {
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
  border-bottom: solid 2px #d8d8d8;
}
.cp_iptxt {
	position: relative;
	width: 80%;
	margin: 40px 3%;
}
.cp_iptxt input[type='text'] {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 50%;
	letter-spacing: 1px;
	padding-left: 4em;
}
.cp_iptxt input[type='text']:focus {
	outline: none;
}
.ef {
	padding: 4px 0;
	border: 0;
	border-bottom: 1px solid #1b2538;
	background-color: transparent;
}
.ef ~ .focus_line {
	position: absolute;
	z-index: 99;
	bottom: 0;
	left: 0;
	width: 50%;
	height: 2px;
}
.ef ~ .focus_line:before,
.ef ~ .focus_line:after {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 50%;
	content: '';
	transition: 0.4s;
	background-color: #da3c41;
}
.ef ~ .focus_line:after {
	right: 0;
	left: auto;
}
.ef:focus ~ .focus_line:before,
.ef:focus ~ .focus_line:after,
.cp_iptxt.ef ~ .focus_line:before,
.cp_iptxt.ef ~ .focus_line:after {
	width: 50%;
	transition: 0.4s;
}
.ef ~ label {
	position: absolute;
	z-index: -1;
	top: 4px;
	left: 0;
	width: 50%;
	transition: 0.3s;
	letter-spacing: 0.5px;
	color: #aaaaaa;
}
.ef:focus ~ label,
.cp_iptxt.ef ~ label {
	font-size: 12px;
	top: -16px;
	transition: 0.3s;
	color: #da3c41;
}


@media screen and (min-width: 600px) {
  .wrap:after{
    display: block;
    clear: both;
    content: "";
  }
}
</style>