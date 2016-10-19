/**
 * 垂直叉分器
 * 
 * @param layouter
 *          {Layouter} 布局对象
 * @param mainContainer
 *          {jQuery} 叉分器容器, 默认使用layouter容器
 * @returns {VerticalPrinter}
 */
function VerticalPrinter(layouter, mainContainer) {
  if (!(this instanceof arguments.callee)) return new arguments.callee();
  var $thisObj  = this;
      _conf     = {
                    layouter    : layouter,
                    mainCtnr    : (mainContainer instanceof jQuery)?mainContainer:layouter.getMainContainer(),
                    spliterCtnr : null,
                    left        : null,
                    right       : null
                  };

  /**
   * 设置左侧宽度
   * @param width {Number} 左侧宽度, 0.1~1.0使用百分比, 大于1使用像素
   * @returns {VerticalPrinter}
   */
  this.setLeftwardWidth = function(width) {
    var wVal        = parseFloat(width),
        usePercent  = (0<=wVal && wVal<=1),
        unit        = usePercent?"%":"px",
        leftVal     = wVal,
        rightVal    = _conf.spliterCtnr.width()-wVal;

    if (usePercent) {
      leftVal    = wVal*100,
      rightVal = 100-leftVal;
    }

    _conf.left.css("width", leftVal+unit);
    _conf.right.css("width", rightVal+unit);
    return $thisObj;
  };

  (function init(){
    _conf.spliterCtnr = controlFactory.createMainPanel();
    _conf.left        = controlFactory.createLeftwardPanel();
    _conf.right       = controlFactory.createRightwardPanel();

    _conf.spliterCtnr
      .append(_conf.left)
      .append(_conf.right)
      .appendTo(_conf.mainCtnr);

    $thisObj.setLeftwardWidth(0.5);
  })();

  return this;
}