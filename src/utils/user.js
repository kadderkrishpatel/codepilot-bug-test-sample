function getDisplayName(user) {
  if (!user) return "";
  const name = user.nickname || user.name || "";
  return name.toUpperCase();
}

function isAdult(age) {
  return age >= 18;
}

module.exports = { getDisplayName, isAdult };
