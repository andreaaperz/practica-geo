function iniciaMapa(){
  var coordenadas = {
      lat: 45.4647148, lng: -73.830271
  }

  var map = new google.maps.Map(
      document.getElementById('mapa'),
      {
          center : coordenadas,
          zoom : 15
      }
  );
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}