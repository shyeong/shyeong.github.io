$('#chooseFile').bind('change', function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
    $("#noFile").text("No file chosen..."); 
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
  }
});


$('#chooseFile-car').bind('change', function () {
  var filename = $("#chooseFile-car").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
    $("#noFile-car").text("No file chosen..."); 
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile-car").text(filename.replace("C:\\fakepath\\", "")); 
  }
});