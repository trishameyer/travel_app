$(document).ready(function() {
    //click handler for the destination dropdown menu
    $('#destination-dropdown.dropdown').on('click', '.dropdown-menu li a', function() {
        var value = $(this).text();
        $('#desinationMenu .dropdown-button-text').text(value);
    });

});