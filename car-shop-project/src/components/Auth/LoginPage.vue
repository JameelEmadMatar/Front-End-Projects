<template>
        <form method="get">
        <div class="main">
            <h1>Login</h1>
            <div class="form-details">
                <div class="error">
                    <input type="email" placeholder="Email" name="email" >
                </div>
                <div class="error">
                    <input type="password" placeholder="Password" name="password" >
                </div>
                <input type="submit" class="btn" value="Login">
            </div>
            <div class="member">
                <p>Not a member ? <router-link to="/signup">SignUp Here</router-link></p>
            </div>
        </div>
    </form>
</template>
<style scoped>
form{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    min-height: 100vh;
}
.main{
    width: 350px;
    background-color: #fff;
    border-radius: 15px;
}
.main .form-details{
    display: flex;
    flex-direction: column;
}
h1{
    margin: 20px 0;
    text-align: center;
    font-family: arial;
}
input , .btn{
    border: none;
    margin: 10px 0;
    padding: 10px;
    border-radius: 12px;
    outline: none;
    background-color: #E4E4E4;
    width: 85%;
    margin-left: 25px;
}
.btn{
    background-color: #D22E2E;
    color: #fff;
    font-size: 20px;
    margin-bottom: 25px;
}
.member p{
    color: #5B595C;
    text-align: center;
    margin-bottom: 25px;
    font-family: arial;
    cursor: pointer;
}
.member p a{
    color: #D22E2E;
    text-decoration: none;
}
.member p a:hover{
    opacity: 0.8;
}
.error span{
    margin-left:25px;
    color: red;
}
</style>