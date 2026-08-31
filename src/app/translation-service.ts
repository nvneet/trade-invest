import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  currentLang = signal<'en' | 'hi' | 'bn'>('en');

  translations: Record<'en' | 'hi' | 'bn', Record<string, string>> = {
    en: {
      home: 'Home',
      courses: 'Courses',
      myLearning: 'My Learning',
      login: 'Login / Signup',
      addCourse: 'Add Course',
      remove: 'Remove',
      enrolled: 'Students Enrolled',
      price: 'Price',
      comments: 'Feedback & Comments',
      latestArticle: 'Latest Article (v2.4): Modern Angular Architecture',
      featuredIn: 'Featured In',
    },
    hi: {
      home: 'होम',
      courses: 'कोर्स',
      myLearning: 'मेरी सीख',
      login: 'लॉगिन / साइन अप',
      addCourse: 'कोर्स जोड़ें',
      remove: 'हटाएं',
      enrolled: 'नामांकित छात्र',
      price: 'कीमत',
      comments: 'प्रतिक्रिया और टिप्पणियां',
      latestArticle: 'नवीनतम लेख (v2.4): आधुनिक एंगुलर आर्किटेक्चर',
      featuredIn: 'विशेष रूप से प्रदर्शित',
    },
    bn: {
      home: 'হোম',
      courses: 'কোর্সসমূহ',
      myLearning: 'আমার শিক্ষা',
      login: 'লগইন / সাইন আপ',
      addCourse: 'কোর্স যোগ করুন',
      remove: 'সরান',
      enrolled: 'ভর্তি হওয়া শিক্ষার্থী',
      price: 'মূল্য',
      comments: 'মতামত এবং মন্তব্য',
      latestArticle: 'সর্বশেষ নিবন্ধ (v2.4): আধুনিক এঙ্গুলার আর্কিটেকচার',
      featuredIn: 'বিশিষ্ট মাধ্যমসমূহে',
    },
  };

  translate(key: string): string {
    return this.translations[this.currentLang()][key] || key;
  }

  setLanguage(lang: 'en' | 'hi' | 'bn') {
    this.currentLang.set(lang);
  }
}
