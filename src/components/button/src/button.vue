<template>
  <div :class="classes">
    <span><slot ref="slot"></slot></span>
  </div>
</template>

<script>
const prefixCls = "ac-btn";
export default {
  name: "AcButton",
  props: {
    /** 按钮类型 */
    type: {
      type: String,
      default: "default"
    },
    /** 按钮形状 */
    shape: {
      type: String,
      default: ""
    },
    /** 按钮尺寸 */
    size: {
      type: String,
      default: "default"
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.size}`]: this.size !== "default"
        }
      ];
    }
  }
};
</script>
