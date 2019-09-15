<template>
  <div class="bg">
   
    <section class="bgCCC">
       <router-view></router-view>
      <div class="layout">
        <div class="loginLogo">
          <img src="../../../public/img/m_logo.png" alt />
        </div>
        <div class="loginInput">
          <form action>
            <div class="inputBox">
              <em class="idIcon"></em>
              <input type="text" class="idtxt" v-model="username" />
            </div>
            <div class="inputBox">
              <em class="pwdIcon"></em>
              <input type="password" class="pwdtxt" v-model="password" />
              <i class="eye"></i>
            </div>
            <span class="phoneDl">手机验证码登录</span>
            <div class="btn-reg" @click="login()">立即登录</div>
          </form>
        </div>
        <div class="otherLogin">
          <div>
            <i>其他登录方式</i>
          </div>
        </div>
        <div class="otherBox">
          <a href class="qqlogin"></a>
          <a href class="wblogin"></a>
          <a href class="zfblogin"></a>
        </div>
      </div>

      <div class="btn-bottom">
        <router-link to="/mine/login/regist" tag="p">立即注册</router-link>
        <span>丨</span>
        <p>忘记密码</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  naem: "login",

  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (localStorage.getItem("userList") !== null) {
        let userinfo = JSON.parse(localStorage.getItem("userList"));
        // console.log(userinfo)
        if (this.username !== "" && this.password !== "") {
          // console.log(userinfo);
          for (var i = 0; i < userinfo.length; i++) {
            if (this.username == userinfo[i].username) {
              if (this.password == userinfo[i].password) {
                this.$router.push({
                  path: "/mine",
                  name:"mine",
                  query: { userId: this.username }
                });
                
                // console.log(userinfo[i].username);
                break;
              } else {
                alert("密码错误");
                break;
              }
            } else if (this.username != userinfo[i].username) {
              alert("用户名不存在");
              break;
            }
          }
        } else {
          alert("请正确输入");
        }
      }
    }
  }
};
</script>
<style scoped>
.bg {
  overflow: hidden;
  height: 6.67rem;
}
.bgCCC {
  background: #f5f5f5;
  height: 6.67rem;
}
.layout {
  width: 100%;
  height: 4.4rem;
  padding: 0.1rem 0.16rem;
  font-size: 0.1rem;
  color: #858585;
  overflow: hidden;
}
.layout .loginLogo {
  width: 50%;
  margin: 0 auto;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
.layout .loginLogo img {
  width: 100%;
  height: auto;
  line-height: 1;
  display: block;
  border: 0;
  cursor: pointer;
}
.loginInput {
  width: 2.77rem;
  height: 1.97rem;
  margin: 0 0.33rem 0.2rem;
  padding: 0 0.1rem;
}
.loginInput form {
  width: 100%;
  height: 100%;
}
.inputBox {
  width: 2.57rem;
  height: 0.4rem;
  margin-bottom: 0.25rem;
  line-height: 0.2rem;
  padding: 0.1rem;
  color: #313131;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 0.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inputBox em {
  width: 0.35rem;
  height: 0.25rem;
  display: block;
  background-size: 60%;
}
.idIcon {
  background: url("../../../public/img/id.png") no-repeat center;
}
.pwdIcon {
  background: url("../../../public/img/pwd.png") no-repeat center;
}
.inputBox input {
  height: 0.18rem;
  border: 0;
  margin-top: 0.03rem;
  margin-left: 5px;
  flex: 1;
  outline: none;
}
.eye {
  width: 0.2rem;
  height: 0.2rem;
  display: block;
  /* background: #313131; */
  background: url("../../../public/img/pwd-eye.png") no-repeat center;
  overflow: hidden;
  background-size: 0.2rem 0.4rem;
  background-position: 0 -0.2rem;
}
.phoneDl {
  width: 100%;
  text-align: right;
  font-size: 0.12rem;
  line-height: 0.12rem;
  color: #e8380d;
  display: inline-block;
  margin: 0.1rem 0 0.15rem;
}
.btn-reg {
  width: 100%;
  height: 0.4rem;
  background-color: #e8380d;
  color: #fff;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.16rem;
  border-radius: 0.09rem;
  cursor: pointer;
}
.otherLogin {
  width: 100%;
}
.otherLogin div {
  display: block;
  width: 2.57rem;
  margin: 0.4rem 0.43rem 0.16rem;
  text-align: center;
  position: relative;
  border: 1px solid #ccc;
}
.otherLogin div i {
  font-size: 0.14rem;
  display: block;
  padding: 0 0.3rem;
  line-height: 0.14rem;
  position: absolute;
  top: -0.07rem;
  left: 0.54rem;
  background: #f5f5f5;
  border-radius: 0.3rem;
}

.otherBox {
  width: 100%;
  height: 0.46rem;
  margin: 0.05rem 0;
  display: flex;
  justify-content: center;
}
.otherBox a {
  display: block;
  width: 0.35rem;
  height: 0.35rem;
  background: url("../../../public/img/third_login_1.png") no-repeat center;
  margin-left: 0.06rem;
  background-size: cover;
}
.otherBox a:nth-child(1) {
  background-position: 0 0;
}
.otherBox a:nth-child(2) {
  background-position: -35px 0;
}
.otherBox a:nth-child(3) {
  background-position: -70px 0;
}
.btn-bottom {
  width: 100%;
  height: 1.6rem;
  color: #858585;
  font-size: 0.1rem;
  padding: 1.13rem 0 0;
  display: flex;
  justify-content: center;
}
.btn-bottom p {
  width: 1.01rem;
  height: 0.28rem;
  font-size: 0.14rem;
  display: block;
  margin: 0 0 0.187rem;
  padding: 0 0.225rem;
  color: #858585;
}
.btn-bottom span {
  line-height: 0.2rem;
  height: 0.28rem;
}
</style>