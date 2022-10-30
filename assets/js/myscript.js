document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  var nav_link_start = '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">' +
          '<div class="container-fluid">' +
            '<a class="navbar-brand" href="/">[CHWAME]</a>' +
            '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">' +
              '<span class="navbar-toggler-icon"></span>' +
            '</button>' +
            '<div class="collapse navbar-collapse" id="navbarCollapse">' +
              '<ul class="navbar-nav me-auto mb-2 mb-md-0">';


  var nav_link_end = '</ul></div></div></nav>';

  var htmlLinks = "";

  htmlLinks += '<li class="nav-item"><a href="/" class="nav-link">Home</a></li>';
  htmlLinks += '<li class="nav-item"><a href="/hobbies.html" class="nav-link">My Hobbies</a></li>';
  htmlLinks += '<li class="nav-item dropdown"><a href="/stories/" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">My Stories</a>';
  htmlLinks += '<ul class="dropdown-menu">';
  htmlLinks += '<li><a class="dropdown-item" href="/stories/lucas-the-elf.html">Lucas The Elf</a></li>';
  htmlLinks += '<li><a class="dropdown-item" href="/stories/the-invasion.html">The Invasion</a></li>';
  htmlLinks += '<li><a class="dropdown-item" href="/stories/the-freaky-cave.html">The Freaky Cave</a></li>';
  htmlLinks += '</ul>';
  htmlLinks += '</li>';
              

  document.getElementById("header").innerHTML = nav_link_start + htmlLinks + nav_link_end;

  //Make Active Link
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll('a');
  const menuLength = menuItem.length
  for (i = 1; i<menuLength; i++){
    if(menuItem[i].href === currentLocation ){
      if(menuItem.[i].className() == "dorpdown-item"){
        menuItem[i].className = "dorpdown-item active"
      }else{
        menuItem[i].className = "nav-link active"
      }
    }
  }
});