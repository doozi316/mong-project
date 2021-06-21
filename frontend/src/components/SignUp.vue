<template>
    <div class="container h-100">
        <div class="row text-center d-flex h-100 py-5">
            <div class="col-md-6 offset-md-3 d-flex w-100 justify-content-center align-self-center">
                <b-card>
                    <b-card-body>
                        <div class="login-img">
                            <img src="@/assets/logo.png" :alt="title" class="m-2">
                        </div>
                        <div class="login-title">
                            <h4>회원 가입</h4>
                        </div>
                            <b-form class="mt-4">
                                <b-form-row class="text-left">
                                    <b-form-group
                                        class="col-md-12"
                                        label="아이디"
                                    >
                                        <b-row>
                                            <b-col class="text-left pr-sm-2">
                                                <b-form-input placeholder="ID" type="text"/>
                                            </b-col>
                                            <b-col class="text-right pl-0 py-1 col-auto">
                                                <b-button variant="secondary" size="sm">중복확인</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-form-group>
                                    <b-form-group
                                        class="col-md-12"
                                        label="비밀번호"
                                        description="8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
                                    >
                                        <b-form-input type="password" placeholder="Password" />
                                    </b-form-group>
                                    <b-form-group
                                        class="form-group col-md-12"
                                        label="이름"
                                    >
                                        <b-form-input type="text" placeholder="Name" />
                                    </b-form-group>
                                    <b-form-group
                                        class="form-group col-md-12"
                                        label="이메일"
                                    >
                                        <b-form-input type="email" placeholder="E-Mail" />
                                    </b-form-group>
                                </b-form-row>
                                <div class="form-row mt-2">
                                    <button type="button" class="btn btn-success btn-block">회원 가입</button>
                                </div>
                            </b-form>
                    </b-card-body>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import {APP_INFO} from '../config/UiConfig.js';

    export default {
        name: 'SignUp',
        data() {
            return {
                title: APP_INFO.title
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .login-img img {
        width: 10%;
        max-height: 20%;
    }
</style>
