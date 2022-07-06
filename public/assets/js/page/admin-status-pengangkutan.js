"use strict";

function terima_btn(){
  swal({
    title: 'Apakah anda yakin?',
    text: 'Proses ini tidak bisa diubah kembali seperti awal',
    icon: 'warning',
    buttons: true,
  })
  .then((willDelete) => {
    if (willDelete) {
    swal('Pengangkutan telah diselesaikan', {
      icon: 'success',
    });
    } else {
    swal('Proses dibatalkan');
    }
  });
}

function tolak_btn(){
  swal({
    title: 'Berikan Alasan Singkat',
    content: {
    element: 'input',
    attributes: {
      placeholder: 'Pengangkutan Penuh',
      type: 'text',
    },
    },
  }).then((data) => {
    if (data == "" || data == null) {
      swal('Proses dibatalkan');
      return
    } else {
      nolak(data)
    };
  });
};

function nolak(data){
  swal({
    title: 'Apakah anda yakin?',
    text: 'Proses ini tidak bisa diubah kembali seperti awal',
    icon: 'warning',
    buttons: true,
  })
  .then((willDelete) => {
    if (willDelete) {
    swal('Pengunduran Berhasil', {
      icon: 'success',
    });
    } else {
    swal('Proses dibatalkan');
    }
  });
}


// $("#terima_btn").click(function() {
//   swal({
//       title: 'Apakah anda yakin?',
//       text: 'Proses ini tidak bisa diubah kembali seperti awal',
//       icon: 'warning',
//       buttons: true,
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       if (willDelete) {
//       swal('Pengangkutan akan dilaksanakan', {
//         icon: 'success',
//       });
//       } else {
//       swal('Proses dibatalkan');
//       }
//     });
// });

// $("#tolak_btn").click(function() {
//   swal({
//     title: 'Berikan Alasan Singkat',
//     content: {
//     element: 'input',
//     attributes: {
//       placeholder: 'Pengangkutan Penuh',
//       type: 'text',
//     },
//     },
//   }).then((data) => {
//     swal('Alaasan: ' + data + '.');
//   });
// });