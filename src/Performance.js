import React from 'react';
import ReactDOM from 'react-dom';
import Item from './components/item';

const rows = [
    {
        items: [
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg",
                icons: [    
                    {
                        name: "Clear Purple Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8062.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg"
                    },
                    {
                        name: "Clear Red Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8060.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8060_3.jpg"
                    },
                    {
                        name: "Ivory Tortoise Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8061.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8061_3.jpg"
                    }
                ],
                current: 0
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg",
                icons: [    
                    {
                        name: "Rose Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7338.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7338_3.jpg"
                    },
                    {
                        name: "Light Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7337.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7337_3.jpg"
                    },
                    {
                        name: "Silver",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7336.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg"
                    }
                ],
                current: 1
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg",
                icons: [    
                    {
                        name: "Dark Tortoise",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1138.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1138_3.jpg"
                    },
                    {
                        name: "Black Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1139.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg"
                    },
                    {
                        name: "Clear Gray",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1140.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1140_3.jpg"
                    },
                    {
                        name: "Clear",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1141.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1141_3.jpg"
                    }
                ],
                current: 2
            }
        ]
    
    },
    {
        items: [
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg",
                icons: [    
                    {
                        name: "Clear Purple Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8062.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg"
                    },
                    {
                        name: "Clear Red Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8060.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8060_3.jpg"
                    },
                    {
                        name: "Ivory Tortoise Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8061.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8061_3.jpg"
                    }
                ],
                current: 0
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg",
                icons: [    
                    {
                        name: "Rose Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7338.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7338_3.jpg"
                    },
                    {
                        name: "Light Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7337.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7337_3.jpg"
                    },
                    {
                        name: "Silver",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7336.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg"
                    }
                ],
                current: 1
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg",
                icons: [    
                    {
                        name: "Dark Tortoise",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1138.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1138_3.jpg"
                    },
                    {
                        name: "Black Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1139.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg"
                    },
                    {
                        name: "Clear Gray",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1140.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1140_3.jpg"
                    },
                    {
                        name: "Clear",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1141.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1141_3.jpg"
                    }
                ],
                current: 2
            }
        ]
    
    },
    {
        items: [
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg",
                icons: [    
                    {
                        name: "Clear Purple Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8062.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg"
                    },
                    {
                        name: "Clear Red Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8060.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8060_3.jpg"
                    },
                    {
                        name: "Ivory Tortoise Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8061.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8061_3.jpg"
                    }
                ],
                current: 0
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg",
                icons: [    
                    {
                        name: "Rose Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7338.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7338_3.jpg"
                    },
                    {
                        name: "Light Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7337.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7337_3.jpg"
                    },
                    {
                        name: "Silver",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7336.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg"
                    }
                ],
                current: 1
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg",
                icons: [    
                    {
                        name: "Dark Tortoise",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1138.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1138_3.jpg"
                    },
                    {
                        name: "Black Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1139.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg"
                    },
                    {
                        name: "Clear Gray",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1140.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1140_3.jpg"
                    },
                    {
                        name: "Clear",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1141.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1141_3.jpg"
                    }
                ],
                current: 2
            }
        ]
    
    },
    {
        items: [
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg",
                icons: [    
                    {
                        name: "Clear Purple Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8062.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg"
                    },
                    {
                        name: "Clear Red Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8060.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8060_3.jpg"
                    },
                    {
                        name: "Ivory Tortoise Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8061.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8061_3.jpg"
                    }
                ],
                current: 0
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg",
                icons: [    
                    {
                        name: "Rose Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7338.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7338_3.jpg"
                    },
                    {
                        name: "Light Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7337.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7337_3.jpg"
                    },
                    {
                        name: "Silver",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7336.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg"
                    }
                ],
                current: 1
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg",
                icons: [    
                    {
                        name: "Dark Tortoise",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1138.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1138_3.jpg"
                    },
                    {
                        name: "Black Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1139.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg"
                    },
                    {
                        name: "Clear Gray",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1140.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1140_3.jpg"
                    },
                    {
                        name: "Clear",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1141.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1141_3.jpg"
                    }
                ],
                current: 2
            }
        ]
    
    },
    {
        items: [
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg",
                icons: [    
                    {
                        name: "Clear Purple Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8062.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg"
                    },
                    {
                        name: "Clear Red Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8060.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8060_3.jpg"
                    },
                    {
                        name: "Ivory Tortoise Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8061.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8061_3.jpg"
                    }
                ],
                current: 0
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg",
                icons: [    
                    {
                        name: "Rose Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7338.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7338_3.jpg"
                    },
                    {
                        name: "Light Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7337.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7337_3.jpg"
                    },
                    {
                        name: "Silver",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7336.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg"
                    }
                ],
                current: 1
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg",
                icons: [    
                    {
                        name: "Dark Tortoise",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1138.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1138_3.jpg"
                    },
                    {
                        name: "Black Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1139.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg"
                    },
                    {
                        name: "Clear Gray",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1140.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1140_3.jpg"
                    },
                    {
                        name: "Clear",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1141.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1141_3.jpg"
                    }
                ],
                current: 2
            }
        ]
    
    },
    {
        items: [
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg",
                icons: [    
                    {
                        name: "Clear Purple Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8062.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8062_3.jpg"
                    },
                    {
                        name: "Clear Red Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8060.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8060_3.jpg"
                    },
                    {
                        name: "Ivory Tortoise Pink",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pl8061.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pl8061_3.jpg"
                    }
                ],
                current: 0
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg",
                icons: [    
                    {
                        name: "Rose Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7338.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7338_3.jpg"
                    },
                    {
                        name: "Light Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7337.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7337_3.jpg"
                    },
                    {
                        name: "Silver",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/mt7336.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/mt7336_3.jpg"
                    }
                ],
                current: 1
            },
            {
                bigImg: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg",
                icons: [    
                    {
                        name: "Dark Tortoise",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1138.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1138_3.jpg"
                    },
                    {
                        name: "Black Gold",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1139.jpg",
                        imgUrl:"https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1139_3.jpg"
                    },
                    {
                        name: "Clear Gray",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1140.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1140_3.jpg"
                    },
                    {
                        name: "Clear",
                        iconUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_32,q_85,w_32/v1/product/color/pm1141.jpg",
                        imgUrl: "https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_300,q_85,w_600/v1/product/frame/gray/pm1141_3.jpg"
                    }
                ],
                current: 2
            }
        ]
    
    }
]
function Index() {
    return <>
        {
            rows.map((row, index)=>{
                return <div className="studio-content studio-product" key={index}>
                    { row.items.map( (item, subIndex) => {
                        return <Item item={item} key={subIndex}></Item>
                    }) }
                </div>
            })
        }
        
        
    </>
}

ReactDOM.hydrate(<Index />, document.getElementById('root'));

export default Index