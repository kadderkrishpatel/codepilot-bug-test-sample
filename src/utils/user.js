function getDisplayName(user) {
  if (!user || typeof user !== "object") return "";
  const name = user.nickname || user.name || "";
  return String(name).toUpperCase();
}

function isAdult(age) {
  if (typeof age !== "number" || Number.isNaN(age)) return false;
  return age >= 18;
}

module.exports = { getDisplayName, isAdult };
