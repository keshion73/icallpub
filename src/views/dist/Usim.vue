<template>
  <div class="refund-page usim-page">
    <div class="container">
      <h2 class="text-h2">{{ $route.name }}</h2>
      <div class="refund-info">
        <div>
          <h4 class="text-h4">LG U+ USIM</h4>
        </div>
        <div class="d-flex">
          <div class="num">
            <p>현재 수</p>
            <p class="text-h2">23</p>
          </div>
          <v-text-field placeholder="추가 수량을 입력하세요." outlined hide-details="auto" background-color="#fff"></v-text-field>
        </div>
      </div>
      <div class="refund-info">
        <div>
          <h4 class="text-h4">SKT USIM</h4>
        </div>
        <div class="d-flex">
          <div class="num">
            <p>현재 수</p>
            <p class="text-h2">23</p>
          </div>
          <v-text-field placeholder="추가 수량을 입력하세요." outlined hide-details="auto" background-color="#fff"></v-text-field>
        </div>
      </div>
      <div class="refund-info">
        <div>
          <h4 class="text-h4">KT USIM</h4>
        </div>
        <div class="d-flex">
          <div class="num">
            <p>현재 수</p>
            <p class="text-h2">23</p>
          </div>
          <v-text-field placeholder="추가 수량을 입력하세요." outlined hide-details="auto" background-color="#fff"></v-text-field>
        </div>
      </div>
      <div>
        <h4 class="text-h4">요청 사유</h4>
        <v-textarea placeholder="USIM 요청 사유를 입력해 주세요." outlined no-resize rows="10" hide-details="auto"></v-textarea>
      </div>
      <v-btn color="btncolor" x-large block>USIM 요청</v-btn>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {};
    },
  };
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/page/charge/charge.scss';

  .usim-page {
    .refund-info {}
  }

  ::v-deep {
    .refund-info {
      .v-input__control {
        max-width: 166px;
      }

      .v-input__slot {
        max-width: 166px;

        fieldset {
          top: -6px
        }
      }
    }
  }
</style>