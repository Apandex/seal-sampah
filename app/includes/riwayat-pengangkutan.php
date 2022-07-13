<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
    <title>PEPES</title>

    <!-- General CSS Files -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <!-- CSS Libraries -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap4.min.css" />
    <link rel="stylesheet" href="https://cdn.datatables.net/select/1.3.3/css/select.bootstrap4.min.css" />

    <!-- Template CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/components.css">
</head>

<body onload="tablePengangkutanUser()">
    <div id="app">
        <div class="main-wrapper">
            <div class="navbar-bg"></div>
            <nav class="navbar navbar-expand-lg main-navbar">
                <form class="form-inline mr-auto">
                    <ul class="navbar-nav mr-3">
                        <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></a></li>
                    </ul>
                </form>
            </nav>
            <div class="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                    <div class="sidebar-brand">
                        <a href="/dashboard-user">Pepes</a>
                    </div>
                    <div class="sidebar-brand sidebar-brand-sm">
                        <a href="/dashboard-user">P</a>
                    </div>
                    <ul class="sidebar-menu">
                        <li class="menu-header">Dashboard</li>
                        <li><a class="nav-link" href="/dashboard-user"><i class="fas fa-home "></i> <span>Homepage</span></a></li>
                        <li class="nav-item dropdown active">
                            <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-truck"></i> <span>Pengangkutan</span></a>
                            <ul class="dropdown-menu">
                                <li class="active"><a class="nav-link" href="/riwayat-pengangkutan">Riwayat Pengangkutan</a></li>
                                <li><a class="nav-link" href="/pesan-pengangkutan">Pesan Pengangkutan</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-comments"></i> <span>Laporan Masalah</span></a>
                            <ul class="dropdown-menu">
                                <li><a class="nav-link" href="/riwayat-lapor">Riwayat Lapor</a></li>
                                <li><a class="nav-link" href="/lapor-masalah">Lapor Masalah</a></li>
                            </ul>
                        </li>
                    </ul>


                    <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
                        <a href="/logout" class="btn btn-danger btn-lg btn-block btn-icon-split">
                            <i class="fas fa-rocket"></i> Keluar
                        </a>
                    </div>
                </aside>
            </div>

            <!-- Main Content -->
            <div class="main-content">
                <section class="section">
                    <div class="section-header">
                        <h1>Riwayat Pengangkutan</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="card card-statistic-2">
                                <div class="card-icon shadow-success bg-success">
                                    <i class="fas fa-check"></i>
                                </div>
                                <div class="card-wrap">
                                    <div class="card-header">
                                        <h4>Pengangkutan Berhasil</h4>
                                    </div>
                                    <div class="card-body" id="banyakBerhasil">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="card card-statistic-2">
                                <div class="card-icon shadow-danger bg-danger">
                                    <i class="fas fa-times"></i>
                                </div>
                                <div class="card-wrap">
                                    <div class="card-header">
                                        <h4>Pengangkutan Dibatal</h4>
                                    </div>
                                    <div class="card-body" id="banyakBatal">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-body">
                        <div class="card">
                            <div class="card-header">
                                <h4>Riwayat</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-striped tabelRiwayat" id="table-pengangkutanuser">
                                        <thead>
                                            <tr>
                                                <th class="text-center no">
                                                    ID
                                                </th>
                                                <th>Nama</th>
                                                <th>No. Telp</th>
                                                <th>Kelurahan</th>
                                                <th>Alamat</th>
                                                <th>Tanggal</th>
                                                <th>Waktu</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer class="main-footer">
                <div class="footer-left">
                    Copyright &copy; 2022 <div class="bullet"></div> All Rights Reserved
                </div>
            </footer>
        </div>
    </div>

    <!-- General JS Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="../assets/js/stisla.js"></script>

    <!-- JS Libraies -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.4/js/chocolat.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap4.min.js"></script>
    <script src="https:////cdn.datatables.net/select/1.3.3/js/select.bootstrap4.js"></script>

    <!-- Template JS File -->
    <script src="../assets/js/scripts.js"></script>
    <script src="../assets/js/custom.js"></script>

    <!-- Page Specific JS File -->
    <script src="../assets/js/page/modules-datatables.js"></script>
    <script src="../assets/js/api-alsi.js"></script>
    <!-- <script src="../assets/js/page/riwayat-pengangkutan.js"></script> -->
</body>

</html>