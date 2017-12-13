var idNewsMask = 'newId_';
  
 //Show all existing reviews 
 window.onload = function() {
 	showNews();
 };

 //Create New Review On Button Click
 function sendNews() {
 	var newNewsDiv = $.fn.createNewsNewDiv();
 	var newsId = $.fn.createNewsId();
 	$("#news_container").append(newNewsDiv);
     localStorage.setItem(idNewsMask+newsId, newNewsDiv);
 	$.fn.clearNewsInputs();
 	alert('Новина успішно додана!');
 }
 //Create New Review Function
 $.fn.createNewsNewDiv = function() {
 	var uploadedImage = document.getElementById('my-file-selector').value;
 	var newsContent = document.getElementById('news_text_admin_page').value;
 	var newsTitle = document.getElementById('news_title_admin_page').value;
 	if(newsContent !== null && newsContent !== '' && newsTitle !==null && newsTitle !== '' && uploadedImage !==null && uploadedImage !== '') {
 	    	
 	    	var newsId = $.fn.createNewsId();
 
 	    	var newNewsDiv = '<div class="col-md-4 news_table centered" data-newsdivid="'
 	    	+ idNewsMask+newsId
 	    	+ '"><a href="#" class="thumbnail"><img src="img/4.jpg" alt="Зображення четвертої новини"><div class="caption"><p>' 
 	    	+ newsTitle 
 	    	+ '</p></div></a></div>'
 	    	return newNewsDiv;
 		} else {
 		   	$.fn.errorAlert();
  		}
}

//Search All Existing Id And Create +1 Id Value
 $.fn.createNewsId = function() {
 	var newsId = 0;
 	var lsLen = localStorage.length;
 	if (lsLen > newsId) {
 		newsId = lsLen+1;
 		return newsId;
 	}
 	return newsId;
 }
 
 //Show All Existing
 function showNews() {
 	var lsLen = localStorage.length;
 	if (lsLen > 0) {
 		for (var i = 0; i < lsLen; i++){
 			var key = localStorage.key(i);
 			if (key.indexOf(idNewsMask) == 0) {
 				$("#news_container").append(localStorage.getItem(key));
 			}
 		}
 	}
 }
 
 $.fn.clearNewsInputs = function() {
     document.getElementById("news_text_admin_page").value = "";
 	 document.getElementById("news_title_admin_page").value = "";
 	$("#remove_image_button").click()
 }
 
 $.fn.errorAlert = function() {
     alert("Вам необхідно заповнити усі поля");
 }		