function checkSession() {
  const userProperties = PropertiesService.getUserProperties();
  const loggedInUser = userProperties.getProperty('loggedInUser');

  if (loggedInUser) {
    return {
      loggedIn: true,
      username: loggedInUser
    };
  } else {
    return {
      loggedIn: false
    };
  }
}

function setSession(name, value) {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty(name, value);
}

function getSession(name) {
  const userProperties = PropertiesService.getUserProperties();
  const loggedInUser = userProperties.getProperty(name);

  return loggedInUser;
}

function tempSession(name) {
  var userProperties = PropertiesService.getUserProperties();
  const value = userProperties.getProperty(name);
  userProperties.deleteProperty(value);

  return value;
}
