// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
                var myQuery = new AV.Query(myData);
                myQuery.find({
                             success:function(results) {
                                 response.success(results.length);
                             },
                             error:function(error) {
                                 response.error(error);
                             }
                });
});