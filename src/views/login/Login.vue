<template>
  <div class="login-cont">
    <div class="d-flex">
      <div class="loginimg" v-if="!$vuetify.breakpoint.xs">
        <img src="@/assets/images/page/login/loginimg.png" alt="">
      </div>
      <div class="loginform">
        <div class="d-flex">
          <p class="loginlogo"><img src="@/assets/images/icalllogo.svg" alt=""><span>대리점</span></p>
          <form action="">
            <input type="text" placeholder="아이디" class="error">
            <span class="error-mes">유효하지 않습니다.</span>
            <input type="password" placeholder="비밀번호">
            <span class="error-mes"></span>
            <button type="submit" class="btn btn-blue">로그인</button>
            <div class="input-chk">
              <input type="checkbox" id="login">
              <label for="login">아이디 저장</label>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="login-ft" v-if="$vuetify.breakpoint.xs">
      <p>㈜아이콜모바일(선유도지점) 사업자번호 : 226-23-91761 | 통신판매신고 : 2023-서울당산-605호 | 대표이사 : 박준성, 서울특별시 영등포구 양평동5가 양평로22길 21, 선유도코오롱디지털타워 605호</p>
    </div>
  </div>
</template>