/**
 * Created by yinyu on 2017/8/6.
 */
$(function() {
    var apiHost = 'https://ico.bitnan.com/api';
    $.get(apiHost + '/time', function(res) {
        if(res && res.timestamp) {
            $('#count-down-number-wrapper').countdown(new Date(res.timestamp), '2017/09/01', function(event) {
                var days = parseInt(event.strftime('%w')) * 7 + parseInt(event.strftime('%d'));
                var hours = event.strftime('%H');
                var minutes = event.strftime('%M');
                var seconds = event.strftime('%S');
                $('.days').text(days);
                $('.hours').text(hours);
                $('.minutes').text(minutes);
                $('.seconds').text(seconds);
            });
        }
    });
    $.get(apiHost + '/eth', function(res) {
        if(res && res.eth) {
            var progress = res.eth / 6000;
            $('#progress-solid-line').css('width', progress * 100 + '%');
            $('#progress').text((progress * 100).toFixed(1) + '%').css('left', progress * 338 - 30 + 'px');
            $('#eth-amount').text(res.eth);
        }
    });
    $.get(apiHost + '/brt', function(res) {
        if(res && res.brt) {
            if(res.brt > 9999) {
                $('#brt-amount').html(res.brt / 10000 + '<span>万</span>');
            }
            else {
                $('#brt-amount').text(res.brt);
            }
        }
    });
    $('#language-en').click(function() {
        window.location.href = '/en' + window.location.pathname;
    });
    $('#language-cn').click(function() {
        if(window.location.pathname == '/en/') {
            window.location.href = '/'
        }
        else {
            window.location.href = '/' + window.location.pathname.split('/')[2];
        }
    });
});