"use strict";

function terima_btn(){
  $("#tablePermintaanPengangkutan").on('click', '#btnTerima', function() {
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
        const url = "https://pepeseal.klubaderai.com/api/adminterimaorder/"+id
        $.ajax({
          method: "PUT",
          url: url,
          headers: {
              Authorization: token,
          },
          success: function (response){
              console.log(response)
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

function tolak_btn(){
  $("#tablePermintaanPengangkutan").on('click', '#btnTolak', function() {
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
        const url = "https://pepeseal.klubaderai.com/api/admintolakorder/"+id
        $.ajax({
          method: "PUT",
          url: url,
          headers: {
              Authorization: token,
          },
          success: function (response){
              console.log(response)
              swal('Penolakan Berhasil', {
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


function tablePermintaanPengangkutan() {
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
              console.log(dataAPI);
              dataAPI = dataAPI.filter(dataAPI => dataAPI.status.status == "Pending")
              $("#tablePermintaanPengangkutan").DataTable({
                  data: dataAPI,
                  responsive: true,
                  pageLength: 10,
                  autoWidth: false,
                  order: [[0, "desc"]],
                  columnDefs: [
                    {
                      targets:[5],
                      render: function(){
                          return '<button class="btn btn-success" id="btnTerima" onclick="terima_btn()">Terima</button>'
                      }
                    },
                    {
                      targets:[6],
                      render: function(){
                          return '<button class="btn btn-danger" id="btnTolak" onclick="tolak_btn()">Tolak</button>'
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