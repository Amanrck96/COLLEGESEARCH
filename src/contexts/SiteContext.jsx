import React, { createContext, useState, useEffect } from 'react';

export const SiteContext = createContext();

const initialSiteData = {
  header: {
    mbaTabs: ['Top Ranked Colleges', 'Popular Courses', 'Popular Specializations', 'Exams', 'Colleges By Location', 'Compare Colleges', 'College Reviews', 'CAT Percentile Predictor', 'College Predictors', 'Ask Current MBA Students', 'Resources'],
    engTabs: ['Top Ranked Colleges', 'Popular Courses', 'Popular Specializations', 'Exams', 'Colleges By Location', 'Compare Colleges', 'Rank Predictors', 'College Predictors', 'College Reviews', 'Resources'],
    medTabs: ['Top Ranked Colleges', 'Popular Courses', 'Popular Specializations', 'Exams', 'Colleges By Location', 'College Predictors', 'Resources'],
    desTabs: ['Top Ranked Colleges', 'Popular Specializations', 'Popular Courses', 'Exams', 'College Predictors', 'Colleges By Location', 'Resources'],
    moreTabs: ['Sarkari Exams', 'Law', 'Hospitality & Travel', 'Animation', 'Mass Communication & Media', 'Business & Management Studies', 'IT & Software', 'Humanities & Social Sciences', 'Arts (Fine/Visual/Performing)', 'Science', 'Architecture & Planning', 'Accounting & Commerce'],
    studyTabs: ['Countries', 'Exams', 'Popular Programs', 'Popular Specialization', 'Student Visas', 'SOP/LOR', 'Scholarships', 'Education Loan', 'Services'],
    counselingTabs: ['Get Expert Guidance', 'Careers After 12th', 'Courses After 12th', 'Free Prep Material', 'National Boards', 'State Boards', 'Abroad Counseling Service', 'My Recommendations', 'Get Free Counselling'],
    onlineTabs: ['Technology', 'Data Science', 'Management', 'Finance', 'Creativity & Design', 'Emerging Technologies', 'Engineering-Non CS', 'Healthcare', 'Energy And Environment', 'Social Sciences', 'Personal Development', 'Degree Programs']
  },
  footer: {
    description: "Your ultimate student-friendly platform for exploring top colleges, trending courses, exams info, real student reviews, and shaping an incredible career path.",
    social: {
      facebook: "#!",
      twitter: "#!",
      instagram: "#!",
      linkedin: "#!"
    },
    quickLinks: [
      { id: 1, title: "About Us", url: "/about" },
      { id: 2, title: "All Colleges", url: "/colleges" },
      { id: 3, title: "Latest Exams", url: "/exams" },
      { id: 4, title: "Rankings 2026", url: "/rankings" },
      { id: 5, title: "Scholarships", url: "/scholarships" },
      { id: 6, title: "Contact Us", url: "/contact" }
    ],
    popularCategories: [
      { id: 1, title: "Engineering (B.Tech)", url: "/courses?type=engineering" },
      { id: 2, title: "Medical (MBBS)", url: "/courses?type=medical" },
      { id: 3, title: "Management (MBA)", url: "/courses?type=management" },
      { id: 4, title: "Arts & Humanities", url: "/courses?type=arts" },
      { id: 5, title: "Law & Order", url: "/courses?type=law" },
      { id: 6, title: "Design & Architecture", url: "/courses?type=design" }
    ],
    contactInfo: {
      address: "123 Knowledge Tower, Edu City, Bengaluru 560001",
      phone: "+91 1800-456-7890",
      email: "support@collegesearch.edu"
    }
  }
};

export const SiteProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(() => {
    const savedSiteData = localStorage.getItem('collegeSearchSiteData');
    if (savedSiteData) {
      try {
        return JSON.parse(savedSiteData);
      } catch (err) {
        return initialSiteData;
      }
    }
    return initialSiteData;
  });

  useEffect(() => {
    localStorage.setItem('collegeSearchSiteData', JSON.stringify(siteData));
  }, [siteData]);

  const updateSiteData = (newData) => {
    setSiteData(newData);
  };

  return (
    <SiteContext.Provider value={{ siteData, updateSiteData }}>
      {children}
    </SiteContext.Provider>
  );
};
