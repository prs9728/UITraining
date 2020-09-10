var xyz = new Promise(function(resolve,reject){
if(condition=='positive')
   response('Iam good');
   else
   reject('OOPS');
});

xyz.then(function(response){
    console.log(response);

})  
.catch(function(errorResponse){
  console.log(reject);
})