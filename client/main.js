'use strict';

$(document).ready(init);

var count = 0;

function init() {

   $('#go').click(function() {

    var $first = $('#first').val();
    var $second = $('#second').val();
    var arr = [];
    arr.push($first, $second);
    var combo1 = [];
    var combo2 = [];
    if (!$first || !$second) {
      alert('Please enter a tag for each player');
      return;
    }
    var rand = arr[Math.floor(Math.random() * arr.length)];
    console.log(rand);
    alert('The player with the input: ' + rand + ' begins!');

    $('.col-md-4').click(function() {
     count++;

      console.log($(this).data('val'));
      $(this).html($('<h2>'+ rand + '</h2>'));

      if (rand === $first) {
        rand = $second;
        $('#dosIcon').removeClass('hidden');
        $('#unoIcon').addClass('hidden');
        $(this).addClass('flash');

        console.log(combo2);
      } else {
        rand = $first;
        $('#unoIcon').removeClass('hidden');
        $('#dosIcon').addClass('hidden');
        $(this).addClass('flash');

        // combo1.push($(this).data('val'));
        console.log(combo1);
      };

      if ((($('#second').val() === $('#one').text()) && ($('#second').val() === $('#two').text()) && ($('#second').val() === $('#three').text()))
      || (($('#second').val() === $('#four').text()) && ($('#second').val() === $('#five').text()) && ($('#second').val() === $('#six').text()))
      || (($('#second').val() === $('#seven').text()) && ($('#second').val() === $('#eight').text()) && ($('#second').val() === $('#nine').text()))
      || (($('#second').val() === $('#one').text()) && ($('#second').val() === $('#four').text()) && ($('#second').val() === $('#seven').text()))
      || (($('#second').val() === $('#two').text()) && ($('#second').val() === $('#five').text()) && ($('#second').val() === $('#eight').text()))
      || (($('#second').val() === $('#three').text()) && ($('#second').val() === $('#six').text()) && ($('#second').val() === $('#nine').text()))
      || (($('#second').val() === $('#one').text()) && ($('#second').val() === $('#five').text()) && ($('#second').val() === $('#nine').text()))
      || (($('#second').val() === $('#three').text()) && ($('#second').val() === $('#five').text()) && ($('#second').val() === $('#seven').text()))) {
        alert('player 2 wins!');
        $('.col-md-4').children().remove();
        $('#first').val('');
        $('#second').val('');
        $('.col-md-4').attr('disabled', true);
        count = 0;
      }

      if ((($('#first').val() === $('#one').text()) && ($('#first').val() === $('#two').text()) && ($('#first').val() === $('#three').text()))
      || (($('#first').val() === $('#four').text()) && ($('#first').val() === $('#five').text()) && ($('#first').val() === $('#six').text()))
      || (($('#first').val() === $('#seven').text()) && ($('#first').val() === $('#eight').text()) && ($('#first').val() === $('#nine').text()))
      || (($('#first').val() === $('#one').text()) && ($('#first').val() === $('#four').text()) && ($('#first').val() === $('#seven').text()))
      || (($('#first').val() === $('#two').text()) && ($('#first').val() === $('#five').text()) && ($('#first').val() === $('#eight').text()))
      || (($('#first').val() === $('#three').text()) && ($('#first').val() === $('#six').text()) && ($('#first').val() === $('#nine').text()))
      || (($('#first').val() === $('#one').text()) && ($('#first').val() === $('#five').text()) && ($('#first').val() === $('#nine').text()))
      || (($('#first').val() === $('#three').text()) && ($('#first').val() === $('#five').text()) && ($('#first').val() === $('#seven').text()))) {
        alert('player 1 wins!');
        $('.col-md-4').children().remove();
        $('#first').val('');
        $('#second').val('');
        $('.col-md-4').attr('disabled', true);
        count = 0;
        return false;
      } else if (count === 9) {
        alert('Tie game try again!');
        $('.col-md-4').children().remove();
        $('#first').val('');
        $('#second').val('');
        $('.col-md-4').attr('disabled', true);
        count = 0;
        return false;
      } else if (count > 9) {
        alert('please')
        $('.col-md-4').children().remove();
        $('#first').val('');
        $('#second').val('');
        $('.col-md-4').attr('disabled', true);
        count = 0;
      }
    });

  });
  $('#reset').click(function() {
    $('.col-md-4').children().remove();
      $('#first').val('');
      $('#second').val('');
      $('.col-md-4').attr('disabled', true);
      count = 0;

  })

}






// $('#reset').click(function() {
//   startgame();
// })
