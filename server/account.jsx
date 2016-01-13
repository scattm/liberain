Accounts.onCreateUser(function(options, user) {
  if (user.profile == undefined) user.profile = {};
  _.extend(user.profile, { displayName: options.displayName });

  return user;
});