profile = [];
profile.database = {};
const loadAssets = function() {
  $.getJSON("/myprofile/", function(data) {
    profile.database = data;
    profile.init();
  });
};

profile.init = function() {
  // profile.del();
  // profile.update();
  // profile.addR();
  profile.generateMarkup();
};

// profile.addR = function() {
//   $(".addR").on("click", function() {
//     // $("#addR").show();
//     window.location = "/addprofile";
//   });
// };
// profile.update = function() {
//   $(" .update").on("click", function(e) {
//     e.preventDefault();

//     $("#updateContainer").show();
//     $("#adding2").submit(function(e) {
//       e.preventDefault();

//       $.post({
//         url: "/profile" + id._id,
//         type: "PUT",
//         data: {
//           name: $("#name").val(),
//           emailId: $("#emialId").val(),
//           address: $("#address").val(),
//           number: $("#number").val(),
//           image: $("#image").val()
//         }
//       });
//       window.location = "/";
//     });
//   });
// };
// profile.del = function() {
//   $(".del").on("click", function() {
//     console.log(id._id);
//     url = "/profile/" + id._id;
//     //  console.log(url);
//     $.post({
//       url: url,
//       method: "DELETE"
//     });
//     window.location = "/";
//   });
// };

profile.generateMarkup = function() {
  var template = "";

  $.each(profile.database, function(index) {
    db = profile.database;
    id = db[index];
    //   console.log(id);

    template += '<div data-id="' + id._id + '">';

    template += '<div class="card" style="width: 25rem;">';
    template += '<img class="card-img-top" src="' + id.image + '"></img>';
    template += '<div class="card-body">';
    template += '<h5 class="fas fa-map-marker-alt">' + id.name + "</h5>";
    template += '<h3 class="card-title">' + id.emailId + "</h3>";
    template += '<p  class="card-text">' + id.address + "</p><br>";
    template += '<p  class="card-text">' + id.number + "</p><br>";
    template += '<div id="hide">';
    template += "<div>";
    template += '<button  class="del btn btn-primary">Delete</button>';
    template += "</div>";
    template +=
      '<button class="update btn btn-primary  ">Edit Detials</button>';
    template += "</div>";

    template += "</div>";
    template += "</div>";
    template += "</div>";
  });
  $(".content").append(template);
  // profile.del();
  // profile.update();
  // profile.addR();
};
// on click

loadAssets();
