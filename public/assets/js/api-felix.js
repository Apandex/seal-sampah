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
                dataAPI = response.pengangkutan.reverse();
                var dataSelesai = dataAPI.filter(dataAPI => dataAPI.status.status == "Selesai")
                $("#tablepengangkutanadmin").DataTable({
                    data: dataSelesai,
                    responsive: true,
                    pageLength: 10,
                    autoWidth: false,
                    order: [[1, "desc"]],
                    columns: [
                        {
                            data:null,
                            render: function (data, type, full, meta) {
                                return meta.row + 1
                            }
                        },
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
                        {
                            data: "status",
                            render: function (data, type, full, meta) {
                                return '<div class="badge badge-success">Selesai</div>'
                            },
                        }
                        
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