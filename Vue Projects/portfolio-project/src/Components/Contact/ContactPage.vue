<template>
    <div class="contact">
        <div class="container">
            <div class="row gap-5">
                <div class="contact-form p-4 col-md-5 shadow">
                    <h2 class="mb-4">Contact Form</h2>
                    <form>
                        <div class="mb-4">
                            <label for="exampleInputEmail1" class="form-label">Full Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your Name" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-4">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your Email">
                        </div>
                        <div class="mb-4">
                            <label for="exampleInputSubject1" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="exampleInputSubject1" placeholder="Subject">
                        </div>
                        <div class="mb-4">
                            <label for="exampleInputMess1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleInputMess1"></textarea>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
                <div class="col-md-5">
                    <h2 class="my-4">Contact details</h2>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin w-5 text-gray-500 dark:text-gray-400 mr-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <a href="#">
                                Your Address, Your City, Your Country
                            </a>
                        </li>
                                                <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin w-5 text-gray-500 dark:text-gray-400 mr-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <a href="#">
                                email@domain.com
                            </a>
                        </li>
                                                <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin w-5 text-gray-500 dark:text-gray-400 mr-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <a href="#">
                                555 8888 888
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
input , textarea{
    background-color: #F6F7F8;
}
textarea{
    min-height: 200px;
}
.btn{
    background-color: #4F46E5;
    color: #fff;
    padding: 15px 25px;
}
li{
    list-style: none;
    display: flex;
    margin-left: -60px;
    margin-bottom: 20px;
}
li svg{
    width: 80px;
    color: #747A87;
}
li a{
    text-decoration: none;
    color: #747A87;
    font-size: 18px;
}
@media screen and (max-width: 767px){
    .contact{
        padding: 24px;
        margin-bottom: 80px;
    }
    .contact-form{
        order: 2;
    }
}
@media screen and (min-width: 768px) {
    .contact{
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .contact-form{
        margin-left: 50px;
    }
}
</style>