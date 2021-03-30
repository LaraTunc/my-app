import Custom1 from "../Custom1";

const customCards = {
  custom1: {
    id: "custom1",
    type: "custom",
    component: <Custom1 />,
    imagePath: [],
    html: (customMessage) => {
      return `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <style>
                            .background {
                                background-color: linen;
                                width: "100%";
                                height:"500px";
                                padding: 10px;
                                font-family: sans-serif;
                            } 
                            .wrapper {
                                display:flex;
                                justify-content:space-between;
                            }
                            h1 {
                                color: maroon;
                                text-align:center;
                                margin: 10px;
                                margin-bottom: 20px;
                            } 
                            .gif {
                                display: block; 
                                margin-left:auto; 
                                margin-right:auto;
                            } 
                            .left {
                                flex:1;
                            }
                            .right {
                                flex:1;
                                margin-left: 15px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="background">
                            <h1>Happy Birthday!</h1>
                            <div class="wrapper">
                                <div class="left"><img src="cid:unique@nodemailer.com" class="gif"/></div>
                                <div class="right"><p>${customMessage}</p></div>
                            </div>
                        </div>
                    </body>
                </html>`;
    },
  },
};

export default customCards;
