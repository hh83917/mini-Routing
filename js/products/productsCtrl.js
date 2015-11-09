var app = angular.module('miniRouting');

app.controller('productsCtrl', function ($scope, $stateParams, productService) {
    // console.log($stateParams);
    if ($stateParams.id === 'shoes') {
        $scope.productData = productService.shoeData;
    }
    else if ($stateParams.id === 'socks') {
        $scope.productData = productService.sockData;
    }
});
