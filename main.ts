RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1)) {
        RingbitCar.freestyle(0, 100)
    } else if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2)) {
        RingbitCar.freestyle(100, 0)
    }
})
