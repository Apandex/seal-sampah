<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title>Ecommerce Dashboard &mdash; Stisla</title>

  <!-- General CSS Files -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

  <!-- CSS Libraries -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.19/summernote-bs4.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.6/codemirror.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.6/theme/duotone-dark.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/selectric@1.13.0/public/selectric.css">

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
            <li><a class="nav-link" href="/Admin"><i class="fas fa-home "></i> <span>Homepage</span></a></li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-truck"></i> <span>Pengangkutan</span></a>
              <ul class="dropdown-menu">
                <li><a class="nav-link" href="/Admin/Permintaan-Pengangkutan">Permintaan</a></li>
                <li><a class="nav-link" href="/Admin/Status-Pengangkutan">Status</a></li>
                <li><a class="nav-link" href="/Admin/Riwayat">Riwayat</a></li>
              </ul>
            </li>
            <li><a class="nav-link" href="/Admin/Pengguna"><i class="fas fa-plus "></i> <span>Pengguna</span></a></li>
            <li class="active"><a class="nav-link" href="/Admin/lapor-masalah"><i class="fas fa-comments"></i> <span>Pelaporan Masalah</span></a></li>
          </ul>

          <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
            <a href="/" class="btn btn-danger btn-lg btn-block btn-icon-split">
              <i class="fas fa-rocket"></i> Logout
            </a>
          </div>
        </aside>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Laporan Masalah</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
              <div class="breadcrumb-item"><a href="#">Permintaan</a></div>
              <div class="breadcrumb-item"><a href="#">Riwayat</a></div>
              <div class="breadcrumb-item">Laporan</div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4>Laporan Masalah</h4>
                  <div class="card-header-action">
                    <a href="#" class="btn btn-danger">View More <i class="fas fa-chevron-right"></i></a>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive table-invoice">
                    <table class="table table-striped">
                      <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Alamat</th>
                        <th>Deskripsi Masalah</th>
                      </tr>
                      <tr>
                        <td><a href="#">LR-87239</a></td>
                        <td class="font-weight-600">Kusnadi</td>
                        <td class="font-weight-600">Kusnadi</td>
                        <td class="font-weight-600">Kusnadi</td>
                        <td class="font-weight-600">Kusnadi</td>
                        <td>
                          <div class="dropdown d-inline">
                            <a class="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#" id="detail-proses">Belum di Proses</a>
                            <ul class="dropdown-menu dropdown-menu-sm">
                              <li class="dropdown-title">Kategori</li>
                              <li><a href="#" class="dropdown-item">Proses</a></li>
                              <li><a href="#" class="dropdown-item">Sedang</a></li>
                            </ul>
                          </div>
                        </td>
                        </ul>
                  </div>
                  </tr>
                  <tr>
                    <td><a href="#">LR-48574</a></td>
                    <td class="font-weight-600">Hasan Basri</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td>
                      <div class="dropdown d-inline">
                        <a class="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#" id="detail-proses">Belum di Proses</a>
                        <ul class="dropdown-menu dropdown-menu-sm">
                          <li class="dropdown-title">Kategori</li>
                          <li><a href="#" class="dropdown-item">Proses</a></li>
                          <li><a href="#" class="dropdown-item">Sedang</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#">LR-76824</a></td>
                    <td class="font-weight-600">Muhamad Nuruzzaki</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td>
                      <div class="dropdown d-inline">
                        <a class="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#" id="detail-proses">Belum di Proses</a>
                        <ul class="dropdown-menu dropdown-menu-sm">
                          <li class="dropdown-title">Kategori</li>
                          <li><a href="#" class="dropdown-item">Proses</a></li>
                          <li><a href="#" class="dropdown-item">Sedang</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#">LR-84990</a></td>
                    <td class="font-weight-600">Agung Ardiansyah</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td>
                      <div class="dropdown d-inline">
                        <a class="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#" id="detail-proses">Belum di Proses</a>
                        <ul class="dropdown-menu dropdown-menu-sm">
                          <li class="dropdown-title">Kategori</li>
                          <li><a href="#" class="dropdown-item">Proses</a></li>
                          <li><a href="#" class="dropdown-item">Sedang</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#">LR-87320</a></td>
                    <td class="font-weight-600">Ardian Rahardiansyah</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td class="font-weight-600">Kusnadi</td>
                    <td>
                      <div class="dropdown d-inline">
                        <a class="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#" id="detail-proses">Belum di Proses</a>
                        <ul class="dropdown-menu dropdown-menu-sm">
                          <li class="dropdown-title">Kategori</li>
                          <li><a href="#" class="dropdown-item">Proses</a></li>
                          <li><a href="#" class="dropdown-item">Sedang</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
      </div>
      </section>
    </div>
    <footer class="main-footer">
      <div class="footer-left">
        Copyright &copy; 2018 <div class="bullet"></div> Design By <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
      </div>
      <div class="footer-right">
        2.3.0
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
  <script src="../node_modules/jquery-sparkline/jquery.sparkline.min.js"></script>
  <script src="../node_modules/chart.js/dist/Chart.min.js"></script>
  <script src="../node_modules/owl.carousel/dist/owl.carousel.min.js"></script>
  <script src="../node_modules/summernote/dist/summernote-bs4.js"></script>
  <script src="../node_modules/chocolat/dist/js/jquery.chocolat.min.js"></script>

  <!-- Template JS File -->
  <script src="../assets/js/scripts.js"></script>
  <script src="../assets/js/custom.js"></script>

  <!-- Page Specific JS File -->
</body>

</html>