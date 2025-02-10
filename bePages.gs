
function getPageUrl(PageName) {
  return ScriptApp.getService().getUrl() + "?v=" + PageName;
}
function loadAbout() {
  return render("about", { title: "test" });
}

function loadDashboard() {
  return render("dashboardForm");
}

function loadMonitoring() {
  return render("Monitoring");
}

function loadLogout() {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty("loggedInUser");
  return render("loginForm");
}
