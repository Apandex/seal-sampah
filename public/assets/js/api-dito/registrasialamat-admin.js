function getKelurahan() {
    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://pepeseal.klubaderai.com/api/kelurahan";
    $(document).ready(function () {
        $.ajax({
            method: "GET",
            url: url,
            headers: {
                Authorization: token,
            },
            success: function (response) {
                var dataKel = response.kelurahan;
                $("#selectKelurahan")
                    .removeAttr("disabled")
                    .selectric("refresh");

                for (var i = 0; i < dataKel.length; i++) {
                    $("#selectKelurahan").append(
                        "<option>" + dataKel[i].kelurahan + "</option>"
                    );
                    $("#selectKelurahan").selectric("refresh");
                }
            },
            error: function (response) {
                var hasil = response.responseJSON.message;
                alert(hasil);
            },
        });
    });
}

function getRW() {
    $("#selectRW").empty();
    $("#selectRW").append(
        "<option disabled selected hidden>~Pilih RW~</option>"
    );
    $("#selectRW").removeAttr("disabled").selectric("refresh");

    $("#selectRT").empty();
    $("#selectRT").append(
        "<option disabled selected hidden>~Pilih RT~</option>"
    );
    $("#selectRT").attr("disabled", "disabled").selectric("refresh");

    var kel = $("#selectKelurahan").val();
    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://pepeseal.klubaderai.com/api/RW";
    $(document).ready(function () {
        $.ajax({
            method: "POST",
            url: url,
            data: {
                Kelurahan: kel,
            },
            headers: {
                Authorization: token,
            },
            success: function (response) {
                var dataRW = response.RW;
                console.log(dataRW);
                $("#selectRW").removeAttr("disabled").selectric("refresh");

                for (var i = 0; i < dataRW.length; i++) {
                    $("#selectRW").append(
                        "<option>" + dataRW[i].RW + "</option>"
                    );
                    $("#selectRW").selectric("refresh");
                }
            },
            error: function (response) {
                var hasil = response.responseJSON.message;
                alert(hasil);
            },
        });
    });
}

function getRT() {
    $("#selectRT").removeAttr("disabled").selectric("refresh");

    $("#selectRT").empty();
    $("#selectRT").append(
        "<option disabled selected hidden>~Pilih RT~</option>"
    );

    var kel = $("#selectKelurahan").val();
    var rw = $("#selectRW").val();
    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://pepeseal.klubaderai.com/api/RT";
    $(document).ready(function () {
        $.ajax({
            method: "POST",
            url: url,
            data: {
                Kelurahan: kel,
                RW: rw,
            },
            headers: {
                Authorization: token,
            },
            success: function (response) {
                var dataRT = response.RT;
                dataRT = dataRT.sort((a, b) => a.RT - b.RT);
                console.log(dataRT);
                $("#selectRT").removeAttr("disabled").selectric("refresh");

                var dataAllRT = [
                    { RT: 1 },
                    { RT: 2 },
                    { RT: 3 },
                    { RT: 4 },
                    { RT: 5 },
                    { RT: 6 },
                    { RT: 7 },
                    { RT: 8 },
                    { RT: 9 },
                    { RT: 10 },
                ];

                for (var i = 0; i < dataRT.length; i++) {
                    for (var a = 0; a < dataAllRT.length; a++) {
                        if (dataAllRT[a].RT != dataRT[i].RT) {
                            console.log(dataAllRT[a].RT);
                            console.log(dataRT[i].RT);

                            $("#selectRT").append(
                                "<option>" + dataAllRT[a].RT + "</option>"
                            );
                            $("#selectRT").selectric("refresh");
                        } else {
                            i++;
                        }
                    }
                }
            },
            error: function (response) {
                var hasil = response.responseJSON.message;
                alert(hasil);
            },
        });
    });
}

function newAlamat() {
    var kel = $("#selectKelurahan").val();
    var rw = document.getElementById("rwnumber").value;
    var rt = document.getElementById("rtnumber").value;

    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://pepeseal.klubaderai.com/api/alamat";

    $(document).ready(function () {
        $.ajax({
            method: "POST",
            url: url,
            data: {
                Kelurahan: kel,
                RW: rw,
                RT: rt,
            },
            headers: {
                Authorization: token,
            },
            success: function (response) {
                swal("Penambahan Berhasil", {
                    icon: "success",
                }).then((value) => {
                    location.href = "/Admin/Alamat";
                  });;
            },
            error: function (response) {
                var hasil = response.responseJSON.message;
                swal(hasil, {
                    icon: "warning",
                });
            },
        });
    });
}
