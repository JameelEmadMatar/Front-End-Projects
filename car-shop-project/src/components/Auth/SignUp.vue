<template>
        <form>
        <div class="main">
            <h1>Register Form</h1>
            <div class="form-details">
                <div class="error">
                    <input type="text" placeholder="User Name" name="User Name" >
                </div>
                <div class="error">
                    <input type="email" placeholder="Email" name="email" >
                </div>
                <div class="error">
                    <input type="password" placeholder="Password" name="password" >
                </div>
                <div class="error">
                    <input type="password" placeholder="Confirm Password" name="Confirm password" >
                </div>
                <div class="check">
                    <input type="checkbox">
                    <p>I Agree To <span>The Terms Of Use</span></p>
                </div>
                <input type="submit" value="Register" class="submit">
            </div>
            <div class="member">
                <p>Have An Account ? <router-link to="/login">Login Here</router-link></p>
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
    min-height: 600px;
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
.check{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.check input {
    width: 20px;
}
.check p {
    margin: 0;
    margin-left: 10px;
    color: #666666;
    cursor: pointer;
}
.check p span{
    color: black;
}
.check p span:hover{
    color: #D22E2E;
}
.submit{
    color: #fff;
    background-color: #D22E2E;
    margin-bottom: 20px;
}
</style>