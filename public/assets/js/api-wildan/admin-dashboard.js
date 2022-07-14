"use strict";

function refresh() {
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
                // var dataAPI = response.pengangkutan;
                
                var dataAPI = [
                        {
                            "id": 1,
                            "Tanggal_angkut": "2022-07-06",
                            "jam_angkut": "17:44:14",
                            "status": {
                                "status": "Selesai"
                            },
                            "user": {
                                "id": 1,
                                "name": "Admin1",
                                "email": "Admin1@pepes.com",
                                "no_telp": "08382132421",
                                "Alamat": null,
                                "akses": "admin",
                                "kodealamat": null
                            }
                        },
                        {
                            "id": 3,
                            "Tanggal_angkut": "2022-07-07",
                            "jam_angkut": "13:44:14",
                            "status": {
                                "status": "Selesai"
                            },
                            "user": {
                                "id": 2,
                                "name": "User1",
                                "email": "1.1.SetuBabakan@pepessampah.com",
                                "no_telp": "08382132421",
                                "Alamat": null,
                                "akses": "user",
                                "kodealamat": {
                                    "RT": "1",
                                    "RW": "1",
                                    "Kelurahan": "Setu Babakan",
                                    "Kecamatan": "Jagakarsa"
                                }
                            }
                        },
                        {
                            "id": 10,
                            "Tanggal_angkut": "2022-07-15",
                            "jam_angkut": "12:00:01",
                            "status": {
                                "status": "Selesai"
                            },
                            "user": {
                                "id": 89,
                                "name": "alsi",
                                "email": "alsi@user.com",
                                "no_telp": "085155154599",
                                "Alamat": null,
                                "akses": "user",
                                "kodealamat": {
                                    "RT": "1",
                                    "RW": "1",
                                    "Kelurahan": "Setu Babakan",
                                    "Kecamatan": "Jagakarsa"
                                }
                            }
                        },
                        {
                            "id": 5,
                            "Tanggal_angkut": "2022-07-06",
                            "jam_angkut": "17:44:14",
                            "status": {
                                "status": "Terima"
                            },
                            "user": {
                                "id": 1,
                                "name": "Admin1",
                                "email": "Admin1@pepes.com",
                                "no_telp": "08382132421",
                                "Alamat": null,
                                "akses": "admin",
                                "kodealamat": null
                            }
                        },
                        {
                            "id": 4,
                            "Tanggal_angkut": "2022-07-07",
                            "jam_angkut": "13:44:14",
                            "status": {
                                "status": "Pending"
                            },
                            "user": {
                                "id": 2,
                                "name": "User1",
                                "email": "1.1.SetuBabakan@pepessampah.com",
                                "no_telp": "08382132421",
                                "Alamat": null,
                                "akses": "user",
                                "kodealamat": {
                                    "RT": "1",
                                    "RW": "1",
                                    "Kelurahan": "Setu Babakan",
                                    "Kecamatan": "Jagakarsa"
                                }
                            }
                        },
                        {
                            "id": 2,
                            "Tanggal_angkut": "2022-07-15",
                            "jam_angkut": "12:00:01",
                            "status": {
                                "status": "Reschedule"
                            },
                            "user": {
                                "id": 89,
                                "name": "alsi",
                                "email": "alsi@user.com",
                                "no_telp": "085155154599",
                                "Alamat": null,
                                "akses": "user",
                                "kodealamat": {
                                    "RT": "1",
                                    "RW": "1",
                                    "Kelurahan": "Setu Babakan",
                                    "Kecamatan": "Jagakarsa"
                                }
                            }
                        }
                    ]
                

                
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