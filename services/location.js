import * as Location from 'expo-location';

export default locale = async() => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({});
    return location;
}