<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
            <div class="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                    <div class="sidebar-brand">
                        <a href="/Admin">Pepes</a>
                    </div>
                    <div class="sidebar-brand sidebar-brand-sm">
                        <a href="/Admin">P</a>
                    </div>
                    <ul class="sidebar-menu">
                        <li class="menu-header">Dashboard</li>
                        <li id="sideHomepage"><a class="nav-link" href="/Admin"><i class="fas fa-home "></i> <span>Homepage</span></a></li>
                        <li class="nav-item dropdown" id="sideDropdownPengangkutan">
                            <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-truck"></i> <span>Pengangkutan</span></a>
                            <ul class="dropdown-menu">
                                <li id="sidePermintaanP"><a class="nav-link" href="/Admin/Permintaan-Pengangkutan">Permintaan</a></li>
                                <li id="sideStatusP"><a class="nav-link" href="/Admin/Status-Pengangkutan">Status</a></li>
                                <li id="sideRiwayatP"><a class="nav-link" href="/Admin/Riwayat">Riwayat</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown" id="sideDropdownAdministrasi">
                            <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-plus"></i> <span>Administrasi</span></a>
                            <ul class="dropdown-menu">
                            <li id="sidePenggunaA"><a class="nav-link" href="/Admin/Pengguna">Pengguna</a></li>
                            <li id="sideAlamatA"><a class="nav-link" href="/Admin/Alamat">Alamat</a></li>
                            </ul>
                        </li>
                        <li id="sideLaporan"><a class="nav-link" href="/Admin/lapor-masalah"><i class="fas fa-comments"></i> <span>Laporan Masalah</span></a></li>
                    </ul>
                    <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
                        <a href="/logout" class="btn btn-danger btn-lg btn-block btn-icon-split">
                            <i class="fas fa-rocket"></i> Logout
                        </a>
                    </div>
                </aside>
            </div>
</body>
</html>