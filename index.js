/* eslint-env node */

function capitalizeWords(input) {
  if (typeof input !== 'string') return '';
  return input
    .split(/\s+/)
    .filter(Boolean)
    .map(w => (w.length ? w[0].toUpperCase() + w.slice(1) : w)) // keep original casing after first char
    .join(' ');
}

function filterActiveUsers(users) {
  if (!Array.isArray(users)) return [];
  return users.filter(u => u && u.isActive === true);
}

function logAction(action, username) {
  const ts = new Date().toISOString();
  return `User ${username} performed ${action} at ${ts}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };
