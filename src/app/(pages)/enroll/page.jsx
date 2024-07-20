import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

export default function Enroll() {
  return (
    <main className="psektion  bg-gradient-to-t from-[#ffefe2] to-white">
      <div className="respons p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">
          Kindergarten School Registration Inquiry Form
        </h2>
        <form>
          {/* data one */}
          <div className="sektion md:grid-cols-4 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">Child Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Gender</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Home Address</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* data two */}
          <div className="sektion md:grid-cols-4 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">State</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">ZIP Code</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Primary Language Spoken at Home
              </label>
              <input
                type="text"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Father/Guardian Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Home Phone</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          <div className="sektion md:grid-cols-3 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">Mobile Phone</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Emergency Contact Name
              </label>
              <input
                type="text"
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
              <label className="block text-gray-700">
                Does your child have any allergies?
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="allergiesYes"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="allergiesYes" className="ml-2 text-gray-700">
                  Yes
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="allergiesNo"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="allergiesNo" className="ml-2 text-gray-700">
                  No
                </label>
              </div>
              <input
                type="text"
                placeholder="If yes, please specify"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Does your child have any medical conditions or special needs?
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="conditionsYes"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="conditionsYes" className="ml-2 text-gray-700">
                  Yes
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="conditionsNo"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="conditionsNo" className="ml-2 text-gray-700">
                  No
                </label>
              </div>
              <input
                type="text"
                placeholder="If yes, please specify"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Is your child currently taking any medication?
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="medicationYes"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="medicationYes" className="ml-2 text-gray-700">
                  Yes
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="medicationNo"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="medicationNo" className="ml-2 text-gray-700">
                  No
                </label>
              </div>
              <input
                type="text"
                placeholder="If yes, please specify"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* education background */}
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Educational Background
          </h3>
          <div className="sektion md:grid-cols-2 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">
                Has your child attended preschool?
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="preschoolYes"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="preschoolYes" className="ml-2 text-gray-700">
                  Yes
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="preschoolNo"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="preschoolNo" className="ml-2 text-gray-700">
                  No
                </label>
              </div>
              <input
                type="text"
                placeholder="If yes, please specify the name and location of the preschool"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Please provide any additional information about your child’s
                previous educational experiences:
              </label>
              <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"></textarea>
            </div>
          </div>

          {/* Additional Information */}
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Additional Information
          </h3>
          <div className="sektion md:grid-cols-3 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">
                Why are you interested in enrolling your child at our
                kindergarten?
              </label>
              <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                How did you hear about our school?
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200">
                <option>Word of Mouth</option>
                <option>Social Media</option>
                <option>Advertisement</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                placeholder="If other, please specify"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Do you have any other children currently enrolled at our school?
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="siblingsYes"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="siblingsYes" className="ml-2 text-gray-700">
                  Yes
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="siblingsNo"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="siblingsNo" className="ml-2 text-gray-700">
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Parental Agreement */}
          <div className="mt-6 space-y-5">
            <h1 className="block font-bold text-gray-700">
              Parent/Guardian Agreement
            </h1>
            <p className="text-gray-700">
              I certify that the information provided on this form is complete
              and accurate to the best of my knowledge. I understand that
              providing false information may result in the disqualification of
              my child application.
            </p>
            <div className="sektion md:grid-cols-2 bg-slate-100 md:py-5 md:px-5 rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700">
                Signature of Parent/Guardian
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>
         
          
          <div className=" flex items-center justify-center space-x-5">
            <Button
              asChild
              className="flex justify-center rounded-full text-lg p-6 bg-heartssecondary hover:border hover:border-heartsprimary hover:text-black"
            >
              <Link href="/about">Read More</Link>
            </Button>
          </div> </div>
        </form>
      </div>
    </main>
  );
}
