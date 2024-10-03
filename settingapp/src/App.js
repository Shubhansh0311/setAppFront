import React from 'react'
import './App.css'
import Main from './Main'
import { Route, Routes } from 'react-router-dom'

import Aboutphone from './components/about/Aboutphone'
import Connection from './components/connection/Connection'
import Display from './components/display/Display'

import Bluetooth from './components/bluetooth/Bluetooth'
import Brightness from './components/display/Brightness'
import Details from './components/about/Details'
import Info from './components/about/Info'
import Status from './components/about/Status'
import Mihome from './components/about/Mihome'
import Rename from './components/about/Rename'
import Certification from './components/about/Certification'
import Legal from './components/about/Legal'
import Backup from './components/about/Backup'
import Reset from './components/about/Reset'
import Sound from './components/sound/Sound'
import Disturb from './components/sound/Disturb'
import SoundAssistant from './components/sound/SoundAssistant'
import AdditionalSettings from './components/sound/AdditionalSettings'
import SoundEffects from './components/sound/SoundEffects'
import Equaliser from './components/sound/Equaliser'
import HeadphoneControls from './components/sound/HeadphoneControls'

import AppsTurning from './components/bluetooth/AppsTurning'

import Block from './components/bluetooth/Block'
import Mishare from './components/connection/Mishare'
import Cast from './components/connection/Cast'
import Printing from './components/connection/Printing'
import AboutPrinting from './components/connection/AboutPrinting'
import DataUsage from './components/connection/DataUsage'
import ResetNet from './components/connection/ResetNet'
import NearbyShare from './components/connection/NearbyShare'
import Wifi from './components/Wifi/Wifi'
import AddNetwork from './components/Wifi/AddNetwork'
import WifiSetting from './components/Wifi/WifiSetting'
import ManageNetwork from './components/Wifi/ManageNetwork'
import SDmode from './components/display/SDmode'
import TextSize from './components/display/TextSize'
import VrMode from './components/display/VrMode'
import { ReadingMode } from './components/display/ReadingMode'
import Refresh from './components/display/Refresh'
import ColorScheme from './components/display/ColorScheme'
import Fonts from './components/display/Fonts'

import PortableHotspot from './components/Hotspot/PortableHotspot'
import Hotspot from './components/Hotspot/Hotspot'
import DataLimit from './components/Hotspot/DataLimit'
import SimCardSettings from './components/Sim/SimCardSettings'
import Sim from './components/Sim/Sim'
import MobileNetwork from './components/Sim/MobileNetwork'
import SimCardSettingsTwo from './components/Sim/SimCardSettinsTwo'
import PreferNetworkType from './components/Sim/PreferNetworkType'
import BluetoothAddSettings from './components/bluetooth/BluetoothAddSettings'
import Devices from './components/bluetooth/Devices'
import AvailDevices from './components/bluetooth/AvailDevices'
import WirelessDisplay from './components/connection/WirelessDisplay'
import Chromebook from './components/connection/Chromebook'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/about' Component={Aboutphone}></Route>
        <Route path='/details' Component={Details}></Route>
        <Route path='/Information' Component={Info}></Route>
        <Route path='/Status' Component={Status}></Route>
        <Route path='/legal' Component={Legal}></Route>
        <Route path='/MIHome' Component={Mihome}></Route>
        <Route path='/backup' Component={Backup}></Route>
        <Route path='/Rename' Component={Rename}></Route>
        <Route path='/certification' Component={Certification}></Route>
        <Route path='/reset' Component={Reset}></Route>

        <Route path='/connection' Component={Connection}></Route>
        <Route path='/chromebook' Component={Chromebook}></Route>
        <Route path='/wirelessDisplay' Component={WirelessDisplay}></Route>
        <Route path='/aboutPrinting' Component={AboutPrinting}></Route>

        <Route path='/printing' Component={Printing}></Route>
        <Route path='/cast' Component={Cast}></Route>
        <Route path='/display' Component={Display}></Route>
        <Route path='/brightness' Component={Brightness}></Route>
        <Route path='/textSize' Component={TextSize}></Route>
        <Route path='/vrMode' Component={VrMode}></Route>
        <Route path='/readingMode' Component={ReadingMode}></Route>
        <Route path='/refresh' Component={Refresh}></Route>
        <Route path='/colorScheme' Component={ColorScheme}></Route>
        <Route path='/font' Component={Fonts}></Route>
        <Route path='/font' Component={Fonts}></Route>
        <Route path='/simCardSetting' Component={SimCardSettings}></Route>
        <Route path='/simCardSettingTwo' Component={SimCardSettingsTwo}></Route>
        <Route path='/sim' Component={Sim}></Route>
        <Route path='/mobileNetwork' Component={MobileNetwork}></Route>
        <Route path='/preferNetworkType' Component={PreferNetworkType}></Route>

        <Route path='/scheduleDarkMode' Component={SDmode}></Route>
        <Route path='/sound' Component={Sound}></Route>
        <Route path='/headphoneControls' Component={HeadphoneControls}></Route>
        <Route path='/doNotDisturb' Component={Disturb}></Route>
        <Route
          path='/bluetoothAddSetting'
          Component={BluetoothAddSettings}
        ></Route>
        <Route path='/turningOn' Component={AppsTurning}></Route>
        <Route path='/assistant' Component={SoundAssistant}></Route>
        <Route path='/blocklist' Component={Block}></Route>

        <Route path='/mishare' Component={Mishare}></Route>
        <Route
          path='/additionalSettings'
          Component={AdditionalSettings}
        ></Route>
        <Route path='/soundEffects' Component={SoundEffects}></Route>
        <Route path='/equaliser' Component={Equaliser}></Route>
        <Route path='/wifi' Component={Wifi}></Route>
        <Route path='/addNetwork' Component={AddNetwork}></Route>
        <Route path='/wifiSetting' Component={WifiSetting}></Route>
        <Route path='/manageNetwork' Component={ManageNetwork}></Route>

        <Route path='/bluetooth' Component={Bluetooth}></Route>
        <Route path='/availableDevices' Component={AvailDevices}></Route>
        <Route path='/devices' Component={Devices}></Route>
        <Route path='/dataUsage' Component={DataUsage}></Route>
        <Route path='/resetNet' Component={ResetNet}></Route>
        <Route path='/nearBy' Component={NearbyShare}></Route>

        <Route path='/brightness' Component={Brightness}></Route>
        <Route path='/hotspot' Component={Hotspot}></Route>
        <Route path='/portableHotspot' Component={PortableHotspot}></Route>
        <Route path='/dataLimit' Component={DataLimit}></Route>
        <Route path='/' Component={Main}></Route>
        {/* <Route path='/*' Component={ErrorPage}></Route> */}
      </Routes>
    </>
  )
}

export default App
