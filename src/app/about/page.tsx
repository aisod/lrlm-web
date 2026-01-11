import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Users, Gamepad2, MessageSquare, BookOpen, Music, GraduationCap, Code, Building, Users2, Heart, Globe, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Namqula | African-First AI Language Model',
  description: 'Learn about Namqula, the African-First AI Language Model, and our mission to preserve and advance African languages through community engagement and technology.',
};

export default function About() {
  const t = useTranslations('about');

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-gradient animate-gradient-shift">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              {t('mission')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('missionDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-enhanced p-8 text-center"
            >
              <Globe className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t('culturalPreservation')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('culturalPreservationDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-enhanced p-8 text-center"
            >
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t('communityEmpowerment')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('communityEmpowermentDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-enhanced p-8 text-center"
            >
              <Lightbulb className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t('innovation')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('innovationDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              {t('communityEngagement')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              {t('gameDesc')} <a href="https://namqula.online" className="text-primary-600 hover:text-primary-700 font-semibold">namqula.online</a>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-enhanced p-8"
            >
              <Gamepad2 className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('namqulaGame')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('gameContent')}
              </p>
              <a
                href="https://namqula.online"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>{t('playGame')}</span>
                <Gamepad2 className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-enhanced p-8"
            >
              <MessageSquare className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('feedbackTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('feedbackContent')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              {t('contributors')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('contributorsDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, key: "individuals", title: "Individuals" },
              { icon: Building, key: "companies", title: "Companies" },
              { icon: GraduationCap, key: "universities", title: "Universities" },
              { icon: BookOpen, key: "bookWriters", title: "Book Writers" },
              { icon: Music, key: "musicians", title: "Musicians" },
              { icon: Users2, key: "comedians", title: "Comedians" },
              { icon: GraduationCap, key: "languageTeachers", title: "Language Teachers" },
              { icon: Users, key: "universityStudents", title: "University Students" },
              { icon: GraduationCap, key: "lecturers", title: "Lecturers" },
              { icon: Code, key: "developers", title: "Developers" },
              { icon: Users2, key: "communityLeaders", title: "Community Leaders" },
              { icon: Building, key: "governmentEntities", title: "Government Entities" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-enhanced p-6 text-center"
              >
                <item.icon className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{t(item.key)}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t(item.key + 'Desc')}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contributors */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              {t('featuredContributors')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('featuredDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-enhanced p-8 text-center"
            >
              <MessageSquare className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t('oshiwamboFounder')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('oshiwamboDesc')}
              </p>
              <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                {t('featuredPartner')}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-enhanced p-8 text-center"
            >
              <GraduationCap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t('teacherVasquez')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('teacherVasquezDesc')}
              </p>
              <span className="inline-block bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 px-3 py-1 rounded-full text-sm font-medium">
                {t('educationalPartner')}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-enhanced p-8 text-center"
            >
              <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t('fixYourLanguage')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('fixYourLanguageDesc')}
              </p>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                {t('contentPartner')}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              {t('realWorldImpact')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('impactDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-enhanced p-8"
            >
              <GraduationCap className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('education')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('educationDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-enhanced p-8"
            >
              <Heart className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('culturalPreservation')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('culturalPreservationDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-enhanced p-8"
            >
              <Globe className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('communityAccess')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('communityAccessDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-enhanced p-8"
            >
              <Code className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('innovationDev')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('innovationDevDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('joinCommunity')}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('joinDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://namqula.online"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-primary-600 hover:bg-gray-50"
              >
                {t('playNamqula')}
              </a>
              <a
                href="#demo"
                className="btn-primary border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                {t('getInvolved')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}