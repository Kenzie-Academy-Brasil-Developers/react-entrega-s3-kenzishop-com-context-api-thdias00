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
        >div{
            padding-right: 5%;
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
            >span{
                width: 25px;
                text-align: center;
                color: white;
                position: absolute;
                background: #f33330;
                border: transparent;
                border-radius: 100%;
                padding: 5px;
            }
        }
    }
    >main{
        background: #999999;
        >ul{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            >li{
                width: 31%;
                display: flex;
                margin: 1%;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                flex-direction: column;
                align-items: center;
                padding: 5%;
                @media (max-width: 799px){
                    width: 48%;
                    text-align: center;
                }
                :hover{
                    background: #ffffff;
                    >span, p{
                        color: #000000;
                    }
                }
                >img{
                    width: 50%;
                    height: 60%;
                }
                >span, p{
                    font-weight: 700;
                    color: white;
                }
                >button{
                    background: #000000;
                    font-weight: 700;
                    color: white;
                    margin-top: 2%;
                    padding: 5%;
                    border: transparent;
                    border-radius: 8px;
                    :hover{
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;