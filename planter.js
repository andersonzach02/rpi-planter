var rpio = require('rpio');

rpio.open(7, rpio.OUTPUT);
rpio.open(3, rpio.INPUT);

let motorOn = false;

const turnMotorOn = (motorPIN) => {
  //Triggers the relay connected to the motor to turn the motor on
  //Motors are on NO contacts, so pin needs to be low to trigger the motor
  rpio.write(motorPIN, rpio.LOW);
};

const turnMotorOff = (motorPIN) => {
  //Triggers the relay connected to the motor to turn the motor off
  //Motors are on NO contacts, so pin needs to be high to turn the motor off
  rpio.write(motorPIN, rpio.HIGH);
};

while (true) {
  if (!rpio.read(3)) {
    turnMotorOn(7);
  } else {
    turnMotorOff(7);
  }
}
