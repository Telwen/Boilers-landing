var iCur_pos = 6;
var oItems = {
    0: {
        snm: 'PROTHERM Ягуар 24 JTV (24 кВт)',
        url: 'img/ГК1.jpg',
        disc: '34 380 руб.'
    },
    1: {
        snm: 'PROTHERM Ягуар 24 JTV (24 кВт)',
        url: 'img/ГК1.jpg',
        disc: '34 380 руб.'
    },
    2: {
        snm: 'Baxi MAIN-5 14 F (14 кВт)',
        url: 'img/ГК2.jpg',
        disc: '35 500 руб.'
    },
    3: {
        snm: 'Bosch Котел настенный WBN6000-12C RN S5700',
        url: 'img/ГК3.jpg',
        disc: '37 100 руб.'
    },
    4: {
        snm: 'PROTHERM Котел Рысь К 25 MKO',
        url: 'img/ГК4.jpg',
        disc: '60 400 руб.'
    },
    5: {
        snm: 'Vaillant turboTEC plus VU 202/5 5 (Н RU/VE), 20 кВт',
        url: 'img/ГК5.jpg',
        disc: '60 600 руб.'
    },
    6: {
        snm: 'Vaillant atmoVIT VK INT 254/1-5',
        url: 'img/ГК6.jpg',
        disc: '102 500 руб.'
    },
    7: {
        snm: 'ЭВАН С1 - 18',
        url: 'img/ЭК1.png',
        disc: '24 250 руб.'
    },
    8: {
        snm: 'РЭКО 15П (15 кВт) 380 В',
        url: 'img/ЭК2.png',
        disc: '25 250 руб.'
    },
    9: {
        snm: 'РЭКО 9ПМ (9 кВт) 380/220 В Миникотельная',
        url: 'img/ЭК3.jpg',
        disc: '28 900 руб.'
    },
    10: {
        snm: 'STOUT 27 кВт',
        url: 'img/ЭК4.jpg',
        disc: '38 000 руб.'
    },

    11: {
        snm: 'Vaillant eloBLOCK 18KVR14 (VE 18, 18 кВт)',
        url: 'img/ЭК5.jpg',
        disc: '47 150 руб.'
    },

    12: {
        snm: ' РусНИТ 2100М (100 кВт) 380В',
        url: 'img/ЭК6.jpg',
        disc: '60 000 руб.'
    },
    13: {
        snm: 'Viadrus U22 C-3',
        url: 'img/ТК1.jpg',
        disc: '64 450 руб.'
    },
    14: {
        snm: 'Bosch Solid 2000 B SFU 20 HNS',
        url: 'img/ТК2.jpg',
        disc: '82 100 руб.'
    },
    15: {
        snm: 'Bosch Solid 2000 B SFU 32 HNS',
        url: 'img/ТК3.jpg',
        disc: '98 700 руб.'
    },
    16: {
        snm: 'Viadrus U22 С-9/D-9 ',
        url: 'img/ТК4.jpg',
        disc: '103 200'
    },
    17: {
        snm: 'Viadrus U22 С-10/D-10 ',
        url: 'img/ТК1.jpg',
        disc: '109 500 руб.'
    },
    18: {
        snm: 'Bosch K 45-1 S62-RU',
        url: 'img/ТК6.jpg',
        disc: '141 300 руб.'
    },
    19: {
        snm: 'Kiturami STSO-13 (15,1 кВт)',
        url: 'img/ДК1.jpg',
        disc: '32 500 руб.'
    },
    20: {
        snm: 'Kiturami TURBO - 17R (19,8 кВт)',
        url: 'img/ДК2.jpg',
        disc: '35 250 руб.'
    },
    21: {
        snm: 'Kiturami STSO-21 (23,2 кВт)',
        url: 'img/ДК1.jpg',
        disc: '41 600 руб.'
    },
    22: {
        snm: 'Kiturami TURBO - 21R (24,4 кВт)',
        url: 'img/ДК2.jpg',
        disc: '45 200 руб.'
    },
    23: {
        snm: 'Kiturami TURBO - 30R (34,9 кВт)',
        url: 'img/ДК2.jpg',
        disc: '46 900 руб.'
    },
    24: {
        snm: 'Kiturami STSO-30 (34,9 кВт)',
        url: 'img/ДК1.jpg',
        disc: '52 000 руб.'
    },
    25: {
        snm: 'Grundfos MAGNA1 32-120',
        url: 'img/Н1.png',
        disc: '26 400 руб.'
    },
    26: {
        snm: 'Grundfos UPS 25-80 N 1х230 В',
        url: 'img/Н2.png',
        disc: '28 950 руб.'
    },
    27: {
        snm: 'Grundfos MAGNA 32-60',
        url: 'img/Н3.jpg',
        disc: '30 650 руб.'
    },
    28: {
        snm: 'Grundfos CMB 3-46',
        url: 'img/Н4.jpg',
        disc: '37 450 руб.'
    },
    29: {
        snm: 'Grundfos К-т для поддержания постоянного давления с насосом SQE 2-70 с каб. 60 м',
        url: 'img/Н5.png',
        disc: '100 550 руб.'
    },
    30: {
        snm: 'Grundfos TPE 125-160/4-S BUBE/BAQE',
        url: 'img/Н6.jpg',
        disc: '387 700 руб.'
    },
    31: {
        snm: ' Kermi Profil-K FK O 33/900/1400',
        url: 'img/РО1.png',
        disc: '20 100 руб.'
    },
    32: {
        snm: 'Полотенцесушитель Classic 480х1500 NP',
        url: 'img/РО2.jpg',
        disc: '24 800 руб.'
    },
    33: {
        snm: 'Kermi Profil-K FK O 33/600/3000',
        url: 'img/РО3.jpg',
        disc: '25 200 руб.'
    },
    34: {
        snm: 'РС 2-500-48 1/2 RAL9010',
        url: 'img/РО4.jpg',
        disc: '26 500 руб.'
    },
    35: {
        snm: 'Kermi Profil-V FTV 33/900/3000',
        url: 'img/РО5.jpeg',
        disc: '38 500 руб.'
    },
    36: {
        snm: 'Kermi Profil-K FK O 33/900/3000',
        url: 'img/РО6.jpg',
        disc: '39 400 руб.'
    },
    37: {
        snm: 'Buderus RC310',
        url: 'img/СУ1.png',
        disc: '20 950 руб.'
    },
    38: {
        snm: 'Buderus Logamatic MC110',
        url: 'img/СУ2.jpg',
        disc: '28 300 руб.'
    },
    39: {
        snm: 'TECH Контроллер',
        url: 'img/СУ3.png',
        disc: '32 800 руб.'
    },
    40: {
        snm: 'Vaillant VRC 630/3',
        url: 'img/СУ4.jpg',
        disc: '34 900 руб.'
    },
    41: {
        snm: 'KHG BAXI RVA 47',
        url: 'img/СУ5.jpg',
        disc: '45 500 руб.'
    },
    42: {
        snm: 'Buderus Logamatic 4211 с пультом MEC2',
        url: 'img/СУ6.jpg',
        disc: '81 287 руб.'
    }


};

