type isType =
  | "String"
  | "Number"
  | "Boolean"
  | "RegExp"
  | "Promise"
  | "Array"
  | "Object"
  | "Date";

class IsTools {
  /**
   * 判断是否为空对象
   */
  static isEmptyObj(obj: Object) {
    return Object.keys(obj).length === 0;
  }

  /**
   * 判断数据类型
   */
  static is(val: any, type: isType) {
    return Object.prototype.toString.call(val) === `[object ${type}]`;
  }

  /**
   * 是否为手机号
   */
  static isPhone(phone: string) {
    let phoneRegxp = /^(?:(?:\+|00)86)?1\d{10}$/;
    return phoneRegxp.test(phone);
  }
}
export default IsTools;
