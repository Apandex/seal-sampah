<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title>Riwayat Pengangkutan</title>

  <!-- General CSS Files -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

  <!-- CSS Libraries -->
  <link rel="stylesheet" href="../node_modules/jqvmap/dist/jqvmap.min.css">
  <link rel="stylesheet" href="../node_modules/summernote/dist/summernote-bs4.css">
  <link rel="stylesheet" href="../node_modules/owl.carousel/dist/assets/owl.carousel.min.css">
  <link rel="stylesheet" href="../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css">

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
                      <img alt="image" src="../../assets/img/avatar/avatar-1.png" class="rounded-circle mr-1">
                      <div class="d-sm-none d-lg-inline-block">Hi, USER</div>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                      <a href="features-profile.html" class="dropdown-item has-icon">
                          <i class="far fa-user"></i> Profile
                      </a>
                      <div class="dropdown-divider"></div>
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
                  <a href="index.html">Sampah</a>
              </div>
              <div class="sidebar-brand sidebar-brand-sm">
                  <a href="index.html">SM</a>
              </div>
              <ul class="sidebar-menu">
                  <li class="menu-header">Dashboard</li>
                  <li><a class="nav-link" href="blank.html"><i class="fas fa-home "></i> <span>Homepage</span></a></li>
                  <li class="nav-item dropdown active">
                      <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-truck"></i> <span>Pengangkutan</span></a>
                      <ul class="dropdown-menu">
                          <li class="active"><a class="nav-link" href="layout-transparent.html">Riwayat</a></li>
                          <li><a class="nav-link" href="layout-top-navigation.html">Pesan</a></li>
                      </ul>
                  </li>
                  <li><a class="nav-link" href="blank.html"><i class="fas fa-comments"></i> <span>Pelaporan Masalah</span></a></li>
              </ul>

              <div class="mt-6 mb-6 p-3 hide-sidebar-mini">
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
                <h1>Riwayat Pengangkutan</h1>
                <div class="section-header-breadcrumb">
                    <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                    <div class="breadcrumb-item"><a href="#">Pengangkutan</a></div>
                    <div class="breadcrumb-item">Riwayat</div>
                </div>
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
                    <div class="card-body">
                        59
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
                    <div class="card-body">
                        59
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
                    <div class="card-body p-0">
                    <div class="table-responsive table-invoice">
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
                                        <div class="badge badge-danger">BATAL</div>
                                    </td>
                                    <td>Bapak Homo Sapiens</td>
                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>22 Februari 2021</td>
                                    <td>21:00</td>
                                    <td>
                                        <div class="badge badge-success">BERHASIL</div>
                                    </td>
                                    <td>Bapak Homo Sapiens</td>
                                </tr>
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
