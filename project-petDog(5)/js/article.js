function skip(n){
	$.ajax({
		type:'get',
		url:'json/products.json',
		dataType:'json',
		success:function(data){

			var cont=data.products;
			
			//遍历json数据
			for(var i=0;i<cont.length;i++){
				if(cont[i]['id']==n){
					
					//添加标题内容
					$("#title").html('');
					var $h=$("<p>"+cont[i]['title']+"</p>");
					$("#title").append($h);
					
					//添加分享链接
					var linkarr=cont[i]['share'].split('<->');
					for(var j=0;j<$("#share li a").length;j++){					
						$("#share li a").eq(j).attr('href',linkarr[j]);
					}
					
					//添加段落内容
					$("#artiText").html('');
					var tarr=cont[i]['text'].split('<->');
					for(var k=0;k<tarr.length;k++){
						var $p=$("<p>"+tarr[k]+"</p>");
						$("#artiText").append($p);
					}
					
					//添加link字段
					var clink = cont[i]['link'].split('<->');
					$("#linkul .link-first").html(clink[0])
					$("#linkul .link-two").html(clink[1])
				}
			}		
		}
	})

}

