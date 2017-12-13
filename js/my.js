 var idMask = 'divId_';
 
 //Show all existing reviews 
 window.onload = function() {
  alert("OmloadFunction");
   if(navigator.onLine){
    alert("onLine");
     $.fn.showReviews();
     localStorage.clear();
  } else {
    alert("Offline");
    $.fn.showReviews();
  }
 };
 
 //Create New Review On Button Click
 function sendReview() {
     alert ("Новина успішно додана");
   var newDiv = $.fn.createNewDiv();
   var reviewId = $.fn.createReviewId();
   $("#reviews").append(newDiv);
     localStorage.setItem(idMask+reviewId, newDiv);
   $.fn.clearReviewInputs();
 }
 
 //Create New Review Function
 $.fn.createNewDiv = function() {
 
         var userName = document.getElementById('send_user_name').value;
       var date = new Date();
       var dateString = "";
           dateString = date.getDate() + "." + (date.getMonth()+1) + "." + (date.getFullYear())
           + ", " + date.getHours() + ":" + date.getMinutes();
       var reviewText = document.getElementById('send_review').value;
 
       if(userName !== null && userName !== '' && reviewText !==null && reviewText !== '') {
           
           var reviewId = $.fn.createReviewId();
 
           var newDiv = '<div class="review divider_bottom" data-divid="'
           + idMask+reviewId
           +  '"><div class="user_name"><h1>' 
           + userName 
           + '</h1></div>'
           + '<div class="review_time"><h4>'
           + dateString
           + '</h4></div>'
           + '<div class="review_text"><p>'
           + reviewText
           + '</p></div>';
 
           return newDiv;
       } else {
           $.fn.errorAlert();
       }
 }
 
 //Search All Existing Id And Create +1 Id Value
 $.fn.createReviewId = function() {
   var reviewId = 0;
   $('div[data-divid]').each(function() {
       var jelId = $(this).attr('data-divid').slice(6);
       if (jelId > reviewId)
           reviewId = jelId;
   });
   reviewId++;
   return reviewId;
 }
 
 //Show All Existing
 $.fn.showReviews = function() {
   var lsLen = localStorage.length;
   if (lsLen > 0) {
       for (var i = 0; i < lsLen; i++){
           var key = localStorage.key(i);
           if (key.indexOf(idMask) == 0) {
               $("#reviews").append(localStorage.getItem(key));
           }
       }
   }
 }
 
 $.fn.clearReviewInputs = function() {
     document.getElementById("send_user_name").value = "";
     document.getElementById("send_review").value = "";
 }
 
 $.fn.errorAlert = function() {
     alert("Вам необхідно заповнити усі поля");
 }