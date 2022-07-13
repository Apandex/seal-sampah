let tokenSession = sessionStorage.getItem("token");
let token = "Bearer" + " " + tokenSession;

function login() {
    var formdata = new FormData();
    formdata.append("email", document.getElementById("login_email").value);
    formdata.append(
        "password",
        document.getElementById("login_password").value
    );

    var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
    };

    fetch("https://pepeseal.klubaderai.com/api/login", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            var data = JSON.parse(result);
            var user_data = data.data_user;
            var token = data.token;

            var alamat = user_data.alamat;
            var kode_alamat = user_data.kode_alamat;
            var akses = user_data.akses;
            var email = user_data.email;
            var id = user_data.id;
            var name = user_data.name;
            var no_telp = user_data.no_telp;

            sessionStorage.setItem("token", token);
            sessionStorage.setItem("alamat", alamat);
            sessionStorage.setItem("kode_alamat", kode_alamat);
            sessionStorage.setItem("akses", akses);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("id", id);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("no_telp", no_telp);

            switch (akses) {
                case "admin":
                    location.href = "/Admin";
                    break;
                case "user":
                    location.href = "/dashboard-user";
                    break;
            }
        })
        .catch((error) => console.log("error", error));
}

function logout() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var formdata = new FormData();

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
    };

    fetch("https://pepeseal.klubaderai.com/api/logout", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
}

function tablePengangkutanUser() {
    var myArray = [];
    const url = "https://pepeseal.klubaderai.com/api/viewpengangkutanuser";
    $(document).ready(function () {
        $.ajax({
            method: "GET",
            url: url,
            headers: {
                Authorization: token,
            },
            success: function (response) {
                dataAPI = response.pengangkutan;
                $("#table-pengangkutanuser").DataTable({
                    data: dataAPI,
                    responsive: true,
                    pageLength: 10,
                    autoWidth: false,
                    order: [[0, "desc"]],
                    columns: [
                        {
                            data: "id",
                        },
                        {
                            data: "user.name",
                        },
                        {
                            data: "user.no_telp",
                        },
                        {
                            data: "user.kodealamat",
                        },
                        {
                            data: "user.Alamat",
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
                            data: "status.status",
                            orderable: false,
                        },
                    ],
                });
            },
            error: function (response) {
                hasil = response.responseJSON.message;
                alert(hasil);
            },
        });
    });
}

function tableLaporanUser() {
    var myArray = [];
    const url = "https://pepeseal.klubaderai.com/api/getlaporanmasalahuser";
    $(document).ready(function () {
        $.ajax({
            method: "GET",
            url: url,
            headers: {
                Authorization: token,
            },
            success: function (response) {
                dataAPI = response.laporan;
                $("#table-laporanmasalahuser").DataTable({
                    data: dataAPI,
                    responsive: true,
                    pageLength: 10,
                    autoWidth: false,
                    order: [[0, "desc"]],
                    columns: [
                        {
                            data: "user.name",
                            orderable: false,
                        },
                        {
                            data: "laporan",
                            orderable: false,
                        },
                        {
                            data: "status.status",
                            orderable: false,
                        },
                    ],
                });
            },
            error: function (response) {
                hasil = response.responseJSON.message;
                alert(hasil);
            },
        });
    });
}

function newPengangkutan() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var formdata = new FormData();
    formdata.append(
        "Tanggal_angkut",
        document.getElementById("Tanggal_angkut").value
    );
    formdata.append("jam_angkut", document.getElementById("jam_angkut").value);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
    };

    fetch("https://pepeseal.klubaderai.com/api/newpengangkutan", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            var data = JSON.parse(result);
            console.log(data);
        })
        .catch((error) => console.log("error", error));
}

function newLaporan() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var formdata = new FormData();
    formdata.append("laporan", document.getElementById("laporan").value);
    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
    };

    fetch("https://pepeseal.klubaderai.com/api/newlaporan", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            var data = JSON.parse(result);
            console.log(data);
        })
        .catch((error) => console.log("error", error));
}

function searchPesanan() {
    var id = document.getElementById("id").value;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch(
        "https://pepeseal.klubaderai.com/api/viewpengangkutanuser/" + id,
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => {
            var data = JSON.parse(result);
            document.getElementById("id").disabled = true;

            var uid = document.getElementById("uid");
            var ta = document.getElementById("Tanggal_angkut");
            var ja = document.getElementById("jam_angkut");
            var s = document.getElementById("status");

            uid.value = data.pengangkutan.id_user;
            ta.value = data.pengangkutan.Tanggal_angkut;
            ja.value = data.pengangkutan.jam_angkut;
            s.value = data.pengangkutan.status.status;
        })
        .catch((error) => console.log("error", error));
}

function newReschedule() {
    var id = document.getElementById("id").value;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();

    urlencoded.append(
        "Tanggal_angkut",
        document.getElementById("Tanggal_angkut_baru").value
    );
    urlencoded.append(
        "jam_angkut",
        document.getElementById("jam_angkut_baru").value
    );

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
    };

    fetch(
        "https://pepeseal.klubaderai.com/api/updatepengangkutan/" + id,
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
}
