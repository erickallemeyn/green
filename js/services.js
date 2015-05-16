//Declare a services module with the URL 
angular.module('gs.services',[])
.factory("StoriesResouce", function($resource) {
  return $resource("http://www.reddit.com/r/:subreddit/.json?limit=:limit");
})
.factory("CommentResource", function($resource) {
  return $resource("http://www.reddit.com/r/:subreddit/comments/:permalink/:story/.json?limit=:limit");
})
.factory("CommentService", function() {
	//Use this to pass data between views / controllers
	//Service variables will persist
	var commentURL = '';
	var storyTitle = '';
	
	return {
		setCommentURL:function (data) {
			commentURL =  data;
			//console.log(data);
		},
		getCommentURL:function () {
			return commentURL;
		},
		setStoryTitle:function (data) {
			storyTitle =  data;
			//console.log(data);
		},
		getStoryTitle:function () {
			return storyTitle;
		}
	};

});