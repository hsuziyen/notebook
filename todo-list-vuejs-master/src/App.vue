<template>
  <div id="app">
    <div class="container">
<a v-for="n in filterSearch" :href="n.url">{{ n.title }}</a>
      <h1 v-text="text"></h1>
項目文字欄: <input type="text" v-model="newItem"placeholder="輸入要顯示在項目選單中之文字"v-on:keyup.enter="addNew" />
修改Title欄：<input type="text" v-model="text"placeholder="輸入要顯示在標題中之文字" v-on:keyup.enter="addNew" />
<button v-on:click="addNew">請按按鈕新增項目</button>
<button type="button" v-on:click.prevent="MySubmit">請按按紐查詢列表項目</button>
      <ul>
        <li v-for="(item, index) in items">
          <span v-bind:class="{finished: item.isFinished}">{{item.label}}</span>
          <span v-on:click="toggle(item)" class="func first">{{!item.isFinished ? 'done' : 'todo'}}</span>
          <span v-on:click="items.splice(index, 1)" class="func">delete</span>
	<span id="click" style="color:red;"></span><br>
        </li>
下拉選單欄:<select id=theList>
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
搜尋過濾項目欄：<input type="text"v-model="search" placeholder="輸入搜尋列表在項目選單中之文字"/>
<a v-for="n in filterSearch" :href="n.url">{{ n.title }}</a>
<div>{{msg | upper}}</div>
<div v-bind:id="id | formatId"></div>
      </ul>
<div v-show="hasData" v-on:click="del" class="delAll">
        Copyright @2020 Hello Vue! Web Design By中國科大實習生1061461048ChihYen_Hsu製作
      </div>
    </div>
  </div>
</template>

<script>
import Store from './store';

export default {
  name: 'app',
  mounted() {
    this.hasData = this.items && this.items.length ? true : true;
  },
  data() {
    return {
      text: 'Hello Vue!',
      items: Store.fetch(),
      newItem: '',
	msg: '',
	Index: '',
	option: '',
	optionIndex: '',
	list: '',
      hasData: true
    }
  },
 watch: {
    items: {
      handler(options) {
        Store.save(options);
        this.hasData = this.items && this.items.length ? true : true;
	this.hasData = this.options && this.options.length ? true : true;
      },
      deep: true
    }
  },
  methods: {
    toggle(item) {
      item.isFinished = !item.isFinished;
	option.isFinished = !option.isFinished;
    },
    addNew() {
      if (this.newItem.trim() == 'option') {
			var TheMsg;
			var index=list.options.length;
 			var searchText = $(this).val(option); 
            		var $searchLi = "option";
		list.options[index]=new Option(text, value);
$searchLi = $("#content_news_list").find('a:contains(' + searchText + ')').parent();
alert( obj.options[obj.selectedIndex].innerHTML);
paramArray=obj.value.split(",");
       return;
      }
      if (!this.items) {
	var index=list.options.length;
list.options[index]=new Option(text, value);
$searchLi = $("#content_news_list").find('a:contains(' + searchText + ')').parent(option);
alert( obj.options[obj.selectedIndex].innerHTML);
 $("#content_news_list").html($searchLi).clone(option);
        	this.items = []
      }
      this.items.push({label: this.newItem, isFinished: true});
var index=list.options.length;				
list.options[index]=new Option(text, value);
alert("請輸入要顯示在選單中的文字！");
$searchLi = $("#content_news_list").find('a:contains(' + searchText + ')').parent(option);
alert( obj.options[obj.selectedIndex].innerHTML);
	document.getElementById("click").innerHTML = "已新增一值「"+text+"」";
       this.newItem = 'options';
    },
    del() {
	if(index>=0){
var index=list.options.length;
				list.options[index]=new Option(text, value);
				TheMsg = "已刪除所選取的元件「"+list.options[index].text+"」";
				list.options[index]=null;
			}else{
				TheMsg = "新增新選項後方可再次刪除";
				alert("已無任何選項！");
 			$("#content_news_list").html("option");
			this.items = null;
    }
  },
  components: {
  filterSearch() {
	var arr =[option];
            document.execCommand("HiliteColor", true, "aquamarine");
            sel.collapseToEnd(option);
			isfound=1;
       document.designMode = "turn on";
for(var i=0;i<this.info.length;i  ){
 if(this.info[i].name.indexOf(this.search)!=-1){
arr.push(this.info[i])
document.getElementById("click").innerHTML = TheMsg;
    return this.news.filter(searchResult => searchResult.title.match(this.searchWords));
}
}
}
}
}
}
</script>

<style>
html, body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
  margin: 0;
