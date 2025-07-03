const bootstrapApp = require('../../public/index');

module.exports = (currentUser, matchingUsers, params, token, error) => `
<script type="text/javascript">
  var currentUser = ${JSON.stringify(currentUser)};
  var matchingUsers = ${JSON.stringify(matchingUsers)};
  var bootstrapApp = ${bootstrapApp.toString()};

  bootstrapApp(currentUser, matchingUsers, ${JSON.stringify(params)}, ${JSON.stringify(token)}, ${JSON.stringify(error)});
</script>
`;
