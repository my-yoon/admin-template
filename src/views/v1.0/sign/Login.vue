<template>
  <b-container class="content-center min-vh-100 login-form-wrap">
    <b-row class="login-form-row">
      <b-col>
        <b-card>
          <b-card-header>
            <img
              src="@/assets/images/b_rabbit_logo.png"
              block
              class="mb-2"
              width="180"
            />
          </b-card-header>
          <b-card-body>
            <b-form>
              <h2>로그인</h2>
              <p class="text-muted">계정정보를 입력해 주세요.</p>
              <c-input
                ref="txtUserId"
                v-model="userId"
                placeholder="Username"
                autocomplete="username email"
                autofocus
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </c-input>
              <c-input
                v-model="userPwd"
                placeholder="Password"
                type="password"
                autocomplete="curent-password"
                @keypress="watchKeyOnPwdTextbox"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </c-input>
              <b-row>
                <b-col class="text-left">
                  <b-button
                    block
                    size="md"
                    :disabled="_.isEmpty(userId) || _.isEmpty(userPwd)"
                    @click="doLogin">Login</b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card-body>
          <b-overlay :show="showOverlay" no-wrap></b-overlay>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import CommonView, { Component, Mixins, Prop, Watch} from '@/views/mixins/CommonView'
import CommonEvents from '@/views/mixins/CommonEvents'
import CommonModals from '@/views/mixins/CommonModals'

@Component
export default class Login extends Mixins(CommonView, CommonEvents, CommonModals ) {
  userId: string = ''
  userPwd: string = ''
  showOverlay: boolean = false

  created () {
    if(this.isLogin) {
      this.goToPage('/')
    }
  }
  /**
   * 로그인
   */
  doLogin () {
    if(this._.isEmpty(this.userId) || this._.isEmpty(this.userPwd)) {
      this.showAlert('로그인 정보를 입력하십시오.')
      return 
    }
    this.showOverlay = true
    this.loginWithId(this.userId, this.userPwd, (isSuccess: boolean, res: any) => {
      if( isSuccess ) {
        this.goToPageWithoutHistory('/')
      } else {
        this.showOverlay = false
        this.showAlert('로그인 정보를 확인하십시오.', '로그인 오류')
      }
      
    })
  }
  /**
   * 비밀번호 인풋박스에 Enter 체크
   */
  watchKeyOnPwdTextbox (event: KeyboardEvent) {
    if(this.isEnterKey(event.keyCode)) {
      this.doLogin()
    }
  }
}

</script>

<style lang="scss" scoped>
  .login-form-wrap {
    .login-form-row {
      width: 500px;
    }
  }
</style>

