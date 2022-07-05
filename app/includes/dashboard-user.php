<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
    <title>Pepes</title>

    <!-- General CSS Files -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <!-- CSS Libraries -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-bs4.min.css">

    <!-- Template CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/components.css">
</head>

<body>
    <div id="app">
        <div class="main-wrapper">
            <div class="navbar-bg"></div>
            <nav class="navbar navbar-expand-lg main-navbar">
                <form class="form-inline mr-auto">
                    <ul class="navbar-nav mr-3">
                        <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></a></li>
                    </ul>
                </form>
                <ul class="navbar-nav navbar-right">
                    <li class="dropdown"><a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                            <img alt="image" src="../assets/img/avatar/avatar-1.png" class="rounded-circle mr-1">
                            <div class="d-sm-none d-lg-inline-block">Hi, USER</div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="#" class="dropdown-item has-icon text-danger">
                                <i class="fas fa-sign-out-alt"></i> Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div class="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                    <div class="sidebar-brand">
                        <a href="index.html">Pepes</a>
                    </div>
                    <div class="sidebar-brand sidebar-brand-sm">
                        <a href="index.html">P</a>
                    </div>
                    <ul class="sidebar-menu">
                        <li class="menu-header">Dashboard</li>
                        <li class="active"><a class="nav-link" href="blank.html"><i class="fas fa-home "></i> <span>Homepage</span></a></li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-truck"></i> <span>Pengangkutan</span></a>
                            <ul class="dropdown-menu">
                                <li><a class="nav-link" href="layout-transparent.html">Riwayat</a></li>
                                <li><a class="nav-link" href="layout-top-navigation.html">Pesan</a></li>
                            </ul>
                        </li>
                        <li><a class="nav-link" href="blank.html"><i class="fas fa-comments"></i> <span>Pelaporan Masalah</span></a></li>
                    </ul>

                    <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
                        <a href="https://getstisla.com/docs" class="btn btn-danger btn-lg btn-block btn-icon-split">
                            <i class="fas fa-rocket"></i> Logout
                        </a>
                    </div>
                </aside>
            </div>
            <!-- Main Content -->
            <div class="main-content">
                <section class="section">
                    <div class="section-header">
                        <div class="row">
                            <div style="font-size: 1rem;">
                                <i class="fa fa-map-marker-alt fa-lg" style="padding:0.5rem 0.9rem"></i>
                            </div>
                            <h1>Jl. Jalan di pinggir kali</h1>
                        </div>
                    </div>
                    <div class="section-body">
                        <div class="alert alert-danger alert-dismissible show faden">
                            <div class="alert-body">
                                <button class="close" data-dismiss="alert">
                                    <span>×</span>
                                </button>
                                <a href="#tolak_tbl"><div class="alert-title">Ada 1 Permintaan Ditolak</div></a>
                                Silahkan ajukan ulang dengan mengganti tanggal dan waktu pengangkutan
                            </div>
                        </div>
                    </div>
                    <div class="section-body">
                        <div class="card" id="status_tbl">
                            <div class="card-header">
                                <h4>Status Pengangkutan</h4>
                                <div class="card-header-action">
                                    <a href="#" class="btn btn-primary"><i class="fas fa-plus"></i> Pesan Pengangkutan</a>
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th class="text-center">
                                                    #
                                                </th>
                                                <th>Tanggal Pengangkutan</th>
                                                <th>Waktu</th>
                                                <th>Status</th>
                                                <th>Atas Nama</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>22 Februari 2020</td>
                                                <td>12:00</td>
                                                <td>
                                                    <div class="badge badge-success">DIJADWALKAN</div>
                                                </td>
                                                <td>Bapak Homo Sapiens</td>
                                                <!-- <td><a href="#" class="btn btn-danger">Jadwal Ulang</a></td> -->
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>22 Februari 2021</td>
                                                <td>21:00</td>
                                                <td>
                                                    <div class="badge badge-success">DIJADWALKAN</div>
                                                </td>
                                                <td>Bapak Homo Sapiens</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3
                                                </td>
                                                <td>31 Februari 2222</td>
                                                <td>00:00</td>
                                                <td>
                                                    <div class="badge badge-warning">DIPROSES</div>
                                                </td>
                                                <td>Bapak Homo Sapiens</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="card" id="tolak_tbl">
                            <div class="card-header">
                                <h4 class="text-danger">Permintaan Ditolak</h4>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th class="text-center">
                                                    #
                                                </th>
                                                <th>Tanggal</th>
                                                <th>Waktu</th>
                                                <th>Atas Nama</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>22 Februari 2020</td>
                                                <td>12:00</td>
                                                <td>Bapak Homo Sapiens</td>
                                                <td><button class="btn btn-danger">Ubah</button></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>22 Februari 2021</td>
                                                <td>21:00</td>
                                                <td>Bapak Homo Sapiens</td>
                                                <td><button class="btn btn-danger">Ubah</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.4/js/chocolat.js"></script>

    <!-- Template JS File -->
    <script src="../assets/js/scripts.js"></script>
    <script src="../assets/js/custom.js"></script>

    <!-- Page Specific JS File -->
    <script src="../assets/js/page/index-0.js"></script>
</body>

</html>