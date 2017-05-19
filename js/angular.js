var app = angular.module('goon', []);
app.controller('Controller', function ($scope, $http) {

$scope.usuarioLogado = {
      codigo: 1,
      nome: 'Thiers',
      imagem: 'http://tribzap2it.files.wordpress.com/2011/04/nic-cage-gi.jpg'
  }

$scope.designersDestaque = [
  {
      codigo: 1,
      nome: 'Marcelo',
      imagem: 'http://tribzap2it.files.wordpress.com/2011/04/nic-cage-gi.jpg'
  },
  {
      codigo: 2,
      nome: 'Robson',
      imagem: 'http://www.menshairstylestoday.com/wp-content/uploads/2016/05/Leonardo-DiCaprio-Haircut.jpg'
  },
  {
      codigo: 3,
      nome: 'Bruno',
      imagem: 'http://4.bp.blogspot.com/_9EQwVWPdVNo/TRKMhw5daSI/AAAAAAAAAGE/RgSintq9gq0/s1600/Brad-Pitt05.jpg'
  }
]

$scope.comprarNeuronios = [
  {
      codigo: 1,
      valor: '12.000'
  },
  {
    codigo: 2,
    valor: '30.000'
  },
  {
    codigo: 3,
    valor: '60.000'
  },
  {
    codigo: 4,
    valor: '90.000'
  },
  {
    codigo: 5,
    valor: '120.000'
  },
  {
    codigo: 6,
    valor: '130.000'
  },
]

});
