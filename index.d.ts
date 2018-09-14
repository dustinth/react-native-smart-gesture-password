import * as React from 'react';
import { StyleSheet } from 'react-native';

export interface GesturePasswordProps {
    lineWidth?: number,
    pointBackgroundColor?: string,
    gestureAreaLength?: number,
    color?: string,
    lineColor?: string,
    activeColor?: string,
    warningColor?: string,
    warningDuration?: number,
    topComponent?: React.ReactElement<any>,
    bottomComponent?: React.ReactElement<any>,
    isWarning?: boolean,
    available?: boolean,
    showArrow?: boolean,
    activeInnerCircle?:string,
    defaultInnerCircle?:string,
    warningInnerCircle?:string,
    allowCross?: boolean,
    onStart?: () => void,
    onReset?: () => void,
    onFinish?: (password: string) => void,
    onDraw?: (password:string) => void,
}

declare class GesturePassword extends React.Component<GesturePasswordProps> { }
export default GesturePassword;
