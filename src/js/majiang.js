/*!
 *  Fever麻将 v2.4.16
 *
 *  Copyright(C) 2017 Satoshi Kobayashi
 *  Released under the MIT license
 *  https://github.com/kobalab/Majiang/blob/master/LICENSE
 */
"use strict";
const Majiang = require('@kobalab/majiang-core');
const threeScore = require('./rule').threePlayerSimpleScore;
Majiang.rule = ((orig) => (param = {}) => {
    const r = orig(param);
    if (r['3p簡易スコア使用'] && !r['3p簡易スコア表']) {
        r['3p簡易スコア表'] = threeScore;
    }
    return r;
})(Majiang.rule);
global.Majiang = Majiang;
global.Majiang.AI = require('@kobalab/majiang-ai');
global.Majiang.UI = require('@kobalab/majiang-ui');
global.Majiang.VERSION = '2.4.16-san';
global.jQuery = require('jquery');
global.$ = jQuery;
