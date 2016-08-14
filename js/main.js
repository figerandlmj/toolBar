// 设置别名
requirejs.config({
	paths:{
		jquery:'jquery.min'
	}
});
// 引入模块
requirejs(['jquery','backtop'],function($,backtop){

	// new backtop.BackTop($('#backTop'),{
	// 	mode:'move',
	// 	pos:100,
	// 	speed:2000
	// })
	$('#backTop').backtop({
		mode:'move'
	});
	// var scroll=new scrollto.ScrollTo({
	// 	dest:500,
	// 	speed:2000
	// });
	// $('#backTop').on('click',$.proxy(scroll.move,scroll));
	// $(window).on('scroll',function(){
	// 	checkPosition($(window).height());
	// });
	// checkPosition($(window).height());
	// function move(){
	// 	$('html,body').animate({
	// 		scrollTop:0
	// 	},800);
	// }
	// function go(){
	// 	$('html,body').scrollTop(0);
	// }
	// function checkPosition(pos){
	// 	if($(window).scrollTop() > pos){
	// 		$('#backTop').fadeIn();
	// 	}else{
	// 		$('#backTop').fadeOut();
	// 	}
	// }

});