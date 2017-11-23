// 公用校验方法。

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
