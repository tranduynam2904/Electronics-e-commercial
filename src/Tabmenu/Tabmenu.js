import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import './Tabmenu.css'
export default function Tabmenu() {
    const items = [
        {
            label: 'Laptop Gaming', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Laptop Asus',
                        items: [{ label: 'Laptop Asus TUF Gaming FX506LHB-HN188W' }, { label: 'Laptop Asus TUF Gaming FX506HC-HN144W' }]
                    },
                    {
                        label: 'Laptop Msi',
                        items: [{ label: 'Laptop Gaming MSI GF63 Thin 11SC 664VN' }, { label: 'Laptop Gaming MSI Katana 15 B13VEK 1205VN' }]
                    }
                ],
                [
                    {
                        label: 'Laptop Acer',
                        items: [{ label: 'Laptop Gaming Acer Nitro 5 AN515 45 R6EV' }, { label: 'Laptop Gaming Acer Nitro 5 Eagle AN515 57 54MV' }]
                    },
                    {
                        label: 'Laptop Gigabyte',
                        items: [{ label: 'Laptop Gaming Gigabyte G5 GD 51VN123SO' }, { label: 'Laptop Gaming Gigabyte G5 GE 51VN213SH' }]
                    }
                ]
            ]
        },
        {
            label: 'Office Laptop', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'Laptop Lenovo',
                        items: [{ label: 'Laptop Lenovo Ideapad 3 15IAU7' }, { label: 'Laptop Lenovo ThinkBook 14 G3 ACL' }]
                    },
                    {
                        label: 'Laptop HP',
                        items: [{ label: 'Laptop HP 15s fq2716TU' }, { label: 'Laptop HP Pavilion 15 eg2082TU' }]
                    },
                ],
                [
                    {
                        label: 'Macbook',
                        items: [
                            { label: 'Laptop Apple MacBook Air M1 2020' },
                            { label: 'Laptop Apple MacBook Pro 14 M1 Pro 2021' },
                            { label: 'Laptop Apple MacBook Air M2 2022' },
                            { label: 'Laptop Apple MacBook Pro M2 2022' },
                        ]
                    },
                    {
                        label: 'Laptop Acer',
                        items: [
                            { label: 'Laptop Acer Aspire 3 A315 58 54XF' },
                            { label: 'Laptop Acer Aspire 3 A315 57 379K' },
                            { label: 'Laptop Acer Aspire 5 A514 54 511G' },
                            { label: 'Laptop Acer Aspire 7 Gaming A715 42G R05G' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Laptop Asus',
                        items: [
                            { label: 'Laptop Asus Vivobook X415EA' },
                            { label: 'Laptop Asus Vivobook 15 X1502ZA' },
                            { label: 'Laptop Asus VivoBook X515MA' },
                            { label: 'Laptop Asus Vivobook 14X OLED A1403ZA' },
                        ]
                    },
                    {
                        label: 'Laptop Dell',
                        items: [
                            { label: 'Laptop Dell Vostro 3510' },
                            { label: 'Laptop Dell Vostro 3520' },
                            { label: 'Laptop Dell Inspiron 15 3520' },
                            { label: 'Laptop Dell Inspiron 16 5620' },
                        ]
                    }
                ]
            ]
        },

        {
            label: 'Gaming Mouse', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Logitech',
                        items: [
                            { label: 'Logitech G102 Gen II Lightsync RGB Gaming (Black)' },
                            { label: 'Logitech G403 Hero Gaming (Black)' },
                            { label: 'Logitech G502 Hero Gaming (Black)' },

                        ]
                    },
                    {
                        label: 'Fuhlen',
                        items: [
                            { label: 'Fuhlen G90 Pink RGB Optical Gaming (Pink)' },
                            { label: 'Fuhlen D90S RGB Dual Mode 2.4G/Type-C (Black)' },
                            { label: 'Fuhlen G90 RGB Optical Gaming (Black)' }
                        ]
                    },
                    {
                        label: 'Dare-U',
                        items: [
                            { label: 'Dare-U LM130S RGB Gaming (Black)' },
                            { label: 'DareU A960S Artic RGB Ultra LightWeight (White)' },
                            { label: 'DareU EM901X RGB Superlight Wireless Pink' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Royal Kludge',
                        items: [
                            { label: 'Royal Kludge RM100 gaming Led (Black)' },
                            { label: 'Royal Kludge RK102 RGB Gaming (Black)' },
                            { label: 'Royal Kludge RM502 RGB Gaming (Black)' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Asus',
                        items: [
                            { label: 'Asus TUF Gaming M4 Wireless (Black)' },
                            { label: 'Asus ROG Keris Gaming (Black)' },
                            { label: 'Asus ROG Keris Wireless' },
                            { label: 'Asus ROG Gladius III Wireless Aimpoint' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Darmoshark',
                        items: [
                            { label: 'Darmoshark N1 Gaming' },
                            { label: 'Darmoshark N3 Wireless (White)' },
                            { label: 'Darmoshark N3 Wireless (Black)' },

                        ]
                    }
                ]
            ]
        },
        {
            label: 'Office Mouse', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Logitech',
                        items: [
                            { label: 'Logitech B100' },
                            { label: 'Logitech M240 Silent Bluetooth (Black)' },
                            { label: 'Logitech Signature M650 Size M (Black)' },
                            { label: 'Logitech Signature M650 Size M (White)' },
                        ]
                    },
                    {
                        label: 'FD',
                        items: [
                            { label: 'FD I210 Wireless (White)' },
                            { label: 'FD I210 Wireless (Black)' },
                            { label: 'FD I210 Wireless (Hồng)' },
                            { label: 'FD i330H Wireless (blue)' },
                        ]
                    },
                    {
                        label: 'E-Dra',
                        items: [
                            { label: 'E-Dra EM601 V2 (Black)' },
                            { label: 'E-Dra EM6102 RGB (White)' },
                            { label: 'E-Dra EM6102 RGB (Pink)' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Newmen',
                        items: [
                            { label: 'Newmen F007 Wireless (Black)' },
                            { label: 'Newmen F368 Wireless (Black White)' }
                        ]
                    }
                ]
            ]
        },
        {
            label: 'Mechanical Keyboard', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Cooler Master',
                        items: [
                            { label: 'Cooler Master SK622 Silver White Low Profile Red Switch RGB TKL Wireless' },
                            { label: 'Cooler Master SK650 Cherry MX RGB Low Profile Red Switch (Black) SK-650-GKLR1-US' },
                            { label: 'Cooler Master SK622 Space Gray Low Profile Red Switch RGB TKL Wireless (Black)' },
                        ]
                    },
                    {
                        label: 'Dare-U',
                        items: [
                            { label: 'DareU EK8100 RGB (Red Switch) - Black' },
                            { label: 'DareU EK810G Wireless (Blue Switch) - Black' },
                            { label: 'DAREU EK87 (Blue Switch) - Black (Multi-LED)' }

                        ]
                    },
                    {
                        label: 'SPARTAN',
                        items: [
                            { label: 'SPARTAN TC3218 Black Gray (Blue Switch LED Rainbow)' },
                            { label: 'SPARTAN TC3218 Blue White (Blue Switch LED Rainbow)' },
                            { label: 'SPARTAN TC3218 Black - Yellow (Blue Switch, Led Rainbow)' }
                        ]
                    }
                ],
                [
                    {
                        label: 'E-Dra',
                        items: [
                            { label: 'E-Dra EK300 (Black)' },
                            { label: 'E-Dra EK387L Pink, Led White, Brown Switch' },
                            { label: 'E-Dra EK387 RGB Dark Warrior (Blue Switch)' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Fuhlen',
                        items: [
                            { label: 'Fuhlen Destroyer Led Rainbow Switch Optics (Black)' },
                            { label: 'Fuhlen Eraser LED Switch Optics (Black)' },
                            { label: 'Fuhlen D87s Led RGB Brown Switch (Black)' }
                        ]
                    }
                ]
            ]
        },
        {
            label: 'Membrane keyboard', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'I-Rocks',
                        items: [
                            { label: 'I-Rocks K62E RGB Gaming (Grey)' },
                            { label: 'I-Rocks K62E RGB Gaming (White)' },
                            { label: 'I-Rocks K64E Gaming Led Rainbow (Black)' },
                        ]
                    },
                    {
                        label: 'Royal Kludge',
                        items: [
                            { label: 'Royal Kludge KRX (M911) Led Gaming (Black)' },
                            { label: 'Royal Kludge RK911 (Black)' },
                            { label: 'Royal Kludge RK951 RGB Gaming (Black)' }

                        ]
                    },
                    {
                        label: 'Lightning',
                        items: [
                            { label: 'Lightning Hero Gaming Led Rainbow (Bronze)' },
                            { label: 'Lightning PR-8900Z Gaming Led Rainbow (Black)' },
                            { label: 'Lingtning Forever Gaming Led (Brown)' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Assassins',
                        items: [
                            { label: 'Assassins AK-8000 Led RGB Gaming (Silver)' },
                            { label: 'Assassins AK-5000 Plus Led Gaming (Grey)' },

                        ]
                    }
                ],
                [
                    {
                        label: 'Motospeed',
                        items: [
                            { label: 'Motospeed K90L Led Gaming (Black)' },
                            { label: 'Motospeed K60L Led Gaming (Black)' },
                        ]
                    }
                ]
            ]
        }
    ];

    return (
        <>
            <MegaMenu style={{ width: '100%' }} model={items} orientation="vertical" breakpoint="767px" />
            </>
    )
}