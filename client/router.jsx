const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;

const createHistory = ReactRouter.history.createHistory;

const routes = (
  <Route name="home" path="/" component={AppBody}>
    <IndexRoute component={Hello}/>
    <Route name="signup" path="/signup" component={AccSignUp}/>
    <Route name="signin" path="/signin" component={AccSignIn}/>
  </Route>
);

const router = (
  <Router history={createHistory()}>
      {routes}
  </Router>
);

Meteor.startup(function () {
  ReactDOM.render(router, document.getElementById("lr_main"));
});