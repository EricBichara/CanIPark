/**
 * Created by ericbichara on Aug/02/14.
 */
app.
    directive('panel', function(){
        return {
            restrict: "E",
            transclude: true,
            scope: {
                title: "@"
            },
            template: "<div class='panel-container'>" +
                "<div class='panel-header'>{{title}}</div>" +
                "<div ng-transclude class='panel-content'></div></div>"
        }
    });
