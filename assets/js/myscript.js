document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  var nav_link_start = '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">' +
          '<div class="container-fluid">' +
            '<a class="navbar-brand" href="index.html">[CHWAME]</a>' +
            '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">' +
              '<span class="navbar-toggler-icon"></span>' +
            '</button>' +
            '<div class="collapse navbar-collapse" id="navbarCollapse">' +
              '<ul class="navbar-nav me-auto mb-2 mb-md-0">';
  var nav_link_end = '</ul></div></div></nav>';

  var links = [
      {link:"index.html", title:"Home"},
      {link: "hobbies.html", title: "My Hobbies"},
      {link: "stories.html", title: "My Stories"}
  ];

  var htmlLinks = "";
  links.forEach(function(value){
      htmlLinks += '<li class="nav-item"><a href="' + value.link + '" class="nav-link">' + value.title + '</a></li>';
  })

  document.getElementById("header").innerHTML = nav_link_start + htmlLinks + nav_link_end;

  //Make Active Link
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll('a');
  const menuLength = menuItem.length
  for (i = 1; i<menuLength; i++){
    if(menuItem[i].href === currentLocation ){
      menuItem[i].className = "nav-link active"
    }
  }
});