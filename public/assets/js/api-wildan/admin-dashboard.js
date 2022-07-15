"use strict";

function refresh() {
    document.getElementById('sideHomepage').classList.add("active")
    let tokenSession = sessionStorage.getItem("token");
    let nameSession = sessionStorage.getItem("name");
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
                
                //buat CARD yang DIATAS
                document.getElementById('nameUser').innerHTML = "Selamat Datang, " + nameSession

                //TODAY REQUEST
                var tanggal = new Date()
                var sekarang = tanggal.getFullYear()+'-'+("0" + (tanggal.getMonth() + 1)).slice(-2)+'-'+tanggal.getDate()
                var angkutSekarang = dataAPI.filter(dataAPI => dataAPI.Tanggal_angkut == sekarang)
                document.getElementById('todayRequest').innerHTML = angkutSekarang.length

                //ON PROGRESS
                var dataTerima = dataAPI.filter(dataAPI => dataAPI.status.status == "Terima")
                document.getElementById('onProgress').innerHTML = dataTerima.length

                //ALL REQUEST
                document.getElementById('allRequest').innerHTML = dataAPI.length

                //REQUEST SUCCESS
                var dataSelesai = dataAPI.filter(dataAPI => dataAPI.status.status == "Selesai")
                document.getElementById('requestSuccess').innerHTML = dataSelesai.length

                // Untuk Table LAST REQUESt
                $("#tableStatusPengangkutan").DataTable({
                    data: dataAPI,
                    lengthChange: false,
                    searching: false,
                    responsive: true,
                    pageLength: 5,
                    autoWidth: false,
                    order: [[0, "desc"]],
                    columnDefs: [
                        {
                            targets: [2],
                            render: function (data) {
                                if (!data.Alamat) {
                                return "-"
                                } else {
                                return data.Alamat
                                }
                            }
                        },
                        {
                            targets:[5],
                            render: function (data) {
                                if (data.status == "Selesai") {
                                return '<div class="badge badge-success">Selesai</div>'
                            } else if (data.status == "Terima" || data.status == "Reschedule"){
                                return '<div class="badge badge-warning">Akan Diangkut</div>'
                            } else if (data.status == "Tolak") {
                                return '<div class="badge badge-danger">Penjadwalan Ulang</div>'
                            } else if (data.status == "Pending" || data.status == "reschedule_pending") {
                                return '<div class="badge badge-dark">Menunggu Konfirmasi</div>'
                            }}
                            }
                    ],
                    columns: [
                        {
                            data: "id",
                        },
                        {
                            data: "user",
                            render: {_:"name"}
                        },
                        {
                            data: "user",
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

                // Untuk Table ON PROGRESS
                $("#tableOnProgress").DataTable({
                    data: dataTerima,
                    lengthChange: false,
                    searching: false,
                    responsive: true,
                    pageLength: 5,
                    autoWidth: false,
                    order: [[0, "desc"]],
                    columnDefs: [
                        {
                            targets: [2],
                            render: function (data) {
                                if (!data.Alamat) {
                                return "-"
                                } else {
                                return data.Alamat
                                }
                            }
                        },
                        {
                            targets:[5],
                            render: function (data) {
                                return '<div class="badge badge-success">Akan Diangkut</div>'
                            }
                        },],
                    columns: [
                        {
                            data: "id",
                        },
                        {
                            data: "user",
                            render: {_:"name"}
                        },
                        {
                            data: "user"
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

//   function tableOnProgress() {
//     let tokenSession = sessionStorage.getItem("token");
//     let token = "Bearer" + " " + tokenSession;
//     const url = "https://pepeseal.klubaderai.com/api/viewpengangkutanadmin"
//     $(document).ready(function () {
//         $.ajax({
//             method: "GET",
//             url: url,
//             headers: {
//                 Authorization: token,
//             },
//             success: function (response) {
//                 var dataAPI = response.pengangkutan;
//                 dataAPI = dataAPI.filter(dataAPI => dataAPI.status.status == "Terima")
//                 $("#tableOnProgress").DataTable({
//                     data: dataAPI,
//                     responsive: true,
//                     pageLength: 10,
//                     autoWidth: false,
//                     order: [[0, "desc"]],
//                     columnDefs: [
//                         {
//                             targets:[5],
//                             render: function (data) {
//                                 return '<div class="badge badge-success">Akan Diangkut</div>'
//                             }
//                           },],
//                     columns: [
//                         {
//                             data: "id",
//                         },
//                         {
//                             data: ""
//                         },
//                         {
//                             data: ""
//                         },
//                         {
//                             data: "Tanggal_angkut",
//                             orderable: false,
//                         },
//                         {
//                             data: "jam_angkut",
//                             orderable: false,
//                         },
//                         {
//                             data: "status",
//                             orderable: false,
//                         },
//                     ],
//                 },);
//             },
//             error: function (response) {
//                 var hasil = response.responseJSON.message;
//                 alert(hasil);
//             },
//         });
//     });
//   }
// // buildTable(dataApi)

// // function buildTable(data){
// //     var table = document.getElementById('myTable')

// //     for (var i = 0; i < data.length; i++) {
// //         var row = '<tr> <td>${data[i].id}</td> <td>${data[i].nama}</td> <td>${data[i].alamat}</td> </tr>'

// //         table.innerHTML += row
// //     }
// // }