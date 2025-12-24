// Simple mock database using localStorage for the prototype
// In a production environment, you would replace this with a real backend (e.g., Supabase, Firebase, or a custom API)

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  plan?: string;
  message: string;
  createdAt: string;
}

const DB_KEY = "tokyo_websites_inquiries";

export const db = {
  // Save a new inquiry
  async createInquiry(data: Omit<Inquiry, "id" | "createdAt">): Promise<Inquiry> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const newInquiry: Inquiry = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    try {
      const existingData = localStorage.getItem(DB_KEY);
      const inquiries: Inquiry[] = existingData ? JSON.parse(existingData) : [];
      inquiries.push(newInquiry);
      localStorage.setItem(DB_KEY, JSON.stringify(inquiries));
      
      console.log("Database: New inquiry saved", newInquiry);
      return newInquiry;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to save inquiry");
    }
  },

  // Get all inquiries (for admin view - strictly for demo/debugging)
  async getInquiries(): Promise<Inquiry[]> {
    const existingData = localStorage.getItem(DB_KEY);
    return existingData ? JSON.parse(existingData) : [];
  }
};

