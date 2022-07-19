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
    <link rel="stylesheet" href="https://uicdn.toast.com/calendar/latest/toastui-calendar.min.css" />

    <!-- Template CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<style>
    .card {
        padding: 2rem;
    }

    .header-card {
        padding-bottom: 0.5rem;
    }

    .navibar {
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
                    <div class="bd-example mt-5 mx-auto" style="max-width: 1140px;">
                        <div id="carouselExampleIndicators" class="carousel slide mx-auto" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="assets/img/photo2.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" style="object-fit: cover; object-position: center" width="400" height="400" alt="" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em" data-holder-rendered="true">First slide</text></svg> -->
                                </div>
                                <div class="carousel-item carousel-item-next carousel-item">
                                    <img src="assets/img/photo1.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" style="object-fit: cover; object-position: center" width="400" height="400" alt="" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em" data-holder-rendered="true">Second slide</text></svg> -->
                                </div>
                                <div class="carousel-item">
                                    <img src="assets/img/photo3.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" style="object-fit: cover; object-position: center" width="400" height="400" alt="" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em" data-holder-rendered="true">Third slide</text></svg> -->
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
                        </div>
                    </div>
                    <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                        <div id="calendar" style="height: 600px;"></div>

                    </div>
                    <!-- Card -->
                    <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;" id="Eksplorasi">
                        <div class="card-body row g-0 align-items-start">
                            <div class="col-md-8 my-auto">
                                <h2 class="text-black-50 header-card">
                                    Penjadwalan
                                </h2>
                                <p class="font-weight-normal">
                                    Lakukan permintaan pengangkutan sampah dan pendjawalan yang nanti akan direspon oleh tim DLH kecamatan kami.
                                </p>
                            </div>
                            <div class="col-md-4">
                                <img class="img-fluid" width="300" height="300" src="assets/img/penjadwalan.svg" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                        <div class="card-body row g-0 align-items-start">
                            <div class="col-md-8 my-auto">
                                <h2 class="text-black-50 header-card">
                                    Jadwal Pengangkutan
                                </h2>
                                <p class="font-weight-normal">
                                    Jadwal Pengangkutan yang akan bisa kalian request ke kami dan kami akan mengatur semuanya dengan baik dan fleksibel.
                                </p>
                            </div>
                            <div class="col-md-4">
                                <img class="img-fluid" width="300" height="300" src="assets/img/Jadwal.svg" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                        <div class="card-body row g-0 align-items-start">
                            <div class="col-md-8 my-auto">
                                <h2 class="text-black-50 header-card">
                                    Riwayat Pengangkutan
                                </h2>
                                <p class="font-weight-normal">
                                    Anda juga bisa melihat dan cek Riwayat Pengangkutan anda dengan detail agar anda bisa mengetahui riwayat pengangkutan sampah di daerah anda.
                                </p>
                            </div>
                            <div class="col-md-4">
                                <img class="img-fluid" width="300" height="300" src="assets/img/Riwayat.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- End Card -->
                </section>
                <!-- Accordion -->
                <section>
                    <div class="mt-5 mx-auto" style="max-width: 1300px;" id="FAQ">
                        <h2 class="mx-auto text-center text-success">
                            FAQ
                            </h5>
                            <div id="accordion">
                                <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Pendjawalan pengangkutan sampah ini jadwalnya dari jam berapa sampai jam berapa?
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            Jadwal pengangkutan sampah sesuai dengan jadwal jam kerja kami yaitu dari jam 08:00-14:00
                                        </div>
                                    </div>
                                </div>
                                <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Apakah ada batas maksimal dalam penjemputan sampah?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            Tentu ada batas maksimal dalam penjemputan sampah yaitu untuk kami adalah seukuran truk kami yaitu 5 ton.
                                        </div>
                                    </div>
                                </div>
                                <div class="card mt-5 rounded mx-auto" style="max-width: 1140px;">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Bagaimana cara cek status penjemputan sampah saya?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            Anda bisa cek langsung di page status pengangkutan disana ada detail penjelasan penjemputan sampah anda dari di proses, reschedule, atau gagal.
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
    <script src="https://uicdn.toast.com/calendar/latest/toastui-calendar.min.js"></script>
    <!-- JS Libraies -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.4/js/chocolat.js"></script>

    <!-- Template JS File -->
    <script src="../assets/js/scripts.js"></script>
    <script src="../assets/js/custom.js"></script>
    <script>
        function random_rgba() {
            var o = Math.round,
                r = Math.random,
                s = 255;
            return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
        }
        $(document).ready(function() {
            var settings = {
                "url": "http://pepeseal.klubaderai.com/api/viewpengangkutan",
                "method": "GET",
                "timeout": 0,
            };

            $.ajax(settings).done(function(response) {
                const container = document.getElementById('calendar');
                const options = {
                    defaultView: 'week',
                    taskView: false,
                    timezone: {
                        zones: [{
                            timezoneName: 'Asia/Jakarta',
                            displayLabel: 'Jakarta',
                        }, ],
                    },
                    calendars: [{
                        id: 'cal1',
                        name: 'Personal',
                        backgroundColor: '#03bd9e',
                    }, ],
                };
                const calendar = new tui.Calendar(container, options);
                calendar.setOptions({
                    useDetailPopup: false,
                    isReadOnly: true,
                    useFormPopup: false,
                    week: {
                        hourStart: 7,
                        dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
                        taskView: false,
                        timezonesCollapsed: true,
                        milestoneView: false,
                        eventView: ['time'],
                    },
                });
                $.each(response.pengangkutan, function(i, value) {
                    var alamat = value.user['kodealamat'];
                    var time = value.Tanggal_angkut + 'T' + value.jam_angkut;
                    var start = new Date(time);
                    var endtime = new Date(time);
                    var add_minutes = function(dt, minutes) {
                        return new Date(dt.getTime() + minutes * 60000);
                    }
                    var end = add_minutes(new Date(time), 60);
                    var title = ' Kel.' + alamat['Kelurahan'];
                    var description = 'RT' + alamat['RT'] + '/RW' + alamat['RW'] + ' Kel.' + alamat['Kelurahan'];
                    var id = value.id_pengangkutan;
                    var data = {
                        id: id,
                        title: title,
                        description: description,
                        start: start,
                        end: end,
                        backgroundColor: random_rgba(),
                    };  
                    calendar.createEvents([data]);
                });
            });


        })
    </script>
    <!-- Page Specific JS File -->
</body>

</html>