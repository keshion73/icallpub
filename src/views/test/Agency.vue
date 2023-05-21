<template>
    <v-container fluid class="py-6">
        <!-- 권한조회 헤더영역-->
        <v-row class="mb-1">
            <!-- 헤더명 -->
            <v-col md="12" class="me-auto text-start">
                <!-- <v-img src="@/assets/img/subject-image.png" height="25" width="6" /> -->
                <h5 class="text-h5 font-weight-bold ml-3" style="color: #1C1C1C">
                    대리점 관리
                </h5>
            </v-col>
        </v-row>
        <v-row>
            <!-- 헤더명 -->
            <v-col md="8" class="me-auto text-start">
                <label class="text-sm font-weight-bold mt-5 ml-5">검색조건</label>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="1000px">
            <v-card class="card-shadow">
                <!-- 모달 헤더 -->
                <div class="card-header-padding card-border-bottom">
                    <span class="font-weight-bold text-h5 text-typo mb-0"> 대리점 정보 수정 </span>
                </div>
                <v-form ref="modForm" lazy-validation>
                    <div class="px-6 pb-6 pt-0">
                        <!-- 그룹수정 입력 area -->
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                지 역 : </label>
                            <v-radio-group ref="refRegion" class="ml-3" v-model="modSelectedRegion" row disabled>
                                <v-radio v-for="item in modRegionCodeList" :key="item.code_value" :label="item.code_name"
                                    :value="item.code_value"></v-radio>
                            </v-radio-group>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                판매방식 : </label>
                            <v-radio-group ref="refSalesMethod" class="ml-3" v-model="selectedSaleMethod" row>
                                <v-radio v-for="item in saleMethodCodeList" :key="item.code_value" :label="item.code_name"
                                    :value="item.code_value" disabled></v-radio>
                            </v-radio-group>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                대리점명 : </label>
                            <v-col cols="3">
                                <v-text-field ref="refModAgencyName" v-model="modItem.agency_name" color="#e91e63"
                                    placeholder="" class="font-size-input input-style pt-0" outlined
                                    :rules="[rules.modAgencyName.required, rules.modAgencyName.length, rules.modAgencyName.charValid]">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                대표자명 : </label>
                            <v-col cols="3">
                                <v-text-field ref="refRepresentativeName" v-model="modItem.representative_name"
                                    color="#e91e63" placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modRepresentativeName.required, rules.modRepresentativeName.length, rules.modRepresentativeName.charValid]">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                주민번호 : </label>
                            <v-col cols="2">
                                <v-text-field ref="refSocialNumberf" v-model="modItem.socialNumberf" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modSocialNumberf.required, rules.modSocialNumberf.length, rules.modSocialNumberf.charValid]">
                                </v-text-field>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5"> ─ </label>
                            <v-col cols="2">
                                <v-text-field ref="refSocialNumberl" v-model="modItem.socialNumberl" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modSocialNumberl.required, rules.modSocialNumberl.length, rules.modSocialNumberl.charValid]">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                사업자번호 : </label>
                            <v-col cols="1">
                                <v-text-field ref="refBusinessNumberf" v-model="modItem.businessNumberf" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modBusinessNumberf.required, rules.modBusinessNumberf.length, rules.modBusinessNumberf.charValid]">
                                </v-text-field>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5"> ─ </label>
                            <v-col cols="1">
                                <v-text-field ref="refBusinessNumberm" v-model="modItem.businessNumberm" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modBusinessNumberm.required, rules.modBusinessNumberm.length, rules.modBusinessNumberm.charValid]">
                                </v-text-field>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5"> ─ </label>
                            <v-col cols="1">
                                <v-text-field ref="refBusinessNumberl" v-model="modItem.businessNumberl" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modBusinessNumberl.required, rules.modBusinessNumberl.length, rules.modBusinessNumberl.charValid]">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title">계약서 수취유무 : </label>
                            <v-checkbox class="ml-3" v-model="selected" row v-for="item in ctrCodeList"
                                :key="item.code_value" :label="item.code_name" :value="item.code_value" disabled>
                            </v-checkbox>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title">이 메 일 : </label>
                            <v-col cols="3">
                                <v-text-field ref="refEmail" v-model="modItem.email" color="#e91e63" placeholder=""
                                    class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="this.modItem.email != '' ? [rules.modEmail.length, rules.modEmail.charValid] : []">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                폰 번 호 : </label>
                            <v-col cols="1">
                                <v-text-field ref="refPhoneNumberf" v-model="modItem.phoneNumberf" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modPhoneNumberf.required, rules.modPhoneNumberf.length, rules.modPhoneNumberf.charValid]">
                                </v-text-field>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5"> ─ </label>
                            <v-col cols="1">
                                <v-text-field ref="refPhoneNumberm" v-model="modItem.phoneNumberm" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modPhoneNumberm.required, rules.modPhoneNumberm.length, rules.modPhoneNumberm.charValid]">
                                </v-text-field>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5"> ─ </label>
                            <v-col cols="1">
                                <v-text-field ref="refPhoneNumberl" v-model="modItem.phoneNumberl" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modPhoneNumberl.required, rules.modPhoneNumberl.length, rules.modPhoneNumberl.charValid]">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                주 소 : </label>
                            <v-col cols="8">
                                <v-text-field ref="refAddr" v-model="modItem.addr" color="#e91e63" placeholder=""
                                    class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modAddr.required, rules.modAddr.length, rules.modAddr.charValid]">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                일반전화 : </label>
                            <v-col cols="1">
                                <v-text-field ref="refGeneralNumberf" v-model="modItem.generalNumberf" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modGeneralNumberf.length, rules.modGeneralNumberf.charValid]">
                                </v-text-field>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5"> ─ </label>
                            <v-col cols="1">
                                <v-text-field ref="refGeneralNumberm" v-model="modItem.generalNumberm" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modGeneralNumberm.length, rules.modGeneralNumberm.charValid]">
                                </v-text-field>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5"> ─ </label>
                            <v-col cols="1">
                                <v-text-field ref="refGeneralNumberl" v-model="modItem.generalNumberl" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modGeneralNumberl.length, rules.modGeneralNumberl.charValid]">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title">팩스번호 : </label>
                            <v-col cols="1">
                                <v-text-field ref="refFaxNumberf" v-model="modItem.faxNumberf" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modFaxNumberf.length, rules.modFaxNumberf.charValid]">
                                </v-text-field>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5"> ─ </label>
                            <v-col cols="1">
                                <v-text-field ref="refFaxNumberm" v-model="modItem.faxNumberm" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modFaxNumberm.length, rules.modFaxNumberm.charValid]">
                                </v-text-field>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5"> ─ </label>
                            <v-col cols="1">
                                <v-text-field ref="refFaxNumberl" v-model="modItem.faxNumberl" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modFaxNumberl.length, rules.modFaxNumberl.charValid]">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title">상위대리점명 : </label>
                            <v-col cols="3">
                                <v-autocomplete ref="refUpperAgencyCode" v-model="modItem.upper_agency_code" color="#e91e63"
                                    :items="UpperAgencyList" item-text="agency_name" item-value="agency_code"
                                    class="font-size-input input-style mt-0 pt-0 readonlyDisabled"
                                    :disabled="upperExistence" return-object outlined
                                    :rules="this.upperExistence ? [] : [rules.modUpperAgencyCode.required, rules.modUpperAgencyCode.charValid]"
                                    disable>
                                </v-autocomplete>
                            </v-col>
                            <v-col cols="3">
                                <v-checkbox ref="refUpperExistence" class="mt-1" v-model="upperExistence" label="상위없음"
                                    :value="true" @click="checkUpperAgency" disabled>
                                </v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                이체은행 : </label>
                            <v-col cols="2" class="pt-0">
                                <v-select ref="modBankCode" v-model="selectedBankCode" :items="bankCodeList"
                                    item-text="code_name" item-value="code_value" label="1" color="#e91e63" outlined
                                    class="font-size-input input-style pt-2" single-line height="36">
                                    <!-- :rules="[rules.addGroupCode.required]"> -->
                                </v-select>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                예금주명 : </label>
                            <v-col cols="2">
                                <v-text-field ref="refAccountHolder" v-model="modItem.account_holder" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modAccountHolder.required, rules.modAccountHolder.length, rules.modAccountHolder.charValid]">
                                </v-text-field>
                            </v-col>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                계좌번호 : </label>
                            <v-col cols="3">
                                <v-text-field ref="refAccountNumber" v-model="modItem.account_number" color="#e91e63"
                                    placeholder="" class="font-size-input input-style mt-0 pt-0" outlined
                                    :rules="[rules.modAccountNumber.required, rules.modAccountNumber.length, rules.modAccountNumber.charValid]">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <label class="text-sm font-weight-bold mt-5 input-title"><span style="color: red">*&nbsp;</span>
                                영업 담당자 : </label>
                            <v-col cols="2" class="pt-0">
                                <v-select ref="modAgencyList" v-model="selectedAgencyList" :items="modSalesManList"
                                    item-text="agency_name" item-value="agency_code" label="1" color="#e91e63" outlined
                                    class="font-size-input input-style pt-2" single-line height="36" return-object>
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
                </v-form>
                <div class="px-6 pb-6 pt-0 mt-4">
                    <v-row class="mt-0 pb-3">
                        <v-col md="6" class="mt-0 pt-0">
                        </v-col>
                        <v-col md="6" class="my-auto text-end mt-0 pt-0">
                            <v-btn v-if="vrtAcntYn == false" :elevation="0" color="#4c4c4c"
                                class="font-weight-bold text-white py-4 px-3 my-auto ms-3" @click="confirmIssue()">
                                가상계좌발급
                            </v-btn>
                            <v-btn v-else :elevation="0" color="#4c4c4c"
                                class="font-weight-bold text-white py-4 px-3 my-auto ms-3" @click="confirmReissue()">
                                가상계좌재발급
                            </v-btn>
                            <v-btn :elevation="0" color="#4c4c4c" class="font-weight-bold text-white py-4 px-3 my-auto ms-3"
                                @click="close">
                                취소
                            </v-btn>
                            <v-btn :disabled="modDisabled" :elevation="0" color="#4c4c4c"
                                class="font-weight-bold text-white py-4 px-3 my-auto ms-3" @click="updateConfirm()">
                                수정
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog v-model="reissueDialog" max-width="500px">
            <v-card class="card-shadow">
                <!-- 모달 헤더 -->
                <div class="card-header-padding card-border-bottom">
                    <span class="font-weight-bold text-h5 text-typo mb-0"> 가상계좌 재발급 </span>
                </div>
                <v-form ref="issueForm" lazy-validation>
                    <v-card-text class="card-padding pb-0 pt-0">
                        <v-container class="px-0">
                            <v-row>
                                <v-col cols="12" class="pt-0 mt-0">
                                    <v-select v-model="selectedIssueBank" :items="bankCodeList" item-text="code_name"
                                        item-value="code_value" label="1" color="#e91e63"
                                        class="font-size-input input-style" single-line height="36">
                                    </v-select>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-form>
                <div class="px-6 pb-6 pt-0 mt-4">
                    <v-row class="mt-0 pb-3">
                        <v-col md="6" class="mt-0 pt-0">
                        </v-col>
                        <v-col md="6" class="my-auto text-end mt-0 pt-0">
                            <v-btn :elevation="0" color="#4c4c4c" class="font-weight-bold text-white py-4 px-3 my-auto ms-3"
                                @click="issueClose">
                                취소
                            </v-btn>
                            <v-btn :elevation="0" color="#4c4c4c" class="font-weight-bold text-white py-4 px-3 my-auto ms-3"
                                @click="reIssueConfirm()">
                                재발급
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-dialog>
        <v-card class="card-shadow border-radius-xl mt-1 mb-6" id="basic" style="border-radius: 0px !important;">
            <div class="px-6 pb-6 pt-0">
                <v-row class="mt-0">
                    <v-col cols="2">
                        <v-row class="mt-0">
                            <label class="text-sm font-weight-bold mt-5">코드 : </label>
                            <v-col cols="8">
                                <v-text-field ref="refAgencyCode" v-model="searchData.search_agency_code" color="#e91e63"
                                    placeholder=" 코드명" class="font-size-input input-style mt-0 pt-0"
                                    background-color="#f0f2f5" outlined>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="2">
                        <v-row class="mt-0">
                            <label class="text-sm font-weight-bold mt-5">대리점명 : </label>
                            <v-col cols="8">
                                <v-text-field ref="refAgencyName" v-model="searchData.agency_name" color="#e91e63"
                                    placeholder=" 대리점명" class="font-size-input input-style mt-0 pt-0"
                                    background-color="#f0f2f5" outlined>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="2">
                        <v-row class="mt-0">
                            <label class="text-sm font-weight-bold mt-5">주소 : </label>
                            <v-col cols="8">
                                <v-text-field ref="refBusinessNumber" v-model="searchData.addr" color="#e91e63"
                                    placeholder="주소" class="font-size-input input-style mt-0 pt-0"
                                    background-color="#f0f2f5" outlined>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="2">
                        <v-row class="mt-0">
                            <label class="text-sm font-weight-bold mt-5">지역 : </label>
                            <v-col cols="8">
                                <v-select ref="addRegionCode" v-model="selectedRegion" :items="regionCodeList"
                                    item-text="code_name" item-value="code_value" label="1" color="#e91e63"
                                    background-color="#f0f2f5" class="font-size-input input-style pt-0 mt-0" single-line
                                    outlined>
                                    <!-- :rules="[rules.addGroupCode.required]"> -->
                                </v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="2">
                        <v-row class="mt-0">
                            <label class="text-sm font-weight-bold mt-5">담당자 : </label>
                            <v-col cols="8">
                                <v-select ref="addSalesId" v-model="selectedSalesMan" :items="salesManList"
                                    item-text="agency_name" item-value="agency_code" label="1" color="#e91e63"
                                    background-color="#f0f2f5" class="font-size-input input-style pt-0 mt-0" single-line
                                    return-object outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="2">
                        <v-row class="mt-4">
                            <v-btn :elevation="0"
                                class="font-weight-bold text-white py-4 px-3 my-auto ms-15 bg-gradient-info" small
                                @click="getAgencyListAPI">
                                조 회
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </v-card>
        <v-row>
            <v-col cols="2" class="me-auto text-start">
                <label class="text-sm font-weight-bold mt-5 ml-5">총건수 : {{ totalCnt }}</label>
            </v-col>
            <v-col cols="8">
            </v-col>
            <v-col cols="2">
                <v-btn :elevation="0" color="#4c4c4c"
                    class="font-weight-bold text-white py-4 px-3 my-auto ms-3 bg-gradient-success"
                    @click="agencyListExcel()">
                    엑셀 다운로드
                </v-btn>
            </v-col>
        </v-row>
        <!-- 데이터테이플 area-->
        <v-card class="card-shadow mt-2">
            <!-- 데이터 테이블 -->
            <v-card-text class="px-0 py-0">
                <v-data-table :headers="authHeaders" :items="agencyList" class="table agency_table" :page.sync="page"
                    hide-default-footer @page-count="pageCount = $event" :items-per-page="itemsPerPage"
                    mobile-breakpoint="0">
                    <template #[`item.agency_code`]="{ item }">
                        <span class="text-decoration-underline font-weight ps-2 pe-2 cursor-td" @click="rowClick(item)">
                            {{ item.agency_code }}
                        </span>
                    </template>
                    <template #[`item.virtual_account`]="{ item }">
                        <span>
                            {{ item.virtual_account }}
                        </span>
                    </template>
                </v-data-table>
            </v-card-text>
            <!-- 데이터 테이블 하단영역 -->
            <v-card-actions class="card-padding">
                <v-row>
                    <v-col cols="6" lg="3" class="d-flex align-center">
                    </v-col>
                    <v-col cols="6" class="ml-auto d-flex justify-end">
                        <v-pagination prev-icon="fa fa-angle-left" next-icon="fa fa-angle-right" class="pagination"
                            color="#4c4c4c" v-model="page" :length="pageCount" circle></v-pagination>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>

        <!-- 권한수정 헤더영역-->
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import XLSX from 'xlsx-js-style';

