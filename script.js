var elems = document.getElementsByClassName('confirmation');
    var confirmIt = function (e) {
        if (!confirm('Thank you for stopping by!')) e.preventDefault();
    };
    for (var i = 0, l = elems.length; i < l; i++) {
        elems[i].addEventListener('click', confirmIt, false);
    }