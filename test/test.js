var TestDebug = true;
TestDebug && window.console && console.log("test.js");

$(function() {
  TestFn.instance = new TestFn(TestDebug);
  TestFn.instance.initEvents();
  TestFn.instance.initData();
});

/**
 * @description test.html.jsp 页面交互
 * @author Huang.Yong
 * @version 0.1
 * @date 2016年10月19日-下午4:56:30
 */
function TestFn(debug) {
  if (!(this instanceof TestFn)) { return new TestFn(debug); }

  var $thisObj = this, 
      baseCtnr = $(".container");
  $thisObj.debug = debug;

  /** 初始化事件 */
  this.initEvents = function() {
    try {

    } catch (e) {
      log(e.message);
    }
  };

  /** 初始化数据 */
  this.initData = function() {
    try {
      setLayout();
    } catch (e) {
      log(e.message);
    }
  };

  // 设置布局
  function setLayout() {
    var layouter  = new Layouter(baseCtnr),
        hPrinter  = layouter.getHorizontalPrinter();
    hPrinter.setUpperHeight(0.1);

    var $bottom   = hPrinter.conf.bottom,
        vPrinter  = layouter.getVerticalPrinter($bottom);
    vPrinter.setLeftwardWidth(0.1);
  }

  function log(msg) {
    $thisObj.debug && console && console.log(msg);
  }

  return this;
}