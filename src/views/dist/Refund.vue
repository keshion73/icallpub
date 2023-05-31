<template>
  <div class="refund-page">
    <div class="container">
      <h2 class="text-h2">{{ $route.name }}</h2>
      <div class="refund-info">
        <div>
          <h4 class="text-h4">예치금 잔액</h4>
        <p><span>7,200</span><span>원</span></p>
        </div>        
        <div class="bank d-flex">
        <h4 class="text-h4">계좌</h4>
        <p class="font-weight-bold">카카오뱅크  79606702902101   (예자인)</p>
      </div>
      </div>
      <p class="refund-req"><img src="@/assets/images/common/icon-info.svg" alt="">등록되어있는 계좌로 환불됩니다.</p>
      <div>
        <h4 class="text-h4">환불 요청 금액</h4>
        <v-text-field placeholder="숫자만 입력해 주세요." outlined hide-details="auto"></v-text-field>
      </div>
      <div>
        <h4 class="text-h4">환불 사유</h4>
        <v-textarea placeholder="환불 사유를 입력해 주세요" outlined  no-resize rows="10" hide-details="auto"></v-textarea>
      </div>
      <v-btn color="btncolor" x-large block>환불 요청</v-btn>
    </div>
  </div>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
        };
    },
};
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/page/charge/charge.scss';
</style>