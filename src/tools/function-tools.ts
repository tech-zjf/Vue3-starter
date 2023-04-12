class FunctionTools {
  /** 节流 */
  static throttle<T extends (...args: any) => any>(fn: any, timer: number) {
    let loop = true;
    return function (this: ThisType<T>, ...args: Parameters<T>) {
      if (!loop) {
        return;
      }
      loop = false;
      setTimeout(() => {
        fn.apply(this, arguments);
        loop = true;
      }, timer);
    };
  }

  /**
   * 日期小于9拼接 0
   */
  static addZero(date: number) {
    return date > 9 ? date : "0" + date;
  }
}

export default FunctionTools;
