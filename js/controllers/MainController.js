app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();
  
    $scope.appetizers = [
      {
        name: 'Caprese',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
      },
      {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
      },
      {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95  
      }
    ];
    
    $scope.mains = [
      {
        name: "Pizza",
        description: "Mozzarella, tomatoes, basil, balsmaic glaze",
        price : 5.95  
      },
      {
        name: "Juice",
        description: "Served with juicy juice",
        price : 2.95  
      },
      {
        name: "Souvlaki",
        description: "Onion, tomatoes, pork, tzatziki,potatoes",
        price : 2.95  
      },
    ];
    
    $scope.extras = [
      {
        name: "Salad",
        description: "lettyce,tomato",
        price : 5.95  
      },
      {
        name: "Burger",
        description: "beef meat,onin ring,sause",
        price : 2.95  
      },
      {
        name: "Noodles",
        description: "rice,mushrooms",
        price : 2.95  
      },
    ];
  
  }]);