let i=0;
		
		next();
		
		function next(){
		
				i= i+1;
		
				$.getJSON("https://newsapi.org/v2/top-headlines?country=in&apiKey=56f2cb3acaf843c3b8faa4776786a0eb", function(json){
			   
				
				   let article= json.articles[i];
					
					
					document.getElementById("title").innerHTML= JSON.stringify(article.title).replace(/^"(.*)"$/, '$1');
				   
					document.getElementById("description").innerHTML= JSON.stringify(article.description).replace(/^"(.*)"$/, '$1');
				   
					document.getElementById("content").innerHTML= JSON.stringify(article.content).replace(/^"(.*)"$/, '$1');
					
					document.getElementById("news-source-name").innerHTML= JSON.stringify(article.source.name).replace(/^"(.*)"$/, '$1');
					document.getElementById("total-results").innerHTML= JSON.stringify(json.totalResults) +" results";
				   

				   
					//Changing the attributes directly by JS
					document.getElementById("myImg").src = article.urlToImage;
				   
					document.getElementById("complete-news").href = article.url ;
			   
				});
		
		}