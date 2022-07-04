/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";

$("#confirmRegisUser").click(function () {
    swal({
        title: "Apakah data sudah benar?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((Delete) => {
        if (Delete) {
            swal("Akun Telah Dibuat!", {
                icon: "success",
            });
        }
    });
});

$("#confirmEditUser").click(function () {
    swal({
        title: "Apakah data sudah benar?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((Delete) => {
        if (Delete) {
            swal("Data Akun Telah Diubah!", {
                icon: "success",
            });
        }
    });
});

$("#confirmDelete").click(function () {
    swal({
        title: "Hapus akun Pengguna?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((Delete) => {
        if (Delete) {
            swal("Akun Telah Terhapus!", {
                icon: "success",
            });
        }
    });
});
