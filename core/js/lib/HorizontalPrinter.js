/**
 * 布局打印器
 * 
 * @param layouter
 *          {Layouter} 布局管理器
 * @returns {Printer}
 */
function HorizontalPrinter(layouter) {
  if (!(layouter instanceof Layouter)) throw new Error("Invalid parameter 'layouter'");
  if (!(this instanceof arguments.callee)) return new arguments.callee();
  var $thisObj  = this,
       _conf    = {
                    layouter    : layouter,
                    mainCtnr    : layouter.getMainContainer(),
                    spliterCtnr : null,
                    top         : null,
                    bottom      : null
                  };
  $thisObj.conf = _conf;
  

  /**
   * 设置水平分割
   * @param height {Float} 顶部容器高度, 0.0~1.0之间表示百分比, 大于1使用像素表示
   * @returns {Printer}
   */
  this.setUpperHeight = function(height) {
    var hVal        = parseFloat(height),
        usePercent  = (0<=hVal && hVal<=1),
        unit        = usePercent?"%":"px",
        topVal      = hVal,
        bottomVal   = _conf.spliterCtnr.height()-hVal;

    if (usePercent) {
      topVal    = hVal*100,
      bottomVal = 100-topVal;
    }

    _conf.top.css("height", topVal+unit);
    _conf.bottom.css("height", bottomVal+unit);
    return $thisObj;
  };

  (function init(){
    // 初始化容器
    _conf.spliterCtnr  = controlFactory.createMainPanel();
    _conf.top         = controlFactory.createTopPanel();
    _conf.bottom      = controlFactory.createBottomPanel(); 
    _conf.spliterCtnr
      .append(_conf.top)
      .append(_conf.bottom)
      .appendTo(_conf.mainCtnr);
    
    $thisObj.setUpperHeight(0.5);
  })();

  return this;
}