<template>
  <div class="main-page">
    <div class="main-img">
      <div class="container">
        <div class="txt">
          <p>대리점 전용 사이트</p>
          <p class="font-weight-bolder">차별화된 서비스를 경험하세요.</p>
        </div>
        <div class="btn d-flex">
          <v-btn>고객 선불 충전하기<span><img src="@/assets/images/common/icon-btnarrow.svg" alt=""></span></v-btn>
          <v-btn>USIM 충전하기<span><img src="@/assets/images/common/icon-btnarrow.svg" alt=""></span></v-btn>
          <v-btn>공지 사항 바로가기<span><img src="@/assets/images/common/icon-btnarrow.svg" alt=""></span></v-btn>
        </div>
      </div>
    </div>
    <div class="main-cont container">
      <v-tabs v-model="tab" height="40px" hideSlider>
        <v-tab>선불 요금제</v-tab>
        <v-tab>후불 요금제</v-tab>
        <v-tab>개통 정책</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item :transition="false">
          <div class="table-wrap">
            <p class="table-tit">LGU+</p>
            <v-data-table :headers="headers" :items="contents" hide-default-footer mobile-breakpoint="0" :class="$vuetify.breakpoint.xs?'mobile-table':''">
              <template v-slot:item="{ item }">
                <tr :class="item.best?'best':''">
                  <td>{{item.name}} <span v-if="item.best" class="best-mark">인기</span></td>
                  <td>{{item.num1}}</td>
                  <td>{{item.num2}}</td>
                  <td>{{item.num3}}</td>
                  <td>{{item.num4}}</td>
                  <td>{{item.num5}}</td>
                </tr>
              </template>
            </v-data-table>
          </div>
          <div class="table-wrap">
            <p class="table-tit">SKT</p>
            <v-data-table :headers="headers" :items="contents" hide-default-footer mobile-breakpoint="0" :class="$vuetify.breakpoint.xs?'mobile-table':''">
              <template v-slot:item="{ item }">
                <tr :class="item.best?'best':''">
                  <td>{{item.name}} <span v-if="item.best" class="best-mark">인기</span></td>
                  <td>{{item.num1}}</td>
                  <td>{{item.num2}}</td>
                  <td>{{item.num3}}</td>
                  <td>{{item.num4}}</td>
                  <td>{{item.num5}}</td>
                </tr>
              </template>
            </v-data-table>
            <p class="table-info">선불데이터 15G 제공 + 문자 기본 제공</p>
          </div>
          <div class="table-wrap">
            <p class="table-tit">KT</p>
            <v-data-table :headers="headers" :items="contents" hide-default-footer mobile-breakpoint="0" :class="$vuetify.breakpoint.xs?'mobile-table':''">
              <template v-slot:item="{ item }">
                <tr :class="item.best?'best':''">
                  <td>{{item.name}} <span v-if="item.best" class="best-mark">인기</span></td>
                  <td>{{item.num1}}</td>
                  <td>{{item.num2}}</td>
                  <td>{{item.num3}}</td>
                  <td>{{item.num4}}</td>
                  <td>{{item.num5}}</td>
                </tr>
              </template>
            </v-data-table>
          </div>
        </v-window-item>
        <v-window-item :transition="false">
        </v-window-item>
        <v-window-item :transition="false">
        </v-window-item>
      </v-window>
      <div class="main-noti" v-if="!$vuetify.breakpoint.xs">
        <div>
          <h4 class="text-h4">공지사항</h4>
          <p>
            타사 충전 문의 : 02.811.3729<br>운영시간 : 오전 10시 - 오후 9시<br><br>
            전용계좌 2만원부터 입금가능<br>(입금시 1분 소요, 재 로그인 필수)<br>
            회사에따라 충전 시간이 다를 수 있습니다.<br><br>
            모빙 정액요금제 충전 불가<br>
            일반요금제 충전 취소 불가<br><br>
            충전 취소는 상황에따라 불가 할 수 있으며, <br>
            취소 시 시간이 다소 걸릴수 있습니다.
          </p>
        </div>
      </div>
    </div>
    <div @click="dialog = true" class="btn-noti" v-if="$vuetify.breakpoint.xs">
        <img src="@/assets/images/page/m_main_noti.png" alt="">
      </div>
    <v-dialog v-model="dialog" width="300px">
      <v-card>
        <div class="main-noti">
        <div>
          <div class="d-flex">
            <h4 class="text-h4">공지사항</h4>
          <v-btn @click="dialog = false"><img src="@/assets/images/common/icon-x.svg" alt=""></v-btn>
          </div>
          <p>
            타사 충전 문의 : 02.811.3729<br>운영시간 : 오전 10시 - 오후 9시<br><br>
            전용계좌 2만원부터 입금가능<br>(입금시 1분 소요, 재 로그인 필수)<br>
            회사에따라 충전 시간이 다를 수 있습니다.<br><br>
            모빙 정액요금제 충전 불가<br>
            일반요금제 충전 취소 불가<br><br>
            충전 취소는 상황에따라 불가 할 수 있으며, <br>
            취소 시 시간이 다소 걸릴수 있습니다.
          </p>
        </div>
      </div>
      </v-card>    
      </v-dialog>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        tab: null,
        dialog: false,
        headers: [{
            text: '요금제명',
            width: '22%',
            sortable: false
          },
          {
            text: '기본료  (Rates per Month)',
            sortable: false
          },
          {
            text: '음성(Voice) /  문자 SMS',
            width: '20%',
            sortable: false
          },
          {
            text: '데이터 (Data)',
            width: '15%',
            sortable: false
          },
          {
            text: '초과분',
            width: '10%',
            sortable: false
          },
          {
            text: '부가통화',
            width: '10%',
            sortable: false
          },
        ],
        contents: [{
            name: "선불 스마트 300M",
            best: "best",
            num1: "36,300",
            num2: "기본제공 / 기본제공",
            num3: "300M",
            num4: "+3MBPS",
            num5: "50"
          },
          {
            name: "선불 스마트 10.3G",
            num1: "38,300",
            num2: "기본제공 / 기본제공",
            num3: "300M + 10GB",
            num4: "+3MBPS",
            num5: "50"
          },
          {
            name: "선불 스마트 11G (일2G)",
            num1: "55,000",
            num2: "기본제공 / 기본제공",
            num3: "11GB + 일 2GB",
            num4: "+3MBPS",
            num5: "300"
          },
          {
            name: "선불 스마트 11G (일2G)",
            num1: "66,000",
            num2: "기본제공 / 기본제공",
            num3: "일 5GB + 5MBPS",
            num4: "+5MBPS",
            num5: "300"
          },
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
  .main-img {
    width: 100%;
    height: 325px;
    background: #FFD2E1;

    .container {
      position: relative;
      padding-top: 55px;
      height: 100%;
      background: #FFD2E1 url('~@/assets/images/page/main_img.png') right no-repeat;

      .txt {
        p {
          font-size: 2.4rem;
        }

        p:first-child {
          color: #399FC7;
        }
      }

      .btn {

        .v-btn {
          background: #fff;
          height: 60px;
          border-radius: 30px;
          padding: 0 16px 0 40px;
          font-size: 1.6rem;
          font-weight: 400;
          justify-content: space-between;

          span {
            background: #FAFAFB;
            width: 28px;
            width: 28px;
            border-radius: 100%;
          }
        }
      }
    }
  }

  .main-cont {
    position: relative;
    padding: 40px 0;

    .v-tab {
      font-size: 1.3rem;
      border-radius: 100px;
      width: 110px;
      font-weight: 500;

      &--active {
        background: #00648A;
        color: #fff;
        font-weight: 700;

        &::before {
          display: none;
        }
      }

      &:not(.v-tab--active) {
        color: #A0BCC0 !important;
      }

      &::before {
        border-radius: 100px;
      }
    }

    .v-window {
      overflow: hidden;

      .table-wrap {
        .table-tit {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .table-info {
          color: #666666;
          margin-top: 10px
        }

        +.table-wrap {
          margin-top: 40px
        }
      }
    }

    .v-data-table {
      tr.best {
        background: rgba(229, 30, 120, 0.1) !important;
      }

      .best-mark {
        background: #E51E78;
        border-radius: 10px;
        display: inline-block;
        height: 22px;
        line-height: 22px;
        text-align: center;
        width: 44px;
        color: #fff;
        font-size: 1.1rem;
        margin-left: 10px
      }
    }
  }
  .main-noti {
      width: 300px;

      >div {
        padding: 18px 30px 30px;
        background: #FFFFFF;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
        border-radius: 4px;
      }

      h4 {
        color: #49A7CB;
        font-size: 1.5rem !important;
      }

      p {
        line-height: 24px !important;
      }
    }

  @include pc {
    .main-img {
      .btn {
        position: absolute;
        bottom: 40px;

        .v-btn {
          width: 335px;

          +.v-btn {
            margin-left: 24px;
          }
        }
      }
    }

    .main-cont {
      .v-window {
        max-width: 922px;
      }

      .main-noti {
        position: absolute;
        right: 0;
        top: 40px;

        >div {
          position: fixed;
          h4{
            margin-bottom: 30px;
          }
        }
      }
    }
  }

  @include mobile {
    .main-img {
      height: auto;

      .container {
        padding: 50px 40px;
        background: #FFD2E1 url('~@/assets/images/page/m_main_img.png') center no-repeat;
        background-size: cover;
      }

      .btn {
        flex-direction: column;
        width: 100%;
            margin-top: 60px;

        .v-btn {
          width: 100%;

          +.v-btn {
            margin-top: 4px;
          }
        }
      }
    }
    .main-cont{
      .table-wrap{
        .table-tit{padding: 0 16px;}
      }
    }
    .btn-noti {
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    right: 0;
  }
  .main-noti {
      .d-flex {
        justify-content: space-between;
        margin-bottom: 30px;

        .v-btn {
          background: none;
          padding: 0;
          min-width: auto;
          height: auto;
        }
      }
  }
  }

  ::v-deep {
    .v-tabs {
      margin-bottom: 30px;

      .v-slide-group__wrapper {
        display: block;
      }

      .v-slide-group__content {
        width: 336px;
        background: rgba(57, 159, 199, 0.1);
        height: 40px;
        border-radius: 100px;
      }
    }

    .v-data-table {
      table {
        border-bottom: solid 1px #A0D1E3;
      }

      thead th {
        height: 40px !important;
      }

      tbody td {
        height: 50px !important;
      }
    }
    @include mobile {
      .v-slide-group__content {
        margin: 0 auto;
      }
      .v-data-table{
        overflow: auto;
        table{width:1000px !important}
      }

    }

  }
</style>