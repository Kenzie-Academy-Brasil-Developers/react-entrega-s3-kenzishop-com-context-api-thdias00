import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: #999999;
    > header{
        width: 100%;
        background: #000000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        >img{
            :hover{
                cursor: pointer;
            }
        }
        >svg{
            color: #000000;
            size: 20%;
            background: #ffffff;
            border: 1px solid #ffffff;
            border-radius: 100%;
            :hover{
                cursor: pointer;
            }
        }
    }
    >main{
        background: #999999;
        display: flex;
        >div{
            background: #999999;
            width: 50%;
            >h1{
                margin: 10% 0 0 10%;
                color: #ffffff;
                margin-bottom: 5%;
                @media (max-width: 799px){
                    font-size: 20px;
                }
            }
            >ul{
                margin-left: 10%;
                width: 90%;
                padding: 10px;
                border: 1px solid #ffffff;
                >div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    >h2{
                        color: #ffffff;
                        margin-bottom: 5%;
                        @media (max-width: 799px){
                            font-size: 20px;
                        }
                    }
                    >button{
                        width: 20%;
                        height:35px;
                        border: transparent;
                        border-radius: 8px;
                        background: #000000;
                        color: #ffffff;
                        font-weight: 700;
                        @media (max-width: 799px){
                            width: 75px;
                        }
                        :hover{
                            cursor: pointer;
                        }
                    }
                }
                >li{
                    display: flex;
                    align-items: center;
                    padding: 5%;
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                    @media (max-width: 799px){
                        flex-direction: column;
                    }
                    :hover{
                        background: #ffffff;
                        >div{
                            >span, p{
                                color: #000000;
                            }
                        }
                    }
                    >div{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        @media (max-width: 799px){
                            width: 80%;
                            text-align: center;
                        }
                        >img{
                            width: 50%;
                            height: 60%;
                            @media (max-width: 799px){
                                width: 100%;
                                height: 70%;
                            }
                        }
                        >span, p{
                            font-weight: 700;
                            color: white;
                            @media (max-width: 799px){
                                font-size: 10px;
                            }
                        }
                    }
                    >svg{
                        background: #ff2e00;
                        color: #ffffff;
                        @media (max-width: 799px){
                            width: 20%;
                            height: 20px;
                        }
                        :hover{
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        >section{
            margin: 5% 0 0 10%;
            width: 18%;
            height: 70px;
            text-align: center;
            padding: 20px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            @media (max-width: 799px){
                width: 80%;
                margin-right: 5px;
                padding: 10px;
                height: 50px;
            }
            >h2{
                color: #ffffff;
                font-weight: 700;
                @media (max-width: 799px){
                    font-size: 20px;
                }
            }
        }
    }
`;