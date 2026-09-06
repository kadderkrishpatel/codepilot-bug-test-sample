function getDisplayName(user) {
  return user.nickname.toUpperCase();
}

function isAdult(age) {
  if (age = 18) {
    return true;
  }
  return false;
}

module.exports = { getDisplayName, isAdult };
