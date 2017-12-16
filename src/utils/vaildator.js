// 公用校验方法。
import {message} from 'antd'
/**
 * 校验字符串长度
 * @param  {String}   value    字符串
 * @param  {Number}   min      最小值
 * @param  {Number}   max      最大长度
 * @param  {String}   message  提示信息
 * @param  {Function} callback 校验的回调函数
 * @return {void}
 */
export const validatorByteLen = (min, max, message) => {
    return {
        validator: (rules, value, callback) => {
            const length = getStringByteLength(value);
            if(length < min || length > max) {
                callback([message]);
            } else {
                callback();
            }
        }
    }
}

/**
 * 校验字符串长度
 * @param  {String}   value    字符串
 * @param  {Number}   min      最小值
 * @param  {Number}   max      最大长度
 * @param  {String}   message  提示信息
 * @param  {Function} callback 校验的回调函数
 * @return {void}
 */
export const validatorMaxByteLen = (max, message) => {
    return {
        validator: (rules, value, callback) => {
            if(value && getStringByteLength(value) > max) {
                callback([message]);
            } else {
                callback();
            }
        }
    }
}

/**
 * 获取字符串字节长度，中文占两个字节
 * @param value
 * @return {number}
 */
export function getStringByteLength(value) {
    if (!value) return 0;
    let length = value.length;

    for (let i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 127) {
            length++;
        }
    }

    return length;
}

/**
 * 校验是否含有空格
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const validatorSpace = message => {
    return {
        pattern: /^[^ ]+$/,
        message
    };
};
/**
 *
 * @param modelPropertyVoList
 * @param data
 * @returns {boolean}
 */
export const validat = (modelPropertyVoList,data) => {
    let arr = _.without(Object.values(data), '' ,undefined, null)
    if(modelPropertyVoList.length < 2){
        message.error('至少选择一个维度值',3)
        return false
    }else if(arr.length < 1){
        message.error('至少输入一种金额',3)
        return false
    }else {
        return true
    }
}

/**
 *只验证输入金额
 * @param data
 * @returns {boolean}
 */
export const validatSingle = (data) => {
    let arr = _.without(Object.values(data), '' ,undefined, null)
    if(arr.length < 1){
        message.error('至少输入一种金额',3)
        return false
    }else {
        return true
    }
}