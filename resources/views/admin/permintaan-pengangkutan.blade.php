<script>
    var akses = sessionStorage.getItem("akses");
    if (akses !== "admin") {
        location.href = "/login";
    }
</script><?php include(app_path() . '/includes/permintaan-pengangkutan-admin.php');