font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
 background: -webkit-linear-gradient(left top, #DDD, #777); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(bottom right, #DDD, #777); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(bottom right, #DDD, #777); /* For Firefox 3.6 to 15 */
  background: linear-gradient(to bottom right, #DDD, #777); /* Standard syntax */
  background-attachment: fixed;
font-size:20px;
  line-height: 1.5em;
font-family: 'Helvetica Neue', sans-serif;
}
.container {
  text-align: center;
}
.search-wrapper {
    position: relative;
    label {
      position: absolute;
      font-size: 12px;
      color: rgba(0,0,0,50);
      top: 8px;
      left: 12px;
      z-index: -1;
      transition: .15s all ease-in-out;
    }
.wrapper {
    display: flex;
    max-width: 444px;
    flex-wrap: wrap;
    padding-top: 12px;
  }
.anchor {
	  display: flex;
		align-items: center;
		justify-content: center;
    border: 1px solid transparent;
    padding: .75rem 2rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
		color: #fff;
    background-color: #27AE60;
    border-color: #27AE60;
}
.anchor:after {
		display: inline-block;
    width: 0;
    height: 0;
    margin-left: .5em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .28em solid transparent;
    border-bottom: 0;
    border-left: .28em solid transparent;
}
.anchor:hover {
	color: #fff;
	background-color: #229954;
	border-color: #229954;
	cursor: pointer;
}
.menu {
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid rgba(0,0,0,.15);
	border-radius: .25rem;
	color: #212529;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	font-size: 1rem;
	list-style: none;
	margin: .125rem 0 0;
	padding: .5rem 0;
	position: absolute;
	text-align: left;
}
.menu-item {
	color: #212529;
	padding: .25rem 1.5rem;
	transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.menu-item:hover {
	background-color: #F4F6F6;
	cursor: pointer;
}
span {
	font-weight: bold;
	color: #229954;
	font-size: 1.25rem;
}

.card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 124px;
    margin: 12px;
    transition: .15s all ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    a {
      text-decoration: none;
      padding: 12px;
      color: #03A9F4;
      font-size: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 100px;
      }
      small {
        font-size: 10px;
        padding: 4px;
      }
    }
  }
#dropDown
{
  width:90%;
  height:40px;
  border:none;
  box-shadow: 0px 0px 5px 1px grey;                   
  border-radius: 10px;
  outline:none;
  margin-bottom:10px;
  margin: auto;
}
            button:active {
                background-color:rgba(155, 89, 182,0.7);
                border-bottom: 1px solid rgba(142, 68, 173,1.0);
                transform: translateY(4px);
}
li { /*hide <li> elements when added*/
  background: #DDD;
  padding: 5px;
  margin: 0;/*25px*/
  height: 0;
  overflow: hidden;
}
li:hover { /*<li> ux behavior*/
  background: #EEE;
  border-left: 5px solid #F58025;
  border-right: 5px solid #F58025;
  margin: 25px 20px 25px 20px; /*this shrinks the sides the the borders won't distort*/
}
li.show { /*used to trigger the .swing animation*/
  height: auto;
  margin: 25px;
}
.swing li { /*dissapear animation*/
  opacity: 0;
  transform: rotateX(-90deg);
  transition: all 0.5s;
}
.swing li.show { /*show animation*/
  opacity: 1;
  transform: none;
  transition: all 0.5s;
}
.container,
.center-block { /*sets the width limit for larger screens*/
  max-width: 700px;
}
.buttonFlex
{
   display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
  width:90%;
  margin: 0px auto 20px;
}
option
{
  padding:2px;
  text-align:center;
  font-size:16px;
}
.hotpink {
    background: hotpink;
  }
.green {
    background: green;
  }
.box {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0,0,0,.12);
}
}
input {
  box-shadow: 0 0 8px rgb(250, 204, 219);
  border: none;
padding: 4px 12px;
      color: rgba(0,0,0,.70);
      border: 1px solid rgba(0,0,0,.12);
      transition: .15s all ease-in-out;
      background: white;
}
li {
  margin-top: 9px;
}
button {
  border-radius: 14px;
  color: black;
color: red;
color: blue;
  box-shadow: 0 0 2px rgb(270, 220, 231);
  background: orange;
}
span.func {
  cursor: pointer;
  margin-left: 7px;
  text-decoration: underline;
}
span.func.first {
  margin-left: 13px;
}
ul {
  text-align: left;
  margin-left: 50px;
}
input[type="text"]:focus { /*change the bootstrap text box glow color*/
  border-color: #00aaa6;
  box-shadow:  0 0 8px #00aaa6;
}
.wrapper
{
  background-color:rgba(46, 204, 113,0.6);
  margin:auto;
  width:50vw;
  display:flex;
  flex-direction:column;
  padding:0px 10px ;
  margin-top:4%;
  border-radius:1rem;
}
.btn { /*default button bahavior (modifies bootstrap defaults)*/
  background-color: #00aaa6;
  color: #444;
  font-weight: bold;
}
.btn:hover,
.btn:focus{ /*ux button bahavior (modifies bootstrap defaults)*/
  background-color: #F58025;
}
p { /*This and the next reduce <li> shifting during the mouseover animation*/
  margin-left: 5px;
  margin-right: 5px;
}
li:hover p { /*as above*/
  margin-left: 0px;
  margin-right: 0px;
}
ul a:link,
ul a:visited { /*<li> are nested within <a>, so this controlls the defualt <li> behavior*/
  text-decoration: none;
  color: #444;
}
ul a:hover,
ul a:active{ /*as above, controlls the ux <li> behavior*/
  text-decoration: none;
  color: #00aaa6;
}
.finished {
  text-decoration: line-through;
}
div.delAll {
  text-decoration: none;
}

div#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
}
</style>
