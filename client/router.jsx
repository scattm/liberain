const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;

const createHistory = ReactRouter.history.createHistory;

const routes = (
  <Route name="Home" path="/" component={AppBody}>
    <IndexRoute component={Hello}/>
    <Route name="BookCreate" path="/book_create" component={MemoCreate}/>
    <Route name="SignUp" path="/signup" component={AccSignUp}/>
    <Route name="SignIn" path="/signin" component={AccSignIn}/>
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