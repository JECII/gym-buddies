(function(){
	
	angular.module('gym-buddies')
		.component('membersComponent', {
			templateUrl: 'app/components/members/members.html',
			controller: MembersController
		})
	
	
		function MembersController($firebaseArray,FBREF){
			var mc = this;
			
			var db = new Firebase(FBREF + 'posts');
			mc.posts = $firebaseArray(db);
			
			 mc.addPost = function(post){
				 mc.posts.$add(post)
				 mc.newPost = ""
				 
			 } 
			
			mc.removePost = function(index){
				mc.posts.$remove(index);
			}
			mc.editPost = function(post){
				mc.newPost = post;
			}
		}
	
	
}())