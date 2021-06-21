<template>
    <div class="container h-100">
        <div class="row text-center d-flex h-100 py-5">
            <div class="col-md-6 offset-md-3 d-flex w-100 justify-content-center align-self-center">
                <div class="card">
                    <div class="card-body">
                        <div class="login-img">
                            <img src="@/assets/logo.png" :alt="title" class="m-2">
                        </div>
                        <div class="login-title">
                            <h4>로그인</h4>
                        </div>
                        <div class="login-form mt-4">
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <BInput id="email" name="Full Name" placeholder="아이디"
                                               class="form-control" type="text" />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <BInput type="password" class="form-control" id="pass" placeholder="비밀번호" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col">
                                        <div class="form-check text-left pl-1">
                                            <b-form-checkbox>
                                                <label class="form-check-label">
                                                    <small>로그인 상태 유지 </small>
                                                </label>
                                            </b-form-checkbox>
                                        </div>
                                    </div>
                                    <div class="form-group col">
                                        <div class="text-right">
                                            <small>
                                                <router-link to="#">아이디 / 비밀번호 찾기</router-link>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <button type="button" class="btn btn-success btn-block">Log In</button>
                                </div>
                            </form>
                        </div>
                        <div class="logi-forgot text-right mt-2">
                            <router-link to="/sign-up">회원 가입</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {APP_INFO} from '../config/UiConfig.js';

    export default {
        name: 'Login',
        data() {
            return {
                title: APP_INFO.title
            }
        },
        methods: {},
    }
</script>

<style lang="scss" scoped>
    .login-img img {
        width: 10%;
        max-height: 20%;
    }
</style>
