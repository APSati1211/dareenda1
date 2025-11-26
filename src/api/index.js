// src/api/index.js

import axios from "axios";

const API = axios.create({
    baseURL: "http://13.233.91.34:8000/", 
});

// Dynamic content
export const getPageContent = (page) => {
    if (page === "home") {
        return API.get("home-page-content/");
    }
    return API.get(`sitecontent/?page=${page}`);
};

export const getBlogs = (categorySlug = '') => {
    let url = "blogs/";
    if (categorySlug) {
        url += `?category=${categorySlug}`; // Add filter parameter
    }
    return API.get(url);
};

// NEW: Function to fetch all categories
export const getCategories = () => API.get("blog-categories/");

// Leads
export const submitLead = (data) => API.post("leads/", data);

// Contact form
export const sendContact = (data) => API.post("contact/", data);

// Careers
export const getJobs = () => API.get("jobs/");
export const applyForJob = (data) => API.post("apply/", data);

// Resources & Case Studies
export const getCaseStudies = () => API.get("case-studies/");
export const getResources = () => API.get("resources/");

// --- Services ---
export const getServices = () => API.get("services/");
export const getServiceBySlug = (slug) => API.get(`services/${slug}/`);

// --- CRITICAL FIX 1: New API function for Theme Settings (for useThemeSettings hook) ---
export const getThemeSettings = () => API.get("theme-settings/"); 

// --- CRITICAL FIX 2: Rename Chatbot Handler to match new backend function name and path ---
export const chatFlowHandler = (data) => API.post("chatbot-flow/", data);
