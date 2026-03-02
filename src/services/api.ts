const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://quick-hire-backend-omega.vercel.app";

/* ============================
   Generic API Response Type
============================ */

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

/* ============================
   Job Interface (Backend Match)
============================ */

export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;

  // Optional (future safe)
  type?: string;
  salary?: string;
  requirements?: string[];
  postedAt?: string;

  createdAt: string;
  updatedAt: string;
  __v?: number;
}

/* ============================
   Application Interface (Backend Match)
============================ */

export interface Application {
  _id: string;
  job_id: string; // 👈 backend uses job_id
  name: string;
  email: string;
  resume_link: string; // 👈 backend uses resume_link
  cover_note: string; // 👈 backend uses cover_note
  createdAt: string;
}

/* ============================
   API Service Class
============================ */

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  /* ============================
     JOB ENDPOINTS
  ============================ */

  // Get all jobs
  async getJobs(): Promise<Job[]> {
    const res = await this.request<Job[]>("/api/jobs");
    return res.data; // ✅ fixed
  }

  // Get single job
  async getJob(id: string): Promise<Job> {
    const res = await this.request<Job>(`/api/jobs/${id}`);
    return res.data;
  }

  // Create job
  async createJob(
    jobData: Omit<Job, "_id" | "postedAt" | "createdAt" | "updatedAt" | "__v">,
  ): Promise<Job> {
    const res = await this.request<Job>("/api/jobs", {
      method: "POST",
      body: JSON.stringify(jobData),
    });

    return res.data;
  }

  // Delete job
  async deleteJob(id: string): Promise<void> {
    await this.request<null>(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  }

  /* ============================
     APPLICATION ENDPOINTS
  ============================ */

  async submitApplication(
    applicationData: Omit<Application, "_id" | "createdAt">,
  ): Promise<Application> {
    const res = await this.request<Application>("/api/applications", {
      method: "POST",
      body: JSON.stringify(applicationData),
    });

    return res.data;
  }

  /* ============================
     SEARCH / FILTER
  ============================ */

  async searchJobs(
    query?: string,
    category?: string,
    location?: string,
  ): Promise<Job[]> {
    const params = new URLSearchParams();

    if (query) params.append("search", query);
    if (category) params.append("category", category);
    if (location) params.append("location", location);

    const res = await this.request<Job[]>(`/api/jobs?${params.toString()}`);

    return res.data;
  }
}

export const apiService = new ApiService();
