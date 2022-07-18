"use strict";

const { functions } = require("lodash");

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
              swal('Pengangkutan akan dilaksanakan', {
                icon: 'success',
              }).then((value) => {
                location.reload();
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
        const url = "https://pepeseal.klubaderai.com/api/batalpengangkutan/"+id
        $.ajax({
          method: "PUT",
          url: url,
          headers: {
              Authorization: token,
          },
          success: function (response){
              swal('Penolakan Berhasil', {
                icon: 'success',
              }).then((value) => {
                location.reload();
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
  
  document.getElementById('sideDropdownPengangkutan').classList.add("active")
  document.getElementById('sidePermintaanP').classList.add("active")

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
              var dataAPI = response.pengangkutan_pending.reverse();
              $("#tablePermintaanPengangkutan").DataTable({
                  data: dataAPI,
                  responsive: true,
                  pageLength: 10,
                  autoWidth: false,
                  order: [[1, "desc"]],
                  columnDefs: [
                    {
                      targets:[3],
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
                      render: function(){
                          const btnTerima = '<button class="btn btn-success mx-1" id="btnTerima" onclick="terima_btn()">Terima</button>'
                          const btnTolak = '<button class="btn btn-danger mx-1" id="btnTolak" onclick="tolak_btn()">Tolak</button>'   
                          return btnTolak + btnTerima
                      }
                    },],
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
                          data: "user",
                          render: {_: "name"}
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
                      },{
                          width: "9rem"
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