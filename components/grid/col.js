/**
 * @Author: Zhengfeng.Yao <yzf>
 * @Date:   2017-06-13 17:50:59
 * @Last modified by:   yzf
 * @Last modified time: 2017-06-13 17:51:00
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './style';

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

export default class Col extends React.Component {
  static propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: PropTypes.string,
    children: PropTypes.node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber,
    xl: objectOrNumber
  };

  render() {
    const props = this.props;
    const { span, order, offset, push, pull, className, children, prefixCls = s.colPrefix, ...others } = props;
    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      let sizeProps = {};
      if (typeof props[size] === 'number') {
        sizeProps.span = props[size];
      } else if (typeof props[size] === 'object') {
        sizeProps = props[size] || {};
      }

      delete others[size];

      sizeClassObj = Object.assign({}, sizeClassObj, {
        [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
        [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
        [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
        [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
        [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0
      });
    });
    const classes = classNames({
      [`${prefixCls}-${span}`]: span !== undefined,
      [`${prefixCls}-order-${order}`]: order,
      [`${prefixCls}-offset-${offset}`]: offset,
      [`${prefixCls}-push-${push}`]: push,
      [`${prefixCls}-pull-${pull}`]: pull
    }, className, sizeClassObj);

    return <div {...others} className={classes}>{children}</div>;
  }
}
