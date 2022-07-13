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

function proses_btn(){
  $("#tablePelaporanMasalah").on('click', '#btnProses', function() {
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
        // const url = "https://pepeseal.klubaderai.com/api/admintolakorder/"+id
        $.ajax({
          method: "PUT",
          url: url,
          headers: {
              Authorization: token,
          },
          success: function (response){
              swal('Masalah segera diproses', {
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
};


function tablePelaporanMasalah() {
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
              var dataAPI = response.laporan;
              console.log(dataAPI)
              dataAPI = dataAPI.filter(dataAPI => dataAPI.status.status == "Terima" || dataAPI.status.status == "Pending" )
              $("#tablePelaporanMasalah").DataTable({
                  data: dataAPI,
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
                      targets:[7],
                      render: function (data) {
                        if (data.status == "Terima") {
                          return '<div class="badge badge-success">Sedang Diproses</div>'
                      } else {
                          return '<div class="badge badge-warning">Menunggu</div>'
                      }
                      }
                    },
                    {
                      targets:[8],
                      render: function (data) {
                        if (data.status == "Terima") {
                          return '<button class="btn btn-success mx-1" id="btnSelesai" onclick="selesai_btn()">Selesai</button>'
                      } else {
                          return '<button class="btn btn-warning mx-1" id="btnProses" onclick="proses_btn()">Proses</button>' 
                      }}
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
                          data: ""
                      },
                      {
                          data: ""
                      },
                      {
                          data: ""
                      },
                      {
                          data: ""
                      },
                      {
                          data: "laporan",
                          orderable: false,
                      },
                      {
                          data: "status",
                          orderable: false,
                      },
                      {
                          data: "status",
                          orderable: false,
                      }
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