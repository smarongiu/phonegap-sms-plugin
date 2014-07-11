var sms = {

  send: function(phone, message, method, success, failure) {
    phone = sms.convertPhoneToArray(phone);

    cordova.exec(
      success,
      failure,
      'Sms',
      'send',
      [phone, message, method]
    );
  },


  check: function(success, failure) {
    cordova.exec(
      success,
      failure,
      'Sms',
      'check',
      []
    );
  },

  convertPhoneToArray: function(phone) {
    if(typeof phone === 'string' && phone.indexOf(',') !== -1) {
      phone = phone.split(',');
    }
    if(Object.prototype.toString.call(phone) !== '[object Array]') {
      phone = [phone];
    }
    return phone;
  }
};

module.exports = sms;