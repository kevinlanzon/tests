$(document).ready(function() {
  $('button').click(function() {
    var username = $('#username').val();
    var password = $('#password').val();
    var error = true;

    $.ajax({
      type: "GET",
      url: "https://api.myjson.com/bins/3t5s4",
      dataType: "json",
      success: function(data) {
        console.log(data);

          $.each(data, function(key, value) {
            if(username == value[0].username && password == value[0].password || username == value[1].username && password == value[1].password) {
              error = false;
            }
          });

          if(error == false) {
            $('#loading').html("<img src='img/loading.gif'/>");
            $('#username').val('Logging in...');
            $('#error-message').hide();
            $('#submit').hide();
            $('#password').hide();
          } else {
            $('#error-message').html("Username and password do not match!");
            $('#username').val('');
            $('#password').val('');
          }
        }
      });
      return false;
  });
});
