$(function(){

    const URL_BACKEND_PRODUCTS = 'http://mex-front.tk:8080/api/products/page';

    var page = 1,
        pagelimit = 10,
        totalrecord = 0;

    fetchData();

    // handling the prev-btn
    $(".prev-btn").click(function(){
        if (page > 1) {
            page--;
            fetchData();
        }
        console.log("Prev Page: " + page);
    });

    // handling the next-btn
    $(".next-btn").click(function(){
        if (page * pagelimit < totalrecord) {
            page++;
            fetchData();
        }
        console.log("Next Page: " + page);
    });

    function fetchData() {
        // ajax() method to make api calls
        $.ajax({
            url: URL_BACKEND_PRODUCTS,
            type: "GET",
            data: {
                page: page,
                size: pagelimit
            },
            success: function(data) {

                if (data.docs) {
                    var dataArr = data.docs;
                    console.log(dataArr);

                    totalrecord = data.totalDocs;

                    var html = "";
                    for (var i = 0; i < dataArr.length; i++) {
                        html += "<div class='sample-user'>"+
                            "<h3>ID: " + dataArr[i]._id + "</h3>"+
                            "<h2>Description: " + dataArr[i].description + "</h2>"+
                            "<p>Price: " + dataArr[i].price + "</p>" +
                            "</div>"+
                            "<hr />";
                    }
                    $("#result").html(html);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    }
});