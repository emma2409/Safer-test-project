import { Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions
export const screenSize: {[key: string]: any} = {
    width: width,
    height: height
}
export const getPercentageSizeScreen = (size: number, percentage: number) => {
    return Math.round((size * percentage) / 100);
}