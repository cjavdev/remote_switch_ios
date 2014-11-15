angular.module('starter.services', [])
.factory('DeviceService', function() {
  var devices = [{
    id: 1,
    title: 'Truckee Airport',
    currentTemp: '45',
    setPoint: '80'
  }, {
    id: 2,
    title: 'SJ Airport',
    currentTemp: '66',
    setPoint: '80'
  }];

  return {
    getDevice: function (id) {
      var id = parseInt(id, 10);
      return devices[id - 1];
    }
  };
});
