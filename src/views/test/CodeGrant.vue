<template>
    <v-container fluid class="py-6 pt-0">
        <v-row class="mb-1 mt-2">
            <!-- 헤더명 -->
            <v-col md="12" class="me-auto text-start">
                <h5 class="text-h5 text-sm font-weight-bold ml-5">
                    대리점 코드 등록
                </h5>
            </v-col>
        </v-row>
        <!-- 권한수정 area -->
        <v-form ref="addForm" lazy-validation>
            <v-card class="card-shadow mt-6" id="basic" style="border-radius: 0px !important;">
                <div class="px-6 pb-6 pt-0">
                    <!-- 그룹수정 입력 area -->
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span> 지 역
                            :
                        </label>
                        <v-radio-group ref="refRegion" class="ml-3" v-model="selectedRegion" row>
                            <v-radio v-for="item in regionCodeList" :key="item.code_value" :label="item.code_name"
                                :value="item.code_value"></v-radio>
                        </v-radio-group>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>판매방식
                            :
                        </label>
                        <v-radio-group ref="refSalesMethod" class="ml-3" v-model="selectedSaleMethod" row>
                            <v-radio v-for="item in saleMethodCodeList" :key="item.code_value" :label="item.code_name"
                                :value="item.code_value"></v-radio>
                        </v-radio-group>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>대리점명
                            :
                        </label>
                        <v-col cols="3">
                            <v-text-field ref="refAgencyName" v-model="addItem.agency_name" color="#e91e63" placeholder=""
                                class="font-size-input input-style pt-0" outlined background-color="#f0f2f5"
                                :rules="[rules.addAgencyName.required, rules.addAgencyName.length, rules.addAgencyName.charValid]">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mt-0">
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*</span>대표자명 :
                        </label>
                        <v-col cols="3">
                            <v-text-field ref="refRepresentativeName" v-model="addItem.representative_name" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addRepresentativeName.required, rules.addRepresentativeName.length, rules.addRepresentativeName.charValid]">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>주민번호
                            :
                        </label>
                        <v-col cols="2">
                            <v-text-field ref="refSocialNumberf" v-model="addItem.socialNumberf" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addSocialNumberf.length, rules.addSocialNumberf.charValid]">
                            </v-text-field>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5"> ─ </label>
                        <v-col cols="2">
                            <v-text-field ref="refSocialNumberl" v-model="addItem.socialNumberl" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addSocialNumberl.length, rules.addSocialNumberl.charValid]">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span
                                style="color: red">*&nbsp;</span>사업자번호 :
                        </label>
                        <v-col cols="1">
                            <v-text-field ref="refBusinessNumberf" v-model="addItem.businessNumberf" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addBusinessNumberf.required, rules.addBusinessNumberf.length, rules.addBusinessNumberf.charValid]">
                            </v-text-field>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5"> ─ </label>
                        <v-col cols="1">
                            <v-text-field ref="refBusinessNumberm" v-model="addItem.businessNumberm" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addBusinessNumberm.required, rules.addBusinessNumberm.length, rules.addBusinessNumberm.charValid]">
                            </v-text-field>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5"> ─ </label>
                        <v-col cols="1">
                            <v-text-field ref="refBusinessNumberl" v-model="addItem.businessNumberl" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addBusinessNumberl.required, rules.addBusinessNumberl.length, rules.addBusinessNumberl.charValid]">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title">계약서 수취유무 : </label>
                        <v-checkbox class="ml-3" v-model="selected" row v-for="item in ctrCodeList" :key="item.code_value"
                            :label="item.code_name" :value="item.code_value">
                        </v-checkbox>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title">이 메 일 : </label>
                        <v-col cols="3">
                            <v-text-field ref="refEmail" v-model="addItem.email" color="#e91e63" placeholder=""
                                class="font-size-input input-style mt-0 pt-0" outlined background-color="#f0f2f5"
                                :rules="this.addItem.email.length > 0 ? [rules.addEmail.length, rules.addEmail.charValid] : []">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>폰 번
                            호 :
                        </label>
                        <v-col cols="1">
                            <v-text-field ref="refPhoneNumberf" v-model="addItem.phoneNumberf" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addPhoneNumberf.required, rules.addPhoneNumberf.length, rules.addPhoneNumberf.charValid]">
                            </v-text-field>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5"> ─ </label>
                        <v-col cols="1">
                            <v-text-field ref="refPhoneNumberm" v-model="addItem.phoneNumberm" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addPhoneNumberm.required, rules.addPhoneNumberm.length, rules.addPhoneNumberm.charValid]">
                            </v-text-field>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5"> ─ </label>
                        <v-col cols="1">
                            <v-text-field ref="refPhoneNumberl" v-model="addItem.phoneNumberl" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addPhoneNumberl.required, rules.addPhoneNumberl.length, rules.addPhoneNumberl.charValid]">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>주 소
                            :
                        </label>
                        <v-col cols="8">
                            <v-text-field ref="refAddr" v-model="addItem.addr" color="#e91e63" placeholder=""
                                class="font-size-input input-style mt-0 pt-0" outlined background-color="#f0f2f5"
                                :rules="[rules.addAddr.required, rules.addAddr.length, rules.addAddr.charValid]">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>일반전화
                            :
                        </label>
                        <v-col cols="1">
                            <v-text-field ref="refGeneralNumberf" v-model="addItem.generalNumberf" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addGeneralNumberf.length, rules.addGeneralNumberf.charValid]">
                            </v-text-field>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5"> ─ </label>
                        <v-col cols="1">
                            <v-text-field ref="refGeneralNumberm" v-model="addItem.generalNumberm" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addGeneralNumberm.length, rules.addGeneralNumberm.charValid]">
                            </v-text-field>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5"> ─ </label>
                        <v-col cols="1">
                            <v-text-field ref="refGeneralNumberl" v-model="addItem.generalNumberl" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addGeneralNumberl.length, rules.addGeneralNumberl.charValid]">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title">팩스번호 : </label>
                        <v-col cols="1">
                            <v-text-field ref="refFaxNumberf" v-model="addItem.faxNumberf" color="#e91e63" placeholder=""
                                class="font-size-input input-style mt-0 pt-0" outlined background-color="#f0f2f5"
                                :rules="[rules.addFaxNumberf.length, rules.addFaxNumberf.charValid]">
                            </v-text-field>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5"> ─ </label>
                        <v-col cols="1">
                            <v-text-field ref="refFaxNumberm" v-model="addItem.faxNumberm" color="#e91e63" placeholder=""
                                class="font-size-input input-style mt-0 pt-0" outlined background-color="#f0f2f5"
                                :rules="[rules.addFaxNumberm.length, rules.addFaxNumberm.charValid]">
                            </v-text-field>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5"> ─ </label>
                        <v-col cols="1">
                            <v-text-field ref="refFaxNumberl" v-model="addItem.faxNumberl" color="#e91e63" placeholder=""
                                class="font-size-input input-style mt-0 pt-0" outlined background-color="#f0f2f5"
                                :rules="[rules.addFaxNumberl.length, rules.addFaxNumberl.charValid]">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title">상위대리점명 : </label>
                        <v-col cols="3">
                            <v-autocomplete ref="refUpperAgencyCode" v-model="addItem.upper_agency_code" color="#e91e63"
                                :items="UpperAgencyList" item-text="agency_name" item-value="agency_code"
                                class="font-size-input input-style mt-0 pt-0 readonlyDisabled" :disabled="upperExistence"
                                return-object @change="selectedUpperAgency" outlined background-color="#f0f2f5"
                                :rules="this.upperExistence ? [] : [rules.addUpperAgencyCode.required, rules.addUpperAgencyCode.charValid]">
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="3">
                            <v-checkbox ref="refUpperExistence" class="mt-1" v-model="upperExistence" label="상위없음"
                                :value="true" @click="checkUpperAgency">
                            </v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                            이체은행 :
                        </label>
                        <v-col cols="2" class="pt-0">
                            <v-select ref="addBankCode" v-model="selectedBankCode" :items="bankCodeList"
                                item-text="code_name" item-value="code_value" label="1" color="#e91e63" outlined
                                background-color="#f0f2f5" class="font-size-input input-style pt-2" single-line height="36">
                                <!-- :rules="[rules.addGroupCode.required]"> -->
                            </v-select>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>예금주명
                            :
                        </label>
                        <v-col cols="2">
                            <v-text-field ref="refAccountHolder" v-model="addItem.account_holder" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addAccountHolder.required, rules.addAccountHolder.length, rules.addAccountHolder.charValid]">
                            </v-text-field>
                        </v-col>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>계좌번호
                            :
                        </label>
                        <v-col cols="3">
                            <v-text-field ref="refAccountNumber" v-model="addItem.account_number" color="#e91e63"
                                placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                background-color="#f0f2f5"
                                :rules="[rules.addAccountNumber.required, rules.addAccountNumber.length, rules.addAccountNumber.charValid]">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>영업
                            담당자 :
                        </label>
                        <v-col cols="2" class="pt-0">
                            <v-select ref="addAgencyList" v-model="selectedAgencyList" :items="salesManList"
                                item-text="agency_name" item-value="agency_code" label="1" color="#e91e63" outlined
                                background-color="#f0f2f5" class="font-size-input input-style pt-2" single-line height="36"
                                return-object>
                                <!-- :rules="[rules.addGroupCode.required]"> -->
                            </v-select>
                        </v-col>
                    </v-row>
                    <v-row v-if="fileAdd" style="border-top:3px solid #585858;">
                        <h5 class="mt-5 mb-2 text-h5 font-weight-bold text-typo">
                            첨부파일
                        </h5>
                    </v-row>
                    <v-row v-if="ctrAdd">
                        <label class="text-sm font-weight-bold mt-5 input-title">계약서 1 : </label>
                        <v-col cols="4" class="pt-0">
                            <v-file-input label="계약서 1을 첨부해주세요." @change="ctr1SelectFile"></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row v-if="ctrAdd && !(ctrImg1 == '' || ctrImg1 == null)">
                        <label class="text-sm font-weight-bold mt-5 input-title">계약서 2 : </label>
                        <v-col cols="4" class="pt-0">
                            <v-file-input label="계약서 2를 첨부해주세요." @change="ctr2SelectFile"></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row v-if="ctrAdd && !(ctrImg1 == '' || ctrImg1 == null) && !(ctrImg2 == '' || ctrImg2 == null)">
                        <label class="text-sm font-weight-bold mt-5 input-title">계약서 3 : </label>
                        <v-col cols="4" class="pt-0">
                            <v-file-input label="계약서 3을 첨부해주세요." @change="ctr3SelectFile"></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row
                        v-if="ctrAdd && !(ctrImg1 == '' || ctrImg1 == null) && !(ctrImg2 == '' || ctrImg2 == null) && !(ctrImg3 == '' || ctrImg3 == null)">
                        <label class="text-sm font-weight-bold mt-5 input-title">계약서 4 : </label>
                        <v-col cols="4" class="pt-0">
                            <v-file-input label="계약서 4를 첨부해주세요." @change="ctr4SelectFile"></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row
                        v-if="ctrAdd && !(ctrImg1 == '' || ctrImg1 == null) && !(ctrImg2 == '' || ctrImg2 == null) && !(ctrImg3 == '' || ctrImg3 == null) && !(ctrImg4 == '' || ctrImg4 == null)">
                        <label class="text-sm font-weight-bold mt-5 input-title">계약서 5 : </label>
                        <v-col cols="4" class="pt-0">
                            <v-file-input label="계약서 5를 첨부해주세요." @change="ctr5SelectFile"></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row v-if="brAdd">
                        <label class="text-sm font-weight-bold mt-5 input-title">사업자 등록증 : </label>
                        <v-col cols="4" class="pt-0">
                            <v-file-input label="사업자 등록증을 첨부해주세요." @change="brSelectFile"></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row v-if="idAdd">
                        <label class="text-sm font-weight-bold mt-5 input-title">신분증 : </label>
                        <v-col cols="4" class="pt-0">
                            <v-file-input label="신분증을 첨부해주세요." @change="idSelectFile"></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row v-if="cbAdd">
                        <label class="text-sm font-weight-bold mt-5 input-title">통장사본 : </label>
                        <v-col cols="4" class="pt-0">
                            <v-file-input label="통장사본을 첨부해주세요." @change="cbSelectFile"></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row v-if="pcAdd">
                        <label class="text-sm font-weight-bold mt-5 input-title">사전승낙서 : </label>
                        <v-col cols="4" class="pt-0">
                            <v-file-input label="사전승낙서를 첨부해주세요." @change="pcSelectFile"></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row v-if="scAdd">
                        <label class="text-sm font-weight-bold mt-5 input-title">인감증명서 : </label>
                        <v-col cols="4" class="pt-0">
                            <v-file-input label="인감증명서를 첨부해주세요." @change="scSelectFile"></v-file-input>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-form>
        <div class="px-6 pb-6 pt-0 mt-4 pr-1">
            <v-row class="mt-0 pb-3">
                <v-col md="9" class="mt-0 pt-0">
                </v-col>
                <v-col md="3" class="my-auto text-end mt-0 pt-0">
                    <v-btn :disabled="resetDisable" :elevation="0" color="#4c4c4c"
                        class="font-weight-bold text-white py-4 px-3 my-auto ms-3" @click="reset">
                        초기화
                    </v-btn>
                    <v-btn :disabled="codeGrantDisable" :elevation="0" color="#4c4c4c"
                        class="font-weight-bold text-white py-4 px-3 my-auto ms-3" @click.prevent="codeGrant">
                        코드부여
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import { throws } from 'assert';
import { mapGetters } from 'vuex'

