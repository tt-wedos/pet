$.ajax({
	type:'get',
	url:'json/products.json',
	dataType:'json',
	success:function(data){
		console.log(data.products);
		var cont=data.products;
		console.log(data)
		for(var i=0;i<cont.length;i++){
			if(cont[i]['id']==1){
				$("#title").html('');
				var $p=$("<p>"+cont[i]['title']+"</p>");
				$("#title").append($p);
				
				
				var arr=cont[i]['share'].split('<->');
				for(var j=0;j<$("#share li a").length;j++){				
					$("#share li a").eq(j).attr('href',arr[j]);
					console.log($("#share li a").eq(j).attr('href'));
				}
				
			}
		}
		
		
	}
})