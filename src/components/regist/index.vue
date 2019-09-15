<template>
  <div class="bg">
    <section class="bgCCC">
      <div class="layout">
        <form action>
          <p>用手机号注册</p>
          <div class="inputBox">
            <input type="text" class="idtxt" placeholder="请输入您的用户名" v-model="username" />
          </div>
          <div class="inputBox">
            <input
              type="password"
              class="pwdtxt"
              placeholder="6-16个字符(数字、字母、符号)"
              v-model="password"
            />
            <i class="eye"></i>
          </div>
        </form>
      </div>
      <div class="ImgBox">
        <div class="txt">
          <input type="text" class="imgtxt" placeholder="请输图片入验证码" v-model="confirm" />
        </div>
        <div class="imgKuang" ref="yanzheng">7745</div>
      </div>

      <div class="ImgBox">
        <div class="txt">
          <input type="text" class="imgtxt" placeholder="请输入手机验证码" />
        </div>
        <div class="btn-phone">发送验证码</div>
      </div>
      <p class="xiyi">
        注册即表示您同意遵守努比亚帐户的
        <span>用户协议</span>和
        <span>隐私协议</span>
      </p>
      <div class="btnBox1" @click="register()">立即注册</div>
    </section>
  </div>
</template>
<script>
export default {
  name: "regist",

  data() {
    return {
      username: "",
      password: "",
      confirm: "",
      userList: []
    };
  },
  
  methods: {
    register() {
      // let reg = new RegExp("^[a-zA-Z]w{5,17}$");
      //   this.userList = JSON.parse(localStorage.getItem("userList"));
      // console.log(this.le)
      if (!this.username || this.confirm != 7745 || !this.password) {
        alert("请正确输入");
      } else {
 
          var obj = {};
          obj.username = this.username;
          obj.password = this.password;
          // 
          
        }
        this.userList.push(obj);
        localStorage.setItem("userList", JSON.stringify(this.userList));
      }
    }
  }

</script>
<style scoped>
.bg {
  overflow: hidden;
}
.bgCCC {
  background: #f5f5f5;
  height: 6.67rem;
  overflow: hidden;
}
.layout {
  width: 100%;
  height: 1.84rem;
  padding: 0 0.16rem;
  margin-top: 0.1rem;
}
.layout form {
  width: 100%;
  height: 100%;
}
.layout form p {
  width: 100%;
  height: 0.28rem;
  font-size: 0.16rem;
  color: #333;
  font-weight: 900;
  line-height: 0.2rem;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.2rem;
}

.inputBox,
.ImgBox .txt {
  width: 100%;
  height: 0.4rem;
  margin-bottom: 0.25rem;
  line-height: 0.2rem;
  padding: 0.1rem;
  color: #313131;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 0.14rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inputBox input {
  width: 100%;
  height: 0.36rem;
  margin-top: 0.03rem;
  margin-left: 5px;
  border: 0;
  outline: none;
}
.eye {
  width: 0.2rem;
  height: 0.2rem;
  display: block;
  background: url("../../../public/img/pwd-eye.png") no-repeat center;
  overflow: hidden;
  background-size: 0.2rem 0.4rem;
  background-position: 0 -0.2rem;
}
.ImgBox {
  width: 100%;
  height: 0.66rem;
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.16rem;
}
.ImgBox .txt {
  width: 2.22rem;
}
.ImgBox .txt input {
  width: 100%;
  height: 0.36rem;
  margin-top: 0.03rem;
  margin-left: 5px;
  border: 0;
  outline: none;
}
.ImgBox .imgKuang {
  font-size: 0.2rem;
  width: 1rem;
  height: 0.4rem;
  border: 1px solid #875685;
  text-align: center;
  line-height: 0.4rem;
  color: red;
}
.btn-phone {
  width: 1.08rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.14rem;
  color: #fff;
  text-align: center;
  background: #e8380d;
  border-radius: 0.4rem;
}
.xiyi {
  color: #999;
  font-size: 0.12rem;
  width: 100%;
  text-align: center;
}
.xiyi span {
  color: #e8380d;
}
.btnBox1 {
  width: 3.35rem;
  height: 0.4rem;
  margin: 0 auto;
  margin-top: 0.2rem;
  background-color: #e8380d;
  color: #fff;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.16rem;
  border-radius: 0.4rem;
  cursor: pointer;
}
</style>
