"use client";
import { registerForm } from "@/types";
import { generateReceiptPDF } from "@/utils/generateReceipts";
import Error from "next/error";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegexByCountry: Record<string, RegExp> = {
  "India [+91]": /^[6-9]\d{9}$/, // 10 digits, starts 6–9
  "Nepal [+977]": /^9[6-9]\d{8}$/, // 10 digits, starts 96–99
  "Bhutan [+975]": /^[17]\d{7}$/, // 8 digits, starts 1 or 7
  "Sri Lanka [+94]": /^7\d{8}$/, // 9 digits, starts 7
  "USA [+1]": /^[2-9]\d{2}[2-9]\d{6}$/, // NANP, 10 digits
  "UK [+44]": /^7\d{9}$/, // Mobile only, 10 digits
  "Australia [+61]": /^4\d{8}$/, // Mobile, 9 digits
  "Bangladesh [+880]": /^1[3-9]\d{8}$/, // 11 digits
  "Pakistan [+92]": /^3\d{9}$/, // 10 digits
  "Myanmar [+95]": /^9\d{7,9}$/, // 8–10 digits
};

const Register = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<registerForm>({
    gender: "",
    firstName: "",
    middleName: "",
    lastName: "",
    countryCode: "India [+91]",
    mobileNumber: "",
    parentMobile: "",
    emailId: "",
    dateOfBirth: "",
    courseType: "",
    choiceOfCourse: "",
    country: "India",
    state: "",
    city: "",
    address: "",
    agreedToTerms: false,
  });

  useEffect(() => {
    let error = "";
    const kid_mobile = formData.mobileNumber;

    if (kid_mobile !== "") {
      if (!/^\d*$/.test(kid_mobile)) {
        error = "Only digits allowed";
      }

      const regex = phoneRegexByCountry[formData.countryCode];

      if (kid_mobile && regex && !regex.test(kid_mobile)) {
        error = "Invalid mobile number for selected country";
      }
    }

    setErrors((prev) => ({
      ...prev,
      ["mobileNumber"]: error,
    }));
  }, [formData.countryCode]);

  const courseOptions = {
    "Master's Programmes": [
      "Fashion Design",
      "Interior Design",
      "Textile Design",
    ],
    "Bachelor's Programmes": [
      "Fashion Design",
      "Interior Design",
      "Textile Design",
    ],
    "Diploma Programmes": [
      "Fashion Design",
      "Interior Design",
      "Textile Design",
      "Beauty & Hair Design",
    ],
    "Professional Certification Programmes": [
      "Boutique Management",
      "Commercial Tailoring",
      "Modeling",
      "Fundamentals of Makeup & Hair Trends",
      "Advance Pro Makeup & Hair Design",
      "Specialization in Makeup & Hair Artistry",
    ],
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // checkbox logic stays as-is
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    // --- VALIDATION ---
    let error = "";

    if (name === "mobileNumber" || name === "parentMobile") {
      // digits only while typing
      if (!/^\d*$/.test(value)) return;

      const regex = phoneRegexByCountry[formData.countryCode];

      if (value && regex && !regex.test(value)) {
        error = "Invalid mobile number for selected country";
      }
    }

    if (name === "emailId") {
      if (value && !emailRegex.test(value)) {
        error = "Enter a valid email address";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "courseType" && { choiceOfCourse: "" }),
    }));
  };

  const handleSubmit = () => {
    // Check all required fields
    if (formData.gender.trim() === "") {
      toast.error("select Gender");
      return;
    }
    if (formData.firstName.trim() === "") {
      toast.error("First name cannot be empty");
      return;
    }
    if (formData.lastName.trim() === "") {
      toast.error("Last name cannot be empty");
      return;
    }
    if (formData.countryCode.trim() === "") {
      toast.error("Country code is required");
      return;
    }
    if (formData.mobileNumber.trim() === "") {
      toast.error("Mobile number cannot be empty");
      return;
    }
    if (formData.emailId.trim() === "") {
      toast.error("Email ID cannot be empty");
      return;
    }
    if (formData.dateOfBirth.trim() === "") {
      toast.error("Date of Birth is required");
      return;
    }
    if (formData.courseType.trim() === "") {
      toast.error("Course type selection is required");
      return;
    }
    if (formData.choiceOfCourse.trim() === "") {
      toast.error("Please select your choice of course");
      return;
    }
    if (formData.country.trim() === "") {
      toast.error("Country cannot be empty");
      return;
    }
    if (formData.state.trim() === "") {
      toast.error("State cannot be empty");
      return;
    }
    if (formData.city.trim() === "") {
      toast.error("City cannot be empty");
      return;
    }
    if (formData.address.trim() === "") {
      toast.error("Address cannot be empty");
      return;
    }
    if (!formData.agreedToTerms) {
      toast.error("You must agree to the terms and conditions");
      return;
    }
    console.log("Form submitted:", formData);
    registerNow({ form: formData });
  };

  const registerNow = async ({ form }: { form: registerForm }) => {
    const toastId = toast.loading("Submitting registration...");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gender: form.gender,
          firstName: form.firstName,
          middleName: form.middleName,
          lastName: form.lastName,
          countryCode: form.countryCode,
          mobileNumber: form.mobileNumber,
          parentMobile: form.parentMobile,
          emailId: form.emailId,
          dateOfBirth: form.dateOfBirth,
          courseType: form.courseType,
          choiceOfCourse: form.choiceOfCourse,
          country: form.country,
          state: form.state,
          city: form.city,
          address: form.address,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      toast.success("Registration successful!", { id: toastId });
      generateReceiptPDF(formData);
      setFormData({
        gender: "",
        firstName: "",
        middleName: "",
        lastName: "",
        countryCode: "India [+91]",
        mobileNumber: "",
        parentMobile: "",
        emailId: "",
        dateOfBirth: "",
        courseType: "",
        choiceOfCourse: "",
        country: "India",
        state: "",
        city: "",
        address: "",
        agreedToTerms: false,
      });
    } catch (error) {
      toast.error("Something broke", { id: toastId });
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 py-6 px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl md:text-6xl text-center text-white mb-4 md:mb-10">
        Register
      </h3>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-6 sm:p-8">
        <div className="space-y-6">
          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold text-black mb-3">
              Gender<span className="text-amber-400">*</span>
            </label>
            <div className="flex flex-wrap gap-4">
              {["Male", "Female"].map((option) => (
                <label
                  key={option}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-amber-400 border-gray-300 focus:ring-amber-400"
                  />
                  <span className="ml-2 text-sm text-black">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                First Name<span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Candidate's First Name*"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Middle Name
              </label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                placeholder="Middle Name"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Last Name<span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
            />
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Country Code<span className="text-amber-400">*</span>
              </label>
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
              >
                <option value="India [+91]">India [+91]</option>
                <option value="Nepal [+977]">Nepal [+977]</option>
                <option value="Bhutan [+975]">Bhutan [+975]</option>
                <option value="Sri Lanka [+94]">Sri Lanka [+94]</option>
                <option value="USA [+1]">USA [+1]</option>
                <option value="UK [+44]">UK [+44]</option>
                <option value="Australia [+61]">Australia [+61]</option>
                <option value="Bangladesh [+880]">Bangladesh [+880]</option>
                <option value="Pakistan [+92]">Pakistan [+92]</option>
                <option value="Myanmar [+95]">Myanmar [+95]</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Mobile Number<span className="text-amber-400">*</span>
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile No.*"
                // className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
                className={`w-full px-4 py-2 border-2 rounded-md outline-none transition
                  ${
                    errors.mobileNumber
                      ? "border-red-500 focus:ring-red-400 focus:border-red-400"
                      : "border-gray-300 focus:ring-amber-400 focus:border-amber-400"
                  }`}
              />
              {/* error message */}
              {errors.mobileNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.mobileNumber}
                </p>
              )}
            </div>
          </div>

          {/* Parent Mobile & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Parent Mobile No.
              </label>
              <input
                type="tel"
                name="parentMobile"
                value={formData.parentMobile}
                onChange={handleInputChange}
                placeholder="Parent Mob"
                // className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
                className={`w-full px-4 py-2 border-2 rounded-md outline-none transition
                  ${
                    errors.parentMobile
                      ? "border-red-500 focus:ring-red-400 focus:border-red-400"
                      : "border-gray-300 focus:ring-amber-400 focus:border-amber-400"
                  }`}
              />
              {/* error message */}
              {errors.parentMobile && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.parentMobile}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Email ID<span className="text-amber-400">*</span>
              </label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                placeholder="Email ID*"
                // className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
                className={`w-full px-4 py-2 border-2 rounded-md outline-none transition
                  ${
                    errors.emailId
                      ? "border-red-500 focus:ring-red-400 focus:border-red-400"
                      : "border-gray-300 focus:ring-amber-400 focus:border-amber-400"
                  }`}
              />
              {/* error message */}
              {errors.emailId && (
                <p className="mt-1 text-sm text-red-500">{errors.emailId}</p>
              )}
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Date of Birth<span className="text-amber-400">*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
            />
          </div>

          {/* Course Details Header */}
          <div className="pt-4">
            <h2 className="text-xl font-bold text-black mb-4">
              COURSE DETAILS
            </h2>
          </div>

          {/* Course Type */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Course Type<span className="text-amber-400">*</span>
            </label>
            <select
              name="courseType"
              value={formData.courseType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
            >
              <option value="">Select Course Type</option>
              <option value="Master's Programmes">
                Master&apos;s Programmes
              </option>
              <option value="Bachelor's Programmes">
                Bachelor&apos;s Programmes
              </option>
              <option value="Diploma Programmes">Diploma Programmes</option>
              <option value="Professional Certification Programmes">
                Professional Certification Programmes
              </option>
            </select>
          </div>

          {/* Choice of Course - Conditional */}
          {formData.courseType && (
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Choice of Course<span className="text-amber-400">*</span>
              </label>
              <select
                name="choiceOfCourse"
                value={formData.choiceOfCourse}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
              >
                <option value="">Select Course</option>
                {courseOptions[
                  formData.courseType as keyof typeof courseOptions
                ]?.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Country<span className="text-amber-400">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
              >
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Myanmar">Myanmar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                State<span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State*"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                City<span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City*"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Address<span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="pt-4">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-amber-400 border-gray-300 rounded focus:ring-amber-400"
              />
              <span className="ml-3 text-sm text-black">
                I grant permission to Glam Institute of Fashion Designing to
                contact me and accept the{" "}
                <a
                  href="#"
                  className="text-amber-400 hover:underline font-semibold"
                >
                  T&Cs
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Privacy Policy
                </a>{" "}
                as stated on the Website
                <span className="text-amber-400">*</span>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-6 rounded-md transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
