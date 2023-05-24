<template>
  <div class="chargehis-page">
    <div class="route-title">
      <div class="container">
        <h2 class="text-h2">{{ $route.name }}</h2>
      </div>
    </div>
    <div class="chargehis-input">
      <div class="container">
        <div class="input-date d-flex">
          <p>기간</p>
          <div class="d-flex align-center">
            <div>
            <v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <!-- YY-MM-DD형식 -->
                <v-text-field v-model="s_date" v-bind="attrs" outlined v-on="on" hide-details="auto" prepend-inner-icon="fa-"
></v-text-field>
              </template>
              <v-date-picker v-model="s_date" no-title @input="menu = false"></v-date-picker>
            </v-menu>
          </div>
          <p style="margin:0 5px">~</p>
          <div>
            <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="e_date" v-bind="attrs" outlined v-on="on" hide-details="auto" prepend-inner-icon="fa-"

                  type="number"></v-text-field>
              </template>
              <v-date-picker v-model="e_date" no-title @input="menu2 = false"></v-date-picker>
            </v-menu>
          </div>
          </div>          
        </div>
        <div class="d-flex">
          <p>충전번호</p>
          <v-text-field placeholder="숫자만 입력해 주세요." outlined hide-details="auto"></v-text-field>
        </div>
        <div class="d-flex">
          <p>전화번호</p>
          <v-text-field placeholder="숫자만 입력해 주세요." outlined hide-details="auto"></v-text-field>
        </div>
        <div>
          <v-btn flat color="primary">조회</v-btn>
        </div>
      </div>
    </div>
    <div class="list-table-wrap">
      <div>
        <v-data-table :headers="headers" :items="contents" :items-per-page="itemsPerPage" hide-default-footer :mobile-breakpoint="0"
        :class="$vuetify.breakpoint.xs?'mobile-table':''">
        </v-data-table>
        <v-pagination v-model="page" :length="15" :total-visible="7" circle active-color="#399FC7"></v-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
      s_date: new Date().toISOString().substr(0, 10),
      e_date: new Date().toISOString().substr(0, 10),

        page: 1,
        headers: [{
            text: '충전일',
          value: 'date',
            sortable: false  
          },
          {
            text: '충전번호',
            value: 'num1',
            sortable: false  
          },
          {
            text: '전화번호',
            value: 'num2',
            sortable: false  
          },
          {
            text: '요금제',
            value: 'pri',
            sortable: false  
          },
          {
            text: '충전금액',
            value: 'num3',
            sortable: false  
          },
          {
            text: '예치금적용액',
            value: 'num4',
            sortable: false  
          },
          {
            text: '예치금잔액',
            value: 'num5',
            sortable: false  
          },
        ],
        contents: [{
            date: '23.05.12',
            num1: '01012341234',
            num2: '01012341234',
            pri: '선불 스마트 300M',
            num3: '3,000',
            num4: '300',
            num5: '13,300'
          },
          {
            date: '23.05.12',
            num1: '01012341234',
            num2: '01012341234',
            pri: '선불 스마트 300M',
            num3: '3,000',
            num4: '300',
            num5: '13,300'
          },
          {
            date: '23.05.12',
            num1: '01012341234',
            num2: '01012341234',
            pri: '선불 스마트 300M',
            num3: '3,000',
            num4: '300',
            num5: '13,300'
          },
        ]

      }
    },
    
    computed: {
      pageCount() {
        return Math.ceil(this.contents.length / this.itemsPerPage)
      },
    },
  }
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/page/charge/charge.scss';
</style>