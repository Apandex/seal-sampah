"use strict";

function selesai_btn(){
  $("#tableStatusPengangkutan").on('click', '#btnSelesai', function() {
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
        const url = "https://pepeseal.klubaderai.com/api/adminselesaiorder/"+id
        $.ajax({
          method: "PUT",
          url: url,
          headers: {
              Authorization: token,
          },
          success: function (response){
              swal('Pengangkutan telah selesai', {
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


function tableStatusPengangkutan() {

  document.getElementById('sideDropdownPengangkutan').classList.add("active")
  document.getElementById('sideStatusP').classList.add("active")

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
              var dataAPI = response.pengangkutan.reverse();
              dataAPI = dataAPI.filter(dataAPI => dataAPI.status.status == "Terima" || dataAPI.status.status == "Tolak"|| dataAPI.status.status == "Gagal")
              $("#tableStatusPengangkutan").DataTable({
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
                      render: function (data) {
                        if (data.status == "Terima") {
                          return '<div class="badge badge-success">Akan Diangkut</div>'
                      } else {
                          return '<div class="badge badge-warning">Penjadwalan Ulang</div>'
                      }
                      }
                    },
                    {
                      targets:[7],
                      render: function(data){
                        if (data.status == "Terima") {
                          return '<button class="btn btn-success" id="btnSelesai" onclick="selesai_btn()">Selesai</button>'
                        }
                        return ''
                      }
                    }],
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
                      },
                      {
                          data: "status",
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