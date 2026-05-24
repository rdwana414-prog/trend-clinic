import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Trend Clinic',
      description: 'Your health is our priority. Modern medical care with expert doctors.',
      bookAppointment: 'Book Appointment',
      fastBooking: 'Fast Booking',
      expertDoctors: 'Expert Doctors',
      certified: 'Certified & Licensed',
      openHours: '24/7 Available',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      selectDoctor: 'Select Doctor',
      next: 'Next',
      back: 'Back',
      confirm: 'Confirm Booking',
      success: 'Success!',
      bookingConfirmed: 'Your appointment has been confirmed.',
      close: 'Close'
    }
  },
  ar: {
    translation: {
      welcome: 'مرحباً بك في عيادة ترند',
      description: 'صحتك أولويتنا. رعاية طبية حديثة مع أطباء متخصصين.',
      bookAppointment: 'احجز موعد',
      fastBooking: 'حجز سريع',
      expertDoctors: 'أطباء متخصصون',
      certified: 'معتمدون ومرخصون',
      openHours: 'متاح 24/7',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      selectDoctor: 'اختر الطبيب',
      next: 'التالي',
      back: 'رجوع',
      confirm: 'تأكيد الحجز',
      success: 'تم بنجاح!',
      bookingConfirmed: 'تم تأكيد موعدك.',
      close: 'إغلاق'
    }
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18next;