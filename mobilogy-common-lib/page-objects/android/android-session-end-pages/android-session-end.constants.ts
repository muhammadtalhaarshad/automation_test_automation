export class AndroidSessionEndConstants {
    static readonly buyBackCodeText = 'Transaction code';
    static get screenLabels() {
        return {
            sessionEnd:
                {
                    title: 'Buyback code',
                    batteryTest: 'Battery test',
                    factoryReset: 'Factory Reset Protection',
                    os: 'OS',
                    deviceId: 'Device ID',
                    cosmeticCondition: 'Cosmetic condition',
                    carrierLock: 'Carrier lock',
                    rooted: 'Rooted',
                    storageCapacity: 'Storage Capacity',
                    operator: 'Operator',
                    displayTest: 'Display test',
                    screenTouchTest: 'Screen touch test',
                    multiTouchTest: 'Multi-touch test',
                    motionSensor: 'Motion sensors test',
                    proximitySensor: 'Proximity sensor test',
                    rearCameraSensor: 'Rear camera test',
                    frontCameraTest: 'Front camera test',
                    videoTest: 'Video test',
                    checkAgain: 'Check again',
                    exit: 'Exit'
                }
        };
    }
}