/**
 * Меняет блок с товарами
 * @param flag - 1 - next, 0 - previous
 * @returns {boolean}
 */
function changeFadeInUp(flag) {
    var item_helper = $('.item-helper').parent('.row');
    var iLen = 6;
    var iCur_pos = 0;

    if (flag == 0) {
        iCur_pos = $('.item-helper').parent('.row').children().eq(0).data('pos');
    } else if (flag == 1) {
        iCur_pos = $('.item-helper').parent('.row').children().eq(iLen-1).data('pos');
    }

    if (iCur_pos == 1 || iCur_pos == Object.keys(oItems).length - 1) {
        return false;
    }

    item_helper.empty();
    console.log('begin ' + iCur_pos);


    for (var i=0; i < iLen; i++) {
        var iCounter = 0;

        if (flag == 0) {
            iCur_pos--;
        } else {
            iCur_pos++;
            iCounter = i;
        }

        if (iCur_pos in oItems) {
            console.log(oItems[iCur_pos].snm);
            if (flag == 0) {
                item_helper.prepend('<div class="col-md-6 col-lg-4 wow fadeInUp item-helper" data-wow-duration="3s" data-pos="' + iCur_pos + '"></div>');
            } else {
                item_helper.append('<div class="col-md-6 col-lg-4 wow fadeInUp item-helper" data-wow-duration="3s" data-pos="' + iCur_pos + '"></div>');
            }
            item_helper.children('.item-helper').eq(iCounter).append('<img src="' + oItems[iCur_pos].url + '" alt="items">');
            item_helper.children('.item-helper').eq(iCounter).append('<h4>' + oItems[iCur_pos].snm + '</h4>');
            item_helper.children('.item-helper').eq(iCounter).append('<h5>' + oItems[iCur_pos].disc + '</h5>');
        } else {
            iCur_pos--;
        }

        console.log(iCur_pos);
    }
    if (iCur_pos == 6 || iCur_pos == 1) {
        $('#sectionhead-title').text('Газовые котлы');
    } else if (iCur_pos == 12 || iCur_pos == 7) {
        $('#sectionhead-title').text('Электрические котлы');
    }else if (iCur_pos == 18 || iCur_pos == 13) {
        $('#sectionhead-title').text('Твердотопливные котлы');
    }else if (iCur_pos == 24 || iCur_pos == 19) {
        $('#sectionhead-title').text('Дизильные котлы');
    }else if (iCur_pos == 30 || iCur_pos == 25) {
        $('#sectionhead-title').text('Насосы');
    }else if (iCur_pos == 36 || iCur_pos == 31) {
        $('#sectionhead-title').text('Радиаторы отопления');
    }else if (iCur_pos == 42 || iCur_pos == 37) {
        $('#sectionhead-title').text('Системы управления');
    }
}

