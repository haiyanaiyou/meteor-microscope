Router.configure({
	layoutTemplate:'layout',
	loadingTemplate:'loading',
	notFoundTemplate:'notFound',
	waitOn:function(){
		return Meteor.subscribe('posts');
	}
});
Router.route('/',{name:'postsList'});
Router.route('/posts/:_id',{
	name:'postsPage',
	data:function(){
		return Posts.findOne(this.params._id);
	}
});
Router.route('/submit',{name:'postsSubmit'});
Router.onBeforeAction('dataNotFound',{only:'postsPage'});