try {
    (() => {
        const __$$app$$__ = __$$hmAppManager$$__.currentApp;
        function getApp() {
            return __$$app$$__.app;
        }
        function getCurrentPage() {
            return __$$app$$__.current && __$$app$$__.current.module;
        }
        const __$$module$$__ = __$$app$$__.current;
        const h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__));
        const {px} = __$$app$$__.__globals__;
        const logger = Logger.getLogger('watchface6');
        __$$module$$__.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 416,
                    h: 416,
                    src: '2.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 0,
                    hour_startX: 73,
                    hour_startY: 81,
                    hour_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    hour_space: 0,
                    hour_unit_sc: '13.png',
                    hour_unit_tc: '13.png',
                    hour_unit_en: '13.png',
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    minute_follow: 1,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_ANIM, {
                    x: 128,
                    y: 162,
                    anim_path: '',
                    anim_prefix: 'first_anim_timzj',
                    anim_ext: 'png',
                    anim_fps: 1,
                    anim_size: 8,
                    display_on_restart: false,
                    repeat_count: 0,
                    anim_status: hmUI.anim_status.START,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 69,
                    y: 256,
                    type: hmUI.data_type.STEP,
                    font_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    align_h: hmUI.align.LEFT,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 41,
                    y: 256,
                    src: '24.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 69,
                    y: 291,
                    type: hmUI.data_type.CAL,
                    font_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    align_h: hmUI.align.LEFT,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 41,
                    y: 289,
                    src: '25.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 69,
                    y: 220,
                    type: hmUI.data_type.BATTERY,
                    font_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    align_h: hmUI.align.LEFT,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 40,
                    y: 219,
                    src: '26.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 63,
                    y: 183,
                    type: hmUI.data_type.DISTANCE,
                    font_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    align_h: hmUI.align.LEFT,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '28.png',
                    unit_tc: '28.png',
                    unit_en: '28.png',
                    imperial_unit_sc: '29.png',
                    imperial_unit_tc: '29.png',
                    imperial_unit_en: '29.png',
                    dot_image: '27.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 41,
                    y: 183,
                    src: '30.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_val: new Date().getHours(),
                    hour_zero: 0,
                    hour_startX: 40,
                    hour_startY: 97,
                    hour_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    hour_space: 12,
                    hour_align: hmUI.align.CENTER_H,
                    minute_val: new Date().getMinutes(),
                    minute_zero: 1,
                    minute_startX: 239,
                    minute_startY: 97,
                    minute_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    minute_space: 0,
                    minute_align: hmUI.align.CENTER_H,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 170,
                    y: 100,
                    w: 60,
                    h: 100,
                    src: '31.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 98,
                    y: 275,
                    week_en: [
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png'
                    ],
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 150,
                    y: 300,
                    src: '39.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    year_startX: 316,
                    year_startY: 223,
                    year_sc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    year_tc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    year_en_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    year_align: hmUI.align.LEFT,
                    year_zero: 1,
                    year_space: 0,
                    year_is_character: false,
                    month_startX: 10,
                    month_startY: 223,
                    month_en_array: [
                        '40.png',
                        '41.png',
                        '42.png',
                        '43.png',
                        '44.png',
                        '45.png',
                        '46.png',
                        '47.png',
                        '48.png',
                        '49.png',
                        '50.png',
                        '51.png'
                    ],
                    month_align: hmUI.align.LEFT,
                    month_zero: 0,
                    month_follow: 0,
                    month_space: 0,
                    month_is_character: true,
                    day_startX: 246,
                    day_startY: 223,
                    day_sc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    day_tc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    day_en_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    day_align: hmUI.align.LEFT,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: 0,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
            },
            onInit() {
                logger.log('index page.js on init invoke');
            },
            build() {
                this.init_view();
                logger.log('index page.js on ready invoke');
            },
            onDestroy() {
                logger.log('index page.js on destroy invoke');
            }
        });
        ;
    })();
} catch (e) {
    console.log('Mini Program Error', e);
    e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
    ;
}