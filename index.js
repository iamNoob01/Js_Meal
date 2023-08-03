$.ajax({
     type : 'GET',
     url : 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
     success : function(responce){
          // console.log(responce.meals[0].strMeal)
          for(var i=0;i<responce.meals.length;i++){
               // console.log(responce.meals[i].strMeal)

               var newdiv = `<div class="col-md-3 text-center shadow-lg p-3 mb-5 bg-white rounded"> 
               <p>${responce.meals[i].strMeal}</p>
               <img src=${responce.meals[i].strMealThumb} class="img-fluid">
               <p>${responce.meals[[i]].idMeal}</p>
               </div>`

          $('#myitem').append(newdiv)
          }

     },
     error : function(error){
          console.log(error)
     }
})