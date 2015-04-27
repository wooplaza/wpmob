Meteor.startup(function () {

  Template[getTemplate('upload')].helpers({
    name: function () {
      return "Bruce Willis";
    }
  });

  Template[getTemplate('upload')].events({
    "change #file": function (e) {
      var files = e.target.files || e.dataTransfer.files;
      Session.set("filelist", files);
      var newItemsCount = 0;
      for (var i = 0, file; file = files[i]; i++) {
        if (true || file.type.indexOf("text") == 0) {
          var reader = new FileReader();
          reader.onloadend = function (e) {
            var text = e.target.result;
            var all = $.csv.toObjects(text);
//            console.log(all)
            _.each(all, function (item) {
//              Members.insert(entry);


        // if item has no guid, use the URL to give it one
        if (!item.guid) {
          item.guid = item.url;
        }

        // check if post already exists
        if (!Posts.findOne({feedItemId: item.guid})) {
          newItemsCount++;

          var post = {
            title: item.title,
            url: item.url,
            feedItemId: item.guid,
//            userId: "admin",
            prodCategory: item.prodCategory,
            sku: item.sku,
            thumbnailUrl: item.thumbnailUrl,
            price: item.price,
            htmlBody: item.htmlBody,
            body: item.htmlBody
          };

          console.log(post);

          Meteor.call("submitPost", post, function(result, error) {
            if (error) {
              clog("Error: " + error);
            }
            else {
              clog("Success: " + result)
            }
          })
        }









            });
          }
          reader.readAsText(file);
        }
      }
    }
  });

});
