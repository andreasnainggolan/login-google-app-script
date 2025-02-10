
var Route = {};
Route.path = function (route, callback) {
  Route[route] = callback;
}

function doGet(e) {
  const session = checkSession();

  Route.path('dashboard', loadDashboard);
  Route.path('monitoring', loadMonitoring);
  Route.path('logout', loadLogout);

  if (session.loggedIn && e.parameters.v[0] === "logout") {
    const html = HtmlService.createTemplateFromFile('LoginSample');
    return html.evaluate();
  }

  if (!session.loggedIn) {
    const html = HtmlService.createTemplateFromFile('LoginSample');
    return html.evaluate();
  }

  if (Route[e.parameters.v]) {
    return Route[e.parameters.v]();
  } else {
    const html = HtmlService.createTemplateFromFile('LoginSample');
    return html.evaluate();
  }
}

function verifyLogin(username, password) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('t_login');

  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 2).getValues();

  const hashedPassword = Utilities.base64Encode(password);

  for (let row of data) {
    if (row[0] === username && row[1] === hashedPassword) {
      const userProperties = PropertiesService.getUserProperties();
      userProperties.setProperty('loggedInUser', username);
      return {
        success: true,
        message: 'Login Berhasil',
        redirect: true
      }
    }

    return {
      success: false,
      message: 'Username atau password salah!',
      redirect: false
    }
  }
}
