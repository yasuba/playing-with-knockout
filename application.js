$(document).ready(function(){

  function viewModel() {
    var self = this
    var date = new Date();
    var d = date.getDay() - 1;
    var n = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    self.daysOfWeek = ko.observableArray(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
    self.activities = ko.observableArray(['work', 'fun', 'sleep', 'drink!']);
    self.dayOfWeek = ko.observable(self.daysOfWeek()[d]);
    var rand = Math.floor((Math.random() * (4 - 0)));
    self.activity = ko.observable(self.activities()[rand]);
    self.day = ko.observable(n);
    self.month = ko.observable(m);
    self.year = ko.observable(y);

    self.fullDate = ko.computed(function(){
    return self.day() + '/' + self.month() + '/' + self.year();
    });

    };

  ko.applyBindings(new viewModel());

});