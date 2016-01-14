// Publish list of user's Memo Books
Meteor.publish("memoBooks", function (){
  if (this.userId) {
    return MemoBooks.find({owner: this.userId});
  }
});

Meteor.methods(
  {
    addMemoBook: function(memo){
      if (! Meteor.userId()){
        throw new Meteor.Error('User is not logged in');
      }

      if (! memo.name || !memo.description){
        throw new Meteor.Error('Data corruption')
      }

      MemoBooks.insert({
        name: memo.name,
        description: memo.description,
        shareWith: memo.shareWith,
        createdAt: new Date(),
        owner: Meteor.userId()
      })
    }
  }
);