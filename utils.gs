function render(file, argsObject) {
  var tmp = HtmlService.createTemplateFromFile(file);
  if (argsObject) {
    var keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }

  return tmp.evaluate();
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}