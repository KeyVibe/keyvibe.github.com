$(document).ready(function(){
	$('#carrito').hide();
	
	$('#comprar').click(function(){
		
		$('#a').hover(
		function(){ $(this).addClass('hover')},
		function(){ $(this).removeClass('hover');}
		);
		
		
		var x=$('#cant1').val();
		var y=$('#cant2').val();
		var z=$('#cant3').val();
		var e=$('#cant4').val();
		var r=$('#cant5').val();
		console.log(x);
		
		$('#containerCap').hide();
		$('#carrito').show();
		
		 if( x == 0){
			x=0; 
		}
		if( y == 0){
			y=0; 
		}
		if( z == 0){
			z=0; 
		}
		if( e == 0){
			e=0; 
		}
		if( r == 0){
			r=0; 
		}
		
		var t1= 10*x;
		var t2= 8*y;
		var t3= 12*z;
		var t4= 20*e;
		var t5= 3*r;
		
		var tP=t1+t2+t3+t4+t5;
		
		
		$('#tablaCarrito').html('<TABLE BORDER="1" id="tabla">'+
							'<tr class="tr">'+
								'<th>Producto</th>'+
								'<th>Cantidad</th>'+
								'<th>Precio Unitario</th>'+
								'<th>Precio Total</th>'+
							'</tr>'+							
							'<tr class="tr">'+
								'<td class="td">Pie de Limon</td>'+
								'<td class="td">'+x+'</td>'+
								'<td class="td">S/10.00</td>'+
								'<td class="td">S/'+t1+'</td>'+
							'</tr>'+							
							'<tr class="tr">'+
								'<td class="td">Alfajores de Maicena</td>'+
								'<td class="td">'+y+'</td>'+
								'<td class="td">S/8.00</td>'+
								'<td class="td">S/'+t2+'</td>'+
							'</tr>'+							
							'<tr class="tr">'+
								'<td class="td">Cheescake de Fresa</td>'+
								'<td class="td">'+z+'</td>'+
								'<td class="td">S/12.00</td>'+
								'<td class="td">S/'+t3+'</td>'+
							'</tr>'+							
							'<tr class="tr">'+
								'<td class="td">Crema Volteada</td>'+
								'<td class="td">'+e+'</td>'+
								'<td class="td">S/20.00</td>'+
								'<td class="td">S/'+t4+'</td>'+
							'</tr>'+
							'<tr class="tr">'+
								'<td class="td">Cupcake</td>'+
								'<td class="td">'+r+'</td>'+
								'<td class="td">S/3.00</td>'+
								'<td class="td">S/'+t5+'</td>'+
							'</tr>'+
							'</table>'); 
			
			$('#tabla').addClass('td');
			$('#tabla').addClass('tr'); 
			
			$('#tot1').attr('value', 'S/ '+tP+'.00');
		
			
		
			$('#a').click(function(){
				$('#carrito').hide();
				$('#containerCap').show();
			});
			
			$('#barranco').hover(
			function(){ $(this).addClass('hover')},
			function(){ $(this).removeClass('hover')}
		);
		$('#miraflores').hover(
			function(){ $(this).addClass('hover')},
			function(){ $(this).removeClass('hover')}
		);
		$('#sanisidro').hover(
			function(){ $(this).addClass('hover')},
			function(){ $(this).removeClass('hover')}
		);
		$('#sanborja').hover(
			function(){ $(this).addClass('hover')},
			function(){ $(this).removeClass('hover')}
		);
		 var distrito=0;
		 var totalPagar=tP;
		 
		$('#barranco').click(function(){
			$('#tot3').attr('value', 'Barranco'+' + S/ 5.00');
			distrito = 5;			
			totalPagar=tP+distrito;
			$('#tot4').attr('value', totalPagar);
		});
		
		$('#miraflores').click(function(){
			$('#tot3').attr('value', 'Miraflores'+' + S/ 5.00');
			distrito = 5;
			totalPagar=tP+distrito;
			$('#tot4').attr('value', totalPagar);
		});
		
		$('#sanisidro').click(function(){
			$('#tot3').attr('value', 'San Isidro'+' + S/ 7.00');
			distrito = 7;
			totalPagar=tP+distrito;
			$('#tot4').attr('value', totalPagar);
		});
		
		$('#sanborja').click(function(){
			$('#tot3').attr('value', 'San Borja'+' + S/ 7.00');
			distrito = 7;
			totalPagar=tP+distrito;
			$('#tot4').attr('value', totalPagar);
		});	
			
			
	});
});