<template>
  <div class="charge-page d-flex">
    <Loading>
      <p>충전 중 입니다.</p>
    </Loading>
    <div class="container">
        <h2 class="text-h2">{{ $route.name }}</h2>
        <v-form v-if="!$vuetify.breakpoint.xs">
          <div class="charge-info">
            <h4 class="text-h4">예치금 잔액</h4>
             <p><span>7,200</span><span>원</span></p>
          </div>
          <div>
            <h4 class="text-h4">폰번호</h4>
            <div class="input-ph">
              <v-text-field placeholder="휴대폰번호" outlined></v-text-field>
              <v-btn color="primary">확인</v-btn>
            </div>
          </div>
          <div class="charge-bg">
            <div>
              <h4 class="text-h4">예치금 잔액</h4>
              <p>SKT PPS Premium</p>
            </div>
            <div>
              <h4 class="text-h4">충전 잔액</h4>
              <v-radio-group v-model="radio">
                <v-radio label="10,000" value="1" checked></v-radio>
                <v-radio label="20,000" value="2"></v-radio>
                <v-radio label="30,000" value="3"></v-radio>
                <v-radio label="40,000" value="4"></v-radio>
                <v-radio label="50,000" value="5"></v-radio>
              </v-radio-group>
            </div>
            <div>
              <h4 class="text-h4">예치금 차감액</h4>
              <p class="font-weight-bolder">0</p>
              <p class="info-mes">예치금 차감액은 10% 차익이 있으며, 궁금한 사항은 아이콜 모바일 본사로 연락주시기 바랍니다.</p>
            </div>
            <v-btn color="btncolor" x-large block>충전</v-btn>
          </div>
        </v-form>
        <div v-if="$vuetify.breakpoint.xs">
          <v-form action="">
            <div>
              <h4 class="text-h4">예치금 잔액</h4>
              <p class="font-weight-bolder primary--text text-h6">7,200</p>
            </div>
            <div>
              <h4 class="text-h4">폰번호</h4>
              <div class="input-ph">
                <v-text-field placeholder="휴대폰번호" outlined></v-text-field>
                <v-btn color="btncolor">확인</v-btn>
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
                <v-radio-group v-model="radio">
                  <v-radio label="10,000" value="1" checked></v-radio>
                  <v-radio label="20,000" value="2"></v-radio>
                  <v-radio label="30,000" value="3"></v-radio>
                  <v-radio label="40,000" value="4"></v-radio>
                  <v-radio label="50,000" value="5"></v-radio>
                </v-radio-group>
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
            <v-btn color="btncolor" x-large block>충전</v-btn>
          </v-form>
        </div>
      <div @click="dialog = true" class="btn-sales">
        <img src="@/assets/images/page/charge/btn-sales.png" alt="">
      </div>
      <v-dialog v-model="dialog" width="360px">
        <v-card>
          <div class="d-flex">
            <h4 class="text-h2">수수료율</h4>
            <v-btn @click="dialog = false"><img src="@/assets/images/common/icon-x.svg" alt=""></v-btn>
          </div>
          <v-tabs v-model="tab" height="40px" hideSlider>
            <v-tab>정액제</v-tab>
            <v-tab>종량제</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item :transition="false">
              <div>
                <v-data-table :headers="headers" :items="arr1" hide-default-footer no-data-text="데이터가 없습니다."
                  disable-pagination>
                  <template #[`item.sales_discount_rate`]="{ item }">
                    <span>
                      {{ item.sales_discount_rate }}%
                    </span>
                  </template>
                </v-data-table>
              </div>
            </v-window-item>
            <v-window-item :transition="false">
              <div>
                <v-data-table :headers="headers" :items="arr2" hide-default-footer no-data-text="데이터가 없습니다."
                  disable-pagination>
                  <template #[`item.sales_discount_rate`]="{ item }">
                    <span>
                      {{ item.sales_discount_rate }}%
                    </span>
                  </template>
                </v-data-table>
              </div>
            </v-window-item>
          </v-window>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
  import Loading from '../../components/Loading'
export default {
    components: {
    Loading,},
    data() {
      return {
        tab: null,
        dialog: false,
        prepayment: true,
        radio: "1",
        headers: [{
            text: '통신사',
            value: 'mvno_name',
            sortable: false,
            width: '10%'
          },
          {
            text: '수수료율',
            value: 'sales_discount_rate',
            sortable: false,
            width: '7%',
            align: 'right',
          }
        ],
        arr1: [{
            mvno_name: "텔링크",
            sales_discount_rate: "5.0"
          },
          {
            mvno_name: "드림모바일",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "이지",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "큰사람",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "아이즈비전",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "프리티",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "미디어로그",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "마이월드",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "원텔",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "스마텔",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "홈",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "여유텔레콤",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "스노우맨",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "밸류컴",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "에이플러스KT",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "에이플러스LG",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "인스코리아",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "슈가모바일",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "NIZ텔레콤(17000)",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "NIZ텔레콤(25000)",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "NIZ텔레콤(35000)",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "NIZ텔레콤(45000)",
            sales_discount_rate: "8.0"
          },
        ],
        arr2: [{
            mvno_name: "SK/T",
            sales_discount_rate: "5.0"
          },
          {
            mvno_name: "KT",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "텔링크",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "모빙",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "아이즈모바일",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "이지",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "스노우맨",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "마이월드",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "훔",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "웰",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "K mobile",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "프리티",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "큰사람",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "블루모바일",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "드림모바일",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "스마텔",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "에이플러스",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "밸류컴",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "슈가모바일",
            sales_discount_rate: "8.0"
          },
          {
            mvno_name: "인스모바일",
            sales_discount_rate: "8.0"
          },
        ]
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/page/charge/charge.scss';
  ::v-deep {
    .v-data-table {
      height: 560px;
      overflow: hidden auto;
      scrollbar-width: thin;
      scrollbar-color: #00648A #ffffff;

      .v-data-table__wrapper {
        width: 300px;
        overflow: hidden;
      }

      th,
      td {
        height: 32px !important;
        padding: 0 26px !important;
        font-size: 1.2rem !important;
      }

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #00648A;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    }

    .v-dialog {
      overflow: hidden;
      box-shadow: none;

      .v-card {
        border-radius: 12px;
        padding: 16px 0 16px 30px;

        >.d-flex {
          justify-content: space-between;
          padding-right: 30px;

          .v-btn {
            background: none;
            padding: 0;
            min-width: auto
          }
        }

        .v-tabs {
          margin: 16px 0;
        }

        .v-tab {
          font-size: 1.4rem;
          border-radius: 100px;
          width: 105px;

          &--active {
            background: #00648A;
            color: #fff;

            &::before {
              display: none;
            }
          }

          &:not(.v-tab--active) {
            color: #000 !important
          }

          &::before {
            border-radius: 100px;
          }
        }

        .v-window {
          overflow: visible;
        }

      }
    }
  }
</style>