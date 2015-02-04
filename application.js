$(document).ready(function(){

  function viewModel() {

    var self = this
   self.dayOfWeek = ko.observable('Wednesday');
   self.activity = ko.observable('work');
   self.day = ko.observable('04');
   self.month = ko.observable('02');
   self.year = ko.observable('2015');

   self.fullDate = ko.computed(function(){
    return self.day() + '/' + self.month() + '/' + self.year();
   });

   self.daysOfWeek = ko.observableArray(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
   alert("The week has " + self.daysOfWeek().length + ' days');
  };

  ko.applyBindings(new viewModel());

});