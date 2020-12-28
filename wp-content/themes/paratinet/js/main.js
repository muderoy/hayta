jQuery(document).ready(function($) {
		 
		//**********************************
		//HTML5 Elements Work in Old IE	
		(function(){if(!/*@cc_on!@*/0)return;var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','),i=e.length;while(i--){document.createElement(e[i])}})()
		//**********************************

		//**********************************
		//Cross Browser	
		crossbrowser({
			debug      : false,
			scriptSrc  : 'js/main.js',
			styleSrc   : 'wp-content/themes/paratinet/css/browsers/',
			ieLessThan : { active: true, version: '6', scripts: true, styles: true, classes: true, customScript: false},
			chrome     : { scripts: false, styles: true, classes: false, customScript: false },
			safari     : { scripts: false, styles: true, classes: false, customScript: false },
			opera      : { scripts: false, styles: true, classes: false, customScript: false },
			firefox    : { scripts: false, styles: true, classes: false, customScript: false },
			ie10       : { scripts: false, styles: true, classes: false, customScript: false },
			ie9        : { scripts: false, styles: true, classes: false, customScript: false },
			ie8        : { scripts: false, styles: true, classes: false, customScript: false },
			ie7        : { scripts: false, styles: true, classes: false, customScript: false },
			ie6        : { scripts: false, styles: true, classes: false, customScript: false },
			retina     : { scripts: false, styles: true, classes: false, customScript: false },
			mac    : true,
			win    : true,
			x11    : true,
			linux  : true
		});
		//**********************************


		//**********************************
		//Effects		
			$('header').addClass('animated fadeIn');
			$('.single-area').addClass('animated fadeIn');
			$('footer').addClass('animated fadeIn');
		//**********************************

		//**********************************
		//Slider	
		 $("#fyslider").owlCarousel({
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  autoPlay: true,
			  singleItem:true
		  });
		//**********************************

		//**********************************
		//Font Style	
		$('#incfont').click(function(){ 
			  curSize= parseInt($('#textsb').css('font-size')) + 2; 
		  if(curSize<=40) 
				  $('#textsb').css('font-size', curSize); 
			});  
		$('#decfont').click(function(){	 
			  curSize= parseInt($('#textsb').css('font-size')) - 2; 
		  if(curSize>=10) 
				 $('#textsb').css('font-size', curSize); 
			}); 
		//**********************************


});	