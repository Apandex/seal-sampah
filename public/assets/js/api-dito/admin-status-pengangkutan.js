"use strict";

function selesai_btn(){
  $("#tableStatusPengangkutan").on('click', '#btnSelesai', function() {
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
              dataAPI = dataAPI.filter(dataAPI => dataAPI.status.status == "Terima" || dataAPI.status.status == "Tolak")
              $("#tableStatusPengangkutan").DataTable({
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
                          return '<div class="badge badge-success">Akan Diangkut</div>'
                      } else {
                          return '<div class="badge badge-warning">Penjadwalan Ulang</div>'
                      }
                      }
                    },
                    {
                      targets:[6],
                      render: function(data){
                        if (data.status == "Terima") {
                          return '<button class="btn btn-success" id="btnSelesai" onclick="selesai_btn()">Selesai</button>'
                        }
                      }
                    }],
                  columns: [
                      {
                          data: "id",
                      },
                      {
                          data: "user",
                          render: {_: "name"}
                      },
                      {
                          data: "user",
                          render: {_:"Alamat"}
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