/** 控件工厂 */
var controlFactory = new ControlFactory();
function ControlFactory() {
  if (!(this instanceof arguments.callee)) return new arguments.callee();
  var $thisObj  = this,
      CLASSES   = {
                    TOP_PANEL       : "top-panel",
                    MAIN_PANEL      : "main-panel",
                    BOTTOM_PANEL    : "bottom-panel",
                    LEFTWARD_PANEL  : "leftward-panel",
                    RIGHTWARD_PANEL : "rightward-panel",
                  };

  /** 创建面板 */
  this.createPanel=function(){return $("<div/>");};
  /** 创建主面板 */
  this.createMainPanel=function(){return $thisObj.createPanel().addClass(CLASSES.MAIN_PANEL);}; 
  /** 创建顶部面板 */
  this.createTopPanel=function(){return $thisObj.createPanel().addClass(CLASSES.TOP_PANEL);};
  /** 创建底部面板 */
  this.createBottomPanel=function(){return $thisObj.createPanel().addClass(CLASSES.BOTTOM_PANEL);};
  /** 创建左侧面板 */
  this.createLeftwardPanel=function(){return $thisObj.createPanel().addClass(CLASSES.LEFTWARD_PANEL);};
  /** 创建右侧面板 */
  this.createRightwardPanel=function(){return $thisObj.createPanel().addClass(CLASSES.RIGHTWARD_PANEL);};
  
  return this;
}