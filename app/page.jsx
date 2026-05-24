'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Clock, X, Check } from 'lucide-react';
import i18next from '@/i18n';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [showBooking, setShowBooking] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: ''
  });

  useEffect(() => {
    i18next.changeLanguage('ar');
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-blue-600"
        >
          🏥 Trend Clinic
        </motion.h1>
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
          className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-lg transition font-semibold"
        >
          {i18n.language === 'ar' ? '🇬🇧 EN' : '🇸🇦 AR'}
        </button>
      </header>

      {/* Hero */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 pt-20 pb-32"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-6xl font-bold text-gray-900 mb-6">
            {t('welcome')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            {t('description')}
          </p>
        </motion.div>

        <motion.button
          variants={itemVariants}
          onClick={() => setShowBooking(true)}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-lg hover:shadow-2xl transition shadow-lg"
        >
          📅 {t('bookAppointment')}
        </motion.button>

        {/* Features */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { icon: Calendar, label: 'fastBooking' },
            { icon: Users, label: 'expertDoctors' },
            { icon: Award, label: 'certified' },
            { icon: Clock, label: 'openHours' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900">{t(feature.label)}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">{t('bookAppointment')}</h2>
              <button onClick={() => {setShowBooking(false); setStep(1);}} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {step === 1 && (
                <>
                  <input
                    type="text"
                    placeholder={t('name')}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder={t('email')}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder={t('phone')}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    {t('next')} →
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option>{t('selectDoctor')}</option>
                    <option>Dr. أحمد</option>
                    <option>Dr. فاطمة</option>
                    <option>Dr. محمد</option>
                  </select>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-gray-300 text-gray-900 py-2 rounded-lg hover:bg-gray-400"
                    >
                      {t('back')}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                      {t('confirm')} ✓
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <div className="text-center py-8">
                  <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('success')}</h3>
                  <p className="text-gray-600">{t('bookingConfirmed')}</p>
                  <button
                    onClick={() => {setShowBooking(false); setStep(1);}}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    {t('close')}
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}