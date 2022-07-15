"use strict";

function selesai_btn(){
  $("#tablePelaporanMasalah").on('click', '#btnSelesai', function() {
    var id = $(this).closest("tr").find("td:eq(0)").text();
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
              });
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
    console.log(n)
    var id = $(this).closest("tr").find("td:eq(0)").text();
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
              });
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
              var dataTerima = response.laporan_terima;
              var dataSelesai = response.laporan_selesai
              $("#tablePelaporanMasalah").DataTable({
                  data: dataTerima,
                  responsive: true,
                  pageLength: 10,
                  autoWidth: false,
                  order: [[0, "desc"]],
                  columnDefs: [
                    {
                      targets:[1],
                      render: function (data) {;
                        var date = new Date(data)
                        return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
                      }
                    },
                    {
                      targets:[4],
                      render: function (data) {
                        return data.kodealamat.Kelurahan
                      }
                    },
                    {
                      targets: [5],
                      render: function (data) {
                        if (!data.Alamat) {
                          return "-"
                        } else {
                          return data.Alamat
                        }
                      }
                    },
                    {
                      targets:[7],
                      render: function () {
                          const btnSelesai = '<button class="btn btn-success mx-1" id="btnSelesai" onclick="selesai_btn()">Selesai</button>'
                          const btnDetail = '<button class="btn btn-info mx-1" id="btnDetail" onclick="detail_btn(1)">Detail</button>' 
                          return btnSelesai + btnDetail   
                      }
                    }],
                  columns: [
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
                order: [[0, "desc"]],
                columnDefs: [
                  {
                    targets:[1],
                    render: function (data) {;
                      var date = new Date(data)
                      return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
                    }
                  },
                  {
                    targets:[4],
                    render: function (data) {
                      return data.kodealamat.Kelurahan
                    }
                  },
                  {
                    targets: [5],
                    render: function (data) {
                      if (!data.Alamat) {
                        return "-"
                      } else {
                        return data.Alamat
                      }
                    }
                  },
                  {
                    targets:[7],
                    render: function () {
                      const btnDetail = '<button class="btn btn-info mx-1" id="btnDetail" onclick="detail_btn(2)">Detail</button>' 
                      return btnDetail
                    }
                  }],
                columns: [
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