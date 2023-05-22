<template>
  <div class="charge-page d-flex">
    <div class="container">
      <div class="lt">
        <h2 class="text-h2">{{ $route.name }}</h2>
        <v-form v-if="!$vuetify.breakpoint.xs">
          <div>
            <h4 class="text-h4">예치금 잔액</h4>
            <p class="font-weight-bolder primary--text text-h6">7,200</p>
          </div>
          <div>
            <h4 class="text-h4">폰번호</h4>
            <div class="input-ph">
              <v-text-field placeholder="휴대폰번호" outlined hide-details="auto"></v-text-field>
              <v-btn flat color="primary">확인</v-btn>
            </div>
          </div>
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
          <v-btn flat color="primary" x-large block>충전</v-btn>
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
                <v-text-field placeholder="휴대폰번호" outlined hide-details="auto"></v-text-field>
                <v-btn flat color="primary">확인</v-btn>
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
            <v-btn flat color="primary" x-large block>충전</v-btn>
          </v-form>
        </div>
      </div>
      <div class="rt" v-if="!$vuetify.breakpoint.xs">
        <div>
          <h4 class="text-h4">정액제 수수료율</h4>
          <v-data-table :headers="headers" :items="arr1" hide-default-footer no-data-text="데이터가 없습니다.">
        <template #[`item.sales_discount_rate`]="{ item }">
          <span>
            {{ item.sales_discount_rate }}%
          </span>
        </template>
      </v-data-table>
        </div>
        <div>
          <h4 class="text-h4">종량제 수수료율</h4>
          <v-data-table :headers="headers" :items="arr2" hide-default-footer no-data-text="데이터가 없습니다.">
        <template #[`item.sales_discount_rate`]="{ item }">
          <span>
            {{ item.sales_discount_rate }}%
          </span>
        </template>
      </v-data-table>
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
      }],
      arr1: [
        {
          mvno_name: "스마텔",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "SK/T",
          sales_discount_rate: "8"
        },
        {
          mvno_name: "KT",
          sales_discount_rate: "9"
        },
        {
          mvno_name: "텔링크",
          sales_discount_rate: "8"
        },
        {
          mvno_name: "모빙",
          sales_discount_rate: "9"
        },
        {
          mvno_name: "아이즈모바일",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "이지",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "스노우맨",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "마이월드",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "훔",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "웰",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "K mobile",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "프리티",
          sales_discount_rate: "9"
        },
        {
          mvno_name: "큰사람",
          sales_discount_rate: "8"
        },
        {
          mvno_name: "블루모바일",
          sales_discount_rate: "9"
        },
        {
          mvno_name: "드림모바일",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "에이플러스",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "밸류컴",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "슈가모바일",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "인스모바일",
          sales_discount_rate: "10"
        }
      ],
      arr2: [
        {
          mvno_name: "SK/T",
          sales_discount_rate: "8"
        },
        {
          mvno_name: "KT",
          sales_discount_rate: "9"
        },
        {
          mvno_name: "텔링크",
          sales_discount_rate: "8"
        },
        {
          mvno_name: "모빙",
          sales_discount_rate: "9"
        },
        {
          mvno_name: "아이즈모바일",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "이지",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "스노우맨",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "마이월드",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "훔",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "웰",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "K mobile",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "프리티",
          sales_discount_rate: "9"
        },
        {
          mvno_name: "큰사람",
          sales_discount_rate: "8"
        },
        {
          mvno_name: "블루모바일",
          sales_discount_rate: "9"
        },
        {
          mvno_name: "드림모바일",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "에이플러스",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "밸류컴",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "슈가모바일",
          sales_discount_rate: "10"
        },
        {
          mvno_name: "인스모바일",
          sales_discount_rate: "10"
        }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/page/charge/charge.scss';
::v-deep{
.v-data-table{
        th,td{
        padding: 0 26px !important;
      }
    }
}
</style>