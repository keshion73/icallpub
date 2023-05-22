<template>
  <div class="refund-page">
    <div class="container">
      <h2 class="text-h2">{{ $route.name }}</h2>
      <div>
        <h4 class="text-h4">계좌 정보</h4>
        <p class="font-weight-bold" style="font-size: 1.6rem;">카카오뱅크 79606702902101 예자인</p>
      </div>
      <div>
        <h4 class="text-h4">예치금 잔액</h4>
        <p class="font-weight-bolder primary--text text-h6">7,200</p>
      </div>
      <div>
        <h4 class="text-h4">환불 요청 금액</h4>
        <v-text-field placeholder="숫자만 입력해 주세요." outlined hide-details="auto"></v-text-field>
      </div>
      <div>
        <h4 class="text-h4">환불 사유</h4>
        <v-textarea placeholder="환불 사유를 입력해 주세요" outlined hide-details="auto" no-resize rows="10"></v-textarea>
      </div>
      <v-btn flat color="primary" x-large block>환불 요청</v-btn>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '~@/assets/scss/page/charge/charge.scss';
</style>