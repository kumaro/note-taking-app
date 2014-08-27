'use strict';

// Custom <markdown> element directive
//app.directive('bgzMarkdown', function($window) {
//    var converter = new $window.Showdown.converter();
//
//    // Re-created elements to display in DOM
//    var previewTemplate = '<div class="copy" ng-hide="isEditMode"></div>';
//    var editTemplate = '<textarea cols="30" rows="10" ng-show="isEditMode" ng-model="markdown"></textarea>';
//  
//    return {
//      // Allow usage for element or Attr
//      restrict: 'EA',
//      compile: function(tElement, tAttrs, transclude) {
//        // Converting templateElement into text
//        var markdown = tElement.text();
//        
//        // Converting to html
//        tElement.html(editTemplate);
//        // Hand Transclusion for editing capabilities
//        var previewElement = angular.element(previewTemplate);
//        tElement.append(previewElement);
//        
//        return function(scope, element, attrs) {
//          scope.isEditMode = true;
//          scope.markdown = markdown;
//          
//          // Switch to preview function
//          scope.switchToPreview = function() {
//            var makeHtml = converter.makeHtml(scope.markdown);
//            previewElement.html(makeHtml);
//            scope.isEditMode = false;
//          };
//          
//          // Switch to edit function
//          scope.switchToEdit = function() {
//            scope.isEditMode = true;
//          };
//        };
//      }
//    };
//});

// ALTERNATE DIRECTIVE FOR MARKDOWN CONVERSION
app.directive('bgzMarkdown', function($window) {
    var converter = new $window.Showdown.converter();

    return {
      restrict: 'EA',
      template: './views/test.html',
      link: function(scope, element, attrs) {
        var htmlText = converter.makeHtml(element.text());
        element.html(htmlText);
      }
    };
});