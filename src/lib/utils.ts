/**
 * 过滤有效的属性
 * @param props 传递的属性
 * @param accept 接受的属性
 */
const filterAttrs = (props: any, accept: Array<string>): any => {
    let attrs : any = {};
    for (let key in (props??{})) {
        if (accept.indexOf(key) > -1) {
            attrs[key] = props[key];
        }
    }
    return attrs;
}

export default {
    filterAttrs
}