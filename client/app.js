(function(){
  'use strict';

  angular.module('app', [])
    .factory('Notes', function($http){
      var notes = [
        { title: 'WTF Happended?', body: 'I need to figure what happened', color: 1 },
        { title: 'Messy', body: 'clean up my room', color: 3 }
      ];

      return {
        all: notes
      };
    })
    .directive('notes', function(Notes){
      var template = '<div id="notes">';
      template += '<div ng-transclude></div>';
      template += '</div>';

      return {
        restrict: 'E',
        template: template,
        controllerAs: 'NotesCtrl',
        controller: function NotesController(Notes) {
          this.notes = {};
          angular.extend(this.notes, Notes);
          console.log(this.notes)
          var notes = [];
          var editMode = false;
          var editNote;

          this.register = function(note) {
            notes.push(note); //?
          };

          this.toggleEditMode = function(){
            //?
          };
        },

        transclude: true
      };
    })
    .directive('note', function(){
      return {
        require: '^Notes',
        restrict: 'E',
        bindToController: true,
        controller: function NoteController($scope, Notes) {
          console.log(this);
          angular.extend(this, Notes);

          this.title = this.title || 'Yooo';
          this.body = 'Note test body';
        },

        controllerAs: 'NoteCtrl',
        scope: {
          title: '@',
          body: '@'
        },

        templateUrl: 'note.html',
        replace: true
      };
    });
}());
