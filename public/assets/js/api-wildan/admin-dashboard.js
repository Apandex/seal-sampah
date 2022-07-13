"use strict";

function tableStatusPengangkutan() {
    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://pepeseal.klubaderai.com/api/viewpengangkutanadmin"
    $(document).ready(function () {
        $.ajax({
            method: "GET",
            url: url,
            headers: {
                Authorization: token,
            },
            success: function (response) {
                var dataAPI = response.pengangkutan;
                dataAPI = dataAPI.filter(dataAPI => dataAPI.status.status == "Terima" || dataAPI.status.status == "Tolak" || dataAPI.status.status == "Pending" || dataAPI.status.status == "Reschedule")
                $("#tableStatusPengangkutan").DataTable({
                    data: dataAPI,
                    responsive: true,
                    pageLength: 10,
                    autoWidth: false,
                    order: [[0, "desc"]],
                    columnDefs: [
                    //   {
                    //     targets:[5],
                    //     render: function (data) {
                    //       if (data.status == "Terima") {
                    //         return '<div class="badge badge-success">Akan Diangkut</div>'
                    //     } else {
                    //         return '<div class="badge badge-warning">Penjadwalan Ulang</div>'
                    //     } 
                    //     }
                    //   }
                    ],
                    columns: [
                        {
                            data: "id",
                        },
                        {
                            data: ""
                        },
                        {
                            data: ""
                        },
                        {
                            data: "Tanggal_angkut",
                            orderable: false,
                        },
                        {
                            data: "jam_angkut",
                            orderable: false,
                        },
                        // {
                        //     data: "status",
                        //     orderable: false,
                        // },
                    ],
                },);
            },
            error: function (response) {
                var hasil = response.responseJSON.message;
                alert(hasil);
            },
        });
    });
  }

  function tableOnProgress() {
    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://pepeseal.klubaderai.com/api/viewpengangkutanadmin"
    $(document).ready(function () {
        $.ajax({
            method: "GET",
            url: url,
            headers: {
                Authorization: token,
            },
            success: function (response) {
                var dataAPI = response.pengangkutan;
                dataAPI = dataAPI.filter(dataAPI => dataAPI.status.status == "Terima")
                $("#tableOnProgress").DataTable({
                    data: dataAPI,
                    responsive: true,
                    pageLength: 10,
                    autoWidth: false,
                    order: [[0, "desc"]],
                    columnDefs: [
                      {
                        targets:[5],
                        render: function (data) {
                          if (data.status == "Terima") {
                            return '<div class="badge badge-success">On Progress</div>'
                        }
                        }
                      }],
                    columns: [
                        {
                            data: "id",
                        },
                        {
                            data: ""
                        },
                        {
                            data: ""
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
                            orderable: false,
                        },
                    ],
                },);
            },
            error: function (response) {
                var hasil = response.responseJSON.message;
                alert(hasil);
            },
        });
    });
  }
// buildTable(dataApi)

// function buildTable(data){
//     var table = document.getElementById('myTable')

//     for (var i = 0; i < data.length; i++) {
//         var row = '<tr> <td>${data[i].id}</td> <td>${data[i].nama}</td> <td>${data[i].alamat}</td> </tr>'

//         table.innerHTML += row
//     }
// }