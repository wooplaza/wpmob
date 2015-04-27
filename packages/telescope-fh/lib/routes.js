Meteor.startup(function () {
  
  Router.route('/upload', {
    name: 'upload',
    template: getTemplate('upload')
  });

});