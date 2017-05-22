if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('../sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }


function somenteNumeros(num) {
    var er = /[^0-9.* .*/.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}

function formataCartao(num) {
    var campo = $('#cartao').val();
    if (campo.length == 4 || campo.length == 9 || campo.length == 14) {
      $('#cartao').val(campo + " ");
    }
}

function formataValidadeCartao(num) {
    var campo = $('#validade_cartao').val();
    if (campo.length == 2) {
      $('#validade_cartao').val(campo + "/");
    }
}

$(document).ready(function(){
  var larguraTela = $(window).width();
  var alturaTela = $(window).height();
});

$(window).resize(function(){
  larguraTela = $(window).width();
  alturaTela = $(window).height();
});
