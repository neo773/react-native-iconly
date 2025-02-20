import { G, Path } from 'react-native-svg';
import * as React from 'react';
import withIcon from '../../lib/withIcon';
const ArrowLeftSquare = ({ color, secondaryColor, strokeWidth, opacity, set, }) => {
    const Bold = () => (<G transform="translate(2 2)">
      <Path d="M14.09,20H5.92C2.379,20,0,17.721,0,14.33V5.66C0,2.275,2.379,0,5.92,0h8.17C17.625,0,20,2.275,20,5.66v8.67C20,17.721,17.625,20,14.09,20ZM9.68,5.5a.742.742,0,0,0-.53.218L5.38,9.47a.774.774,0,0,0,0,1.06l3.77,3.75a.754.754,0,0,0,1.059,0,.766.766,0,0,0,0-1.07L7.73,10.75h6.35A.751.751,0,0,0,14.83,10a.742.742,0,0,0-.751-.75H7.73L10.21,6.78a.763.763,0,0,0,.22-.53.787.787,0,0,0-.22-.529A.742.742,0,0,0,9.68,5.5Z" transform="translate(0 0)" fill={color}/>
    </G>);
    const Bulk = () => (<G transform="translate(22 2) rotate(90)">
      <Path d="M0,5.916v8.168C0,17.623,2.276,20,5.665,20h8.67C17.724,20,20,17.623,20,14.084V5.916C20,2.378,17.723,0,14.334,0H5.665C2.276,0,0,2.378,0,5.916" transform="translate(0 0)" fill={secondaryColor} opacity={opacity}/>
      <Path d="M.218,5.687,3.966,9.452a.773.773,0,0,0,1.064,0L8.778,5.687A.751.751,0,0,0,7.714,4.628L5.247,7.105V.75a.75.75,0,0,0-1.5,0V7.105L1.281,4.628A.75.75,0,0,0,.218,5.687" transform="translate(5.502 5.168)" fill={color}/>
    </G>);
    const Light = () => (<G transform="translate(22 2) rotate(90)">
      <Path d="M4.916,18.5h8.669c3.02,0,4.915-2.139,4.915-5.166V5.166C18.5,2.139,16.615,0,13.585,0H4.916C1.886,0,0,2.139,0,5.166v8.168C0,16.361,1.886,18.5,4.916,18.5Z" transform="translate(0.75 0.75)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M.5,8.172V0" transform="translate(9.5 5.914)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M7.5,0,3.748,3.764,0,0" transform="translate(6.252 10.322)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
    </G>);
    const Broken = () => (<G transform="translate(22 2) rotate(90)">
      <Path d="M6.256,20C2.393,20,0,17.608,0,13.747v-7.5C0,2.41,2.393,0,6.253,0H8.822a.756.756,0,0,1,.756.756V.765H9.561A.765.765,0,0,1,8.8,1.53H6.253C3.2,1.53,1.53,3.2,1.53,6.244v7.5c0,3.046,1.68,4.726,4.723,4.726h7.5c3.034,0,4.714-1.679,4.714-4.723v-7.5c0-3.043-1.68-4.714-4.714-4.714a.765.765,0,0,1,0-1.53C17.608,0,20,2.392,20,6.244v7.5C20,17.608,17.608,20,13.756,20ZM10,14.837a.746.746,0,0,1-.286-.058.733.733,0,0,1-.243-.162h0L5.721,10.851A.75.75,0,0,1,6.783,9.793L9.25,12.27V5.914a.75.75,0,0,1,1.5,0v8.172a.759.759,0,0,1-.059.288.731.731,0,0,1-.163.243c-.007.008-.016.01-.023.017a.773.773,0,0,1-.22.144.757.757,0,0,1-.251.051c-.013,0-.022.007-.035.007Zm1.941-2.7a.749.749,0,0,1,0-1.06l1.278-1.284a.75.75,0,0,1,1.062,1.059L13,12.136a.75.75,0,0,1-1.061,0Z" fill={color}/>
    </G>);
    const TwoTone = () => (<G transform="translate(22 2) rotate(90)">
      <Path d="M4.916,18.5h8.669c3.02,0,4.915-2.139,4.915-5.166V5.166C18.5,2.139,16.615,0,13.585,0H4.916C1.886,0,0,2.139,0,5.166v8.168C0,16.361,1.886,18.5,4.916,18.5Z" transform="translate(0.75 0.75)" fill="none" stroke={secondaryColor} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth} opacity={opacity}/>
      <Path d="M.5,8.172V0" transform="translate(9.5 5.914)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M7.5,0,3.748,3.764,0,0" transform="translate(6.252 10.322)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
    </G>);
    const Curved = () => (<G transform="translate(22 2) rotate(90)">
      <Path d="M.5,8.172V0" transform="translate(9.5 5.914)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M7.5,0S4.972,3.764,3.748,3.764,0,0,0,0" transform="translate(6.252 10.322)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M0,9.25c0,6.937,2.313,9.25,9.25,9.25s9.25-2.313,9.25-9.25S16.187,0,9.25,0,0,2.313,0,9.25Z" transform="translate(0.75 0.75)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
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
ArrowLeftSquare.displayName = 'IconlyArrowLeftSquare';
export default withIcon(ArrowLeftSquare);
