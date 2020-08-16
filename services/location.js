import * as Location from 'expo-location';

export default locale = async() => {
  try {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      return false;
    }
    let location = await Location.getCurrentPositionAsync({});
    return location;
  } catch (error) {
    return false;
  }
}