"use client";

import { Button } from "@/components/ui/button";
import { createDocument, getSingleDocument } from "@/firebase/databaseOperations";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState , useEffect} from "react";

export default function Page() {
 const { id } = useParams();
 const [error, setError] = useState(null);
 const [isLoading, setIsLoading] = useState(false);
 const [agreeToTerms, setAgreeToTerms] = useState(false);
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   phone: "",
   desc: "",
   childFullName: "",
   dob: "",
   gender: "",
   homeAddress: "",
   city: "",
   state: "",
   zip: "",
   language: "",
   motherName: "",
   fatherName: "",
   homePhone: "",
   mobilePhone: "",
   emailAddress: "",
   emergencyContactName: "",
   emergencyContactPhone: "",
   allergies: "",
   medicalConditions: "",
   medication: "",
   preschool: "",
   additionalEducationInfo: "",
   interestReason: "",
   referralSource: "",
   otherChildren: "",
   parentSignature: "",
   date: "",
 });

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleCheckboxChange = (e) => {
   setAgreeToTerms(e.target.checked);
 };

 useEffect(() => {
   if (id) {
     // Fetch data using the id
     const fetchEnroll = async () => {
       setIsLoading(true);
       const { didSucceed, document } = await getSingleDocument(
         "Enrollments",
         id
       );

       // Disburse the data
       if (didSucceed) {
         setFormData({
           ...document,
           updatedAt: new Date().toISOString(),
         });
       } else {
         setError("Failed to fetch enrollment data.");
       }

       setIsLoading(false);
     };

     fetchEnroll();
   }
 }, [id]);

 const handleSubmit = async (e) => {
   e.preventDefault();
   if (!agreeToTerms) {
     alert("You must agree to the terms before submitting.");
     return;
   }
   setIsLoading(true);
   setError(null);

   const updatedFormData = {
     ...formData,
     updatedAt: new Date().toISOString(),
   };

   try {
     let response;
     if (id) {
       response = await updateDocument(updatedFormData, "Enrollments", id);
     } else {
       response = await createDocument(updatedFormData, "Enrollments");
     }

     if (response.didSucceed) {
       console.log("Document written with ID: ", response.docId);
       setFormData({
         name: "",
         email: "",
         phone: "",
         desc: "",
         childFullName: "",
         dob: "",
         gender: "",
         homeAddress: "",
         city: "",
         state: "",
         zip: "",
         language: "",
         motherName: "",
         fatherName: "",
         homePhone: "",
         mobilePhone: "",
         emailAddress: "",
         emergencyContactName: "",
         emergencyContactPhone: "",
         allergies: "",
         medicalConditions: "",
         medication: "",
         preschool: "",
         additionalEducationInfo: "",
         interestReason: "",
         referralSource: "",
         otherChildren: "",
         parentSignature: "",
         date: "",
       });
       alert(`Enrollment ${id ? "updated" : "submitted"} successfully!`);
     } else {
       console.error("Error adding/updating document: ", response.message);
       setError(
         `Failed to ${id ? "update" : "submit"} Enrollment. Please try again.`
       );
     }
   } catch (error) {
     console.error("Unexpected error:", error);
     setError("An unexpected error occurred. Please try again later.");
   } finally {
     setIsLoading(false);
   }
 };

  return (
    <main className=" bg-gradient-to-t from-[#ffefe2] to-white">
      <div className="respons p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">
          Kindergarten School Registration Inquiry Form
        </h2>
        <form onSubmit={()=>{}}>
          {/* Child data one */}
          <div className="sektion md:grid-cols-4 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">Child Full Name</label>
              <input
                type="text"
                name="childFullName"
                value={formData.childFullName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Home Address</label>
              <input
                type="text"
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Child data two */}
          <div className="sektion md:grid-cols-4 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Primary Language Spoken at Home
              </label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Guardian data */}
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Parent/Guardian Information
          </h3>

          <div className="sektion md:grid-cols-3 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">
                Mother/Guardian Full Name
              </label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Father/Guardian Full Name
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Home Phone</label>
              <input
                type="text"
                name="homePhone"
                value={formData.homePhone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          <div className="sektion md:grid-cols-3 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">Mobile Phone</label>
              <input
                type="text"
                name="mobilePhone"
                value={formData.mobilePhone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Emergency Contact Name
              </label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          <div className="sektion md:grid-cols-3 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">
                Emergency Contact Phone
              </label>
              <input
                type="text"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Health Information */}
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Health Information
          </h3>

          <div className="sektion md:grid-cols-3 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">Allergies</label>
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Medical Conditions</label>
              <input
                type="text"
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Medication</label>
              <input
                type="text"
                name="medication"
                value={formData.medication}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Education Information */}
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Education Information
          </h3>

          <div className="sektion md:grid-cols-2 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">
                Preschool/Daycare Previously Attended
              </label>
              <input
                type="text"
                name="preschool"
                value={formData.preschool}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Additional Education Information
              </label>
              <textarea
                name="additionalEducationInfo"
                value={formData.additionalEducationInfo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Additional Information */}
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Additional Information
          </h3>

          <div className="sektion md:grid-cols-3 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">
                Why are you interested in enrolling your child?
              </label>
              <textarea
                name="interestReason"
                value={formData.interestReason}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Referral Source</label>
              <input
                type="text"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Other Children Attending or Have Attended This School
              </label>
              <input
                type="text"
                name="otherChildren"
                value={formData.otherChildren}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Parent Signature */}
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Parent/Guardian Signature
          </h3>

          <div className="sektion md:grid-cols-2 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">Parent Signature</label>
              <input
                type="text"
                name="parentSignature"
                value={formData.parentSignature}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-4">
            <label className="block text-gray-700">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={agreeToTerms}
                onChange={handleCheckboxChange}
                className="mr-2 leading-tight space-x-2"
              />
              <span>I agree to the</span>
              <Link href="/terms" className="text-indigo-600">
                terms and conditions
              </Link>
              .
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex items-center justify-center space-x-5">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex justify-center rounded-full text-lg p-6 bg-heartssecondary hover:border hover:border-heartsprimary hover:text-black"
            >
              {isLoading ? "Submitting..." : "Submit Enrollment"}
            </Button>
            {error && <p className="mt-4 text-center text-red-500">{error}</p>}
          </div>
        </form>
      </div>
    </main>
  );
}
