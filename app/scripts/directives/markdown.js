'use strict';

// Custom <markdown> element directive
app.directive('bgzMarkdown', ['$window', '$sanitize', function($window, $sanitize) {
    var converter = new $window.Showdown.converter();

    return {
      restrict: 'E',
      template: '<div class="aboutCopy"><p id="editBox"></p></div>',
      link: function(scope, element, attrs) {
        scope.$watch(attrs.markdown, function (newVal) {
          var html = newVal ? $sanitize(converter.makeHtml(newVal)) : '';
          element.html(html);
        });
      }
    };
}]);