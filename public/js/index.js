window.onload = () => {
  displayStores();
};

let markers = [];
let map;
let infoWindow;

function initMap() {
  var losAngeles = { lat: 34.06338, lng: -118.35808 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: losAngeles,
    zoom: 11,
    mapTypeId: 'roadmap',
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    },
  });
  infoWindow = new google.maps.InfoWindow();
  showStoresMarkers();
}

function displayStores() {
  let storesHTML = '';
  for (let [index, store] of stores.entries()) {
    let address = store.addressLines;
    let phone = store.phoneNumber;

    storesHTML += `<div class="store-container">
      <div class="store-info-container">
          <div class="store-address">
                  <span>${address[0]}</span>
                  <span>${address[1]}</span>
          </div>
          <div class="store-phone-number">
              ${phone}
          </div>
      </div>
      <div class="store-number-container">
          <div class="store-number">
              ${index + 1}
          </div>
      </div>

  </div>`;
    document.querySelector('.stores-list').innerHTML = storesHTML;
  }
}

function showStoresMarkers() {
  //set bounds when page is loaded
  let bounds = new google.maps.LatLngBounds();

  //loop through stores list and add marker
  for (let [index, store] of stores.entries()) {
    //lat long form google maps
    let latlng = new google.maps.LatLng(
      store.coordinates.latitude,
      store.coordinates.longitude
    );
    //get name and address from data
    let name = store.name;
    let address = store.addressLines[0];
    bounds.extend(latlng);
    createMarker(latlng, name, address, index + 1);
  }
  map.fitBounds(bounds);
}

function createMarker(latlng, name, address, index) {
  var html = '<b>' + name + '</b> <br/>' + address;
  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    label: index.toString(),
  });
  google.maps.event.addListener(marker, 'click', function () {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  });
  markers.push(marker);
}
