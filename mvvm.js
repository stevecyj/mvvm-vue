class MVVM {
  constructor(config) {
    //mvvm root
    this.$el = config.el;
    this.$data = config.data;
    this.methods = config.methods;

    object.keys(this.$data).forEach((key) => {
      this.DataProxy(key);
    });
  }
  //資料代理 this.xxx = this.$data.xxx
  DataProxy() {
    let that = this;
    Object.defineProperty(that, key, {
      configurable: false,
      enumerable: true,
      get() {
        return this.$data[key];
      },
      set(val) {
        this.$data[key] = val;
      },
    });
  }
}
