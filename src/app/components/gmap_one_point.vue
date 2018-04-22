<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data() {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
        latitude: 59.885926,
        longitude: 30.320027,
        title: "Московская, 100"
      }],
      center: {
        latitude: 59.83428,
        longitude: 30.125099
      },
      map: null,
      bounds: null,
      markers: []
    }
  },
  mounted() {
    const element = document.getElementById(this.mapName)
    const mapCenter = this.center
    const options = {
      center: new google.maps.LatLng(mapCenter.latitude, mapCenter.longitude),
      scrollwheel: false,
      zoom: 11,
      mapTypeId: 'roadmap',
      fullscreenControl: false,
      styles: [
      {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
               "hue": "#2c2e33"
               
            },
            {
               "saturation": 7
            },
            {
               "lightness": 19
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00ff00"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": 31
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": 31
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": -2
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": -90
            },
            {
                "lightness": -8
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": 10
            },
            {
                "lightness": 69
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {  
              "hue": "#00BfA5"
            },
            {
              "saturation": -32
            },
            {
              "lightness": -27
            },
            {
                "visibility": "simplified"
            }
        ]
    }
  ]
    }
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
      const icon = {
        url: './assets/images/decor/map_marker.svg',
        size: new google.maps.Size(30, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(-15, -40),
        scaledSize: new google.maps.Size(30, 40)
      };
    const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({ 
        position,
        map: this.map,
        icon: icon,
        title: coord.title
      });
    this.markers.push(marker)
    });
  }
};
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 100%;
  flex-grow: 1;
}
</style>