<script>
    var session = sessionStorage.length;
    var akses = sessionStorage.getItem("akses");
    // if (session !== null) {
    //     if (akses == "admin") {
    //         location.href = "/Admin";
    //     } else if (akses == "user") {
    //         location.href = "/dashboard-user";
    //     }
    // } else {
    //     location.href = "/login"
    // }
    if (session !== null) {
        switch (akses) {
            case "admin":
                location.href = "/Admin";
                break;
            case "user":
                location.href = "/dashboard-user";
                break;

        }
    }
</script>