function changeFadeInUp2(flag) {
    var item_helper = $('.item-helper').parent('.row');
    var iLen = 6;
    if ( (flag == 0 && (iCur_pos < 1 || iCur_pos < 7)) || (flag == 1 && Object.keys(oItems).length <= iCur_pos + 1) ) {
    // if ( (flag == 0 && iCur_pos < 6) || (flag == 1 && Object.keys(oItems).length <= iCur_pos + 1) ) {
        // if (flag == 0) {
        //     $('.nav_buttons').children('.button').eq(0).hide();
        // } else if (flag == 1) {
        //     $('.nav_buttons').children('.button').eq(1).hide();
        // }
        return false;
    }

    // if ($('.nav_buttons').children('.button').eq(0).css('display') == 'none') {
    //     $('.nav_buttons').children('.button').eq(0).show();
    // }
    // if ($('.nav_buttons').children('.button').eq(1).css('display') == 'none') {
    //     $('.nav_buttons').children('.button').eq(1).show();
    // }

    item_helper.empty();
    console.log('begin ' + iCur_pos);
    if (flag == 0) {
        iCur_pos = iCur_pos - 5;
    }

    if (flag == 0 && iCur_pos < 6) {
        iCur_pos = 7;
    }

    if (flag == 1 && iCur_pos == 1) {
        iCur_pos = 6;
    }

    for (var i=0; i < iLen; i++) {
        var iCounter = 0;

        if (flag == 0) {
            iCur_pos--;
        } else {
            iCur_pos++;
            iCounter = i;
        }

        if (iCur_pos in oItems) {
            console.log(oItems[iCur_pos].snm);
            if (flag == 0) {
                item_helper.prepend('<div class="col-md-6 col-lg-4 wow fadeInUp item-helper" data-wow-duration="3s"></div>');
            } else {
                item_helper.append('<div class="col-md-6 col-lg-4 wow fadeInUp item-helper" data-wow-duration="3s"></div>');
            }
            item_helper.children('.item-helper').eq(iCounter).append('<img src="' + oItems[iCur_pos].url + '" alt="items">');
            item_helper.children('.item-helper').eq(iCounter).append('<h4>' + oItems[iCur_pos].snm + '</h4>');
            item_helper.children('.item-helper').eq(iCounter).append('<h5>' + oItems[iCur_pos].disc + '</h5>');
        } else {
            iCur_pos--;
        }

        console.log(iCur_pos);
    }
    if (iCur_pos == 6 || iCur_pos == 1) {
        $('#sectionhead-title').text('Газовые котлы');
    } else if (iCur_pos == 12 || iCur_pos == 7) {
        $('#sectionhead-title').text('Электрические котлы');
    }else if (iCur_pos == 18 || iCur_pos == 13) {
        $('#sectionhead-title').text('Твердотопливные котлы');
    }else if (iCur_pos == 24 || iCur_pos == 19) {
        $('#sectionhead-title').text('Дизильные котлы');
    }else if (iCur_pos == 30 || iCur_pos == 25) {
        $('#sectionhead-title').text('насосы');
    }else if (iCur_pos == 36 || iCur_pos == 31) {
        $('#sectionhead-title').text('Радиаторы отопления');
    }else if (iCur_pos == 42 || iCur_pos == 37) {
        $('#sectionhead-title').text('Системы управления');
    }
}