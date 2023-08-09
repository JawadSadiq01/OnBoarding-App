import { ToastAndroid } from "react-native";

const ShowToast = (props: any) => {
  ToastAndroid.show(props, ToastAndroid.SHORT);
};
export default ShowToast