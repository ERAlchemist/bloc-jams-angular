(function() {
      function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum();
    }
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();
    
/*angular
    .module(blocJams)
    .controller('AlbumCtrl', function($scope) {
  $scope.albumData = angular.copy(albumPicasso)
})();*/