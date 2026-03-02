'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { apiService, Job, Application } from '@/services/api';
import { MapPin, Briefcase, DollarSign, Clock, ArrowLeft, Send, User, Mail, FileText, MessageSquare } from 'lucide-react';

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume_link: '',
    cover_note: ''
  });

  useEffect(() => {
    if (jobId) {
      fetchJob();
    }
  }, [jobId]);

  const fetchJob = async () => {
    try {
      setLoading(true);
      const jobData = await apiService.getJob(jobId);
      setJob(jobData);
    } catch (error) {
      console.error('Failed to fetch job:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.resume_link || !formData.cover_note) {
      alert('Please fill in all fields');
      return;
    }

    try {
      setSubmitting(true);
      await apiService.submitApplication({
        job_id: jobId,
        ...formData
      });
      
      alert('Application submitted successfully!');
      setFormData({ name: '', email: '', resume_link: '', cover_note: '' });
      setShowApplicationForm(false);
    } catch (error) {
      console.error('Failed to submit application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Job not found</p>
          <button
            onClick={() => router.push('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  const requirements = job.requirements || [];
  const displayDate = new Date(job.postedAt || job.createdAt).toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-[1440px] px-6 py-4">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Jobs
          </button>
        </div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h1>
                  <p className="text-xl text-gray-600">
                    {job.company}
                  </p>
                </div>
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {job.type || 'Full-time'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <span>{job.category}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span>{job.salary || 'Competitive'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Posted {displayDate}</span>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Job Description
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Requirements
              </h2>
              {requirements.length > 0 ? (
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-600">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No specific requirements listed.</p>
              )}
            </div>

            {/* Apply Button */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Apply for this Position
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Company Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Company Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Company Name</p>
                  <p className="text-gray-900">
                    {job.company}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-gray-900">
                    {job.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Job Type</p>
                  <p className="text-gray-900">
                    {job.type || 'Full-time'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Category</p>
                  <p className="text-gray-900">
                    {job.category}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Apply */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Apply
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Ready to apply? Click the button below to fill out the application form.
              </p>
              <button
                onClick={() => setShowApplicationForm(true)}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Apply for {job.title}
                </h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Resume URL
                  </label>
                  <input
                    type="url"
                    name="resume_link"
                    value={formData.resume_link}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/resume.pdf"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Cover Note
                  </label>
                  <textarea
                    name="cover_note"
                    value={formData.cover_note}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us why you're interested in this position..."
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
