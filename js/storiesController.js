gs.controller("storiesController", function($scope, $http, $location, StoriesResouce, CommentService){
    var scope = this;
    scope.title = 'Green Screen';
    
    
    //On page load we want to initialize some values and run a search.
    scope.searchString = '';
    scope.searchSubreddit = 'all';
    scope.limit = '100';
    
    //Load the resource into the scope so that we keep it around for re-searching later
    scope.storiesResource = StoriesResouce;
    scope.commentService = CommentService;
    
    searchTopStories(scope.storiesResource);

	function searchTopStories(StoriesResouce)
	{
		//make the HTTP GET request to the API. The StoriesResource is defined in services.js
		StoriesResouce.get({ subreddit: scope.searchSubreddit, limit:scope.limit }).$promise.then(function (data) 
		{ 
			scope.topstories = data.data.children; 
		})
		.catch(function (err) {
      		console.log(err);
    	})
    	.finally(function() {
    		//this status can be used to capture events in the view if needed
    		scope.loading=false;
    	});
	}
	
	
	scope.setCommentURL = function(url) { 
		scope.commentService.setCommentURL(url);
		//$location.path("route");
	}	
	
	scope.setStoryTitle = function(title) { 
		scope.commentService.setStoryTitle(title);
		//$location.path("route");
	}	
	
	
	scope.setSearchSubreddit = function(subreddit){
		scope.loading = true;
		//Clear out the search string to avoid filtering the new sub
		scope.searchString = '';
		
		scope.searchSubreddit = subreddit;

		//Hit the API and trigger an update to the view
		searchTopStories(scope.storiesResource);
	};
	
});

