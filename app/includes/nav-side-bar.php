<!-- Ini Navbar User -->
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
            <li class="active"><a class="nav-link" href="/dashboard-user"><i class="fas fa-home "></i> <span>Homepage</span></a></li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-truck"></i> <span>Pengangkutan</span></a>
                <ul class="dropdown-menu">
                    <li><a class="nav-link" href="/riwayat-pengangkutan">Riwayat</a></li>
                    <li><a class="nav-link" href="/pesan-pengangkutan">Pesan</a></li>
                </ul>
            </li>
            <li><a class="nav-link" href="/lapor-masalah"><i class="fas fa-comments"></i> <span>Pelaporan Masalah</span></a></li>
        </ul>

        <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
            <a href="/" class="btn btn-danger btn-lg btn-block btn-icon-split">
                <i class="fas fa-rocket"></i> Logout
            </a>
        </div>
    </aside>
</div>

<!-- Ini Navbar Admin -->
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
            <a href="/Admin">Pepes</a>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
            <a href="/Admin">P</a>
        </div>
        <ul class="sidebar-menu">
            <li class="menu-header">Dashboard</li>
            <li class="active"><a class="nav-link" href="blank.html"><i class="fas fa-home "></i> <span>Homepage</span></a></li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-truck"></i> <span>Pengangkutan</span></a>
                <ul class="dropdown-menu">
                    <li><a class="nav-link" href="/Admin/Permintaan-Pengangkutan">Permintaan</a></li>
                    <li><a class="nav-link" href="/Admin/Status-Pengangkutan">Status</a></li>
                    <li><a class="nav-link" href="/Admin/Riwayat">Riwayat</a></li>
                </ul>
            </li>
            <li><a class="nav-link" href="/Admin/Pengguna"><i class="fas fa-plus "></i> <span>Pengguna</span></a></li>
            <li><a class="nav-link" href="/Admin/lapor-masalah"><i class="fas fa-comments"></i> <span>Pelaporan Masalah</span></a></li>
        </ul>

        <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
            <a href="/" class="btn btn-danger btn-lg btn-block btn-icon-split">
                <i class="fas fa-rocket"></i> Logout
            </a>
        </div>
    </aside>
</div>
<!-- Ini Footer -->
<footer class="main-footer">
    <div class="footer-left">
        Copyright &copy; 2022 <div class="bullet"></div> All Rights Reserved
    </div>
</footer>