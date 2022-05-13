;(function(){
    var forms = document.querySelectorAll('.form-send');

    if(forms.length === 0) {
        return;
    }

    var formSend = function(form) {
       var xhr = new XMLHttpRequest();
       var url = 'php/mail.php';

       xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

       xhr.onload = function() {
        console.log(xhr.response);
       };
 
       xhr.send();

    };

    for ( var i = 0; i < forms.length; i += 1) {
        forms[i].addEventListener('submit', function(e) {
            e.preventDefault();

            var form = e.currentTarget;
            formSend(form);
        });
    }

})();