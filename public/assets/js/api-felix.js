let tokenSession = sessionStorage.getItem("token");
let token = "Bearer" + " " + tokenSession;

function tablePengangkutanUser() {
    var myArray = [];
    const url = "https://pepeseal.klubaderai.com/api/viewpengangkutanadmin";
    $(document).ready(function () {
        $.ajax({
            method: "GET",
            url: url,
            headers: {
                Authorization: token,
            },
            success: function (response) {
                dataAPI = response.pengangkutan;
                $("#tablepengangkutanadmin").DataTable({
                    data: dataAPI,
                    responsive: true,
                    pageLength: 10,
                    autoWidth: false,
                    order: [[0, "asc"]],
                    columns: [
                        {
                            data: "id",
                        },
                        {
                            data: "user.name",
                            orderable: false,
                        },
                        {
                            data: "user.email",
                            orderable: false,
                        },
                        {
                            data: "Tanggal_angkut",
                            orderable: false,
                        },
                        {
                            data: "jam_angkut",
                            orderable: false,
                        },
                        
                    ],
                });
            },
            error: function (response) {
                hasil = response.responseJSON.message;
                alert(hasil);
            },
        });
    });
}