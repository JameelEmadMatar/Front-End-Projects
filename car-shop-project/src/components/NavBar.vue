<template>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <a class="navbar-brand">
            <img src="@/assets/logo.png">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">SignUp</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>
<style scoped>
nav{
    padding: 20px 0;
}
.navbar-brand{
    cursor: pointer;
}
.nav-item{
    position: relative;
    margin: 0 5px;
}
.nav-item .active::before{
    content: '';
    position: absolute;
    background-color: #D22E2E;
    width: 20px;
    height: 3px;
    top: 5px;
    left: 35%;
}
.nav-item:hover::before{
    content: '';
    position: absolute;
    background-color: #D22E2E;
    width: 20px;
    height: 3px;
    top: 5px;
    left: 35%;
}
@media screen and (max-width:991px) {
    .nav-item .active::before , .nav-item:hover::before{
        display: none;
    }
    .navbar-brand{
        margin-bottom: 20px;
    }
}
</style>