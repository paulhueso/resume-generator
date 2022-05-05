<template>
<html>
  
  <body><div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <button class="styled" type="button">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Dashboard
                        </span>
                   </button>
                  
                </li>
                <li class="has-subnav">
                    <button @click="isOpen2 = !isOpen2" class="styled" type="button">
                        <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            Mes CV
                        </span>
                    </button>
                     <div v-show="isOpen2" id="myDropdown" class="dropdown-content">
                       
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
               <li class="has-subnav">
                    <button v-show="!isOpen2" @click="isOpen = !isOpen" class="styled" type="button">
                       <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                            Mes amis
                        </span>
                   </button>
                   <div v-show="isOpen" id="myDropdown" class="dropdown-content">
                       
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    
                </li>
                <li>
                    <button v-if="!isOpen && !isOpen2 "  class="styled" type="button">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Documentation
                        </span>
                    </button>
                    
                    
                 
                </li>
            </ul>

            <ul class="logout">
                <li>
                  
                   <button  class="styled" type="button">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </button>
                    
                   
                </li>  
            </ul>
        </nav>
  </body>
    </html>
</template>

<script>
 
export default {
    data() {
      return {
        isOpen2:false,  
        isOpen: false, // closed by default
      }
    }
  }
</script>

<style lang="scss" scoped>
.dropdown-content {
    display: block;
    position: absolute;
    background-color: #615555;
    min-width: 250px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
/* Links inside the dropdown */
.dropdown-content a {
    color: rgb(255, 255, 255);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);
.fa-2x {
font-size: 2em;
}
.fa {
position: relative;
display: table-cell;
width: 60px;
height: 36px;
text-align: center;
vertical-align: middle;
font-size:20px;
}
.styled{
    background:#212121;
    color:#ffffff
}
.main-menu:hover,nav.main-menu.expanded {
width:250px;
overflow:visible;
}
.main-menu {
background:#212121;
border-right:1px solid #e5e5e5;
position:fixed;
top:0;
bottom:0;
height:100%;
left:0;
width:60px;
overflow:hidden;
-webkit-transition:width .05s linear;
transition:width .05s linear;
-webkit-transform:translateZ(0) scale(1,1);
z-index:1000;
}
.main-menu>ul {
margin:7px 0;
}
.main-menu li {
position:relative;
display:block;
width:250px;
}
.main-menu li>a {
position:relative;
display:table;
border-collapse:collapse;
border-spacing:0;
color:#999;
 font-family: arial;
font-size: 14px;
text-decoration:none;
-webkit-transform:translateZ(0) scale(1,1);
-webkit-transition:all .1s linear;
transition:all .1s linear;
  
}
.main-menu .nav-icon {
position:relative;
display:table-cell;
width:60px;
height:36px;
text-align:center;
vertical-align:middle;
font-size:18px;
}
.main-menu .nav-text {
position:relative;
display:table-cell;
vertical-align:middle;
width:190px;
  font-family: 'Titillium Web', sans-serif;
}
.main-menu>ul.logout {
position:absolute;
left:0;
bottom:0;
}
.no-touch .scrollable.hover {
overflow-y:hidden;
}
.no-touch .scrollable.hover:hover {
overflow-y:auto;
overflow:visible;
}
a:hover,a:focus {
text-decoration:none;
}
nav {
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
-o-user-select:none;
user-select:none;
}
nav ul,nav li {
outline:0;
margin:0;
padding:0;
}
.main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
color:#fff;
background-color:#5fa2db;
}
.area {
float: left;
background: #e2e2e2;
width: 100%;
height: 100%;
}
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 300;
  src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
}
</style>