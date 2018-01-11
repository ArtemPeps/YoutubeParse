(function() {
    app.directive("videoBox", function() {
        return {
            link: function(scope, elem, attrs) {
                scope.$watch("firstItem", function(newValue, oldValue) {
                    angular.element(elem).append('<div class="frameDiv"><iframe  src="https://www.youtube.com/embed/' + attrs.videoBox + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
                    if (newValue) {
                        $(".frameDiv").remove();
                        angular.element(elem).append('<div class="frameDiv"><iframe  src="https://www.youtube.com/embed/' + newValue + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
                    }
                });

            }
        };
    });
})();