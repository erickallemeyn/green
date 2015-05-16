gs.controller("commentController", function($scope, $http, CommentResource, CommentService){

	var scope = this;
    scope.commentResource = CommentResource;
    scope.commentService = CommentService;
    
    scope.commentURL = getCommentURL(CommentService);
    scope.title = getStoryTitle(CommentService);
    
    loadComments(scope.commentURL, CommentResource);
    
    function loadComments(url, CommentResource)
	{
		var res = url.split("/");
		
		//Transform the URL to get around the Cross-Origin-Request filter
		var subreddit = res[2];
		var permalink = res[4];
		var story = res[5];
		var limit = '200';
		
		//make the HTTP GET request to the API. The StoriesResourceis defined in services.js
		CommentResource.query({ subreddit : subreddit, permalink: permalink, story:story, limit:limit }).$promise.then(function (data) 
		{ 
			scope.comments = data[1].data.children; 
		})
		.catch(function (err) {
      		console.log(err);
    	})
    	.finally(function() {
    		//this status can be used to capture events in the view if needed
    		scope.loading=false;
    	});
	}
	
	function getCommentURL(CommentService) 
	{
    	return CommentService.getCommentURL();
	}	
	
	function getStoryTitle(CommentService) 
	{
    	return CommentService.getStoryTitle();
	}	
	
	
});

