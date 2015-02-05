$(document).ready(function(){

  function viewModel() {
    var self = this
    var date = new Date();
    var d = date.getDay() - 1;
    var n = date.getDate();
    var m = date.getMonth() + 1;
    self.daysOfWeek = ko.observableArray(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
    self.dayOfWeek = ko.observable(self.daysOfWeek()[d]);
    self.activity = ko.observable('work');
    self.day = ko.observable(n);
    self.month = ko.observable(m);
    self.year = ko.observable('2015');

    console.log(date)

    self.fullDate = ko.computed(function(){
    return self.day() + '/' + self.month() + '/' + self.year();
    });

    };

  ko.applyBindings(new viewModel());

});