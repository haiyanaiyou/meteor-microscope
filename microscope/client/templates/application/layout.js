Template.layout.helpers({
	pageTitle:function(){
		Session.set('pageTitle','A New Title');
		return Session.get('pageTitle');
	}
});