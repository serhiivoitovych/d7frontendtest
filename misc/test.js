/**
 * @file
 * Attaches behaviors for selectmenu.
 */

(function ($) {

Drupal.behaviors.test = {
  attach: function (context, settings) {
    $('select', context).once('selectmenu', function () {
      $(this).selectmenu();
    });
  }
};

})(jQuery);