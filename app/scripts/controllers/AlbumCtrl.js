(function() {
     function AlbumCtrl() {
         this.albumData = angular.copy(albumPicasso);
    }
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();
    
/*angular
    .module(blocJams)
    .controller('AlbumCtrl', function($scope) {
  $scope.albumData = angular.copy(albumPicasso)
})();*/