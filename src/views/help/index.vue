<template>
    <div class="help_container">
        <div class="content">
            <div class="content__img">
                <img
                    class="content__img__large"
                    src="/src/assets/error/attention_help.png"
                    alt=""
                />
            </div>
            <div class="content__text">
                <p class="content__text__title">Attention</p>
                <p class="content__text__descripton">
                    We are pleased to inform you that the support of the blockchain has changed. If
                    necessary, please feel free to contact us by emailing
                    <a
                        class="content__text__descripton__email"
                        href="mailto:iobscan@irisnet.org"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        iobscan@irisnet.org
                    </a>
                    . We will do our best to provide you with the support and help you need. Thank
                    you for your trust and support!
                </p>
                <router-link :to="'/home'" class="content__text__button">Go Back</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
    .help_container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('../../assets/error/default_bg.png') no-repeat center center;
        background-size: cover;
        cursor: url('../../assets/error/mouse_tree.png'), default !important;
        .content {
            position: relative;
            margin: -126px 70px 0 0;
            width: 707px;
            &__img {
                width: 100%;
                &__large {
                    display: inline-block;
                    width: 100%;
                }
            }
            &__text {
                position: absolute;
                bottom: -48px;
                left: 0;
                right: 0;
                margin: 0 auto;
                max-width: 500px;
                transform: translateX(7%);
                &__title {
                    font-size: 40px;
                    font-weight: 500;
                    line-height: 48px;
                    color: rgba(255, 255, 255, 1);
                }
                &__descripton {
                    margin-top: 16px;
                    color: rgba(255, 255, 255, 0.75);
                    font-size: var(--bj-font-size-normal);
                    font-weight: 400;
                    line-height: 16px;
                    &__email {
                        color: rgba(255, 255, 255, 1);
                        cursor: pointer;
                    }
                }
                &__button {
                    display: inline-block;
                    width: 172px;
                    height: 36px;
                    border-radius: 18px;
                    background: rgba(61, 80, 255, 1);
                    color: rgba(255, 255, 255, 1);
                    font-size: 16px;
                    line-height: 36px;
                    margin: 40px auto 0;
                }
            }
        }
    }
    @media screen and (max-width: 800px) {
        .help_container {
            align-items: flex-start;
            .content {
                margin-top: 58px;

                &__img {
                    &__large {
                        width: 100%;
                        height: auto;
                    }
                }
                &__text {
                    &__title {
                    }
                    &__descripton {
                        &__email {
                        }
                    }
                    &__button {
                    }
                }
            }
        }
    }
    @media screen and (max-width: 670px) {
        .help_container {
            .content {
                margin-top: 120px;
                &__img {
                    &__large {
                    }
                }
                &__text {
                    bottom: -72px;
                    &__title {
                    }
                    &__descripton {
                        &__email {
                        }
                    }
                    &__button {
                    }
                }
            }
        }
    }
    @media screen and (max-width: 580px) {
        .help_container {
            .content {
                &__img {
                    &__large {
                    }
                }
                &__text {
                    bottom: -96px;
                    &__title {
                    }
                    &__descripton {
                        &__email {
                        }
                    }
                    &__button {
                    }
                }
            }
        }
    }
    @media screen and (max-width: 490px) {
        .help_container {
            .content {
                margin: 100px 0 0 0;
                &__img {
                    &__large {
                    }
                }
                &__text {
                    padding: 0 16px;
                    bottom: -100px;
                    transform: translateX(0);
                    &__title {
                    }
                    &__descripton {
                        &__email {
                        }
                    }
                    &__button {
                    }
                }
            }
        }
    }
    @media screen and (max-width: 420px) {
        .help_container {
            .content {
                &__img {
                    &__large {
                    }
                }
                &__text {
                    bottom: -124px;
                    &__title {
                    }
                    &__descripton {
                        &__email {
                        }
                    }
                    &__button {
                    }
                }
            }
        }
    }
    @media screen and (max-width: 375px) {
        .help_container {
            .content {
                &__img {
                    &__large {
                    }
                }
                &__text {
                    bottom: -148px;
                    &__title {
                    }
                    &__descripton {
                        &__email {
                        }
                    }
                    &__button {
                    }
                }
            }
        }
    }
</style>
