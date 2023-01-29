function initMap() {
  const puntarenas = { lat: 9.977259925512358, lng: -84.83483768943405 };
  const guanacaste = { lat: 10.626845340702932, lng: -85.44371351826352 };
  const sanJose = { lat: 9.931125474696401, lng: -84.0962990028569 };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: { lat: 40.01163286499346, lng: 4.289576944935145 },
  });

  const markerPuntarenas = new google.maps.Marker({
    position: puntarenas,
    map: map,
  });

  const markerGuanacaste = new google.maps.Marker({
    position: guanacaste,
    map: map,
  });

  const markerSanJose = new google.maps.Marker({
    position: sanJose,
    map: map,
  });
}

window.initMap = initMap;
