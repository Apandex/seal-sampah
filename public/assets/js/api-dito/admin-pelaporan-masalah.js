"use strict";

function selesai_btn(){
  $("#tablePelaporanMasalah").on('click', '#btnSelesai', function() {
    var id = $(this).closest("tr").find("td:eq(1)").text();
    swal({
      title: 'Apakah anda yakin?',
      text: 'Proses ini tidak bisa diubah kembali seperti awal',
      icon: 'warning',
      buttons: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        let tokenSession = sessionStorage.getItem("token");
        let token = "Bearer" + " " + tokenSession;
        const url = "https://pepeseal.klubaderai.com/api/adminselesailaporan/"+id
        $.ajax({
          method: "PUT",
          url: url,
          headers: {
              Authorization: token,
          },
          success: function (response){
              swal('Pengangkutan akan dilaksanakan', {
                icon: 'success',
              }).then((value) => {
                location.reload();
              });;
          },
          error: function (response) {
              var hasil = response.responseJSON.message;
              alert(hasil);
          },
      });
      } else {
      swal('Proses dibatalkan');
      }
    });
  })
}

function detail_btn(n){  
    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    var a;
    switch (n) {
      case 1:
        a = "#tablePelaporanMasalah"
        break;
      case 2:
        a = "#tablePelaporanMasalahSelesai"
    }
    $(a).on('click', '#btnDetail', function() {
      var id = $(this).closest("tr").find("td:eq(1)").text();
      const url = "https://pepeseal.klubaderai.com/api/getlaporanmasalahuser/" + id
      $(document).ready(function () {
        $.ajax({
            method: "GET",
            url: url,
            headers: {
                Authorization: token,
            },
            success: function (response) {
              var dataLaporan = response.laporan
               swal({
                title: "Detail Masalah",
                text: dataLaporan.laporan
               })
            },
            error: function (response) {
                var hasil = response.responseJSON.message;
                alert(hasil);
            },
        });
    });
    })
}

function tablePelaporanMasalah() {
  
  document.getElementById('sideLaporan').classList.add("active")

  let tokenSession = sessionStorage.getItem("token");
  let token = "Bearer" + " " + tokenSession;
  const url = "https://pepeseal.klubaderai.com/api/getlaporanmasalahadmin"
  $(document).ready(function () {
      $.ajax({
          method: "GET",
          url: url,
          headers: {
              Authorization: token,
          },
          success: function (response) {
              var dataTerima = response.laporan_terima.reverse();
              var dataSelesai = response.laporan_selesai.reverse()
              $("#tablePelaporanMasalah").DataTable({
                  data: dataTerima,
                  responsive: true,
                  pageLength: 10,
                  autoWidth: false,
                  order: [[1, "desc"]],
                  columnDefs: [
                    {
                      targets:[2],
                      render: function (data) {;
                        var date = new Date(data)
                        return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
                      }
                    },
                    {
                      targets:[5],
                      render: function (data) {
                        return data.kodealamat.Kelurahan
                      }
                    },
                    {
                      targets: [6],
                      render: function (data) {
                        if (!data.Alamat) {
                          return "-"
                        } else {
                          return data.Alamat
                        }
                      }
                    },
                    {
                      targets:[8],
                      render: function () {
                          const btnSelesai = '<button class="btn btn-success mx-1 mb-2" id="btnSelesai" onclick="selesai_btn()">Selesai</button>'
                          const btnDetail = '<button class="btn btn-info mx-1 mb-2" id="btnDetail" onclick="detail_btn(1)">Detail</button>' 
                          return btnSelesai + btnDetail   
                      }
                    }],
                  columns: [
                      {
                          data: null,
                          render: function (data, type, full, meta) {
                            return meta.row + 1;
                        }
                      },
                      {
                          data: "id",
                      },
                      {
                        data: "created_at",
                        orderable: false,
                      },
                      {
                          data: "user",
                          render:{_:"name"},
                      },
                      {
                          data: "user",
                          render:{_:"no_telp"},
                      },
                      {
                          data: "user",
                      },
                      {
                          data: "user",
                      },
                      {
                        data: "laporan",
                        orderable: false,
                      },
                  ],
              },);
              $("#tablePelaporanMasalahSelesai").DataTable({
                data: dataSelesai,
                responsive: true,
                pageLength: 10,
                autoWidth: false,
                order: [[1, "desc"]],
                columnDefs: [
                  {
                    targets:[2],
                    render: function (data) {;
                      var date = new Date(data)
                      return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
                    }
                  },
                  {
                    targets:[5],
                    render: function (data) {
                      return data.kodealamat.Kelurahan
                    }
                  },
                  {
                    targets: [6],
                    render: function (data) {
                      if (!data.Alamat) {
                        return "-"
                      } else {
                        return data.Alamat
                      }
                    }
                  },
                  {
                    targets:[8],
                    render: function () {
                      const btnDetail = '<button class="btn btn-info mx-1" id="btnDetail" onclick="detail_btn(2)">Detail</button>' 
                      return btnDetail
                    }
                  }],
                columns: [
                    {
                        data: null,
                        render: function (data, type, full, meta) {
                          return meta.row + 1;
                        }
                    },
                    {
                        data: "id",
                    },
                    {
                      data: "created_at",
                      orderable: false,
                    },
                    {
                        data: "user",
                        render:{_:"name"},
                    },
                    {
                        data: "user",
                        render:{_:"no_telp"},
                    },
                    {
                        data: "user",
                    },
                    {
                        data: "user",
                    },
                    {
                      data: "laporan",
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