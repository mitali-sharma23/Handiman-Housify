import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './Components/signup';
import Loginscreen from './Components/login';
import OtpVerification from './Components/otp';
import Introscreen from './Components/intro';
import ServiceTypeScreen from './Components/servicetype';
import ServiceSelectionScreen from './Components/selectservice';
import Hirescreen from './Components/hirehelper';
import HelperDetailsScreen from './Components/helpersintro';
import VerificationProcess from './Components/verification';
import Helperscreen from './Components/helperservice';
import SelectDaysScreen from './Components/serviceday';
import Timescreen from './Components/time';
import Locationscreen from './Components/location ';
import MapScreen from './Components/Map';
import LocationDetails from './Components/Map';
import Address from './Components/address';
import AddHomeLocation from './Components/address';
import AttendancePage from './Components/attendance';
import AttendanceSuccess from './Components/attendancesuccess';
const Stack = createNativeStackNavigator();
export default function App() {
 return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='signup'
          component={SignUpScreen}
        />
        <Stack.Screen 
          name='login'
          component={Loginscreen}
        />
        <Stack.Screen 
          name='otp'
          component={OtpVerification}
        />
        <Stack.Screen 
          name='verify'
          component={Introscreen}
        />
        <Stack.Screen 
          name='servicetype'
          component={ServiceTypeScreen}
        />
        <Stack.Screen 
          name='select'
          component={ServiceSelectionScreen}
        />
        <Stack.Screen 
          name='hire'
          component={Hirescreen}
        />
        <Stack.Screen 
          name='helper'
          component={HelperDetailsScreen}
        />
        <Stack.Screen 
          name='verification'
          component={VerificationProcess}
        />
        <Stack.Screen 
          name='avail'
          component={Helperscreen}
        />
        <Stack.Screen 
          name='DaysScreen'
          component={SelectDaysScreen}
        />
        <Stack.Screen 
          name='NextScreen'
          component={Timescreen}
        />
        <Stack.Screen 
          name='location'
          component={Locationscreen}
        />
        <Stack.Screen 
          name='Map'
          component={MapScreen}
        />
        <Stack.Screen 
          name='locatemap'
          component={LocationDetails}
        />
        <Stack.Screen 
          name='address'
          component={AddHomeLocation}
        />
        <Stack.Screen 
          name='attend'
          component={AttendancePage}
        />
        <Stack.Screen 
          name='success'
          component={AttendanceSuccess}
        />
      </Stack.Navigator>
    </NavigationContainer>
 );
}


