<template>


<!------ Include the above in your HEAD tag ---------->

<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<!-- Navigation -->

  <header >
      <div class="classe">
        <div class="row">
          <!-- social icon-->
          <div class="col-sm-12">
            <ul class="social-network">
              <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-pinterest"></i></a></li>
              <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>

        </div>
      </div>
  </header>

</template>
<style>
.classe {
position: fixed;
width: 100%;
height: 40px;
top: 0%;
background-color: rgb(65, 65, 65);
}
.navbar {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 5px;
}
/*
headeer top
*/
.topbar{
   
  background-color: #212529;
 
}
.topbar .container .row {
margin:-20px;
  padding:0;
}
.topbar .container .row .col-md-12 { 
  padding:0;
}
.topbar p{
  margin:0;
  display:inline-block;
  font-size: 13px;
  color: #0056f7;
}
.topbar p > i{
  margin-right:5px;
}
.topbar p:last-child{
  text-align:right;
} 
header .navbar {
    margin-bottom: 0;
}
.topbar li.topbar {
    display: inline;
    padding-right: 18px;
    line-height: 52px;
    transition: all .3s linear;
}
.topbar li.topbar:hover {
    color: #1bbde8;
}
.topbar ul.info i {
    color: #131313;
    font-style: normal;
    margin-right: 8px;
    display: inline-block;
    position: relative;
    top: 4px;
}
.topbar ul.info li {
    float: right;
    padding-left: 30px;
    color: #0b003a;
    font-size: 13px;
    line-height: 44px;
}
.topbar ul.info i span {
    color: #aaa;
    font-size: 13px;
    font-weight: 400;
    line-height: 50px;
    padding-left: 18px;
}
ul.social-network {
  border:none;
  margin:0;
  padding:0;
}
ul.social-network li {
  border:none;  
  margin:0;
}
ul.social-network li i {
  margin:0;
}
ul.social-network li {
    display:inline;
    margin: 0 5px;
    border: 0px solid #2D2D2D;
    padding: 5px 0 0;
    width: 32px;
    display: inline-block;
    text-align: center;
    height: 32px;
    vertical-align: baseline;
    color: #000;
}
ul.social-network {
  list-style: none;
  margin: 5px 0 10px -25px;
  float: right;
}
.waves-effect {
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    z-index: 1;
    will-change: opacity, transform;
    transition: .3s ease-out;
    color: #fff;
}
a {
  color: #0a0a0a;
  text-decoration: none;
}
li {
    list-style-type: none;
}
</style>