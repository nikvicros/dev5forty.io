// Modal Trigger for contactButton

$(document)
    .ready(function () {
        // the "href" attribute of .modal-trigger must specify the modal ID that wants
        // to be triggered
        $('#contactButton').modal();
    });

// ScrollFire Action
var options = [
    //Prototype IMage
    {
        selector: '#learn-image',
        offset: 0,
        callback: function (el) {
            Materialize.fadeInImage($(el));
        }
    }, 
    
    //Collaboration Image
    {
        selector: '#collab-image',
        offset: 0,
        callback: function (el) {
            Materialize.fadeInImage($(el));
        }
    }
];

Materialize.scrollFire(options);


// Contact Forms

 $(document).ready(function() {
    $('select').material_select();
  });