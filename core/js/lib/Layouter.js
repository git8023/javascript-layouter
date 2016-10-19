/**
 * 布局管理器
 * 
 * @param $ctnr
 *          {jQuery} 布局管理器顶层容器
 * @returns {Layouter}
 */
function Layouter($ctnr) {
  if (!(this instanceof arguments.callee)) return new arguments.callee();
  var $thisObj  = this,
      _conf     = {
                    mainContainer : $ctnr
                  };

  /** 获取主容器 */
  this.getMainContainer     = function(){return _conf.mainContainer;};

  /** 获取水平分割器 */
  this.getHorizontalPrinter = function(){return new HorizontalPrinter($thisObj);};

  /** 获取垂直叉分器 */
  this.getVerticalPrinter   = function($ctnr){return new VerticalPrinter($thisObj, $ctnr);};

  return this;
}