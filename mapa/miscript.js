$(document).ready(function(){
	
		$('#postre5').hover(
			function(){ $(this).addClass('hover')},
			function(){ $(this).removeClass('hover')}
		);
		$('#postre4').hover(
			function(){ $(this).addClass('hover')},
			function(){ $(this).removeClass('hover')}
		);
		$('#postre3').hover(
			function(){ $(this).addClass('hover')},
			function(){ $(this).removeClass('hover')}
		);
		$('#postre2').hover(
			function(){ $(this).addClass('hover')},
			function(){ $(this).removeClass('hover')}
		);
		
		$('#postre5').click(function(){
			$('#tot1').attr('value', ' + S/ 5.00');
		});
		
		$('#postre4').click(function(){
			$('#tot1').attr('value', ' + S/ 6.00');
		});
		
		$('#postre3').click(function(){
			$('#tot1').attr('value', ' + S/ 7.00');
		});
		
		$('#postre2').click(function(){
			$('#tot1').attr('value', ' + S/ 8.00');
		});	

});