import { G, Path } from 'react-native-svg';
import * as React from 'react';
import withIcon from '../../lib/withIcon';
const ChevronDownCircle = ({ color, secondaryColor, strokeWidth, opacity, set, }) => {
    const Bold = () => (<G transform="translate(2 2)">
      <Path d="M10,20A10,10,0,1,1,20,10,10.011,10.011,0,0,1,10,20ZM6.525,7.8A.737.737,0,0,0,6,8.02a.75.75,0,0,0-.225.54A.727.727,0,0,0,6,9.08l3.47,3.49a.75.75,0,0,0,1.06,0L14,9.08a.7.7,0,0,0,.22-.52A.75.75,0,0,0,14,8.02a.76.76,0,0,0-.529-.216.733.733,0,0,0-.531.226L10,10.98,7.06,8.03A.737.737,0,0,0,6.525,7.8Z" fill={color}/>
    </G>);
    const Bulk = () => (<G transform="translate(2 2)">
      <Path d="M20,10A10,10,0,1,1,10,0,10.011,10.011,0,0,1,20,10" transform="translate(0 0)" fill={secondaryColor} opacity={opacity}/>
      <Path d="M8.443.749a.747.747,0,0,1-.219.529L4.754,4.765a.752.752,0,0,1-1.063,0L.219,1.278A.75.75,0,0,1,1.282.22l2.94,2.953L7.162.22A.75.75,0,0,1,8.443.749" transform="translate(5.778 7.808)" fill={color}/>
    </G>);
    const Light = () => (<G transform="translate(2 2)">
      <Path d="M0,9.25A9.25,9.25,0,1,0,9.25,0,9.25,9.25,0,0,0,0,9.25Z" transform="translate(0.75 0.75)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M0,0,3.471,3.486,6.942,0" transform="translate(6.529 8.558)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
    </G>);
    const Broken = () => (<G transform="translate(2 2)">
      <Path d="M0,10A9.94,9.94,0,0,1,3.9,2.073.727.727,0,0,1,4.79,3.226,8.546,8.546,0,1,0,10,1.454a8.645,8.645,0,0,0-1.3.1A.727.727,0,0,1,8.481.114,10,10,0,1,1,0,10Zm9.468,2.573L6,9.087A.75.75,0,1,1,7.06,8.028L10,10.981l2.94-2.953A.75.75,0,0,1,14,9.087L10.53,12.573a.747.747,0,0,1-1.062,0Z" fill={color}/>
    </G>);
    const TwoTone = () => (<G transform="translate(2 2)">
      <Path d="M0,9.25A9.25,9.25,0,1,0,9.25,0,9.25,9.25,0,0,0,0,9.25Z" transform="translate(0.75 0.75)" fill="none" stroke={secondaryColor} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth} opacity={opacity}/>
      <Path d="M0,0,3.471,3.486,6.942,0" transform="translate(6.529 8.558)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
    </G>);
    const Curved = () => (<G transform="translate(2 2)">
      <Path d="M0,9.25c0,6.937,2.313,9.25,9.25,9.25s9.25-2.313,9.25-9.25S16.187,0,9.25,0,0,2.313,0,9.25Z" transform="translate(0.75 0.75)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M0,0S2.392,3.486,3.472,3.486,6.942,0,6.942,0" transform="translate(6.529 8.558)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
    </G>);
    switch (set) {
        case 'bold':
            return <Bold />;
        case 'bulk':
            return <Bulk />;
        case 'broken':
            return <Broken />;
        case 'two-tone':
            return <TwoTone />;
        case 'curved':
            return <Curved />;
        default:
            return <Light />;
    }
};
ChevronDownCircle.displayName = 'IconlyChevronDownCircle';
export default withIcon(ChevronDownCircle);
