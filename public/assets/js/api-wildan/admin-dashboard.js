"use strict";

function refresh() {
    document.getElementById('sideHomepage').classList.add("active")
    let tokenSession = sessionStorage.getItem("token");
    let nameSession = sessionStorage.getItem("name");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://35.89.28.120/api/viewpengangkutanadmin"
    $(document).ready(function () {
        $.ajax({
            method: "GET",
            url: url,
            headers: {
                Authorization: token,
            },
            success: function (response) {
                var dataAngkut = response.pengangkutan;
                var dataPending = response.pengangkutan_pending.reverse()

                var dataTerima = dataAngkut.filter(dataAPI => dataAPI.status.status == "Terima").reverse()


                //buat CARD yang DIATAS
                document.getElementById('nameUser').innerHTML = "Selamat Datang, " + nameSession

                //TODAY REQUEST
                var tanggal = new Date()
                var sekarang = tanggal.getFullYear()+'-'+("0" + (tanggal.getMonth() + 1)).slice(-2)+'-'+tanggal.getDate()
                var angkutSekarang = dataTerima.filter(dataTerima => dataTerima.Tanggal_angkut == sekarang)
                document.getElementById('todayRequest').innerHTML = angkutSekarang.length

                //ON PROGRESS
                document.getElementById('onProgress').innerHTML = dataTerima.length

                //ALL REQUEST
                document.getElementById('allRequest').innerHTML = dataAngkut.length + dataPending.length

                //REQUEST SUCCESS
                var dataSelesai = dataAngkut.filter(dataAngkut => dataAngkut.status.status == "Selesai")
                document.getElementById('requestSuccess').innerHTML = dataSelesai.length

                // Untuk Table LAST REQUESt
                $("#tableStatusPengangkutan").DataTable({
                    data: dataPending,
                    lengthChange: false,
                    searching: false,
                    responsive: true,
                    pageLength: 5,
                    autoWidth: false,
                    order: [[1, "desc"]],
                    columnDefs: [
                        {
                            targets: [3],
                            render: function (data) {
                                if (!data.Alamat) {
                                return "-"
                                } else {
                                return data.Alamat
                                }
                            }
                        },
                        {
                            targets:[6],
                            render: function (data) {
                            if (data.status == "Pending" || data.status == "reschedule_pending") {
                                return '<div class="badge badge-warning">Menunggu Konfirmasi</div>'
                            }}
                            }
                    ],
                    columns: [
                        {
                            data: null,
                            render: function (data, type, full, meta) {
                                return meta.row + 1
                            }
                        },
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
                    order: [[1, "desc"]],
                    columnDefs: [
                        {
                            targets: [3],
                            render: function (data) {
                                if (!data.Alamat) {
                                return "-"
                                } else {
                                return data.Alamat
                                }
                            }
                        },
                        {
                            targets:[6],
                            render: function (data) {
                                return '<div class="badge badge-success">Akan Diangkut</div>'
                            }
                        },],
                    columns: [
                        {
                            data: null,
                            render: function (data, type, full, meta) {
                                return meta.row+1
                            }
                        },
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