export default {
    name: "Agency",
    components: {
    },
    watch: {
        dialog(val) {
            val || this.close()
        },
        reissueDialog(val) {
            val || this.issueClose()
        },
    },
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
                this.updateAgencyInfo.req.ctrrc_c_yn = "Y";
                return true;
            } else {
                this.updateAgencyInfo.req.ctrrc_c_yn = "N";
                return false;
            }
        },
        brAdd() {
            if (this.selected.includes("R")) {
                this.updateAgencyInfo.req.ctrrc_r_yn = "Y";
                return true;
            } else {
                this.updateAgencyInfo.req.ctrrc_r_yn = "N";
                return false;
            }
        },
        idAdd() {
            if (this.selected.includes("I")) {
                this.updateAgencyInfo.req.ctrrc_i_yn = "Y";
                return true;
            } else {
                this.updateAgencyInfo.req.ctrrc_i_yn = "N";
                return false;
            }
        },
        cbAdd() {
            if (this.selected.includes("B")) {
                this.updateAgencyInfo.req.ctrrc_b_yn = "Y";
                return true;
            } else {
                this.updateAgencyInfo.req.ctrrc_b_yn = "N";
                return false;
            }
        },
        pcAdd() {
            if (this.selected.includes("P")) {
                this.updateAgencyInfo.req.ctrrc_p_yn = "Y";
                return true;
            } else {
                this.updateAgencyInfo.req.ctrrc_p_yn = "N";
                return false;
            }
        },
        scAdd() {
            if (this.selected.includes("S")) {
                this.updateAgencyInfo.req.ctrrc_s_yn = "Y";
                return true;
            } else {
                this.updateAgencyInfo.req.ctrrc_s_yn = "N";
                return false;
            }
        },
        modDisabled() {
            if (((this.modItem.agency_name == "" || this.modItem.agency_name == null)
                || (this.modItem.representative_name == "" || this.modItem.representative_name == null)
                || (this.modItem.socialNumberf == "" || this.modItem.socialNumberf == null)
                || (this.modItem.socialNumberl == "" || this.modItem.socialNumberl == null)
                || (this.modItem.businessNumberf == "" || this.modItem.businessNumberf == null)
                || (this.modItem.businessNumberm == "" || this.modItem.businessNumberm == null)
                || (this.modItem.businessNumberl == "" || this.modItem.businessNumberl == null)
                // || (this.modItem.email == "" || this.modItem.email == null)
                || (this.modItem.phoneNumberf == "" || this.modItem.phoneNumberf == null)
                || (this.modItem.phoneNumberm == "" || this.modItem.phoneNumberm == null)
                || (this.modItem.phoneNumberl == "" || this.modItem.phoneNumberl == null)
                || (this.modItem.addr == "" || this.modItem.addr == null)
                || (this.modItem.generalNumberf == "" || this.modItem.generalNumberf == null)
                || (this.modItem.generalNumberm == "" || this.modItem.generalNumberm == null)
                || (this.modItem.generalNumberl == "" || this.modItem.generalNumberl == null)
                // || (this.modItem.faxNumberf == "" || this.modItem.faxNumberf == null)
                // || (this.modItem.faxNumberm == "" || this.modItem.faxNumberm == null)
                // || (this.modItem.faxNumberl == "" || this.modItem.faxNumberl == null)
                || (this.modItem.account_holder == "" || this.modItem.account_holder == null)
                || (this.modItem.account_number == "" || this.modItem.account_number == null))) {
                if (this.$refs.refModAgencyName == undefined
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
                if (this.$refs.refModAgencyName.valid == false
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
    data() {
        return {
            authHeaders: [
                {
                    text: "코드명",
                    // align: "start",
                    cellClass: "text-decoration-underline font-weight-black ps-2 pe-2",
                    align: "center",
                    sortable: true,
                    value: "agency_code",
                    class:
                        "text-secondary font-weight-bolder opacity-7 ps-6 pe-2",
                    width: '4%'
                },
                {
                    text: "대리점명",
                    align: "start",
                    cellClass: "ps-2 pe-2",
                    sortable: false,
                    value: "agency_name",
                    class:
                        "text-secondary font-weight-bolder opacity-7 ps-6 pe-2",
                    width: '5%'
                },
                {
                    text: "영업시작일",
                    value: "reg_date_time",
                    align: "center",
                    sortable: false,
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '6%'
                },
                {
                    text: "예치금 잔액",
                    value: "deposit_amount",
                    align: "center",
                    sortable: false,
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '5%'
                },
                {
                    text: "영업상태",
                    value: "business_status",
                    align: "center",
                    sortable: false,
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '4%'
                },
                {
                    text: "담당자명",
                    value: "sales_id",
                    sortable: true,
                    align: "center",
                    class: "text-secondary font-weight-bolder opacity-7 ps-6 pe-2",
                    width: '4%'
                },
                {
                    text: "판매구분",
                    align: "center",
                    cellClass: "",
                    sortable: false,
                    value: "sales_method",
                    class:
                        "text-secondary font-weight-bolder opacity-7 ps-6",
                    width: '4%'
                },
                {
                    text: "전화번호",
                    value: "phone_number",
                    align: "center",
                    sortable: false,
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '5%'
                },
                {
                    text: "일반번호",
                    value: "general_phone",
                    align: "center",
                    sortable: false,
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '5%'
                },
                {
                    text: "지역",
                    value: "region",
                    align: "center",
                    class: "text-secondary font-weight-bolder opacity-7 ps-6 pe-2",
                    width: '4%'
                },
                {
                    text: "주소",
                    value: "addr",
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '14%'
                },
                {
                    text: "주민등록번호",
                    align: "center",
                    cellClass: "",
                    sortable: false,
                    value: "social_number",
                    class:
                        "text-secondary font-weight-bolder opacity-7 ps-6",
                    width: '5%'
                },
                {
                    text: "사업자번호",
                    align: "center",
                    cellClass: "",
                    sortable: false,
                    value: "business_number",
                    class:
                        "text-secondary font-weight-bolder opacity-7 ps-6",
                    width: '5%'
                },

                {
                    text: "이메일",
                    value: "email",
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '5%'
                },
                {
                    text: "팩스번호",
                    value: "fax_number",
                    align: "center",
                    sortable: false,
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '5%'
                },
                {
                    text: "이체은행",
                    value: "transfer_bank",
                    sortable: false,
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '4%'
                },
                {
                    text: "예금주명",
                    value: "account_holder",
                    sortable: false,
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '5%'
                },
                {
                    text: "계좌번호",
                    value: "account_number",
                    sortable: false,
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '5%'
                },
                {
                    text: "가상계좌",
                    value: "virtual_account",
                    sortable: false,
                    class: "text-secondary font-weight-bolder opacity-7",
                    width: '7%'
                },
            ],
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
            agencyList: [],
            page: 1,
            pageCount: 0,
            itemsPerPage: 20,
            ctrCodeList: [],
            vrtAcntYn: false,
            updateAgencyInfo: {
                req: {
                    // group_code: "",
                    // auth_code: "",
                    agency_code: "",
                    region: "",
                    sales_method: "",
                    agency_name: "",
                    representative_name: "",
                    social_number: "",
                    business_number: "",
                    email: "",
                    phone_number: "",
                    addr: "",
                    general_number: "",
                    fax_number: "",
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
                    mod_id: "",
                    mod_ip: ""
                },
                res: {}
            },
            getCodeList: {
                req: {
                    code_group: ""
                },
                res: {}
            },
            regionCodeList: [],
            salesManList: [],
            modSalesManList: [],
            selectedRegion: "",
            selectedSalesMan: "",
            selectedBankCode: "",
            selectedIssueBank: "",
            selectedAgencyCode: "",
            getAgencyList: {
                req: {
                    agency_level: "",
                    agency_code: "",
                    search_agency_code: "",
                    agency_name: "",
                    addr: "",
                    region_code: "",
                    sales_code: "",
                },
                res: {}
            },
            getSalesManList: {
                req: {
                    sales_code: ""
                },
                res: {}
            },
            getAgencyVirtualAccount: {
                req: {
                    agencyCode: ""
                }
            },
            accountIssue: {
                req: {
                    agency_code: "",
                    bank_code: "",
                    issue_type: "",
                },
                res: {}
            },
            searchData: {
                search_agency_code: "",
                agency_name: "",
                addr: "",
                region_code: "",
                sales_code: ""
            },
            modItem: {
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
            dialog: false,
            reissueDialog: false,
            selectedRegion: "",
            modSelectedRegion: "",
            modRegionCodeList: [],
            saleMethodCodeList: [],
            selectedSaleMethod: "",
            bankCodeList: [],
            selectedAgencyList: "",
            selectedUpperAgencyLevel: "",
            totalCnt: 0,
            getUpperAgencyList: {
                req: {
                    upper_agency_code: "",
                    agency_level: "",
                },
                res: {}
            },
            ctrCodeList: [],
            selected: [],
            upperExistence: true,
            UpperAgencyList: [],
            rules: {
                modAgencyName: {
                    required: value => !!value || '대리점명은 필수입니다.',
                    length: value => !(value && value.length > 30) || '대리점명은 30자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?.,;:|\*~`!^\-_+<>@\#$%&\\\=\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
                modRepresentativeName: {
                    required: value => !!value || '대표자명은 필수입니다.',
                    length: value => !(value && value.length > 50) || '대표자명은 50자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?.,;:|\*~`!^\-_+<>@\#$%&\\\=\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
                modSocialNumberf: {
                    required: value => !!value || '주민등록번호 앞자리는 필수입니다.',
                    length: value => value && value.length == 6 || '6자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modSocialNumberl: {
                    required: value => !!value || '주민등록번호 뒷자리는 필수입니다.',
                    length: value => value && value.length == 7 || '7자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modBusinessNumberf: {
                    required: value => !!value || '사업자 번호 앞자리 3자를 입력해주세요.',
                    length: value => value && value.length == 3 || '3자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modBusinessNumberm: {
                    required: value => !!value || '사업자 번호 가운데 2자를 입력해주세요.',
                    length: value => value && value.length == 2 || '2자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modBusinessNumberl: {
                    required: value => !!value || '사업자 번호 뒷자리 5자를 입력해주세요.',
                    length: value => value && value.length == 5 || '5자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modEmail: {
                    length: value => !(value && value.length >= 31) || '30자 이상 입력할 수 없습니다.',
                    charValid: value => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value) || '예 ) icallmobile@icall.com'
                },
                modPhoneNumberf: {
                    required: value => !!value || '폰번호 앞자리 3자를 입력해주세요.',
                    length: value => value && value.length == 3 || '3자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modPhoneNumberm: {
                    required: value => !!value || '폰번호 가운데 4자를 입력해주세요.',
                    length: value => value && value.length == 4 || '4자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modPhoneNumberl: {
                    required: value => !!value || '폰번호 뒷자리 4자를 입력해주세요.',
                    length: value => value && value.length == 4 || '4자리를 입력해주세요.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modAddr: {
                    required: value => !!value || '주소는 필수입니다.',
                    length: value => !(value && value.length > 100) || '주소는 100자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?;:|\*~`!^\_+<>@\#$%&\\\=\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
                modGeneralNumberf: {
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modGeneralNumberm: {
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modGeneralNumberl: {
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modFaxNumberf: {
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modFaxNumberm: {
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modFaxNumberl: {
                    length: value => !(value && value.length >= 5) || '5자리 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                modAccountHolder: {
                    required: value => !!value || '예금주명은 필수입니다.',
                    length: value => !(value && value.length > 20) || '예금주명은 20자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
                modAccountNumber: {
                    required: value => !!value || '계좌번호는 필수입니다.',
                    length: value => !(value && value.length > 20) || '계좌번호는 20자 이상 입력할 수 없습니다.',
                    charValid: value => /^[\-\0-9]*$/.test(value) || '숫자와 (-)만 입력할 수 있습니다'
                },
                modUpperAgencyCode: {
                    required: value => !!value || '상위대리점명은 필수입니다.',
                    charValid: value => /^[A-Z0-9]*$/.test(value) || '목록에서 선택해주세요.'
                },
            }
        };
    },
    mounted() {
        this.getRegionCodeListAPI("RGO0D");
        this.getSaleMethodCodeListAPI("SMTHD");
        this.getSalesManListAPI();
        this.getUpperAgencyListAPI();
        this.getCtrCodeListAPI("CTRRC");
        this.getBankCodeListAPI("BK00L");
        this.getAgencyListAPI();
    },
    methods: {
        ...mapGetters('sessionStore', ['GET_SESSION_INFO']),
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
        getRegionCodeListAPI(code) {
            this.getCodeList.req.code_group = code;
            this.$axios.post(this.$BASE_URL + '/common/codelist', this.getCodeList.req).then(res => {
                this.getCodeList.res = res.data;
                this.modRegionCodeList = [...res.data];
                //this.modRegionCodeList.assign(res.data);
                this.regionCodeList = this.getCodeList.res;
                this.regionCodeList.unshift({ "code_name": "전체", "code_value": "" })
                this.selectedRegion = this.regionCodeList[0].code_value;
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getSaleMethodCodeListAPI(code) {
            this.getCodeList.req.code_group = code;
            this.$axios.post(this.$BASE_URL + '/common/codelist', this.getCodeList.req).then(res => {
                this.saleMethodCodeList = res.data;
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getSalesManListAPI() {
            this.getSalesManList.req.sales_code = this.GET_SESSION_INFO().userInfo.agency_code;

            this.$axios.post(this.$BASE_URL + '/agency/saleslist', this.getSalesManList.req).then(res => {
                this.getSalesManList.res = res.data;
                this.modSalesManList = [...this.getSalesManList.res];
                this.salesManList = res.data;
                this.salesManList.unshift({ "agency_name": "전체", "agency_code": "", "agency_level": "" })
                this.selectedSalesMan = this.salesManList[0];
                this.selectedAgencyList = this.salesManList[0];
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getBankCodeListAPI(code) {
            this.getCodeList.req.code_group = code;
            this.$axios.post(this.$BASE_URL + '/common/codelist', this.getCodeList.req).then(res => {
                this.bankCodeList = res.data;
                this.selectedBankCode = this.bankCodeList[0].code_value;
                this.selectedIssueBank = "011";
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getAgencyListAPI() {
            this.getAgencyList.req.agency_level = this.GET_SESSION_INFO().userInfo.agency_level;
            this.getAgencyList.req.agency_code = this.GET_SESSION_INFO().userInfo.agency_code;
            if (this.getAgencyList.req.agency_code == null || this.getAgencyList.req.agency_code == "") {
                this.getAgencyList.req.agency_code = 'IC000000'
            }
            this.searchData.region_code = this.selectedRegion;
            this.searchData.sales_code = this.selectedSalesMan.agency_code;

            this.getAgencyList.req.search_agency_code = this.searchData.search_agency_code;
            this.getAgencyList.req.agency_name = this.searchData.agency_name;
            this.getAgencyList.req.addr = this.searchData.addr;
            this.getAgencyList.req.region_code = this.searchData.region_code;
            this.getAgencyList.req.sales_code = this.searchData.sales_code;
            this.$axios.post(this.$BASE_URL + '/agency/agencylist', this.getAgencyList.req).then(res => {
                this.agencyList = res.data;
                this.totalCnt = this.agencyList.length;
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        rowClick(item) {
            this.getAgencyVirtualAccountAPI(item.agency_code);
            // this.isModalOpen = true;
            console.log("item :: ", item);
            this.selectedAgencyCode = item.agency_code;
            this.modItem.account_holder = item.account_holder;
            this.modItem.account_number = item.account_number;
            this.modItem.email = item.email == null ? "" : item.email;
            this.modItem.addr = item.addr;
            this.modItem.agency_name = item.agency_name;
            this.modSelectedRegion = item.region_code;
            this.selectedBankCode = item.transfer_bank_code;
            this.selectedAgencyList = item.sales_code;
            this.selectedSaleMethod = item.sales_method_code;
            this.modItem.representative_name = item.representative_name;
            this.modItem.socialNumberf = item.social_number == null ? "" : item.social_number.substring(0, 6);
            this.modItem.socialNumberl = item.social_number == null ? "" : item.social_number.substring(7, 14);
            this.modItem.businessNumberf = item.business_number == null ? "" : item.business_number.substring(0, 3);
            this.modItem.businessNumberm = item.business_number == null ? "" : item.business_number.substring(3, 5);
            this.modItem.businessNumberl = item.business_number == null ? "" : item.business_number.substring(5, 10);
            this.modItem.phoneNumberf = item.phone_number == null ? "" : item.phone_number.substring(0, item.phone_number.indexOf('-'));
            this.modItem.phoneNumberm = item.phone_number == null ? "" : item.phone_number.substring(item.phone_number.indexOf('-') + 1, item.phone_number.indexOf('-', item.phone_number.indexOf('-') + 1));
            this.modItem.phoneNumberl = item.phone_number == null ? "" : item.phone_number.substring(item.phone_number.lastIndexOf('-') + 1);
            this.modItem.generalNumberf = item.general_phone == null ? "" : item.general_phone.substring(0, item.general_phone.indexOf('-'));
            this.modItem.generalNumberm = item.general_phone == null ? "" : item.general_phone.substring(item.general_phone.indexOf('-') + 1, item.general_phone.indexOf('-', item.general_phone.indexOf('-') + 1));
            this.modItem.generalNumberl = item.general_phone == null ? "" : item.general_phone.substring(item.general_phone.lastIndexOf('-') + 1);
            this.modItem.faxNumberf = item.fax_number == null ? "" : item.fax_number.substring(0, item.fax_number.indexOf('-'));
            this.modItem.faxNumberm = item.fax_number == null ? "" : item.fax_number.substring(item.fax_number.indexOf('-') + 1, item.fax_number.indexOf('-', item.fax_number.indexOf('-') + 1));
            this.modItem.faxNumberl = item.fax_number == null ? "" : item.fax_number.substring(item.fax_number.lastIndexOf('-') + 1);

            if (item.agency_level > 3) {
                this.upperExistence = false;
                this.modItem.upper_agency_code = item.upper_agency_code;
            } else {
                this.upperExistence = true;
            }

            this.dialog = true;
        },
        getAgencyVirtualAccountAPI(agencyCode) {
            this.getAgencyVirtualAccount.req.agencyCode = agencyCode;
            this.$axios.post(this.$BASE_URL + '/agency/virtualaccntyn', this.getAgencyVirtualAccount.req).then(res => {
                this.vrtAcntYn = res.data;
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.$refs.modForm.reset();
            })
        },
        issueClose() {
            this.reissueDialog = false
        },
        checkUpperAgency() {
            this.modItem.upper_agency_code = "";
        },
        getCtrCodeListAPI(code) {
            this.getCodeList.req.code_group = code;
            this.$axios.post(this.$BASE_URL + '/common/codelist', this.getCodeList.req).then(res => {
                this.ctrCodeList = res.data;
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        mergePhoneNumber(front, middle, last, group) {
            switch (group) {
                case 'phone':
                    this.modItem.phone_number = front + '-' + middle + '-' + last
                    break;
                case 'general':
                    this.modItem.general_number = front + '-' + middle + '-' + last
                    break;
                case 'fax':
                    this.modItem.fax_number = front + '-' + middle + '-' + last
                    break;
                default:
                    alert("전화번호 오류");
            }
        },
        mergeIdNumber() {
            this.modItem.social_number = this.modItem.socialNumberf + '-' + this.modItem.socialNumberl;
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
            checkedBizNum = this.checkVaildBizNum(this.modItem.businessNumberf + this.modItem.businessNumberm + this.modItem.businessNumberl);
            if (!checkedBizNum) {
                return false;
            }
            return true;
        },
        confirmIssue() {
            this.$swal({
                // title: "?",
                text: "가상계좌를 발급하시겠습니까?",
                // icon: "warning",
                showCancelButton: true,
                cancelButtonText: "취소",
                confirmButtonText: "확인",
                customClass: {
                    confirmButton: "btn bg-gradient-success",
                    cancelButton: "btn bg-gradient-danger",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    this.accountIssueAPI("I");
                }
            });
        },
        reIssueConfirm() {
            this.$swal({
                // title: "?",
                text: "가상계좌를 재발급하시겠습니까?",
                // icon: "warning",
                showCancelButton: true,
                cancelButtonText: "취소",
                confirmButtonText: "재발급",
                customClass: {
                    confirmButton: "btn bg-gradient-success",
                    cancelButton: "btn bg-gradient-danger",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    this.accountIssueAPI("R");
                }
            });
        },
        updateConfirm() {
            this.$swal({
                // title: "?",
                text: "수정하시겠습니까?",
                // icon: "warning",
                showCancelButton: true,
                cancelButtonText: "취소",
                confirmButtonText: "수정",
                customClass: {
                    confirmButton: "btn bg-gradient-success",
                    cancelButton: "btn bg-gradient-danger",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    this.updateAgencyInfoAPI();
                    //this.$swal.fire("성공", "그룹코드가 등록되었습니다.", "success");
                }
            });
        },
        confirmReissue() {
            this.reissueDialog = true;
            this.selectedIssueBank = "011";
        },
        updateAgencyInfoAPI() {
            if (!this.checkedVaild()) {
                alert("사업자 번호를 확인해주세요.")
                return;
            }
            this.mergePhoneNumber(this.modItem.phoneNumberf, this.modItem.phoneNumberm, this.modItem.phoneNumberl, 'phone');
            this.mergePhoneNumber(this.modItem.generalNumberf, this.modItem.generalNumberm, this.modItem.generalNumberl, 'general');
            this.mergePhoneNumber(this.modItem.faxNumberf, this.modItem.faxNumberm, this.modItem.faxNumberl, 'fax');

            this.mergeIdNumber();
            this.updateAgencyInfo.req = Object.assign(this.updateAgencyInfo.req, _.omit(this.modItem, ['socialNumberf', 'socialNumberl', 'phoneNumberf', 'phoneNumberm', 'phoneNumberl', 'generalNumberf', 'generalNumberm', 'generalNumberl', 'faxNumberf', 'faxNumberm', 'faxNumberl', 'businessNumberf', 'businessNumberm', 'businessNumberl', 'upper_agency_code']));
            this.updateAgencyInfo.req.agency_code = this.selectedAgencyCode;
            this.updateAgencyInfo.req.region = this.modSelectedRegion;
            this.updateAgencyInfo.req.sales_method = this.selectedSaleMethod;
            this.updateAgencyInfo.req.transfer_bank = this.selectedBankCode;
            this.updateAgencyInfo.req.business_number = this.modItem.businessNumberf + this.modItem.businessNumberm + this.modItem.businessNumberl;

            if (this.selectedAgencyList.agency_name != undefined) {
                var startIdx = this.selectedAgencyList.agency_name.indexOf('(');
                var lastIdx = this.selectedAgencyList.agency_name.indexOf(')');
                var salesId = this.selectedAgencyList.agency_name.substring(startIdx + 1, lastIdx)

                this.updateAgencyInfo.req.sales_id = salesId;
                this.updateAgencyInfo.req.sales_code = this.selectedAgencyList.agency_code;
            }

            this.updateAgencyInfo.req.mod_id = this.GET_SESSION_INFO().userInfo.user_id;
            this.updateAgencyInfo.req.mod_ip = this.GET_SESSION_INFO().userInfo.user_ip;

            console.log("req :: ", this.updateAgencyInfo.req)

            this.$axios.post(this.$BASE_URL + '/agency/updateagency', this.updateAgencyInfo.req).then(res => {
                this.updateAgencyInfo.res = res.data;
                this.$swal.fire("성공", "수정되었습니다.", "success");
                this.close();
                this.getAgencyListAPI();
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        accountIssueAPI(type) {
            this.accountIssue.req.agency_code = this.selectedAgencyCode;
            this.accountIssue.req.issue_type = type;
            if (type == "R") {
                this.accountIssue.req.bank_code = this.selectedIssueBank;
            }
            this.$axios.post(this.$BASE_URL + '/pg/accountissue', this.accountIssue.req).then(res => {
                this.accountIssue.res = res.data;
                this.vrtAcntYn = true;
                if (type == "R") {
                    if (this.accountIssue.res.success == "SUCC") {
                        this.reissueDialog = false;
                        this.getAgencyListAPI();
                        this.$swal.fire("성공", "가상계좌 재발급이 완료되었습니다.", "success");
                    } else {
                        this.$swal.fire("실패", "가상계좌 재발급에 실패했습니다. 관리자에게 문의하세요.", "error");
                    }
                } else {
                    this.getAgencyListAPI();
                    this.$swal.fire("성공", "가상계좌 발급이 완료되었습니다.", "success");
                }
            }).catch(err => {
                this.GLOBALFNC.err.commonErr(err)
            })
        },
        getToday() {
            var date = new Date();
            var year = date.getFullYear();
            var month = ("0" + (1 + date.getMonth())).slice(-2);
            var day = ("0" + date.getDate()).slice(-2);

            return year + month + day;
        },
        agencyListExcel() {
            //const xlsx = require('xlsx');
            // const workBook = xlsx.utils.book_new()
            // const workSheet = xlsx.utils.json_to_sheet(this.agencyList)
            // xlsx.utils.book_append_sheet(workBook, workSheet, 'example')
            // xlsx.writeFile(workBook, 'example.xlsx')

            let Heading = [[{ v: '대리점코드', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '대리점명', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '예치금잔액', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '대표자명', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '판매방식', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '주민등록번호', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '사업자번호', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '지역', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '이메일', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '주소', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '폰번호', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '일반번호', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '팩스번호', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '이체은행', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '예금주명', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '계좌번호', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '영업담당자', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '등록일', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }
                , { v: '가상계좌', t: 's', s: { font: { sz: 12 }, fill: { fgColor: { rgb: 'E9E9E9' } } } }]];

            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.json_to_sheet([]);
            //const ws = XLSX.utils.aoa_to_sheet([row, row]);
            //XLSX.utils.book_append_sheet(wb, ws, 'readme demo');
            XLSX.utils.sheet_add_aoa(ws, Heading);

            const wscols = [ // 각 컬럼의 width 설정 값
                { wch: 12 },
                { wch: 12 },
                { wch: 12 },
                { wch: 20 },
                { wch: 15 },
                { wch: 15 },
                { wch: 15 },
                { wch: 10 },
                { wch: 15 },
                { wch: 30 },
                { wch: 15 },
                { wch: 15 },
                { wch: 15 },
                { wch: 15 },
                { wch: 15 },
                { wch: 15 },
                { wch: 15 },
                { wch: 15 },
                { wch: 25 },
            ]

            ws['!cols'] = wscols

            var excelSheet = _.clone(this.agencyList);

            for (var i = 0; i < excelSheet.length; i++) {
                var data = excelSheet[i];
                delete data.agency_level;
                delete data.sales_method_code;
                delete data.region_code;
                delete data.transfer_bank_code;
                delete data.sales_code;
                delete data.upper_agency_code;
                delete data.business_status;
                delete data.business_status_mod_day;
            }

            //var excelSheet = Object.assign(excelSheet, _.omit(this.agencyList, ['agency_code', 'agency_name']));

            var todayStr = this.getToday();

            XLSX.utils.sheet_add_json(ws, excelSheet, { origin: 'A2', skipHeader: true });

            XLSX.utils.book_append_sheet(wb, ws, '대리점리스트');

            //ws.getColumn(1).width = 25;

            XLSX.writeFile(wb, '대리점리스트_' + todayStr + '.xlsx');

            // const workBook = Xlsx.utils.book_new()
            // const workSheet = Xlsx.utils.json_to_sheet(this.agencyList)
            // Xlsx.utils.book_append_sheet(workBook, workSheet, 'example')
            // Xlsx.writeFile(workBook, 'example.xlsx')

        }
    }
}
</script>
<style lang="css" scoped>
.v-data-table::v-deep th {
    font-size: 14px !important;
    text-align: center !important;
    border: 1px solid #424242 !important;
    background-color: #2E2E2E !important;
    color: white !important;
}

.v-data-table::v-deep td {
    font-size: 12px !important;
    border: 1px solid #f0f2f5 !important;
}

.v-data-table.agency_table::v-deep table {
    width: 3000px;
}

.cursor-td {
    cursor: pointer;
}
</style>