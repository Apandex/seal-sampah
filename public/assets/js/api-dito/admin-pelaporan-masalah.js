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
              console.log(response)
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
  console.log(token + url)
  $(document).ready(function () {
      $.ajax({
          method: "GET",
          url: url,
          headers: {
              Authorization: token,
          },
          success: function (response) {
              var dataAPI = response.laporan;
              dataAPI = dataAPI.filter(dataAPI => dataAPI.status.status == "Terima" || dataAPI.status.status == "Pending" )
              console.log(dataAPI);
              $("#tablePelaporanMasalah").DataTable({
                  data: dataAPI,
                  responsive: true,
                  pageLength: 10,
                  autoWidth: false,
                  order: [[0, "desc"]],
                  columnDefs: [
                    {
                      targets:[5],
                      render: function (data) {;
                        var date = new Date(data)
                        return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
                      }
                    },
                    {
                      targets:[7],
                      render: function(){
                          const btnSelesai = '<button class="btn btn-success mx-1" id="btnSelesai" onclick="selesai_btn()">Selesai</button>'
                          const btnProses = '<button class="btn btn-warning mx-1" id="btnProses" onclick="proses_btn()">Proses</button>' 
                          return btnProses + btnSelesai
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
                          data: ""
                      },
                      {
                          data: ""
                      },
                      {
                          data: "created_at",
                          orderable: false,
                      },{
                          data: "laporan",
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