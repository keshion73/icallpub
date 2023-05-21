<template>
  <div class="charge-page">
    <div class="container">
      <div class="lt">
        <h2 class="text-h2">{{ $route.name }}</h2>
        <form action="" v-if="!$vuetify.breakpoint.xs">
          <div>
            <h4 class="text-h4">예치금 잔액</h4>
            <p class="font-weight-bolder primary--text text-h6">7,200</p>
          </div>
          <div>
            <h4 class="text-h4">폰번호</h4>
            <div class="input-ph">
              <input type="text" placeholder="휴대폰번호" />
              <button class="btn btn-blue">확인</button>
            </div>
          </div>
          <div>
            <h4 class="text-h4">예치금 잔액</h4>
            <p>SKT PPS Premium</p>
          </div>
          <div>
            <h4 class="text-h4">충전 잔액</h4>
            <input type="radio" id="money1" name="radio_money" checked><label for="money1">10,000</label>
            <input type="radio" id="money2" name="radio_money"><label for="money2">20,000</label>
            <input type="radio" id="money3" name="radio_money"><label for="money3">30,000</label>
            <input type="radio" id="money4" name="radio_money"><label for="money4"
              style="margin-left: 0;">40,000</label>
            <input type="radio" id="money5" name="radio_money"><label for="money5">50,000</label>
          </div>
          <div>
            <h4 class="text-h4">예치금 차감액</h4>
            <p class="font-weight-bolder">0</p>
            <p class="info-mes">예치금 차감액은 10% 차익이 있으며, 궁금한 사항은 아이콜 모바일 본사로 연락주시기 바랍니다.</p>
          </div>
          <button class="btn btn-blue">충전</button>
        </form>
        <div v-if="$vuetify.breakpoint.xs">
          <form action="">
            <div>
              <h4 class="text-h4">예치금 잔액</h4>
              <p class="font-weight-bolder primary--text text-h6">7,200</p>
            </div>
            <div>
              <h4 class="text-h4">폰번호</h4>
              <div class="input-ph">
                <input type="text" placeholder="휴대폰번호" />
                <button class="btn btn-blue">확인</button>
              </div>
            </div>
            <div>
              <h4 class="text-h4">고객정보</h4>
              <!--입력전-->
              <p style="color:#AAB5C9" class="info-mes">폰번호 입력 후 확인을 눌러주세요.</p>
              <p>LG 선불 스마트 300M</p>
            </div>
            <div>
              <h4 class="text-h4">충전금액</h4>
              <!--입력전-->
              <p style="color:#AAB5C9" class="info-mes">일반 요금제는 선택, 선불 요금제는 자동입력됩니다.</p>
              <!--선불요금제일시-->
              <p class="font-weight-bolder primary--text text-h6">36,000</p>
              <!--일반요금제일시-->
              <div>
                <input type="radio" id="money1" name="radio_money" checked><label for="money1">10,000</label>
                <input type="radio" id="money2" name="radio_money"><label for="money2">20,000</label>
                <input type="radio" id="money3" name="radio_money"><label for="money3">30,000</label>
                <input type="radio" id="money4" name="radio_money"><label for="money4"
                  style="margin-left: 0;">40,000</label>
                <input type="radio" id="money5" name="radio_money"><label for="money5">50,000</label>
              </div>
            </div>
            <!--입력후-->
            <div>
              <div>
                <h4 class="text-h4">예치금 차감액</h4>
                <p class="font-weight-bolder">32,400</p>
                <p class="info-mes">예치금 차감액은 10% 차익이 있으며, 궁금한 사항은 아이콜 모바일 본사로 연락주시기 바랍니다.</p>
              </div>
            </div>
            <!--입력전 disabled-->
            <button class="btn btn-blue">충전</button>
          </form>
        </div>
      </div>
      <div class="rt">
        <div>
          <h4 class="text-h4">정액제 수수료율</h4>
          <div class="fee-list">
            <div class="list-cate">
              <p>통신사</p>
              <p>수수료율</p>
            </div>
            <div>
              <p>텔링크</p>
              <p>5.0%</p>
            </div>
            <div>
              <p>드림모바일</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>이지</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>큰사람</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>아이즈비전</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>프리티</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>미디어로그</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>마이월드</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>원텔</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>스마텔</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>홈</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>여유텔레콤</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>스노우맨</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>밸류컴</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>에이플러스KT</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>에이플러스LG</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>인스코리아</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>슈가모바일</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>NIZ텔레콤(17000)</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>NIZ텔레콤(25000)</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>NIZ텔레콤(35000)</p>
              <p>8.0%</p>
            </div>

            <div>
              <p>NIZ텔레콤(45000)</p>
              <p>8.0%</p>
            </div>
          </div>
        </div>
        <div>
          <h4 class="text-h4">종량제 수수료율</h4>
          <div class="fee-list">
            <div class="list-cate">
              <p>통신사</p>
              <p>수수료율</p>
            </div>
            <div>
              <p>SK/T</p>
              <p>5.0%</p>
            </div>
            <div>
              <p>KT</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>텔링크</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>모빙</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>아이즈모바일</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>이지</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>스노우맨</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>마이월드</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>홈</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>웰</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>K mobile</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>프리티</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>큰사람</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>블루모바일</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>드림모바일</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>스마텔</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>에이플러스</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>밸류컴</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>슈가모바일</p>
              <p>8.0%</p>
            </div>
            <div>
              <p>인스모바일</p>
              <p>8.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        prepayment: true
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/page/charge/charge.scss';
</style>