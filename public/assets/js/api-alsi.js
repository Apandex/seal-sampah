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
        .then((response) => console.log(response))
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

            // sessionStorage.setItem("token", token);
            // sessionStorage.setItem("alamat", alamat);
            // sessionStorage.setItem("kode_alamat", kode_alamat);
            // sessionStorage.setItem("akses", akses);
            // sessionStorage.setItem("email", email);
            // sessionStorage.setItem("id", id);
            // sessionStorage.setItem("name", name);
            // sessionStorage.setItem("no_telp", no_telp);

            // switch (akses) {
            //     case "admin":
            //         location.href = "/Admin";
            //         break;
            //     case "user":
            //         location.href = "/dashboard-user";
            //         break;
            // }
        })
        .catch((error) => console.log("error", error));
}
