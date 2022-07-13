<script>
    var akses = sessionStorage.getItem("akses");
    if (akses !== "user") {
        location.href = "/login";
    }
</script>
<?php include(app_path() . '/includes/dashboard-user.php');
