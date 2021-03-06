/**
 * @Author: Zhengfeng.Yao <yzf>
 * @Date:   2017-05-24 15:04:30
 * @Last modified by:   yzf
 * @Last modified time: 2017-05-24 15:04:33
 */

import DatePicker from './date-picker';
import RangePicker from './range-picker';
import moment from 'moment';

moment.locale('zh-CN');
DatePicker.RangePicker = RangePicker;
export default DatePicker;
