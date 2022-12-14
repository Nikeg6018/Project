// document.querySelector("#success")
//     .addEventListener("click", function () {
//         alert("Data inserted Successfully!");
//     });

$("#add_user").submit(() => {
    alert("Data inserted Successfully!");
});

$("#Update_user").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, (n, i) => {
        data[n["name"]] = n["value"];
    });

    console.log(data);

    var request = {
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done((res) => {
        alert("Data Updated Successfully!");
    });
});

if (window.location.pathname == '/') {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id");
        console.log(id);
        var request = {
            "url": `http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }

        if (confirm("DO you relly want to delete this record?")) {
            $.ajax(request).done((res) => {
                alert("Data Delted Successfully!");
                location.reload();
            });
        }
    });
}