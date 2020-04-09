window.onload = () => {
  displayStores();
};

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
