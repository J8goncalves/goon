var app = angular.module('goon', []);
app.controller('Controller', function ($scope, $http) {

$scope.usuarioLogado = {
      codigo: 1,
      nome: 'Thiers',
      imagem: 'img/nic_cage.jpg'
  }

$scope.designersDestaque = [
  {
      codigo: 1,
      nome: 'Marcelo',
      imagem: 'img/nic_cage.jpg'
  },
  {
      codigo: 2,
      nome: 'Robson',
      imagem: 'img/leo_caprio.jpg'
  },
  {
      codigo: 3,
      nome: 'Bruno',
      imagem: 'img/brad_pitt.jpg'
  }
]

$scope.listaDes = [
  {
      codigo: 1,
      nome: 'Nome',
      imagem: 'https://image.freepik.com/icones-gratis/usuario-masculino-imagem-no-perfil_318-37825.jpg'
  },
  {
      codigo: 2,
      nome: 'Nome',
      imagem: 'https://image.freepik.com/icones-gratis/usuario-masculino-imagem-no-perfil_318-37825.jpg'
  },
  {
      codigo: 3,
      nome: 'Nome',
      imagem: 'https://image.freepik.com/icones-gratis/usuario-masculino-imagem-no-perfil_318-37825.jpg'
  },
  {
      codigo: 4,
      nome: 'Nome',
      imagem: 'https://image.freepik.com/icones-gratis/usuario-masculino-imagem-no-perfil_318-37825.jpg'
  },
  {
      codigo: 5,
      nome: 'Nome',
      imagem: 'https://image.freepik.com/icones-gratis/usuario-masculino-imagem-no-perfil_318-37825.jpg'
  },
  {
      codigo: 6,
      nome: 'Nome',
      imagem: 'https://image.freepik.com/icones-gratis/usuario-masculino-imagem-no-perfil_318-37825.jpg'
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
