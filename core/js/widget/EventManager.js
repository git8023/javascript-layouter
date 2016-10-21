/**
 * 事件管理器
 * 
 * @returns {EventManager}
 */
function EventManager() {
  if (!(this instanceof arguments.callee)) return new arguments.callee();
  var $thisObj  = this,
      events    = {};

  /** 顶部容器创建后 */
  this.beforeTopAppend = function(fn){};

  /** 顶部容器创建后 */
  this.afterTopCreated = function(fn){};

  return this;
}