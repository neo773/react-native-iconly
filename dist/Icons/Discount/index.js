import { G, Path } from 'react-native-svg';
import * as React from 'react';
import withIcon from '../../lib/withIcon';
const Discount = ({ color, secondaryColor, strokeWidth, opacity, set, }) => {
    const Bold = () => (<G transform="translate(2 2.001)">
      <Path d="M10.006,20a3.024,3.024,0,0,1-2.131-.868l-.73-.732a1.489,1.489,0,0,0-1.06-.438H5.054a3.015,3.015,0,0,1-3.011-3.011V13.917a1.538,1.538,0,0,0-.44-1.071l-.72-.71a3.021,3.021,0,0,1-.01-4.259l.73-.732a1.5,1.5,0,0,0,.44-1.07V5.055A3.013,3.013,0,0,1,5.054,2.047h1.03a1.511,1.511,0,0,0,1.06-.441l.72-.72A3.017,3.017,0,0,1,12.127.877l.731.729a1.49,1.49,0,0,0,1.06.441h1.03a3.013,3.013,0,0,1,3.011,3.009V6.087A1.485,1.485,0,0,0,18.4,7.145l.72.72a3.03,3.03,0,0,1,.02,4.251l-.02.02-.01.01-.71.71a1.488,1.488,0,0,0-.441,1.061v1.029a3.014,3.014,0,0,1-3.011,3.011h-1.03a1.489,1.489,0,0,0-1.06.438l-.721.72A2.986,2.986,0,0,1,10.006,20Zm2.571-8.3a.875.875,0,1,0,.87.87A.877.877,0,0,0,12.578,11.7Zm-.005-5.144a.866.866,0,0,0-.616.254l-5.142,5.14a.88.88,0,0,0,0,1.239.829.829,0,0,0,.61.26.837.837,0,0,0,.62-.26l5.143-5.139a.875.875,0,0,0-.616-1.495Zm-5.137,0a.875.875,0,1,0,.87.869A.876.876,0,0,0,7.435,6.556Z" transform="translate(0 0)" fill={color}/>
    </G>);
    const Bulk = () => (<G>
      <Path d="M10,20a3,3,0,0,1-2.124-.875l-.73-.73a1.5,1.5,0,0,0-1.064-.439H5.054a3.015,3.015,0,0,1-3.011-3.011V13.916a1.509,1.509,0,0,0-.44-1.065l-.718-.717A3.015,3.015,0,0,1,.874,7.877l.73-.731a1.5,1.5,0,0,0,.439-1.064V5.056A3.015,3.015,0,0,1,5.054,2.044H6.082A1.5,1.5,0,0,0,7.146,1.6L7.865.886A3.014,3.014,0,0,1,12.122.875l.73.73a1.5,1.5,0,0,0,1.063.439h1.028a3.015,3.015,0,0,1,3.011,3.012V6.083a1.509,1.509,0,0,0,.44,1.065l.718.718a3.009,3.009,0,0,1,.02,4.247c-.01.01-.019.021-.029.03l-.71.71a1.5,1.5,0,0,0-.439,1.064v1.027a3.015,3.015,0,0,1-3.011,3.011H13.915a1.5,1.5,0,0,0-1.064.44l-.719.718A3,3,0,0,1,10,20" transform="translate(2 2)" fill={secondaryColor} opacity={opacity}/>
      <Path d="M5.4,6.638a.9.9,0,0,1-.189-.282.845.845,0,0,1-.061-.34.854.854,0,0,1,.061-.341A1.2,1.2,0,0,1,5.39,5.4a.885.885,0,0,1,.964-.194.786.786,0,0,1,.289.187.9.9,0,0,1,0,1.237.907.907,0,0,1-.619.257A.894.894,0,0,1,5.4,6.638Zm-5.138,0a.877.877,0,0,1,0-1.238L5.4.256A.875.875,0,0,1,6.638,1.494L1.5,6.634a.876.876,0,0,1-1.237,0ZM.26,1.5A.877.877,0,0,1,0,.876.914.914,0,0,1,.254.261a.794.794,0,0,1,.3-.194A.856.856,0,0,1,1.5.26a.917.917,0,0,1,.194.275.852.852,0,0,1-.2.962.854.854,0,0,1-.616.254A.9.9,0,0,1,.26,1.5Z" transform="translate(8.552 8.554)" fill={color}/>
    </G>);
    const Light = () => (<G transform="translate(2 2)">
      <Path d="M2.044,4.305A2.262,2.262,0,0,1,4.305,2.043H5.334a2.262,2.262,0,0,0,1.593-.657l.719-.72a2.262,2.262,0,0,1,3.2-.008l.009.008.72.72a2.258,2.258,0,0,0,1.593.657h1.028a2.262,2.262,0,0,1,2.262,2.262V5.332a2.26,2.26,0,0,0,.657,1.594l.72.72a2.262,2.262,0,0,1,.009,3.2l-.009.009-.72.72a2.256,2.256,0,0,0-.657,1.592v1.029a2.261,2.261,0,0,1-2.262,2.261H13.166a2.259,2.259,0,0,0-1.593.658l-.72.719a2.261,2.261,0,0,1-3.2.009l-.009-.009-.719-.719a2.263,2.263,0,0,0-1.593-.658H4.305a2.261,2.261,0,0,1-2.261-2.261V13.165a2.257,2.257,0,0,0-.658-1.592l-.719-.72a2.261,2.261,0,0,1-.009-3.2l.009-.009.719-.72a2.261,2.261,0,0,0,.658-1.594V4.305" transform="translate(0.75 0.751)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M0,5.14,5.14,0" transform="translate(7.43 7.43)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M.75,1.49a.749.749,0,0,1-.53-.22.821.821,0,0,1-.16-.25A.668.668,0,0,1,0,.74.717.717,0,0,1,.06.45.776.776,0,0,1,.22.21a.774.774,0,0,1,1.06,0,.807.807,0,0,1,.17.24A.929.929,0,0,1,1.5.74a.863.863,0,0,1-.05.28.852.852,0,0,1-.17.25.749.749,0,0,1-.53.22" transform="translate(11.817 11.832)" fill={color}/>
      <Path d="M.75,1.491A.672.672,0,0,1,.47,1.43a.818.818,0,0,1-.25-.159.963.963,0,0,1-.16-.25A.674.674,0,0,1,0,.741.714.714,0,0,1,.06.451.674.674,0,0,1,.22.211a.772.772,0,0,1,1.06,0,.748.748,0,0,1,.22.53.666.666,0,0,1-.05.28,1.006,1.006,0,0,1-.17.25.773.773,0,0,1-.24.159.718.718,0,0,1-.29.061" transform="translate(6.677 6.692)" fill={color}/>
    </G>);
    const Broken = () => (<G transform="translate(2 2)">
      <Path d="M7.876,19.126l-.73-.731a1.512,1.512,0,0,0-1.065-.439H5.055a3.015,3.015,0,0,1-3.011-3.01.75.75,0,1,1,1.5,0,1.511,1.511,0,0,0,1.511,1.51H6.083a3,3,0,0,1,2.122.877l.721.722A1.506,1.506,0,0,0,10,18.5a1.424,1.424,0,0,0,1.072-.445.751.751,0,1,1,1.064,1.059,3.018,3.018,0,0,1-4.259.011Zm6.318-1.92a.75.75,0,0,1,.75-.75,1.513,1.513,0,0,0,1.511-1.512V13.917a2.99,2.99,0,0,1,.878-2.123l.72-.721a1.512,1.512,0,0,0,0-2.146l-.721-.722a3,3,0,0,1-.878-2.123V5.053a1.511,1.511,0,0,0-1.511-1.511.751.751,0,0,1,0-1.5,3.015,3.015,0,0,1,3.011,3.012V6.081a1.505,1.505,0,0,0,.44,1.065l.717.718a3.013,3.013,0,0,1,.012,4.259l-.73.73a1.528,1.528,0,0,0-.439,1.065v1.027a3.016,3.016,0,0,1-3.011,3.012A.75.75,0,0,1,14.194,17.206ZM11.7,12.572a.868.868,0,1,1,.868.868A.868.868,0,0,1,11.7,12.572ZM6.9,13.1a.752.752,0,0,1,0-1.062L12.039,6.9A.75.75,0,1,1,13.1,7.959L7.961,13.1a.753.753,0,0,1-1.061,0ZM.887,12.136a3.018,3.018,0,0,1-.01-4.262l.73-.73a1.5,1.5,0,0,0,.44-1.06V5.053a3.014,3.014,0,0,1,3.01-3.011h1.03A1.49,1.49,0,0,0,7.146,1.6l.72-.719a3.009,3.009,0,0,1,4.14-.111,1.073,1.073,0,0,1,.121.1.763.763,0,0,1,.21.52.75.75,0,0,1-1.26.55l-.02-.019a1.531,1.531,0,0,0-2.13.019l-.72.721a2.974,2.974,0,0,1-2.12.88H5.056a1.516,1.516,0,0,0-1.51,1.51V6.083A2.97,2.97,0,0,1,2.667,8.2l-.72.722a1.525,1.525,0,0,0,0,2.149.756.756,0,0,1,0,1.061.77.77,0,0,1-.53.22A.743.743,0,0,1,.887,12.136ZM6.553,7.444a.868.868,0,1,1,.868.867A.868.868,0,0,1,6.553,7.444Z" transform="translate(0)" fill={color}/>
    </G>);
    const TwoTone = () => (<G transform="translate(2 2)">
      <Path d="M2.044,4.305A2.262,2.262,0,0,1,4.305,2.043H5.334a2.262,2.262,0,0,0,1.593-.657l.719-.72a2.262,2.262,0,0,1,3.2-.008l.009.008.72.72a2.258,2.258,0,0,0,1.593.657h1.028a2.262,2.262,0,0,1,2.262,2.262V5.332a2.26,2.26,0,0,0,.657,1.594l.72.72a2.262,2.262,0,0,1,.009,3.2l-.009.009-.72.72a2.256,2.256,0,0,0-.657,1.592v1.029a2.261,2.261,0,0,1-2.262,2.261H13.166a2.259,2.259,0,0,0-1.593.658l-.72.719a2.261,2.261,0,0,1-3.2.009l-.009-.009-.719-.719a2.263,2.263,0,0,0-1.593-.658H4.305a2.261,2.261,0,0,1-2.261-2.261V13.165a2.257,2.257,0,0,0-.658-1.592l-.719-.72a2.261,2.261,0,0,1-.009-3.2l.009-.009.719-.72a2.261,2.261,0,0,0,.658-1.594V4.305" transform="translate(0.75 0.751)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M0,5.14,5.14,0" transform="translate(7.43 7.43)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth} opacity={opacity}/>
      <Path d="M.75,1.49a.749.749,0,0,1-.53-.22.821.821,0,0,1-.16-.25A.668.668,0,0,1,0,.74.717.717,0,0,1,.06.45.776.776,0,0,1,.22.21a.774.774,0,0,1,1.06,0,.807.807,0,0,1,.17.24A.929.929,0,0,1,1.5.74a.863.863,0,0,1-.05.28.852.852,0,0,1-.17.25.749.749,0,0,1-.53.22" transform="translate(11.817 11.832)" fill={secondaryColor} opacity={opacity}/>
      <Path d="M.75,1.491A.672.672,0,0,1,.47,1.43a.818.818,0,0,1-.25-.159.963.963,0,0,1-.16-.25A.674.674,0,0,1,0,.741.714.714,0,0,1,.06.451.674.674,0,0,1,.22.211a.772.772,0,0,1,1.06,0,.748.748,0,0,1,.22.53.666.666,0,0,1-.05.28,1.006,1.006,0,0,1-.17.25.773.773,0,0,1-.24.159.718.718,0,0,1-.29.061" transform="translate(6.677 6.692)" fill={secondaryColor} opacity={opacity}/>
    </G>);
    const Curved = () => (<G transform="translate(2 2)">
      <Path d="M0,9.25C0,2.313,2.313,0,9.25,0S18.5,2.313,18.5,9.25,16.187,18.5,9.25,18.5,0,16.187,0,9.25Z" transform="translate(0.75 0.75)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M0,5.14,5.14,0" transform="translate(7.43 7.43)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M.5.5H.5" transform="translate(12 12)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
      <Path d="M.5.5H.5" transform="translate(7 7)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={strokeWidth}/>
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
Discount.displayName = 'IconlyDiscount';
export default withIcon(Discount);
