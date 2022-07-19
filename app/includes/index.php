<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pepes Home</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <!-- CSS Libraries -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-bs4.min.css">

    <!-- Template CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<style>
  .card{
    padding: 2rem;
  }
  .header-card{
    padding-bottom: 0.5rem;
  }
  .navibar{
    display: flex;
    flex-direction: row;
    list-style: none;
  }
</style>
<body>
    <div id="app">
      <div class="main-wrapper">
        <div class="container-fluid" style="background-color:white">
          <nav class="navbar-expand-lg mx-auto navibar" style="max-width: 1140px;">
              <ul class="navibar mr-auto my-auto" style="margin-left:-2.5rem ;">
                <li class="mt-3 mb-3 mr-3">
                  <a href="#">
                    <img class="img-fluid rounded-circle rounded" width="60" height="60" src="assets/img/logo-pepes.png" alt="">
                  </a>
                </li>
                <li class="nav-item mt-4">
                  <a class="nav-link text-black-50 font-weight-bolder" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item mt-4">
                  <a class="nav-link text-black-50 font-weight-bolder" href="#Eksplorasi">Ekplorasi</a>
                </li>
                <li class="nav-item mt-4">
                  <a class="nav-link text-black-50 font-weight-bolder" href="#FAQ">FAQ</a>
                </li>
              </ul>
            <div class="mt-4">
              <a href="/login" class="btn btn-green btn-lg">Masuk</a>
            </div>
          </nav>
        </div>
        <!-- Main Content -->
      <div class="container-fluid">
      <section class="section">
          <div class="bd-example mt-5 mx-auto" style="max-width: 1440px; max-height:790px;">  
              <!-- <div id="carouselExampleIndicators" class="carousel slide mx-auto" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="assets/img/photo2.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" style="object-fit: cover; object-position: center" width="400" height="400" alt="" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                </div>
                <div class="carousel-item carousel-item-next carousel-item">
                  <img src="assets/img/photo1.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" style="object-fit: cover; object-position: center" width="400" height="400" alt="" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                </div>
                <div class="carousel-item">
                  <img src="assets/img/photo3.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" style="object-fit: cover; object-position: center" width="400" height="400" alt="" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div> -->
            <img src="assets/img/Banner.png" class="container-fluid" alt="">
          </div>
  
          <!-- Card -->
          <div class="card mx-auto mt-5" style="max-width: full; background-color:white">
            <div class="card-body text-center" style="background-color:white; margin-top:94px">
              <h1 class="font-weight-bold">
                Solusi untuk setiap kebutuhan.
              </h1>
              <p class="mt-3 font-weight-400" style="font-size: 16px; color: #426666">
              Tingkatkan ke pengalaman pemesanan pengangkutan sampah yang <br>mudah, terjadwal, dan dapat dipantau.
              </p>
            </div>
            <div class="card-lp mt-5 mx-auto rounded" style="max-width: 1280px;" id="Eksplorasi">
              <div class="card-body row justify-content-between" style="margin-top:94px">
                <div class="align-items-start col-6">
                  <h3 class="text-lg text-black font-weight-600" style="font-size: 30px;">
                    Penjadwalan Pengangkutan
                  </h3>
                  <p class="font-weight-normal text-gray text-content" style="margin-top: 14px; font-size:16px; margin-right:57px;">
                    Lakukan pemesanan pengangkutan sampah dengan mudah dan sesuaikan dengan jadwal pengangkutan yang diinginkan.
                  </p>
                </div>
                <div class="">
                  <img class="img-fluid" width="300" height="300" src="assets/img/penjadwalan.svg" alt="">
                </div>
              </div>
            </div>

            <div class="card-lp mt-5 mx-auto rounded" style="max-width: 1280px;">
              <div class="card-body row justify-content-around" style="margin-top:94px">
              <div class="col-md-4">
                  <img class="img-fluid" width="300" height="300" src="assets/img/status_riwayat.svg" alt="">
                </div>
                <div class="align-items-start col-6">
                  <h3 class="text-black font-weight-600" style="font-size: 30px;">
                    Status dan Riwayat Pengangkutan
                  </h3>
                  <p class="font-weight-normal text-content text-grey" style="margin-top: 14px; font-size:16px;">
                    Pantau status pemesanan pengangkutan sampah dan riwayat pengangkutan untuk memonitor jadwal pengangkutan sampah.
                  </p>
                </div>
              </div>
            </div>
    
            <div class="card-lp mt-5 mx-auto rounded" style="max-width: 1280px;">
              <div class="card-body row justify-content-around" style="margin-top:94px">
                <div class="align-items-start col-6">
                  <h3 class="text-black font-weight-600" style="font-size: 30px;">
                    Pelaporan Masalah
                  </h3>
                  <p class="font-weight-normal text-content text-grey" style="margin-top: 14px; font-size:16px; margin-right:57px;">
                    Lakukan pelaporan masalah dengan mudah dan pantau tindak lanjut masalahmu.
                  </p>
                </div>
                <div class="col-md-4">
                  <img class="img-fluid" width="300" height="300" src="assets/img/pelaporan_masalah.svg" alt="">
                </div>
              </div>
            </div>
    
          </div>
          <!-- End Card -->
        </section>
          <!-- Accordion -->
        <section>
        <div class="mx-auto" style="max-width: 1300px; margin-top: 167px;" id="FAQ">
            <h2 class="mx-auto text-center text-black font-weight-600" style="font-size: 40px;">
              FAQ
            </h2>
            <p class="mx-auto text-center text-gray font-weight-400" style="font-size: 16px; font-family: Inter; margin-top:10px;">
              Temukan jawaban dari pertanyaan yang sering diajukan.
            </p>
            <div id="accordion">

              <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn font-weight-600" style="font-size: 25px; color: #1B5E20; font-family:Inter; margin-left:0px;" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Apa itu Pepes?
                    </button>
                  </h5>
                </div>
            
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body font-weight-400 font-italic" style="font-size: 20px; font-family:Inter; color:#5A5365;">
                  Pepes adalah sistem yang digunakan untuk Penjadwalan Pemesanan Sampah dari perwakilan masyarakat (RT) kepada Satuan Pelaksana Lingkungan Hidup Kecamatan.
                  </div>
                </div>
              </div>

              <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn font-weight-600" style="font-size: 25px; color: #1B5E20; font-family:Inter; margin-left:0px;" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Siapa yang dapat menggunakan Pepes?
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body font-weight-400 font-italic" style="font-size: 20px; font-family:Inter; color:#5A5365;">
                  Yang dapat menggunakan web pepes ini adalah pengurus RT yang berada di daerah Jakarta Selatan.
                  </div>
                </div>
              </div>

              <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn font-weight-600" style="font-size: 25px; color: #1B5E20; font-family:Inter; margin-left:0px;" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Darimana saya bisa mendapatkan akun?
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body font-weight-400 font-italic" style="font-size: 20px; font-family:Inter; color:#5A5365;">
                  Jika ingin menggunakan web pepes ini anda harus mendaftarkan sendiri ke Kecamatan terdekat.
                  </div>
                </div>
              </div>

              <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                    <button class="btn font-weight-600" style="font-size: 25px; color: #1B5E20; font-family:Inter; margin-left:0px;" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Bagaimana cara melakukan pemesanan pengangkutan sampah?
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div class="card-body font-weight-400 font-italic" style="font-size: 20px; font-family:Inter; color:#5A5365;">
                  Jika ingin melakukan penjadwalan pengangkutan sampah anda dapat menggunakan fitur <span>Pesan pengangkutan</span>.
                  Nanti nya dari pihak kecamatan akan memproses permintaan anda dan sampah akan segera diangkut sesuai tanggal permintaan.
                  </div>
                </div>
              </div>

              <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                <div class="card-header" id="headingFive">
                  <h5 class="mb-0">
                    <button class="btn font-weight-600" style="font-size: 25px; color: #1B5E20; font-family:Inter; margin-left:0px;" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Apa yang harus dilakukan jika pemesanan pengangkutan sampah ditolak?
                    </button>
                  </h5>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                  <div class="card-body font-weight-400 font-italic" style="font-size: 20px; font-family:Inter; color:#5A5365;">
                    Anda harus melakukan pemilihan jadwal pengangkutan kembali sampai permintaan anda diterima.
                  </div>
                </div>
              </div>

              <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                <div class="card-header" id="headingSix">
                  <h5 class="mb-0">
                    <button class="btn font-weight-600" style="font-size: 25px; color: #1B5E20; font-family:Inter; margin-left:0px;" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      Bagaimana jika terdapat masalah pada pengangkutan sampah?
                    </button>
                  </h5>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                  <div class="card-body font-weight-400 font-italic" style="font-size: 20px; font-family:Inter; color:#5A5365;">
                  Anda dapat melaporkan nya di menu pelaporan masalah. Nanti masalah tersebut akan diproses oleh pihak Kecamatan untuk ditindaklanjuti.
                  </div>
                </div>
              </div>
            </div>
          </div>  
          <!-- End Accordion -->
        </section>
      </div>
      <footer>  
        <div class="simple-footer">
          <!-- Copyright &copy; 2022 <div class="bullet"></div> All Rights Reserved -->
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
  
    <!-- Template JS File -->
    <script src="../assets/js/scripts.js"></script>
    <script src="../assets/js/custom.js"></script>
  
    <!-- Page Specific JS File -->
    <script src="../assets/js/page/index.js"></script>
  </body>
</html>