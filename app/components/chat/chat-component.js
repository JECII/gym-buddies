(function(){
    
    angular.module('gym-buddies')
		.component('chatComponent', {
			templateUrl: 'app/components/chat/chat.html',
			controller: ChatController
		})
    
    function ChatController($firebaseArray,FBREF){
			var cc = this;
			
			var db = new Firebase(FBREF +'auth');
			cc.chats = $firebaseArray(db);
			
			 cc.addChats = function(chat){
				 cc.chats.$add(chat)
				 cc.newChat = ""
				 
			 } 
			
			cc.removeChat = function(index){
				cc.chats.$remove(index);
			}
			cc.editChat = function(chat){
				cc.newChat = chat;
			}
		}
    
    
    
    
})()