export default {
    name: "codegrant",
    computed: {
        fileAdd() {
            if (this.selected.length > 0) {
                return true;
            } else {
                return false;
            }

        },
        ctrAdd() {
            if (this.selected.includes("C")) {
                this.insertAgencyInfo.req.ctrrc_c_yn = "Y";
                return true;
            } else {
                this.insertAgencyInfo.req.ctrrc_c_yn = "N";
                return false;
            }
        },
        brAdd() {
            if (this.selected.includes("R")) {
                this.insertAgencyInfo.req.ctrrc_r_yn = "Y";
                return true;
            } else {
                this.insertAgencyInfo.req.ctrrc_r_yn = "N";
                return false;
            }
        },
        idAdd() {
            if (this.selected.includes("I")) {
                this.insertAgencyInfo.req.ctrrc_i_yn = "Y";
                return true;
            } else {
                this.insertAgencyInfo.req.ctrrc_i_yn = "N";
                return false;
            }
        },
        cbAdd() {
            if (this.selected.includes("B")) {
                this.insertAgencyInfo.req.ctrrc_b_yn = "Y";
                return true;
            } else {
                this.insertAgencyInfo.req.ctrrc_b_yn = "N";
                return false;
            }
        },
        pcAdd() {
            if (this.selected.includes("P")) {
                this.insertAgencyInfo.req.ctrrc_p_yn = "Y";
                return true;
            } else {
                this.insertAgencyInfo.req.ctrrc_p_yn = "N";
                return false;
            }
        },
        scAdd() {
            if (this.selected.includes("S")) {
                this.insertAgencyInfo.req.ctrrc_s_yn = "Y";
                return true;
            } else {
                this.insertAgencyInfo.req.ctrrc_s_yn = "N";
                return false;
            }
        },
        resetDisable() {
            return (_.isEqual(this.cloneAddItem, this.addItem) ? true : false)
        },
        codeGrantDisable() {
            if (((this.addItem.agency_name == "" || this.addItem.agency_name == null)
                || (this.addItem.representative_name == "" || this.addItem.representative_name == null)
                // || (this.addItem.socialNumberf == "" || this.addItem.socialNumberf == null)
                // || (this.addItem.socialNumberl == "" || this.addItem.socialNumberl == null)
                || (this.addItem.businessNumberf == "" || this.addItem.businessNumberf == null)
                || (this.addItem.businessNumberm == "" || this.addItem.businessNumberm == null)
                || (this.addItem.businessNumberl == "" || this.addItem.businessNumberl == null)
                // || (this.addItem.email == "" || this.addItem.email == null)
                || (this.addItem.phoneNumberf == "" || this.addItem.phoneNumberf == null)
                || (this.addItem.phoneNumberm == "" || this.addItem.phoneNumberm == null)
                || (this.addItem.phoneNumberl == "" || this.addItem.phoneNumberl == null)
                // || (this.addItem.addr == "" || this.addItem.addr == null)
                // || (this.addItem.generalNumberf == "" || this.addItem.generalNumberf == null)
                // || (this.addItem.generalNumberm == "" || this.addItem.generalNumberm == null)
                // || (this.addItem.generalNumberl == "" || this.addItem.generalNumberl == null)
                // || (this.addItem.faxNumberf == "" || this.addItem.faxNumberf == null)
                // || (this.addItem.faxNumberm == "" || this.addItem.faxNumberm == null)
                // || (this.addItem.faxNumberl == "" || this.addItem.faxNumberl == null)
                || (this.addItem.account_holder == "" || this.addItem.account_holder == null)
                || (this.addItem.account_number == "" || this.addItem.account_number == null))) {
                if (this.$refs.refAgencyName == undefined
                    || this.$refs.refRepresentativeName == undefined
                    || this.$refs.refSocialNumberf == undefined
                    || this.$refs.refSocialNumberl == undefined
                    || this.$refs.refBusinessNumberf == undefined
                    || this.$refs.refBusinessNumberm == undefined
                    || this.$refs.refBusinessNumberl == undefined
                    || this.$refs.refEmail == undefined
                    || this.$refs.refPhoneNumberf == undefined
                    || this.$refs.refPhoneNumberm == undefined
                    || this.$refs.refPhoneNumberl == undefined
                    || this.$refs.refAddr == undefined
                    || this.$refs.refGeneralNumberf == undefined
                    || this.$refs.refGeneralNumberm == undefined
                    || this.$refs.refGeneralNumberl == undefined
                    || this.$refs.refFaxNumberf == undefined
                    || this.$refs.refFaxNumberm == undefined
                    || this.$refs.refFaxNumberl == undefined
                    || this.$refs.refAccountHolder == undefined
                    || this.$refs.refAccountNumber == undefined) {
                    return true;
                } else {
                    return true;
                }
            } else {
                if (this.$refs.refAgencyName.valid == false
                    || this.$refs.refRepresentativeName.valid == false
                    || this.$refs.refSocialNumberf.valid == false
                    || this.$refs.refSocialNumberl.valid == false
                    || this.$refs.refBusinessNumberf.valid == false
                    || this.$refs.refBusinessNumberm.valid == false
                    || this.$refs.refBusinessNumberl.valid == false
                    || this.$refs.refEmail.valid == false
                    || this.$refs.refPhoneNumberf.valid == false
                    || this.$refs.refPhoneNumberm.valid == false
                    || this.$refs.refPhoneNumberl.valid == false
                    || this.$refs.refAddr.valid == false
                    || this.$refs.refGeneralNumberf.valid == false
                    || this.$refs.refGeneralNumberm.valid == false
                    || this.$refs.refGeneralNumberl.valid == false
                    || this.$refs.refFaxNumberf.valid == false
                    || this.$refs.refFaxNumberm.valid == false
                    || this.$refs.refFaxNumberl.valid == false
                    || this.$refs.refAccountHolder.valid == false
                    || this.$refs.refAccountNumber.valid == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    },
    watch: {
    },
    mounted() {
        console.log("ref :: ", this.$refs.refRegion, this.$refs.refRegion.selectedValues);
        this.cloneAddItem = _.clone(this.addItem);
        this.getUpperAgencyListAPI();
        this.getRegionCodeListAPI("RGO0D");
        this.getSaleMethodCodeListAPI("SMTHD");
        this.getCtrCodeListAPI("CTRRC");
        this.getBankCodeListAPI("BK00L");
        if (this.GET_SESSION_INFO().userInfo.agency_yn == 'Y') {
            if (this.GET_SESSION_INFO().userInfo.user_group_code == 'A001') {
                // 추후 하위 총판 조회 API 생성해야함
                // this.salesManList[0].agency_name = this.GET_SESSION_INFO().userInfo.user_name + ' (' + this.GET_SESSION_INFO().userInfo.user_id + ')';
                // this.salesManList[0].agency_code = this.GET_SESSION_INFO().userInfo.agency_code;
                // this.salesManList[0].agency_level = this.GET_SESSION_INFO().userInfo.agency_level;
                this.getSalesManListAPI();
            } else {
                this.setSalesManList();
                // this.salesManList[0].agency_name = this.GET_SESSION_INFO().userInfo.user_name + ' (' + this.GET_SESSION_INFO().userInfo.user_id + ')';
                // this.salesManList[0].agency_code = this.GET_SESSION_INFO().userInfo.agency_code;
                // this.salesManList[0].agency_level = this.GET_SESSION_INFO().userInfo.agency_level;
                // this.selectedAgencyList = this.salesManList[0].agency_code;
            }
        } else {
            return;
        }
    },
    data() {
        return {
            dialog: false,
            saleMethodCodeList: [],
            ctrCodeList: [],
            bankCodeList: [],
            salesManList: [
                {
                    agency_name: "",
                    agency_code: "",
                    agency_level: "",
                }
            ],
            selectedRegion: "9",
            selectedSaleMethod: "",
            selectedBankCode: "",
            selectedAgencyList: "",
            selectedUpperAgencyLevel: "",
            getSalesManList: {
                req: {
                    sales_code: "",
                    agency_level: "",
                },
                res: {}
            },
            getCodeList: {
                req: {
                    code_group: ""
                },
                res: {}
            },
            getTempAgencyCode: {
                req: {
                    region: "",
                    agency_level: "",
                },
                res: {}
            },
            getTempUnderAgencyCode: {
                req: {
                    front_code: "",
                },
                res: {}
            },
            getUpperAgencyList: {
                req: {
                    upper_agency_code: "",
                    agency_level: "",
                },
                res: {}
            },
            selected: [],
            salesManList: [],
            regionCodeList: [],
            UpperAgencyList: [],
            upperExistence: true,
            tempAgencyCode: "",
            frontCode: "",
            addItem: {
                agency_name: "",
                representative_name: "",
                social_number: "",
                socialNumberf: "",
                socialNumberl: "",
                business_number: "",
                businessNumberf: "",
                businessNumberm: "",
                businessNumberl: "",
                email: "",
                phone_number: "",
                phoneNumberf: "",
                phoneNumberm: "",
                phoneNumberl: "",
                addr: "",
                general_number: "",
                generalNumberf: "",
                generalNumberm: "",
                generalNumberl: "",
                fax_number: "",
                faxNumberf: "",
                faxNumberm: "",
                faxNumberl: "",
                upper_agency_code: "",
                account_holder: "",
                account_number: "",
            },
            ctrImg1: "",
            ctrImg2: "",
            ctrImg3: "",
            ctrImg4: "",
            ctrImg5: "",
            brImg: "",
            idImg: "",
            cbImg: "",
            pcImg: "",
            scImg: "",
            cloneAddItem: {},
            insertAgencyInfo: {
                req: {
                    // group_code: "",
                    // auth_code: "",
                    agency_code: "",
                    agency_level: "",
                    region: "",
                    sale_method: "",
                    agency_name: "",
                    representative_name: "",
                    social_number: "",
                    business_number: "",
                    email: "",
                    phone_number: "",
                    addr: "",
                    general_number: "",
                    fax_number: "",
                    upper_agency_code: "",
                    upper_agency_yn: "N",
                    transfer_bank: "",
                    account_holder: "",
                    account_number: "",
                    sales_id: "",
                    sales_code: "",
                    ctrrc_c_yn: "N",
                    ctrrc_r_yn: "N",
                    ctrrc_i_yn: "N",
                    ctrrc_b_yn: "N",
                    ctrrc_p_yn: "N",
                    ctrrc_s_yn: "N",
                    reg_id: "",
                    reg_ip: ""
                },
                res: {}
            },
            rules: {
                addAgencyName: {
                    required: value => !!value || '대리점명은 필수입니다.',
                    length: value => !(value && value.length > 30) || '대리점명은 30자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?.,;:|\*~`!^\-_+<>@\#$%&\\\=\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
                addRepresentativeName: {
                    required: value => !!value || '대표자명은 필수입니다.',
                    length: value => !(value && value.length > 50) || '대표자명은 50자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?.,;:|\*~`!^\-_+<>@\#$%&\\\=\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
                addSocialNumberf: {
                    required: value => !!value || '주민등록번호 앞자리는 필수입니다.',
                    length: value => value && value.length == 6 || '6자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addSocialNumberl: {
                    required: value => !!value || '주민등록번호 뒷자리는 필수입니다.',
                    length: value => value && value.length == 7 || '7자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addBusinessNumberf: {
                    required: value => !!value || '사업자 번호 앞자리 3자를 입력해주세요.',
                    length: value => value && value.length == 3 || '3자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addBusinessNumberm: {
                    required: value => !!value || '사업자 번호 가운데 2자를 입력해주세요.',
                    length: value => value && value.length == 2 || '2자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addBusinessNumberl: {
                    required: value => !!value || '사업자 번호 뒷자리 5자를 입력해주세요.',
                    length: value => value && value.length == 5 || '5자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addEmail: {
                    length: value => !(value && value.length >= 31) || '30자 이상 입력할 수 없습니다.',
                    charValid: value => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value) || '예 ) icallmobile@icall.com'
                },
                addPhoneNumberf: {
                    required: value => !!value || '폰번호 앞자리 3자를 입력해주세요.',
                    length: value => value && value.length == 3 || '3자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addPhoneNumberm: {
                    required: value => !!value || '폰번호 가운데 4자를 입력해주세요.',
                    length: value => value && value.length == 4 || '4자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addPhoneNumberl: {
                    required: value => !!value || '폰번호 뒷자리 4자를 입력해주세요.',
                    length: value => value && value.length == 4 || '4자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addAddr: {
                    required: value => !!value || '주소는 필수입니다.',
                    length: value => !(value && value.length > 100) || '주소는 100자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?;:|\*~`!^\_+<>@\#$%&\\\=\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
                addGeneralNumberf: {
                    required: value => !!value || '일반전화 앞자리를 입력해주세요.',
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addGeneralNumberm: {
                    required: value => !!value || '일반전화 가운데자리를 입력해주세요.',
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addGeneralNumberl: {
                    required: value => !!value || '전화 뒷자리를 입력해주세요.',
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addFaxNumberf: {
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addFaxNumberm: {
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addFaxNumberl: {
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addAccountHolder: {
                    required: value => !!value || '예금주명은 필수입니다.',
                    length: value => !(value && value.length > 20) || '예금주명은 20자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
                addAccountNumber: {
                    required: value => !!value || '계좌번호는 필수입니다.',
                    length: value => !(value && value.length > 20) || '계좌번호는 20자 이상 입력할 수 없습니다.',
                    charValid: value => /^[\-\0-9]*$/.test(value) || '숫자와 (-)만 입력할 수 있습니다'
                },
                addUpperAgencyCode: {
                    required: value => !!value || '상위대리점명은 필수입니다.',
                    charValid: value => /^[A-Z0-9]*$/.test(value) || '목록에서 선택해주세요.'
                },
            }
        }
    },
    methods: {
        ...mapGetters('sessionStore', ['GET_SESSION_INFO']),
        getUpperAgencyListAPI() {
            this.getUpperAgencyList.req.upper_agency_code = this.GET_SESSION_INFO().userInfo.agency_code;
            this.getUpperAgencyList.req.agency_level = this.GET_SESSION_INFO().userInfo.agency_level;

            this.$axios.post(this.$BASE_URL + '/agency/upperagencylist', this.getUpperAgencyList.req).then(res => {
                this.getUpperAgencyList.res = res.data;
                this.UpperAgencyList = this.getUpperAgencyList.res;
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getSalesManListAPI() {
            this.getSalesManList.req.sales_code = this.GET_SESSION_INFO().userInfo.agency_code;
            this.getSalesManList.req.agency_level = this.GET_SESSION_INFO().userInfo.agency_level;

            console.log("LEVEL ::: ", this.getSalesManList.req.agency_level);

            this.$axios.post(this.$BASE_URL + '/agency/saleslist', this.getSalesManList.req).then(res => {
                this.getSalesManList.res = res.data;
                this.salesManList = this.getSalesManList.res;
                this.selectedAgencyList = this.salesManList[0];
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getRegionCodeListAPI(code) {
            this.getCodeList.req.code_group = code;
            this.$axios.post(this.$BASE_URL + '/common/codelist', this.getCodeList.req).then(res => {
                this.regionCodeList = res.data;
                this.selectedRegion = this.regionCodeList[0].code_value;
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getSaleMethodCodeListAPI(code) {
            this.getCodeList.req.code_group = code;
            this.$axios.post(this.$BASE_URL + '/common/codelist', this.getCodeList.req).then(res => {
                this.saleMethodCodeList = res.data;
                this.selectedSaleMethod = this.saleMethodCodeList[0].code_value;
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getCtrCodeListAPI(code) {
            this.getCodeList.req.code_group = code;
            this.$axios.post(this.$BASE_URL + '/common/codelist', this.getCodeList.req).then(res => {
                this.ctrCodeList = res.data;
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getBankCodeListAPI(code) {
            this.getCodeList.req.code_group = code;
            this.$axios.post(this.$BASE_URL + '/common/codelist', this.getCodeList.req).then(res => {
                this.bankCodeList = res.data;
                this.selectedBankCode = this.bankCodeList[0].code_value;
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getTempAgencyCodeAPI() {
            this.getTempAgencyCode.req.region = this.selectedRegion;
            this.getTempAgencyCode.req.agency_level = this.selectedUpperAgencyLevel;

            this.$axios.post(this.$BASE_URL + '/agency/tempagencycode', this.getTempAgencyCode.req).then(res => {
                this.getTempAgencyCode.res = res.data;
                this.tempAgencyCode = this.getTempAgencyCode.res;
                this.noticeAgencyInfo();
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })

        },
        getTempUnderAgencyCodeAPI(v) {
            this.getTempUnderAgencyCode.req.front_code = v;

            this.$axios.post(this.$BASE_URL + '/agency/tempunderagencycode', this.getTempUnderAgencyCode.req).then(res => {
                this.tempAgencyCode = res.data;
                this.noticeAgencyInfo();
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        selectedUpperAgency(v) {
            if (v == null) {
                this.$swal({
                    icon: "warning",
                    text: "검색된 목록에서 선택해 주시기 바랍니다.",
                    showCancelButton: true,
                    confirmButtonText: "확인",
                    customClass: {
                        confirmButton: "btn bg-gradient-dark",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                        return;
                    }
                });
            }
            this.addItem.upper_agency_code = v.agency_code;
            this.selectedUpperAgencyLevel = v.agency_level;
        },
        ctr1SelectFile(file) {
            this.ctrImg1 = file;
        },
        ctr2SelectFile(file) {
            this.ctrImg2 = file;
        },
        ctr3SelectFile(file) {
            this.ctrImg3 = file;
        },
        ctr4SelectFile(file) {
            this.ctrImg4 = file;
        },
        ctr5SelectFile(file) {
            this.ctrImg5 = file;
        },
        brSelectFile(file) {
            this.brImg = file;
        },
        idSelectFile(file) {
            this.idImg = file;
        },
        cbSelectFile(file) {
            this.cbImg = file;
        },
        pcSelectFile(file) {
            this.pcImg = file;
        },
        scSelectFile(file) {
            this.scImg = file;
        },
        close() {
            this.dialog = false;
            this.$refs.underAgencyAddForm.reset();
            this.$nextTick(() => {
                // this.editedItem = Object.assign({}, this.defaultItem);
                // this.editedIndex = -1;
                // this.addItem.group_code = "";
                // this.addItem.group_name = "";

            });
        },
        codeGrant() {
            if (this.upperExistence) {
                this.selectedUpperAgencyLevel = this.selectedAgencyList.agency_level;
                if (this.selectedUpperAgencyLevel <= 2) {
                    this.getTempAgencyCodeAPI();
                } else {
                    this.$swal({
                        title: "<h5>하부 대리점 코드 부여<br>(영문 대문자 3자를 입력해주세요.)",
                        input: "text",
                        inputAttributes: {
                            autocapitalize: "off",
                        },
                        inputValidator: (value) => {
                            //return !value && 'You need to write something!'
                            return (!/^[A-Z]*$/.test(value) || !(value.length == 3)) && '영문 대문자 3자를 입력해주세요.'
                        },
                        showCancelButton: true,
                        confirmButtonText: "확인",
                        cancelButtonText: "취소",
                        customClass: {
                            confirmButton: "btn bg-gradient-success",
                            cancelButton: "btn bg-gradient-danger",
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.getTempUnderAgencyCodeAPI(result.value);
                            //this.$swal.fire("성공", "그룹코드가 등록되었습니다.", "success");
                        }
                    }
                    )
                };
                // this.noticeAgencyInfo();
            } else {
                if (!this.checkedVaild()) {
                    alert("valid 실패")
                    return;
                }
                this.$swal({
                    title: "<h5>하부 대리점 코드 부여<br>(영문 대문자 3자를 입력해주세요.)",
                    input: "text",
                    inputAttributes: {
                        autocapitalize: "off",
                    },
                    inputValidator: (value) => {
                        //return !value && 'You need to write something!'
                        return (!/^[A-Z]*$/.test(value) || !(value.length == 3)) && '영문 대문자 3자를 입력해주세요.'
                    },
                    showCancelButton: true,
                    confirmButtonText: "확인",
                    cancelButtonText: "취소",
                    customClass: {
                        confirmButton: "btn bg-gradient-success",
                        cancelButton: "btn bg-gradient-danger",
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.getTempUnderAgencyCodeAPI(result.value);
                        //this.$swal.fire("성공", "그룹코드가 등록되었습니다.", "success");
                    }

                    // this.noticeAgencyInfo();



                    // if (result.isConfirmed) {
                    //     this.$swal({
                    //         title: "하부 대리점 코드부여<br>",
                    //         // text: "하부 대리점명 : " + this.addItem.agency_name + "<br>하부 대리점 코드를 부여하시겠습니까?",
                    //         // icon: "warning",
                    //         html:
                    //             '하부 대리점명 : ' + '<b>' + this.addItem.agency_name + '</b><br>' +
                    //             '하부 대리점 코드 : ' + '<b>' + this.tempAgencyCode + '</b>' +
                    //             '<br><br>하부 대리점 코드를 부여하시겠습니까? <br><br>',
                    //         showCancelButton: true,
                    //         cancelButtonText: "취소",
                    //         confirmButtonText: "코드부여",
                    //         customClass: {
                    //             confirmButton: "btn bg-gradient-dark",
                    //             cancelButton: "btn bg-gradient-danger",
                    //         },
                    //     }).then((result) => {
                    //         if (result.isConfirmed) {
                    //             // this.insertAgencyInfoAPI();
                    //             this.noticeAgencyInfo();
                    //         }
                    //     });
                    // }
                });
            }

            // if (this.selectedUpperAgencyLevel > 3) {

            // } else {
            //     this.$swal({
            //         title: "하부 대리점 코드부여<br>",
            //         // text: "하부 대리점명 : " + this.addItem.agency_name + "<br>하부 대리점 코드를 부여하시겠습니까?",
            //         // icon: "warning",
            //         html:
            //             '하부 대리점명 : ' + '<b>' + this.addItem.agency_name + '</b><br>' +
            //             '하부 대리점 코드 : ' + '<b>' + this.tempAgencyCode + '</b>' +
            //             '<br><br>하부 대리점 코드를 부여하시겠습니까? <br><br>',
            //         showCancelButton: true,
            //         cancelButtonText: "취소",
            //         confirmButtonText: "코드부여",
            //         customClass: {
            //             confirmButton: "btn bg-gradient-dark",
            //             cancelButton: "btn bg-gradient-danger",
            //         },
            //     }).then((result) => {
            //         if (result.isConfirmed) {
            //             this.insertAgencyInfoAPI();
            //         }
            //     });
            // }
        },
        reset() {
            // reset input fields
            this.selectedRegion = this.regionCodeList[0].code_value;
            this.selectedSaleMethod = this.saleMethodCodeList[0].code_value;
            this.$refs.refAgencyName.reset();
            this.$refs.refRepresentativeName.reset();
            this.$refs.refSocialNumberf.reset();
            this.$refs.refSocialNumberl.reset();
            this.$refs.refBusinessNumberf.reset();
            this.$refs.refBusinessNumberm.reset();
            this.$refs.refBusinessNumberl.reset();
            this.selected = [];
            this.$refs.refEmail.reset();
            this.$refs.refPhoneNumberf.reset();
            this.$refs.refPhoneNumberm.reset();
            this.$refs.refPhoneNumberl.reset();
            this.$refs.refAddr.reset();
            this.$refs.refGeneralNumberf.reset();
            this.$refs.refGeneralNumberm.reset();
            this.$refs.refGeneralNumberl.reset();
            this.$refs.refFaxNumberf.reset();
            this.$refs.refFaxNumberm.reset();
            this.$refs.refFaxNumberl.reset();
            this.upperExistence = true;
            this.selectedBankCode = this.bankCodeList[0].code_value;
            this.$refs.refAccountHolder.reset();
            this.$refs.refAccountNumber.reset();
            this.selectedAgencyList = this.salesManList[0];
            this.addItem = Object.assign({}, this.cloneAddItem);
        },
        noticeAgencyInfo() {
            this.$swal({
                title: "대리점 코드부여<br>",
                // text: "하부 대리점명 : " + this.addItem.agency_name + "<br>하부 대리점 코드를 부여하시겠습니까?",
                // icon: "warning",
                html:
                    '대리점명 : ' + '<b>' + this.addItem.agency_name + '</b><br>' +
                    '대리점 코드 : ' + '<b>' + this.tempAgencyCode + '</b>' +
                    '<br><br>대리점 코드를 부여하시겠습니까? <br><br>',
                showCancelButton: true,
                cancelButtonText: "취소",
                confirmButtonText: "코드부여",
                customClass: {
                    confirmButton: "btn bg-gradient-dark",
                    cancelButton: "btn bg-gradient-danger",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    this.insertAgencyInfoAPI();
                }
            });

        },
        insertAgencyInfoAPI() {
            if (!this.checkedVaild()) {
                alert("사업자 번호를 확인해주세요.")
                return;
            }
            var frm = new FormData();
            frm.append("ctrImg1", this.ctrImg1);
            frm.append("ctrImg2", this.ctrImg2);
            frm.append("ctrImg3", this.ctrImg3);
            frm.append("ctrImg4", this.ctrImg4);
            frm.append("ctrImg5", this.ctrImg5);
            frm.append("brImg", this.brImg);
            frm.append("idImg", this.idImg);
            frm.append("cbImg", this.cbImg);
            frm.append("pcImg", this.pcImg);
            frm.append("scImg", this.scImg);

            this.mergePhoneNumber(this.addItem.phoneNumberf, this.addItem.phoneNumberm, this.addItem.phoneNumberl, 'phone');
            this.mergePhoneNumber(this.addItem.generalNumberf, this.addItem.generalNumberm, this.addItem.generalNumberl, 'general');
            this.mergePhoneNumber(this.addItem.faxNumberf, this.addItem.faxNumberm, this.addItem.faxNumberl, 'fax');

            this.mergeIdNumber();

            this.insertAgencyInfo.req = Object.assign(this.insertAgencyInfo.req, _.omit(this.addItem, ['socialNumberf', 'socialNumberl', 'phoneNumberf', 'phoneNumberm', 'phoneNumberl', 'generalNumberf', 'generalNumberm', 'generalNumberl', 'faxNumberf', 'faxNumberm', 'faxNumberl', 'businessNumberf', 'businessNumberm', 'businessNumberl']));
            this.insertAgencyInfo.req.region = this.selectedRegion;
            this.insertAgencyInfo.req.sale_method = this.selectedSaleMethod;
            this.insertAgencyInfo.req.transfer_bank = this.selectedBankCode;
            this.insertAgencyInfo.req.business_number = this.addItem.businessNumberf + this.addItem.businessNumberm + this.addItem.businessNumberl;

            var startIdx = this.selectedAgencyList.agency_name.indexOf('(');
            var lastIdx = this.selectedAgencyList.agency_name.indexOf(')');
            var salesId = this.selectedAgencyList.agency_name.substring(startIdx + 1, lastIdx)

            this.insertAgencyInfo.req.sales_id = salesId;
            this.insertAgencyInfo.req.sales_code = this.selectedAgencyList.agency_code;

            // this.insertAgencyInfo.req.group_code = this.GET_SESSION_INFO().userInfo.user_group_code;
            // this.insertAgencyInfo.req.auth_code = this.GET_SESSION_INFO().userInfo.user_auth_code;
            this.insertAgencyInfo.req.reg_id = this.GET_SESSION_INFO().userInfo.user_id;
            this.insertAgencyInfo.req.reg_ip = this.GET_SESSION_INFO().userInfo.user_ip;

            this.insertAgencyInfo.req.agency_code = this.tempAgencyCode;
            this.insertAgencyInfo.req.agency_level = this.selectedUpperAgencyLevel;

            if (this.upperExistence == true) {
                this.insertAgencyInfo.req.upper_agency_yn = "Y"
            } else {
                this.insertAgencyInfo.req.upper_agency_yn = "N"
            }
            frm.append("requestData", JSON.stringify(this.insertAgencyInfo.req));

            this.$axios.post(this.$BASE_URL + '/agency/insertAgencyInfo', frm, {
                "Content-Type": "multipart/form-data"
            }).then(res => {
                this.insertAgencyInfo.res = res.data;
                this.$swal.fire("성공", "하부대리점 코드가 성공적으로 등록되었습니다.", "success");
                this.$router.push('/distributor/agency');
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        mergePhoneNumber(front, middle, last, group) {
            switch (group) {
                case 'phone':
                    this.addItem.phone_number = front + '-' + middle + '-' + last
                    break;
                case 'general':
                    this.addItem.general_number = front + '-' + middle + '-' + last
                    break;
                case 'fax':
                    this.addItem.fax_number = front + '-' + middle + '-' + last
                    break;
                default:
                    alert("전화번호 오류");
            }
        },
        mergeIdNumber() {
            this.addItem.social_number = this.addItem.socialNumberf + '-' + this.addItem.socialNumberl;
        },
        checkUpperAgency() {
            this.addItem.upper_agency_code = "";
        },
        checkVaildBizNum(bizNumber) {

            if (bizNumber.length === 10) {
                let keyList = [1, 3, 7, 1, 3, 7, 1, 3, 5];
                let chk = 0;

                keyList.forEach(function (d, i) {
                    chk += d * bizNumber[i];
                });

                chk += parseInt((keyList[8] * bizNumber[8]) / 10, 10);
                if (Math.floor(bizNumber[9]) === ((10 - (chk % 10)) % 10)) {
                    return true;
                } else {
                    return false;
                }

            }
            return false;
        },
        checkedVaild() {
            var checkedBizNum = false;
            checkedBizNum = this.checkVaildBizNum(this.addItem.businessNumberf + this.addItem.businessNumberm + this.addItem.businessNumberl);
            if (!checkedBizNum) {
                return false;
            }

            if (!this.upperExistence) {
                if (!this.$refs.refUpperAgencyCode.valid) {
                    return false;
                }
            }

            if (this.ctrAdd) {
                if (this.ctrImg1 == "" || this.ctrImg1 == null) {
                    return false;
                }
            }

            if (this.brAdd) {
                if (this.brImg == "" || this.brImg == null) {
                    return false;
                }
            }

            if (this.idAdd) {
                if (this.idImg == "" || this.idImg == null) {
                    return false;
                }
            }

            if (this.cbAdd) {
                if (this.cbImg == "" || this.cbImg == null) {
                    return false;
                }
            }

            if (this.pcAdd) {
                if (this.pcImg == "" || this.pcImg == null) {
                    return false;
                }
            }

            if (this.scAdd) {
                if (this.scImg == "" || this.scImg == null) {
                    return false;
                }
            }

            return true;
        },
        setSalesManList() {
            var tempObj = {};
            tempObj.agency_name = this.GET_SESSION_INFO().userInfo.user_name + ' (' + this.GET_SESSION_INFO().userInfo.user_id + ')';
            tempObj.agency_code = this.GET_SESSION_INFO().userInfo.agency_code;
            tempObj.agency_level = this.GET_SESSION_INFO().userInfo.agency_level;

            this.salesManList.push(tempObj);
            // this.salesManList[0].agency_name = this.GET_SESSION_INFO().userInfo.user_name + ' (' + this.GET_SESSION_INFO().userInfo.user_id + ')';
            // this.salesManList[0].agency_code = this.GET_SESSION_INFO().userInfo.agency_code;
            // this.salesManList[0].agency_level = this.GET_SESSION_INFO().userInfo.agency_level;
            this.selectedAgencyList = this.salesManList[0];
        }
    }
}
</script>
<style>
.label1 {
    /* line-height: 100px; */
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    /* background-color: rgb(231, 103, 64);
        border: 1px solid black;
        width: 200px; height: 100px;
        color: white; */
    vertical-align: middle;
}

.input-title {
    display: inline-block;
    width: 110px;
    text-align: right;
}

.readonlyDisabled::v-deep .v-input__slot::before {
    border-image: unset !important;
}</style>