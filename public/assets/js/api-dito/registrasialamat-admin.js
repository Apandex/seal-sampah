function getKelurahan() {
    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://pepeseal.klubaderai.com/api/kelurahan"
    $(document).ready(function () {
        $.ajax({
            method: "GET",
            url: url,
            headers: {
                Authorization: token,
            },
            success: function (response) {
                var dataKel = response.kelurahan;
                console.log(dataKel)
                $("#selectKelurahan").removeAttr("disabled").selectric('refresh');

                for (var i = 0; i < dataKel.length; i++) {
                    $('#selectKelurahan').append('<option>' + dataKel[i].kelurahan + '</option>');
                    $('#selectKelurahan').selectric('refresh');
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
    $('#selectRW').append('<option disabled selected hidden>~Pilih RW~</option>');
    $("#selectRW").removeAttr("disabled").selectric('refresh');


    $("#selectRT").empty();
    $('#selectRT').append('<option disabled selected hidden>~Pilih RT~</option>');
    $("#selectRT").attr("disabled", "disabled").selectric('refresh');


    var kel = $('#selectKelurahan').val()
    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://pepeseal.klubaderai.com/api/RW"
    $(document).ready(function () {
        $.ajax({
            method: "POST",
            url: url,
            data: {
                'Kelurahan': kel,
            },
            headers: {
                Authorization: token,
            },
            success: function (response) {
                var dataRW = response.RW;
                console.log(dataRW)
                $("#selectRW").removeAttr("disabled").selectric('refresh');

                for (var i = 0; i < dataRW.length; i++) {
                    $('#selectRW').append('<option>' + dataRW[i].RW + '</option>');
                    $('#selectRW').selectric('refresh');
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
    $("#selectRT").removeAttr("disabled").selectric('refresh');

    $("#selectRT").empty();
    $('#selectRT').append('<option disabled selected hidden>~Pilih RT~</option>');

    var kel = $('#selectKelurahan').val()
    var rw = $('#selectRW').val()
    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://pepeseal.klubaderai.com/api/RT"
    $(document).ready(function () {
        $.ajax({
            method: "POST",
            url: url,
            data: {
                'Kelurahan': kel,
                'RW': rw,
            },
            headers: {
                Authorization: token,
            },
            success: function (response) {
                var dataRT = response.RT;
                console.log(dataRT)
                $("#selectRT").removeAttr("disabled").selectric('refresh');

                for (var i = 0; i < dataRT.length; i++) {
                    $('#selectRT').append('<option>' + dataRT[i].RT + '</option>');
                    $('#selectRT').selectric('refresh');
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
    var kel = $('#selectKelurahan').val()
    var rw = $('#selectRW').val()
    var rt = $('#selectRT').val()

    let tokenSession = sessionStorage.getItem("token");
    let token = "Bearer" + " " + tokenSession;
    const url = "https://pepeseal.klubaderai.com/api/alamat"

    $(document).ready(function () {
        $.ajax({
            method: "POST",
            url: url,
            data: {
                'Kelurahan': kel,
                'RW': rw,
                'RT': rt,
            },
            headers: {
                Authorization: token,
            },
            success: function (response) {
                swal('Penambahan Berhasil', {
                icon: 'success',
                })
            },
            error: function (response) {
                var hasil = response.responseJSON.message;
                swal(hasil,{
                    icon: 'warning'
                })
            },
        });
    });
}